
import style from "./styles.module.css"
import { Divider } from '@chakra-ui/react'
import { useEffect,useState } from "react"









export default  function Store() {
    let words2 = [
        {
            word: "About",
            meaning: ["On the subject of", "connected with"],
            example: ["I was thinking about you", "What are you talking about?"],
            partsOfSpeech:"article"
    
        },
        {
            word: "Above",
            meaning: ["Higher than", "More than"],
            example: ["The plane was flying above the clouds", "Temperatures will be above average for the time of year"],
            partsOfSpeech:"article"
        }
    
    
        ]
    

    const[words,setWords]=useState(words2)

    




useEffect(() => {

    localStorage.setItem("words",JSON.stringify( {
        word: "This Is A test Word",
        meaning: ["On the subject of", "connected with"],
        example: ["I was thinking about you", "What are you talking about?"],
        partsOfSpeech:"article"

    }) )



    const newWord=  JSON.parse(localStorage.getItem("words") );
       
    if(newWord){
        words2=[...words2,newWord];
        setWords([...words,newWord])
      
    }






}, [])

    


  return (
    <div className={style.container} >
        <div className={style.body}>
            <div className={style.header}>
                <h1>Word Meanings</h1>
                {/* <div className={style.dashline} >

                </div> */}
                </div>

                <div className={style.words}>

                    <ul>
                        {
                            words.map((word,index)=>{
                                return(
                                    <div key={index}>
                                        <li className={style.word}>
                                            <div className={style.wordheader}>
                                                <h2>{word.word}</h2>
                                                <div className={style.dashline2} ></div>
                                            </div>
                                            <div className={style.meaning}>
                                                <h3>Meaning</h3>
                                                {/* <p>{word.meaning}</p> */}
                                                {
                                                    word.meaning.map((meaning,index)=>{
                                                        return(<>
                                                            <p key={index}>{meaning}</p> 
                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className={style.example}>
                                                <h3>Example</h3>
                                                {/* <p>{word.example}</p> */}
                                                {
                                                    word.example.map((example,index)=>{
                                                        return(<>
                                                            <p key={index}>{example}</p> 
                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className={style.ptofsp}>
                                                <h3>Part of Speech</h3>
                                                <p>{word.partsOfSpeech}</p>
                                            </div>
                                        </li>
                                        
                                    </div>
                                )
                            })
                        }
                    </ul>


                    </div>


















            </div>

      
    </div>
  )
}
