
import React, { useEffect,useRef } from "react";
import { useState } from 'react';
import axios from 'axios';
import style from './styles.module.css'
import fullScreenBot from "../fullScreenBot"

import styles from "./fullstyle.module.css"
import Typing from 'react-typing-effect';
import Typewriter from 'typewriter-effect';




export default function Bot2() {
    const [isShown, setIsShown] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [response, setResponse] = useState(["What is the meaning of life?","Life Is a Very Philosophical Concept"]);
    const [activeContainer,setActiveContainer]=useState(false);
    const [resRender,setResRender]=useState(false);
    const chatWindowRef = useRef(null);
    const [maximize,setMaximize]=useState(false);


    function setScreenSize(){
        setMaximize(!maximize)
    }
    
  


    const handleSubmit = async (e) => {
        e.preventDefault();
        setResponse((prevResponse) => [...prevResponse, inputValue]);
        setInputValue('');
        setResRender(!resRender);
       
       
      };

      const returnText=(item,index)=>{
       

        if(index===response.length-1){
            return  <Typing speed={100} hideCursor={true} >{item}</Typing>

        }
        else{
            return item;
        }

      }

      
     
      useEffect(() => {
        // Scroll to the bottom of the chat window whenever the response changes
        if(response.length===2){
            return ;
        }
        chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
      }, [response]);
    
    useEffect(() => {
        const lastQuestion = response[response.length - 1];

        const prompt=`Go through this conversation ${response.join(' ')} and try to understand the context of the conversation and try to answer this ${lastQuestion} question asked by the user.`

        
       
    
        const fetchData = async () => {
            console.log("Hello from useEffect")
          try {
            const res = await axios.post('../../api/server1', { question: lastQuestion });
            setResponse([...response, res.data]);

          } catch (error) {
            console.log(error);
            setResponse([...response, 'Sorry, I do not know the answer to that question.']);
          }
        };
    
        if(response.length===2){
            return ;
        }else{
            fetchData();
        }
      
        
      }, [resRender]);

    return  maximize ? (<><div className={styles.container2} >

      <div className={styles.chatHeader}>
       <div className={styles.headerText}>
      <p>
     AI Mentor
      </p>
      </div>
   <div onClick={setScreenSize}>

    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M333 856V723H200v-60h193v193h-60Zm234 0V663h193v60H627v133h-60ZM200 489v-60h133V296h60v193H200Zm367 0V296h60v133h133v60H567Z"/></svg>
      </div>

      </div>
      <div className={style.line}></div>
      <div className={styles.botBody} ref={chatWindowRef} >
                <ul>
                    {response.map((item,index)=>{
                        if(index%2==0){
                            return <li className={styles.leftRespone} key={index}>
                                {item}        
                                </li>

                        }
                        else{
                            return <li className={styles.rightResponse} key={index}>

                                {
                                    index===response.length-1 && item.length<50 ?      <Typewriter
                                    options={{
                                      cursor: '|',
                                    }}
                                    onInit={(typewriter) => {
                                      typewriter.typeString(item)
                                        .pauseFor(10)
                                        .changeDelay(1)
                                        
                                        .start()
                                        .callFunction(() => {
                                          typewriter.stop();
                                        })
                                    }}
                                  />:item
                                }
                                
                           
                             


</li>}
                    })}
          </ul>
                </div>
                <div className={styles.aside}>
                    <div className={styles.newChat}>
                        New Chat

                    </div>
                    <div className={styles.newChat}>
                      Your Account

                    </div>

                </div>
                <form onSubmit={handleSubmit}>
                <div className={styles.botFooter}>
                    <div className={styles.botFooterInput}>
                        <input type="text" placeholder="Enter Your Prompt" className={style.botFooterInputText}
                        value={inputValue}
                        onChange={(e)=>setInputValue(e.target.value)}

                        />

                        <button className={style.botFooterInputButton}
                        type="submit"


                        >Send</button>
                        
                        </div>
                        </div>
                        </form>


        
        
        
        
        </div></>) : (
        <>
        <div className={
       style.botIcon
        } onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)} 
        onClick={()=>{
            setActiveContainer(!activeContainer
               
            )
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M147 680q-45 0-76-31.208Q40 617.583 40 573t31.208-75.792Q102.417 466 147 466V343q0-24 18-42t42-18h166q0-45 31.208-76 31.209-31 75.792-31t75.792 31.208Q587 238.417 587 283h166q24 0 42 18t18 42v123q45 0 76 31.208 31 31.209 31 75.792t-31.208 75.792Q857.583 680 813 680v196q0 24-18 42t-42 18H207q-24 0-42-18t-18-42V680Zm196.235-100Q360 580 371.5 568.265q11.5-11.736 11.5-28.5Q383 523 371.265 511.5q-11.736-11.5-28.5-11.5Q326 500 314.5 511.735q-11.5 11.736-11.5 28.5Q303 557 314.735 568.5q11.736 11.5 28.5 11.5Zm274 0Q634 580 645.5 568.265q11.5-11.736 11.5-28.5Q657 523 645.265 511.5q-11.736-11.5-28.5-11.5Q600 500 588.5 511.735q-11.5 11.736-11.5 28.5Q577 557 588.735 568.5q11.736 11.5 28.5 11.5ZM312 771h336v-60H312v60ZM207 876h546V343H207v533Zm0 0V343v533Z"/></svg>
        <div className={isShown ? `${style.arrow} ${style.active} `: `${style.arrow}`} >
            <div className={style.hoverIcon}>
            Ask Me AnyThing
            </div>
        <svg width="90" height="40" viewBox="0 0 90 104" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M89.2919 82.7622C89.7129 82.0487 89.4757 81.129 88.7622 80.7081L77.135 73.8482C76.4215 73.4272 75.5019 73.6644 75.0809 74.3779C74.6599 75.0914 74.8971 76.011 75.6106 76.432L85.9459 82.5297L79.8482 92.865C79.4272 93.5785 79.6644 94.4981 80.3779 94.9191C81.0914 95.34 82.011 95.1029 82.432 94.3894L89.2919 82.7622ZM30.1696 1.36322C28.7254 0.957744 28.7252 0.958649 28.7248 0.959945C28.7245 0.9609 28.7241 0.96259 28.7235 0.964498C28.7225 0.968316 28.721 0.973695 28.7191 0.980622C28.7152 0.994476 28.7097 1.01452 28.7025 1.04065C28.6881 1.09291 28.6673 1.1695 28.6404 1.26956C28.5868 1.46967 28.5093 1.76367 28.4123 2.14457C28.2184 2.90631 27.9467 4.01596 27.6326 5.41763C27.0046 8.2202 26.2062 12.1944 25.5218 16.8924C24.1558 26.2688 23.2309 38.6142 25.0711 50.3039C26.9093 61.9808 31.5473 73.2334 41.5168 80.0749C51.5015 86.9268 66.4639 89.1026 88.3746 83.4525L87.6254 80.5475C66.1602 86.0827 52.2058 83.7716 43.2143 77.6013C34.2077 71.4207 29.8101 61.1159 28.0346 49.8373C26.2612 38.5715 27.1446 26.5632 28.4904 17.3248C29.1619 12.7154 29.9453 8.81688 30.56 6.07363C30.8673 4.70238 31.1322 3.62082 31.3196 2.88459C31.4133 2.5165 31.4876 2.23482 31.5381 2.0465C31.5633 1.95234 31.5826 1.88153 31.5954 1.83494C31.6018 1.81164 31.6066 1.7944 31.6097 1.78332C31.6112 1.77779 31.6123 1.77379 31.613 1.77135C31.6133 1.77012 31.6135 1.76946 31.6137 1.76885C31.6138 1.76858 31.6137 1.7687 30.1696 1.36322Z" fill="black"/>
</svg>

        </div>
        </div>
        <div className={
    activeContainer ? `${style.botContainer} ${style.active}`:`${style.botContainer}`}>
        <div className={style.botHeader}>
            <p>
            AI Mentor
            </p>
            <div onClick={setScreenSize}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M200 856V663h60v133h133v60H200Zm0-367V296h193v60H260v133h-60Zm367 367v-60h133V663h60v193H567Zm133-367V356H567v-60h193v193h-60Z"/></svg>
            </div>
           
            </div>
            <div className={style.line}></div>
            <div className={style.botBody} ref={chatWindowRef} >
                <ul>
                    {response.map((item,index)=>{
                        if(index%2==0){
                            return <li className={style.leftRespone} key={index}>{item}</li>

                        }
                        else{
                            return <li className={style.rightResponse} key={index}>
                                
                                
                                
                                
                                {
                                    index===response.length-1 && item.length<50 ?      <Typewriter
                                    options={{
                                      cursor: '|',
                                    }}
                                    onInit={(typewriter) => {
                                      typewriter.typeString(item)
                                        .pauseFor(-3000)
                                        .changeDelay(-3000)
                                        
                                        .start()
                                        .callFunction(() => {
                                          typewriter.stop();
                                        })
                                    }}
                                  />:item
                                }
                                




                            </li>
                        }
})}
                </ul>
                </div>
                <form onSubmit={handleSubmit}>
                <div className={style.botFooter}>
                    <div className={style.botFooterInput}>
                        <input type="text" placeholder="Enter Your Prompt" className={style.botFooterInputText}
                        value={inputValue}
                        onChange={(e)=>setInputValue(e.target.value)}

                        />

                        <button className={style.botFooterInputButton}
                        type="submit"


                        >Send</button>
                        
                        </div>
                        </div>
                        </form>
        </div>
        </>
    );
}

