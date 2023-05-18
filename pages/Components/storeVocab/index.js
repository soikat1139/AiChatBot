
import style from "./styles.module.css"
import { Divider } from '@chakra-ui/react'
import { useEffect,useState } from "react"









export default  function Store() {


    let words2 = [
        {
          word: 'Love',
          meaning: {
            mn1: 'A strong feeling of affection',
            mn2: 'A great interest and pleasure in something'
          },
          example: {
            ex1: 'I have a deep love for my family.',
            ex2: 'She has a love of music.'
          },
          partsOfSpeech: { pos1: 'noun', pos2: 'verb' }
        },
        {
          word: 'Love',
          meaning: {
            mn1: 'A strong feeling of affection',
            mn2: 'A great interest and pleasure in something'
          },
          example: {
            ex1: 'I have a deep love for my family.',
            ex2: 'She has a love of music.'
          },
          partsOfSpeech: { pos1: 'noun', pos2: 'verb' }
        },
        {
          word: 'Love',
          meaning: {
            mn1: 'A strong feeling of affection',
            mn2: 'A great interest and pleasure in something'
          },
          example: {
            ex1: 'I have a deep love for my family.',
            ex2: 'She has a love of music.'
          },
          partsOfSpeech: { pos1: 'noun', pos2: 'verb' }
        }
      ]
    

    const[words,setWords]=useState(words2)

    




useEffect(() => {

  



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
                                              
                                               
                                               <p key={index}>{word.meaning.mn1}</p> 
                                               <p key={index}>{word.meaning.mn2}</p> 
                                                           
                                                       
                                                  
                                               
                                            </div>
                                            <div className={style.example}>
                                                <h3>Example</h3>
                                              
                                                
                                                            <p key={index}>{word.example.ex1}</p> 
                                                            <p key={index}>{word.example.ex2}</p> 
                                                    
                                            </div>
                                            <div className={style.ptofsp}>
                                                <h3>Part of Speech</h3>
                                                <p>{word.partsOfSpeech.pos1}</p>
                                                <p>{word.partsOfSpeech.pos2}</p>
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
