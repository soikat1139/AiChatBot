import React from 'react'
import style from "./styles.module.css"
import Image from 'next/image';
import expertPic from "./experts.webp"
import { useRef,useState } from 'react';
import Modal from '../Modal';

export default function  MainBody ({handleTasks}) {


    const divRef = useRef(null);

    const [position,setPosition]=useState({x:0,y:0});
    const [showModal,setShowModal]=useState(false);

    function handleContextMenu(event) {
        event.preventDefault();
      }


    function handleSelect(e) {
       
          setPosition({x:e.pageX,y:e.pageY})

        console.log("Mouse uP")
        const selection = window.getSelection();
        if (selection.toString().length > 0) {
          console.log('Text selected:', selection.toString());
        }
      }




      function handleModal(taskName,taskId){
        setShowModal(false);
        handleTasks(taskId,taskName,window.getSelection().toString())
      }



  return (
    <div className={style.container} onContextMenu={handleContextMenu} >

   {
         showModal && <Modal position={position}  handleModal={handleModal} />
   }
      


    <div ref={divRef} className={style.body} 
    

    onMouseUp={handleSelect} onMouseDown={(e)=>{
        

        if(e.buttons===2){
            setShowModal(true)
        }
        if(e.buttons===1){
            setShowModal(false)
        }
    }}
   
    
    >

        <p className={style.navigation}>
            {`Home > IELTS Reading > Reading Exercise`}
        </p>

        <h1 className={style.heading}  >
            IELTS Reading Exercise 101:Making the most of trends
            </h1>

            <p className={style.para}>By <strong>IELTS Practice Ai Mentors</strong></p>

            <div className={style.box}>
                <div className={style.box1}>
                    <p>Facebook</p>

                    </div>
                <div className={style.box2}>
                    <p>Twitter</p>

                    </div>
                <div className={style.box3}>
                    <p>Printest</p>

                    </div>
                <div className={style.box4}>
                    <p>Whatsapp</p>

                    </div>

            </div>

            <h3 className={style.secondHeading}>
            Making the most of trends
            </h3>
            <Image src={expertPic}  alt="Picture of Experts" />
            <p>Experts from Harvard Business School give advice to managers.</p>

            <p>
            Most managers can identify the major trends of the day. But in the course of conducting research in a number of industries and working directly with companies, we have discovered that managers often fail to recognize the less obvious but profound ways these trends are influencing consumers’ aspirations, attitudes, and behaviors. This is especially true of trends that managers view as peripheral to their core markets
            </p>

            <p>
            Many ignore trends in their innovation strategies or adopt a wait-and-see approach and let competitors take the lead. At a minimum, such responses mean missed profit opportunities. At the extreme, they can jeopardize a company by ceding to rivals the opportunity to transform the industry. The purpose of this article is twofold: to spur managers to think more expansively about how trends could engender new value propositions in their core markets, and to provide some high-level advice on how to make market research and product development personnel more adept at analyzing and exploiting trends.
            </p>
            <p>
            One strategy, known as ‘infuse and augment’, is to design a product or service that retains most of the attributes and functions of existing products in the category but adds others that address the needs and desires unleashed by a major trend. A case in point in the Poppy range of handbags, which the firm Coach created in response to the economic downturn of 2008. The Coach brand had been a symbol of opulence and luxury for nearly 70 years, and the most obvious reaction to the downturn would have been to lower prices. However, that would have risked cheapening the brand’s image. Instead, they initiated a consumer-research project which revealed that customers were eager to lift themselves and the country out of tough times. Using these insights, Coach launched the lower-priced Poppy handbags, which were in vibrant colors, and looked more youthful and playful than conventional Coach products. Creating the sub-brand allowed Coach to avert an across-the-board price cut. In contrast to the many companies that responded to the recession by cutting prices, Coach saw the new consumer mindset as an opportunity for innovation and renewal.</p>

            <p>
            A further example of this strategy was supermarket Tesco’s response to consumers’ growing concerns about the environment. With that in mind, Tesco, one of the world’s top five retailers, introduced its Greener Living program, which demonstrates the company’s commitment to protecting the environment by involving consumers in ways that produce tangible results. For example, Tesco customers can accumulate points for such activities as reusing bags, recycling cans and printer cartridges, and buying home-insulation materials. Like points earned on regular purchases, these green points can be redeemed for cash. Tesco has not abandoned its traditional retail offering but augmented its business with these innovations, thereby infusing its value proposition with a green streak
            </p>
            <p>
            A more radical strategy is ‘combine and transcend’. This entails combining aspects of the product’s existing value proposition with attributes addressing changes arising from a trend, to create a novel experience – one that may land the company in an entirely new market space. At first glance, spending resources to incorporate elements of a seemingly irrelevant trend into one’s core offerings sounds like it’s hardly worthwhile. But consider Nike’s move to integrate the digital revolution into its reputation for high-performance athletic footwear. In 2006, they teamed up with technology company Apple to launch Nike+, a digital sports kit comprising a sensor that attaches to the running shoe and a wireless receiver that connects to the user’s iPod. By combining Nike’s original value proposition for amateur athletes with one for digital consumers, the Nike+ sports kit and web interface moved the company from a focus on athletic apparel to a new plane of engagement with its customers.
            </p>
           <p>
           A third approach, known as ‘counteract and reaffirm’, involves developing products or services that stress the values traditionally associated with the category in ways that allow consumers to oppose – or at least temporarily escape from – the aspects of trends they view as undesirable. A product that accomplished this is the ME2, a video game created by Canada’s iToys. By reaffirming the toy category’s association with physical play, the ME2 counteracted some of the widely perceived negative impacts of digital gaming devices. Like other handheld games, the device featured a host of exciting interactive games, a full-color LCD screen, and advanced 3D graphics. What set it apart was that it incorporated the traditional physical component of children’s play: it contained a pedometer, which tracked and awarded points for physical activity (walking, running, biking, skateboarding, climbing stairs). The child could use the points to enhance various virtual skills needed for the video game. The ME2, introduced in mid-2008, catered to kids’ huge desire to play video games while countering the negatives, such as associations with lack of exercise and obesity.
           </p>
        <p>
        Once you have gained perspective on how trend-related changes in consumer opinions and behaviors impact on your category, you can determine which of our three innovation strategies to pursue. When your category’s basic value proposition continues to be meaningful for consumers influenced by the trend, the infuse-and-augment strategy will allow you to reinvigorate the category. If analysis reveals an increasing disparity between your category and consumers’ new focus, your innovations need to transcend the category to integrate the two worlds. Finally, if aspects of the category clash with undesired outcomes of a trend, such as associations with unhealthy lifestyles, there is an opportunity to counteract those changes by reaffirming the core values of your category
        </p>
        <p>
        Trends – technological, economic, environmental, social, or political – that affect how people perceive the world around them and shape what they expect from products and services present firms with unique opportunities for growth
        </p>
      
    </div>




    </div>
  )
}
