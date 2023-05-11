
import style from "./style.module.css"
import Navbar  from "./navbar"
import Link from "next/link"



export default function Home(){

    const navBar=[{
        title:"IELTS READING",
        items:[
             "1.Reading Exercise",
            "2.Reading Exams",
            "3.Reading RESOURCES"
        ],
        link:"#"
    },{
        title:"IELTS WRITING",
        items:[
             "1.writing Exercise",
            "2.writing Exams",
            "3.writing RESOURCES"
        ],
        link:"#"
    }
    ,{
        title:"IELTS LISTENING",
        items:[
             "1.listening Exercise",
            "2.listening Exams",
            "3.listening RESOURCES"
        ],
        link:"#"
    }

    ,{
        title:"IELTS SPEAKING",
        items:[
             "1.speaking Exercise",
            "2.speaking Exams",
            "3.speaking RESOURCES"
        ],
        link:"#"
    }
    ,{
        title:"VOCABULARY",
        items:[
             "1.Exercise",
            "2.Exams",
            "3.RESOURCES"
        ],
        link:"/vocabulary/"
    }
    ,{
        title:"OTHER RESOURE",
        items:[
             "1. Exercise",
            "2. Exams",
            "3. RESOURCES"
        ],
        link:"#"
    }
]

    return(
        <>
        <div className={style.homeContainer}>
            <div className={style.heading}>
                <Link href="/"  style={{
                    textDecoration:"none",
                    color:"black"
                }}  >
                <h1>IELTS Practice AI Mentor's</h1>
                <p>Experimental Project For My Own Self</p>
                </Link>
            </div>
            <div className={style.navbar}>
                <ul>
                    {navBar.map((item, index) => {

                        return <Navbar item={item}/>

                    })}
           
                </ul>
            </div>
            </div>
        </>
    )


}