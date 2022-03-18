
//constant api format so we can make the datafiltering somewhat more "unusually shaped";
//could use depth first search to the data but who has the time to do that honestly, theres an invasion going on and everything.
export function DataFilter(Jsonfile){
    let outputobject = {};
    outputobject['distance']=Jsonfile['distance']
    outputobject['battles']=Jsonfile['battles']
    let truejson = Jsonfile['pvp']
    for(var letys in truejson){
        if(typeof truejson[letys]=='object'){
            for(var small in truejson[letys]){
                if(truejson[letys][small]==null){
                    continue;
                }else{
                    outputobject[String(letys).concat(' ',String(small))] = truejson[letys][small]
                }
            }
        }else if(truejson[letys]==null){
            continue;
        }else{
            outputobject[String(letys)] = truejson[letys]
        }

    }
    return outputobject

}
//create another function that creates a modified version of the stats that are named properly.
export function DataAligner(oobject){
    const removals = ["art_agro","team_dropped_capture_points","torpedo_agro","torpedoes max_frags_ship_id","team_capture_points","suppressions_count","second_battery max_frags_ship_id","ramming max_frags_ship_id","max_xp_ship_id","max_total_agro_ship_id","max_total_agro","max_suppressions_count","max_ships_spotted_ship_id","max_scouting_damage_ship_id","max_planes_killed_ship_id","max_frags_ship_id","max_damage_scouting","battles_since_510","battles_since_512","capture_points","damage_to_buildings","dropped_capture_points","main_battery max_frags_ship_id","max_damage_dealt_ship_id","max_damage_dealt_to_buildings"]
    const checkerobject = {"aircraft frags": "Aircraft Kills",
        "aircraft max_frags_battle": "Maximum Kills By Aircraft In A Battle",
        "battles": "Battles",
        "control_captured_points": "Capture Points Taken",
        "control_dropped_points": "Capture Points Lost",
        "damage_dealt": "Total Damage Dealt",
        "damage_scouting": "Total Scouting Damage",
        "distance": "Distance Travelled",
        "draws": "Draws",
        "frags": "Kills",
        "losses": "Defeats",
        "main_battery frags": "Main Battery Kills",
        "main_battery hits": "Main Battery Hits",
        "main_battery shots": "Main Battery Shots Fired",
        "max_damage_dealt": "Maximum Damage Dealt In A Battle",
        "max_frags_battle": "Maximum Kills In A Battle",
        "max_planes_killed": "Maximum Planes Killed",
        "max_ships_spotted": "Maximum Ships Spotted",
        "max_xp": "Maximum XP In A Battle",
        "planes_killed": "Planes Killed",
        "ramming frags": "Ramming Kills",
        "ramming max_frags_battle": "Maximum Ramming Kills In A Battle",
        "second_battery frags": "Secondary Kills",
        "second_battery hits": "Secondary Battery Hits",
        "second_battery max_frags_battle": "Secondary Battery Kills In A Battle",
        "second_battery shots": "Secondary Battery Shots Fired",
        "ships_spotted": "Ships Spotted",
        "survived_battles": "Battles Survived",
        "survived_wins": "Survived Wins",
        "torpedoes frags": "Torpedo Kills",
        "torpedoes hits": "Torpedo Hits",
        "torpedoes max_frags_battle": "Torpedo Kills In A Single Battle",
        "torpedoes shots": "Torpedo Shots Fired",
        "wins": "Wins",
        "xp": "XP Gained",
        "main_battery max_frags_battle":"Main Battery Max Kills In A Battle"}
    for(const [key,value] of Object.entries(oobject)){
        for(var i=0;i<removals.length;i++){
            if(removals[i]===key){
                delete oobject[key];
            }
        }
    }
    for(const[key,value] of Object.entries(oobject)){
        for(const [innerkey,innervalue] of Object.entries(checkerobject)){
            if(key===innerkey){
                let newkey = checkerobject[innerkey];
                oobject[newkey] = oobject[key];
                delete oobject[key]
            }
        }
    }

    return oobject
}
