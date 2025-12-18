module trpg_core::investigator {
    use std::string::{Self, String};
    use iota::object; 
    use iota::transfer;
    use iota::tx_context::{Self, TxContext};
    use iota::random::{Self, Random};
    use iota::event;

    // --- Structs ---
    public struct Investigator has key, store {
        id: object::UID,
        name: String,
        str: u8, 
        dex: u8, 
        san: u8, 
        max_san: u8,
        exp: u64,
        is_mad: bool,
        
        // 狀態機
        active_scenario: u8, 
        scenario_step: u8,   
        loop_depth: u8,      
        temp_mod_val: u8,       
        temp_mod_is_plus: bool, 
        clues: u8            
    }

    // --- Events ---
    public struct CheckEvent has copy, drop {
        investigator_id: object::ID,
        check_type: String,
        roll_val: u8,
        target_val: u8,
        is_success: bool,
        msg: String
    }

    public struct ScenarioEvent has copy, drop {
        investigator_id: object::ID,
        mode: String,        
        outcome: String,     
        logs: vector<String> 
    }

    // 🔥【關鍵修改】新增：排行榜專用事件
    // 如果沒有這個，前端的排行榜就會是空的
    public struct ScoreEvent has copy, drop {
        investigator_id: object::ID,
        name: String,
        depth: u8,      // 深度 (排行榜依據)
        outcome: String // "Escaped" 或 "Madness"
    }
    
    // --- Helper Functions ---
    fun calculate_target(base: u8, multiplier: u8, mod_val: u8, is_plus: bool): u8 {
        let base_val = (base as u64) * (multiplier as u64);
        let modification = (mod_val as u64);
        if (is_plus) {
            let result = base_val + modification;
            if (result > 100) 100 else (result as u8)
        } else {
            if (base_val > modification) ((base_val - modification) as u8) else 0
        }
    }

    fun get_realm_vision(san: u8, r: &Random, ctx: &mut TxContext): (String, u8, bool) {
        let mut gen = random::new_generator(r, ctx);
        let roll = random::generate_u8_in_range(&mut gen, 1, 100);
        
        if (roll < san) {
            if (roll % 2 == 0) {
                (string::utf8(b"[Vision: Human Realm] Cold concrete stairs. Smell of rust. (Normal)"), 0, true)
            } else {
                (string::utf8(b"[Vision: Deva Realm] Golden clouds. You feel peaceful. (CON+10)"), 10, true)
            }
        } else {
            if (roll % 3 == 0) {
                 (string::utf8(b"[Vision: Asura Realm] The walls bleed. War drums fuel rage. (DEX+5)"), 5, true)
            } else if (roll % 3 == 1) {
                 (string::utf8(b"[Vision: Hungry Ghost Realm] Weeping faces grab your ankles. (DEX-10)"), 10, false)
            } else {
                 (string::utf8(b"[Vision: Hell Realm] Absolute darkness. The Abyss stares back. (Stats -20)"), 20, false)
            }
        }
    }

    // --- Entry Functions ---

    entry fun mint(r: &Random, name_bytes: vector<u8>, ctx: &mut TxContext) {
        let mut gen = random::new_generator(r, ctx);
        let str = (random::generate_u8_in_range(&mut gen, 3, 18)) * 5;
        let dex = (random::generate_u8_in_range(&mut gen, 3, 18)) * 5;
        let san = (random::generate_u8_in_range(&mut gen, 3, 18)) * 5;

        let investigator = Investigator {
            id: object::new(ctx),
            name: string::utf8(name_bytes),
            str, dex, san, max_san: san, exp: 0, is_mad: false,
            active_scenario: 0,
            scenario_step: 0,
            loop_depth: 0,
            temp_mod_val: 0,      
            temp_mod_is_plus: true, 
            clues: 0
        };
        transfer::public_transfer(investigator, tx_context::sender(ctx));
    }

    entry fun sanity_check(item: &mut Investigator, r: &Random, ctx: &mut TxContext) {
        if (item.is_mad) { abort 0 };
        let mut gen = random::new_generator(r, ctx);
        let roll = random::generate_u8_in_range(&mut gen, 1, 100);
        let is_success = roll <= item.san;
        let msg = if (is_success) { item.exp = item.exp + 10; string::utf8(b"Success! (+10 EXP)") } else {
            let dmg = random::generate_u8_in_range(&mut gen, 1, 10);
            if (item.san > dmg) { item.san = item.san - dmg; string::utf8(b"Failed! (-1d10 SAN)") } else { item.san = 0; item.is_mad = true; string::utf8(b"MADNESS") }
        };
        event::emit(CheckEvent { investigator_id: object::uid_to_inner(&item.id), check_type: string::utf8(b"SAN Check"), roll_val: roll, target_val: item.san, is_success, msg });
    }

    entry fun batch_sanity_check(item: &mut Investigator, r: &Random, ctx: &mut TxContext) {
        if (item.active_scenario != 0) { abort 1 }; 
        if (item.is_mad) { abort 0 };
        let mut gen = random::new_generator(r, ctx);
        let mut i = 0;
        while (i < 5) {
            if (item.is_mad) { break };
            let roll = random::generate_u8_in_range(&mut gen, 1, 100);
            let is_success = roll <= item.san;
             let msg = if (is_success) { item.exp = item.exp + 10; string::utf8(b"Success! (+10 EXP)") } else {
                let dmg = random::generate_u8_in_range(&mut gen, 1, 10);
                if (item.san > dmg) { item.san = item.san - dmg; string::utf8(b"Failed! (-1d10 SAN)") } else { item.san = 0; item.is_mad = true; string::utf8(b"MADNESS") }
            };
            event::emit(CheckEvent { investigator_id: object::uid_to_inner(&item.id), check_type: string::utf8(b"Batch SAN Check"), roll_val: roll, target_val: item.san, is_success, msg });
            i = i + 1;
        };
    }

    // --- Mode A: 快速通關 (Quick Mode) ---
    entry fun play_stairs_quick(item: &mut Investigator, r: &Random, ctx: &mut TxContext) {
        if (item.is_mad) { abort 0 };
        
        let mut logs = vector::empty<String>();
        let mut gen = random::new_generator(r, ctx);
        logs.push_back(string::utf8(b"=== Quick Investigation ==="));

        let (vision, mod_val, is_plus) = get_realm_vision(item.san, r, ctx);
        logs.push_back(vision);

        let target = calculate_target(item.str, 5, mod_val, is_plus);
        let roll1 = random::generate_u8_in_range(&mut gen, 1, 100);
        
        let survived;
        if (roll1 <= target) {
            logs.push_back(string::utf8(b"> Rushed down successfully. Distance created."));
            survived = true;
        } else {
            logs.push_back(string::utf8(b"> Stumbled! The shadow catches up. (-2 SAN)"));
            if (item.san > 2) { item.san = item.san - 2; };
            survived = false;
        };

        let mut outcome = string::utf8(b"Escaped");
        if (survived) {
            item.exp = item.exp + 15;
            logs.push_back(string::utf8(b"Result: You escaped the stairwell. (+15 EXP)"));
            
            // 🔥【關鍵修改】紀錄逃脫成績
            event::emit(ScoreEvent {
                investigator_id: object::uid_to_inner(&item.id),
                name: item.name,
                depth: item.loop_depth,
                outcome: string::utf8(b"Escaped")
            });
            item.loop_depth = 0; 
        } else {
            let dmg = random::generate_u8_in_range(&mut gen, 5, 10);
            if (item.san > dmg) {
                item.san = item.san - dmg;
                item.loop_depth = item.loop_depth + 1;
                outcome = string::utf8(b"Looping");
                logs.push_back(string::utf8(b"Result: The stairs loop back to the start. (Depth+1, SAN dmg)"));
            } else {
                item.san = 0;
                item.is_mad = true;
                outcome = string::utf8(b"MADNESS");
                logs.push_back(string::utf8(b"Result: Mind Shattered."));
                
                // 🔥【關鍵修改】紀錄死亡成績
                event::emit(ScoreEvent {
                    investigator_id: object::uid_to_inner(&item.id),
                    name: item.name,
                    depth: item.loop_depth,
                    outcome: string::utf8(b"Madness")
                });
                item.loop_depth = 0;
            }
        };

        event::emit(ScenarioEvent {
            investigator_id: object::uid_to_inner(&item.id),
            mode: string::utf8(b"Quick"),
            outcome,
            logs
        });
    }

    // --- Mode B: 沉浸手動 (Manual State Machine) ---
    entry fun manual_start(item: &mut Investigator, r: &Random, ctx: &mut TxContext) {
        if (item.is_mad || item.active_scenario != 0) { abort 0 };
        item.active_scenario = 1; 
        item.scenario_step = 1;
        let mut logs = vector::empty<String>();
        logs.push_back(string::utf8(b"You step into the infinite stairwell..."));
        let (vision, mod_val, is_plus) = get_realm_vision(item.san, r, ctx);
        item.temp_mod_val = mod_val;
        item.temp_mod_is_plus = is_plus;
        logs.push_back(vision);
        logs.push_back(string::utf8(b"The air changes. What do you do?"));
        event::emit(ScenarioEvent { investigator_id: object::uid_to_inner(&item.id), mode: string::utf8(b"Manual"), outcome: string::utf8(b"Phase 1"), logs });
    }

    entry fun manual_resolve(item: &mut Investigator, r: &Random, choice: u8, ctx: &mut TxContext) {
        if (item.active_scenario != 1) { abort 0 };
        let mut gen = random::new_generator(r, ctx);
        let roll = random::generate_u8_in_range(&mut gen, 1, 100);
        let mut logs = vector::empty<String>();
        let mut outcome = string::utf8(b"Escaped");

        let is_success = if (choice == 1) {
            let check = calculate_target(item.dex, 5, item.temp_mod_val, item.temp_mod_is_plus);
            roll <= check
        } else if (choice == 2) {
            let check = calculate_target(10, 5, item.temp_mod_val, item.temp_mod_is_plus); 
            roll <= check
        } else {
            let check = calculate_target(item.san, 1, item.temp_mod_val, item.temp_mod_is_plus);
            roll <= check
        };

        if (is_success) {
            if (choice == 3) {
                item.exp = item.exp + 50;
                item.clues = item.clues + 1;
                if (item.san + 10 > item.max_san) { item.san = item.max_san } else { item.san = item.san + 10 };
                logs.push_back(string::utf8(b"You stared into the Abyss, and learned its secret. (Clue Found! SAN Restored)"));
            } else {
                item.exp = item.exp + 20;
                logs.push_back(string::utf8(b"You successfully evaded the shadow."));
            };
            
            // 🔥【關鍵修改】紀錄手動模式的成績 (只有成功逃脫或獲得線索才紀錄)
            if (item.loop_depth > 0 || choice == 3) {
                event::emit(ScoreEvent {
                    investigator_id: object::uid_to_inner(&item.id),
                    name: item.name,
                    depth: item.loop_depth,
                    outcome: string::utf8(b"Escaped")
                });
            };

            item.active_scenario = 0;
            item.scenario_step = 0;
            item.temp_mod_val = 0;
            if (item.loop_depth > 0) {
                logs.push_back(string::utf8(b"You broke the loop and found the exit!"));
                item.loop_depth = 0;
            };

        } else {
            outcome = string::utf8(b"Looping");
            let dmg = random::generate_u8_in_range(&mut gen, 5, 15);
            if (item.san > dmg) {
                item.san = item.san - dmg;
                item.loop_depth = item.loop_depth + 1;
                logs.push_back(string::utf8(b"FAILURE. The shadow grabs you..."));
                logs.push_back(string::utf8(b"You fall down the stairs... and land back where you started. (Loop Depth +1)"));
                item.scenario_step = 1; 
            } else {
                item.san = 0;
                item.is_mad = true;
                item.active_scenario = 0;
                outcome = string::utf8(b"MADNESS");
                logs.push_back(string::utf8(b"Your mind cannot take another loop. It shatters."));
                
                // 🔥【關鍵修改】紀錄死亡成績
                event::emit(ScoreEvent {
                    investigator_id: object::uid_to_inner(&item.id),
                    name: item.name,
                    depth: item.loop_depth,
                    outcome: string::utf8(b"Madness")
                });
                item.loop_depth = 0;
            }
        };
        event::emit(ScenarioEvent { investigator_id: object::uid_to_inner(&item.id), mode: string::utf8(b"Manual"), outcome, logs });
    }
}