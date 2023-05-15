const responseString = "Sure, here's your requested JavaScript object for the word 'Love': { word: 'Love', meaning: ['An intense feeling of deep affection'*'To have a strong liking or desire for someone or something'], example: ['I love spending time with my family and friends'*'She confessed her love for him'], partsOfSpeech: ['Noun'*'Verb'] }";

const start = responseString.indexOf("{");
const end = responseString.lastIndexOf("}") + 1;
const jsonString = responseString.substring(start+1, end-1);
//console.log(jsonString)

const arr=jsonString.split(',')


let obj={}
obj[arr[0].split(":")[0].trim()]=arr[0].split(":")[1].trim().replace("'", "").replace("'"," ").trim()
if( arr[1].split(':')[1].replace(/\[|\]/g, '').split("*").length>1){
    obj[arr[1].split(':')[0].trim()]=[
    arr[1].split(':')[1].replace(/\[|\]/g, '').split("*")[0].replace("'", "").replace("'"," ").trim(),
    
    arr[1].split(':')[1].replace(/\[|\]/g, '').split("*")[1].replace("'", "").replace("'"," ").trim()
]

}
else{
    obj[arr[1].split(':')[0].trim()]=[
    arr[1].split(':')[1].replace(/\[|\]/g, '').split("*")[0].replace("'", "").replace("'"," ").trim()
]
    
}
if(arr[2].split(':')[1].replace(/\[|\]/g, '').split("*").length>1){
    obj[arr[2].split(':')[0].trim()]=[
    
    arr[2].split(':')[1].replace(/\[|\]/g, '').split("*")[0].replace("'", "").replace("'"," ").trim(),
    
    arr[2].split(':')[1].replace(/\[|\]/g, '').split("*")[1].replace("'", "").replace("'"," ").trim()
    
    ]
}
else{
    
    obj[arr[2].split(':')[0].trim()]=[
    
    arr[2].split(':')[1].replace(/\[|\]/g, '').split("*")[0].replace("'", "").replace("'"," ").trim()
    
    ]}
    if(arr[3].split(':')[1].replace(/\[|\]/g, '').split("*").length>1){
        
        obj[[arr[3].split(':')[0].trim()]]=[
     
    arr[3].split(':')[1].replace(/\[|\]/g, '').split("*")[0].replace("'", "").replace("'"," ").trim(),
    
    arr[3].split(':')[1].replace(/\[|\]/g, '').split("*")[1].replace("'", "").replace("'"," ").trim()]  }
    else{
           obj[[arr[3].split(':')[0].trim()]]=[
     
    arr[3].split(':')[1].replace(/\[|\]/g, '').split("*")[0].replace("'", "").replace("'"," ").trim()
    ]
        
    }
    
 
    console.log(obj)