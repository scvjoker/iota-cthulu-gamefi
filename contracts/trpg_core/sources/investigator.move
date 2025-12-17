module trpg_core::investigator {
    use std::string::{Self, String};
    use iota::object::{Self, ID, UID}; // 補上 object 相關引入以防萬一
    use iota::transfer;
    use iota::tx_context::{Self, TxContext};
    use iota::random::{Self, Random};
    use iota::event;

    // --- Structs ---
    public struct Investigator has key, store {
        id: UID,
        name: String,
        str: u8,
        dex: u8,
        san: u8,
        max_san: u8,
        exp: u64,
        is_mad: bool,
    }

    // --- Events ---
    public struct CheckEvent has copy, drop {
        investigator_id: ID,
        check_type: String,
        roll_val: u8,
        target_val: u8,
        is_success: bool,
        msg: String
    }

    // --- Functions ---
    
    /// 1. 鑄造角色 (Mint)
    entry fun mint(r: &Random, name_bytes: vector<u8>, ctx: &mut TxContext) {
        let mut gen = random::new_generator(r, ctx);
        let str = (random::generate_u8_in_range(&mut gen, 3, 18)) * 5;
        let dex = (random::generate_u8_in_range(&mut gen, 3, 18)) * 5;
        let san = (random::generate_u8_in_range(&mut gen, 3, 18)) * 5;

        let investigator = Investigator {
            id: object::new(ctx),
            name: string::utf8(name_bytes),
            str,
            dex,
            san,
            max_san: san,
            exp: 0,
            is_mad: false,
        };
        transfer::public_transfer(investigator, tx_context::sender(ctx));
    }

    /// 2. 理智檢定 (Sanity Check) - 單次
    entry fun sanity_check(item: &mut Investigator, r: &Random, ctx: &mut TxContext) {
        if (item.is_mad) { abort 0 };
        
        let mut gen = random::new_generator(r, ctx);
        let roll = random::generate_u8_in_range(&mut gen, 1, 100);
        let is_success = roll <= item.san;

        let msg = if (is_success) {
            item.exp = item.exp + 10;
            string::utf8(b"Success! You resist the horror. (+10 EXP)")
        } else {
            let dmg = random::generate_u8_in_range(&mut gen, 1, 10);
            if (item.san > dmg) {
                item.san = item.san - dmg;
                string::utf8(b"Failed! Your mind cracks. (-1d10 SAN)")
            } else {
                item.san = 0;
                item.is_mad = true;
                string::utf8(b"CRITICAL FAILURE! You have gone MAD.")
            }
        };

        // 發送單次檢定事件
        event::emit(CheckEvent {
            investigator_id: object::uid_to_inner(&item.id),
            check_type: string::utf8(b"SAN Check"),
            roll_val: roll,
            target_val: item.san,
            is_success,
            msg
        });
    } // <--- 這裡原本少了一個大括號，導致函數沒結束

    /// 3. 瘋狂連發 (Batch Check)：在合約內部執行 5 次檢定
    entry fun batch_sanity_check(item: &mut Investigator, r: &Random, ctx: &mut TxContext) {
        // 如果已經瘋了，直接終止
        if (item.is_mad) { abort 0 };

        let mut gen = random::new_generator(r, ctx);
        let mut i = 0;

        // 執行 5 次迴圈
        while (i < 5) {
            // 如果中途瘋了，就不能再檢定，跳出迴圈
            if (item.is_mad) { break };

            let roll = random::generate_u8_in_range(&mut gen, 1, 100);
            let is_success = roll <= item.san;
            
            let msg = if (is_success) {
                item.exp = item.exp + 10;
                string::utf8(b"Success! (+10 EXP)")
            } else {
                let dmg = random::generate_u8_in_range(&mut gen, 1, 10);
                if (item.san > dmg) {
                    item.san = item.san - dmg;
                    string::utf8(b"Failed! (-1d10 SAN)")
                } else {
                    item.san = 0;
                    item.is_mad = true;
                    string::utf8(b"CRITICAL FAILURE! MADNESS!")
                }
            };

            // 每一次檢定都發出一個事件
            event::emit(CheckEvent {
                investigator_id: object::uid_to_inner(&item.id),
                check_type: string::utf8(b"Batch SAN Check"),
                roll_val: roll,
                target_val: item.san,
                is_success,
                msg
            });

            i = i + 1;
        };
    }
}