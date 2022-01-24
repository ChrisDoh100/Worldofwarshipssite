




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
    console.log(outputobject);
    return outputobject

}

