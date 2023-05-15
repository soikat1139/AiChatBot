

import React from 'react'

import {useState,useEffect} from "react" 

const axios=require('axios');











export default  async function Test () {



const [text,setText]=useState(`<div>Fuck Off</div>`)


    
 async function store(text) {

    let fact_sheet_chair = `"""
    OVERVIEW
    - Part of a beautiful family of mid-century inspired office furniture, 
    including filing cabinets, desks, bookcases, meeting tables, and more.
    - Several options of shell color and base finishes.
    - Available with plastic back and front upholstery (SWC-100) 
    or full upholstery (SWC-110) in 10 fabric and 6 leather options.
    - Base finish options are: stainless steel, matte black, 
    gloss white, or chrome.
    - Chair is available with or without armrests.
    - Suitable for home or business settings.
    - Qualified for contract use.
    
    CONSTRUCTION
    - 5-wheel plastic coated aluminum base.
    - Pneumatic chair adjust for easy raise/lower action.
    
    DIMENSIONS
    - WIDTH 53 CM | 20.87”
    - DEPTH 51 CM | 20.08”
    - HEIGHT 80 CM | 31.50”
    - SEAT HEIGHT 44 CM | 17.32”
    - SEAT DEPTH 41 CM | 16.14”
    
    OPTIONS
    - Soft or hard-floor caster options.
    - Two choices of seat foam densities: 
     medium (1.8 lb/ft3) or high (2.8 lb/ft3)
    - Armless or 8 position PU armrests 
    
    MATERIALS
    SHELL BASE GLIDER
    - Cast Aluminum with modified nylon PA6/PA66 coating.
    - Shell thickness: 10 mm.
    SEAT
    - HD36 foam
    
    COUNTRY OF ORIGIN
    - Italy
    """`
    









    const firstWord = text.split(" ")[0];
    
    //  const prompt=`Generate a list of three made-up book titles along \ 
    //  with their authors and genres. 
    //  Provide them in JSON format with the following keys: 
    //  book_id, title, author, genre.`

    const prompt=`Your task is to help a marketing team create a 
    description for a retail website of a product based 
    on a technical fact sheet.
    
    Write a product description based on the information 
    provided in the technical specifications delimited by 
    triple backticks.
    
    The description is intended for furniture retailers, 
    so should be technical in nature and focus on the 
    materials the product is constructed from.
    
    At the end of the description, include every 7-character 
    Product ID in the technical specification.
    
    After the description, include a table that gives the 
    product's dimensions. The table should have two columns.
    In the first column include the name of the dimension. 
    In the second column include the measurements in inches only.
    
    Give the table the title 'Product Dimensions'.
    
    Format everything as HTML that can be used in a website. 
    Place the description in a <div> element.
    
    Technical specifications: '''${fact_sheet_chair}'''`







    try {
        const question=prompt;
        const url = 'http://127.0.0.1:5000/api/get_answer';
        const data = { question };
        const response = await axios.post(url, data);
        const responseString=response.data.answer;
    
    
        // console.log(responseString)
        
    const start = responseString.indexOf("{");
    const end = responseString.lastIndexOf("}") + 1;
    const jsonString = responseString.substring(start+1, end-1);
    
    console.log(jsonString)
    
    

          return jsonString;
    
      } catch (error) {
        console.log(error);
    
        return false;
        
      }
    
    }

    const text1=await store(text);

    return (
        <div>
        {text1}
        </div>

    )
}
//   return (
//     <div>
//     {text}
//     </div>
//   )
// }


