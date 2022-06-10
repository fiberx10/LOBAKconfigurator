
import React, { useState , useEffect } from "react"
import Size from "./components/Size";
import Model from "./components/Model";
import Softness from "./components/Softness";
// context 
import {SizeContext , SoftnessContext} from "./context"

// models
import {model_big1, model_big2 ,model_med1 ,model_med2 , model_med3 , model_med4 , model_sm1 } from "./models"

// softness 
import SOFT_B from "./softness/B.png" ;
import SOFT_B_gray from "./softness/B_gray.png" ; 

import SOFT_R from "./softness/R.png" ;
import SOFT_R_gray from "./softness/R_gray.png" ; 

import SOFT_BC from "./softness/BC.png" ;
import SOFT_BC_gray from "./softness/BC_gray.png" ; 


import SOFT_RB from "./softness/RB.png" ;
import SOFT_RB_gray from "./softness/RB_gray.png" ; 

import SOFT_RC from "./softness/RC.png" ;
import SOFT_RC_gray from "./softness/RC_gray.png" ; 



function App() {
  // states
  const [size, setSize] = useState(0);
  const [softness, setSoftness] = useState(0);

const Schema = [
  {
    data : [
      {
        softness : [
      
          {
            imgsrc  : SOFT_B , 
            title  : "soft side"
          } , 
          {
            imgsrc  : SOFT_R , 
            title  : "firm side"
          } 
          , 
        ]  , 
        model : model_big1 ,
      } ,
      {
        softness : [
      
            {
            imgsrc  : SOFT_RB , 
            title  : "soft & firm"
          } , 
          , 
         
        ]  , 
        model : model_big2 ,
      } ,

    ]
  } ,
  {
    data : [
      {
        softness : [
      
         
          {
            imgsrc  : SOFT_RC , 
            title  : "firmer"
          } 
          , 
        ]  , 
        model : model_med1 ,
      } ,
      {
        softness : [
      
          {
            imgsrc  : SOFT_RB, 
            title  : "soft & firm"
          } , 
        ]  , 
        model : model_med2 ,
      } ,
      {
        softness : [
      
          {
            imgsrc  : SOFT_BC , 
            title  : "softer"
          } , 
      

        ]  , 
        model : model_med3 ,
      } ,
      {
        softness : [
      
          
          {
            imgsrc  : SOFT_RB, 
            title  : "soft & firm"
          } , 
         
        ]  , 
        model : model_med4 ,
      } ,
    ]
  } ,
  {
    data : [
      {
        softness : [
      
          {
            imgsrc  : SOFT_BC , 
            title  : "softer"
          } , 
          {
            imgsrc  : SOFT_RC, 
            title  : "firmer"
          } 
          , 
        ]  , 
        model : model_sm1 ,
      } ,
 

    ]
  } ,
]


useEffect(() =>{
  console.log("the size is : " +  size) ; 
  console.log("the softness is : " +  softness) ; 

  //console.log("models : " + Schema[size].data[softness].model)
}, [size , softness])

  return (
  <SizeContext.Provider value={{size , setSize}}>
    <SoftnessContext.Provider value={{softness , setSoftness}}>
    <div className="w-screen h-screen grid place-items-start ">
      <div className="lg:w-[900px] w-screen  mx-auto">
        <Size  size={size} />
        <Model models={Schema[size].data[softness].model} />
        <Softness data={Schema[size].data[softness].softness} maxsoftness={Schema[size].data.length} />
      </div>
    </div>
      </SoftnessContext.Provider>
  </SizeContext.Provider>

  );
}

export default App;
