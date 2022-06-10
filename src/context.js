import React from "react";


const SizeContext  = React.createContext({
    size: 0,
    setSize: () => {}
  });


  const SoftnessContext  = React.createContext({
    softness: 0,
    setSoftness: () => {}
  });



export {SizeContext  , SoftnessContext} ; 


