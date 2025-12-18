module trpg_core::investigator {
    use std::string::{Self, String};
    use iota::event;
    use iota::package;
    use iota::display;
    // 移除多餘的 use iota::transfer;
    use iota::random::{Self, Random};

    public struct INVESTIGATOR has drop {}

    // --- 主角 NFT ---
    public struct Investigator has key, store {
        id: UID,
        name: String,
        description: String,
        url: String,
        str: u8, dex: u8, san: u8, max_san: u8, exp: u64, is_mad: bool,
        active_scenario: u8, scenario_step: u8, loop_depth: u8,
        temp_mod_val: u8, temp_mod_is_plus: bool, clues: u8            
    }

    // --- 紀念 SBT ---
    public struct MemorialSBT has key {
        id: UID,
        name: String,
        description: String,
        final_depth: u8,
        career_exp: u64,
        issue_date: u64 
    }

    public struct ScoreEvent has copy, drop {
        investigator_id: ID,
        name: String,
        depth: u8,
        outcome: String
    }

    public struct ScenarioEvent has copy, drop {
        investigator_id: ID,
        mode: String, outcome: String, logs: vector<String> 
    }

    fun init(otw: INVESTIGATOR, ctx: &mut TxContext) {
        let publisher = package::claim(otw, ctx);
        let mut keys = vector::empty<String>();
        let mut values = vector::empty<String>();

        // Investigator Display
        vector::push_back(&mut keys, string::utf8(b"name"));
        vector::push_back(&mut values, string::utf8(b"{name}"));
        vector::push_back(&mut keys, string::utf8(b"image_url"));
        vector::push_back(&mut values, string::utf8(b"{url}"));
        vector::push_back(&mut keys, string::utf8(b"description"));
        vector::push_back(&mut values, string::utf8(b"{description}"));
        vector::push_back(&mut keys, string::utf8(b"Status"));
        vector::push_back(&mut values, string::utf8(b"SAN: {san}/{max_san} | Depth: {loop_depth}"));

        let mut display = display::new_with_fields<Investigator>(&publisher, keys, values, ctx);
        display::update_version(&mut display);

        // MemorialSBT Display
        let mut sbt_keys = vector::empty<String>();
        let mut sbt_values = vector::empty<String>();
        vector::push_back(&mut sbt_keys, string::utf8(b"name"));
        vector::push_back(&mut sbt_values, string::utf8(b"Resignation Letter: {name}"));
        vector::push_back(&mut sbt_keys, string::utf8(b"image_url"));
        vector::push_back(&mut sbt_values, string::utf8(b"https://api.dicebear.com/7.x/initials/svg?seed=Resigned&backgroundColor=000000&textColor=ffffff")); 
        vector::push_back(&mut sbt_keys, string::utf8(b"description"));
        vector::push_back(&mut sbt_values, string::utf8(b"{description} - Final Depth: {final_depth}"));

        let mut sbt_display = display::new_with_fields<MemorialSBT>(&publisher, sbt_keys, sbt_values, ctx);
        display::update_version(&mut sbt_display);

        transfer::public_transfer(publisher, tx_context::sender(ctx));
        transfer::public_transfer(display, tx_context::sender(ctx));
        transfer::public_transfer(sbt_display, tx_context::sender(ctx));
    }

    // --- Helper ---
    fun calculate_dynamic_target(stat: u8, depth: u8): u8 {
        let penalty = depth * 5; 
        if (stat > penalty) { stat - penalty } else { 5 }
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
            description: string::utf8(b"A corporate slave trapped in an infinite stairwell."),
            url: string::utf8(b"https://api.dicebear.com/7.x/notionists/svg?seed=employee"),
            str, dex, san, max_san: san, exp: 0, is_mad: false,
            active_scenario: 0, scenario_step: 0, loop_depth: 0,
            temp_mod_val: 0, temp_mod_is_plus: true, clues: 0
        };
        transfer::public_transfer(investigator, tx_context::sender(ctx));
    }

    entry fun resign(item: Investigator, ctx: &mut TxContext) {
        let final_depth = item.loop_depth;
        let career_exp = item.exp;
        let char_name = item.name;

        event::emit(ScoreEvent {
            investigator_id: object::uid_to_inner(&item.id),
            name: char_name,
            depth: final_depth,
            outcome: string::utf8(b"Resigned (SBT Minted)")
        });

        let sbt = MemorialSBT {
            id: object::new(ctx),
            name: char_name,
            description: string::utf8(b"Proof of survival from the infinite stairwell."),
            final_depth,
            career_exp,
            issue_date: 0 
        };

        transfer::transfer(sbt, tx_context::sender(ctx));

        let Investigator { id, .. } = item;
        object::delete(id);
    }

    // Demo: 單發檢定
    entry fun sanity_check(item: &mut Investigator, r: &Random, ctx: &mut TxContext) {
        if (item.is_mad) abort 0;
        let mut gen = random::new_generator(r, ctx);
        let roll = random::generate_u8_in_range(&mut gen, 1, 100);
        let mut logs = vector::empty<String>();
        logs.push_back(string::utf8(b"Single Check Initiated..."));

        if (roll > item.san) {
            let dmg = random::generate_u8_in_range(&mut gen, 1, 5);
            if (item.san > dmg) { item.san = item.san - dmg; } else { item.san = 0; item.is_mad = true; };
            logs.push_back(string::utf8(b"Failed! SAN damaged."));
        } else {
            logs.push_back(string::utf8(b"Passed! You remain calm."));
        };
        
        event::emit(ScenarioEvent { investigator_id: object::uid_to_inner(&item.id), mode: string::utf8(b"Check"), outcome: string::utf8(b"Result"), logs });
    }

    // Demo: Batch 連發檢定
    entry fun batch_sanity_check(item: &mut Investigator, r: &Random, ctx: &mut TxContext) {
        if (item.is_mad) abort 0;
        let mut gen = random::new_generator(r, ctx);
        let mut logs = vector::empty<String>();
        logs.push_back(string::utf8(b"BATCH CHECK (x3) START"));

        let mut i = 0;
        while (i < 3) {
            if (item.is_mad) { break };
            let roll = random::generate_u8_in_range(&mut gen, 1, 100);
            if (roll > item.san) {
                if (item.san > 2) { item.san = item.san - 2; } else { item.san = 0; item.is_mad = true; };
                logs.push_back(string::utf8(b"-[Fail] SAN -2"));
            } else {
                logs.push_back(string::utf8(b"-[Pass] Safe"));
            };
            i = i + 1;
        };
        
        if (item.is_mad) {
            item.url = string::utf8(b"https://api.dicebear.com/7.x/notionists/svg?seed=madness&backgroundColor=b6e3f4");
            logs.push_back(string::utf8(b"Result: MADNESS CONSUMED YOU."));
        } else {
            logs.push_back(string::utf8(b"Result: You survived the barrage."));
        };

        event::emit(ScenarioEvent { investigator_id: object::uid_to_inner(&item.id), mode: string::utf8(b"Batch"), outcome: string::utf8(b"Result"), logs });
    }

    entry fun play_stairs_quick(item: &mut Investigator, r: &Random, ctx: &mut TxContext) {
        if (item.is_mad) { abort 0 };
        let mut logs = vector::empty<String>();
        let mut gen = random::new_generator(r, ctx);
        logs.push_back(string::utf8(b"=== Quick Investigation ==="));
        if (item.san > 0) { item.san = item.san - 1; };
        if (item.san == 0) { item.is_mad = true; };

        if (!item.is_mad) {
            let roll = random::generate_u8_in_range(&mut gen, 1, 100);
            let target = calculate_dynamic_target(item.str, item.loop_depth);
            
            if (roll <= target) {
                logs.push_back(string::utf8(b"> Rushed down successfully."));
                if (roll <= 5) {
                    event::emit(ScoreEvent { investigator_id: object::uid_to_inner(&item.id), name: item.name, depth: item.loop_depth, outcome: string::utf8(b"Escaped") });
                    item.loop_depth = 0; 
                } else {
                    item.loop_depth = item.loop_depth + 1;
                    logs.push_back(string::utf8(b"Deeper... (Depth +1)"));
                }
            } else {
                logs.push_back(string::utf8(b"> Stumbled! (-5 SAN)"));
                if (item.san > 5) { item.san = item.san - 5; } else { item.san = 0; item.is_mad = true; };
                item.loop_depth = item.loop_depth + 1;
            };
            
            if (item.is_mad) {
                item.url = string::utf8(b"https://api.dicebear.com/7.x/notionists/svg?seed=madness&backgroundColor=b6e3f4");
                event::emit(ScoreEvent { investigator_id: object::uid_to_inner(&item.id), name: item.name, depth: item.loop_depth, outcome: string::utf8(b"Madness") });
            }; // 🔥 修正重點：這裡補上了分號

            event::emit(ScenarioEvent { investigator_id: object::uid_to_inner(&item.id), mode: string::utf8(b"Quick"), outcome: string::utf8(b"Done"), logs });
        }
    }

    entry fun manual_start(item: &mut Investigator, r: &Random, ctx: &mut TxContext) {
        if (item.is_mad || item.active_scenario != 0) { abort 0 };
        item.active_scenario = 1; 
        let mut logs = vector::empty<String>();
        logs.push_back(string::utf8(b"You step into the stairwell..."));
        if (item.san > 0) { item.san = item.san - 1; };
        
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
        let target = calculate_dynamic_target(if (choice == 1) { item.dex } else { item.san }, item.loop_depth);
        
        if (roll <= target) {
            item.exp = item.exp + 20;
            item.loop_depth = item.loop_depth + 1;
            logs.push_back(string::utf8(b"Success. Deeper."));
        } else {
            logs.push_back(string::utf8(b"FAILURE."));
            if (item.san > 10) { item.san = item.san - 10; item.loop_depth = item.loop_depth + 1; } 
            else { item.san = 0; item.is_mad = true; item.url = string::utf8(b"https://api.dicebear.com/7.x/notionists/svg?seed=madness&backgroundColor=b6e3f4"); };
        };
        item.active_scenario = 0;
        event::emit(ScenarioEvent { investigator_id: object::uid_to_inner(&item.id), mode: string::utf8(b"Manual"), outcome: string::utf8(b"Done"), logs });
    }

    fun get_realm_vision(san: u8, r: &Random, ctx: &mut TxContext): (String, u8, bool) {
        let mut gen = random::new_generator(r, ctx);
        let roll = random::generate_u8_in_range(&mut gen, 1, 100);
        
        if (roll < san) {
            if (roll % 2 == 0) { (string::utf8(b"[Vision: Human Realm] Rust and dust."), 0, true) } 
            else { (string::utf8(b"[Vision: Deva Realm] Golden light."), 10, true) }
        } else {
            if (roll % 3 == 0) { (string::utf8(b"[Vision: Asura Realm] Walls bleeding."), 5, true) } 
            else if (roll % 3 == 1) { (string::utf8(b"[Vision: Hungry Ghost Realm] Hands grabbing you."), 10, false) } 
            else { (string::utf8(b"[Vision: Hell Realm] Absolute void."), 20, false) }
        }
    }
}