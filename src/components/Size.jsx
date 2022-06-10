import React, { useContext } from "react";
import { SizeContext, SoftnessContext } from "../context";

const Size = (props) => {

    const { size, setSize } = useContext(SizeContext);
    const { softness, setSoftness } = useContext(SoftnessContext);

    return (
        <div className="w-full h-[150px] grid place-items-center bg-white">
            <div className="w-[80%] h-full ">
                <div className="w-full h-auto grid place-items-center">
                       <h1 className="text-slate-400">Perfect Size
                           </h1> 
                </div>
                <div className="flex pt-5">
                    <div className="w-[calc(100%/5)] grid place-items-center">
                        <div onClick={() => {
                            setSoftness(0);
                             setSize(0) ;

                        }} className={(size !== 0) ? "w-[50px] rounded-full h-[50px] bg-slate-300" : "w-[50px] rounded-full h-[50px] bg-slate-600"}></div>
                    </div>
                    <div className="w-[calc(100%/5)] grid place-items-center">
                        <div onClick={() => {
                            setSoftness(0);
                            (size - 1 >= 0) ? setSize(size - 1) : setSize(2)

                        }} className="cursor-pointer  w-[40px] rounded-full h-[40px] text-center pt-2 text-slate-600 font-arrow font-bold text-2xl">{"<"}</div>
                    </div>
                    <div className="w-[calc(100%/5)] grid place-items-center overflow-hidden">
                        <div className="w-[50px] rounded-full h-[50px]  flex ">
                            <div className="w-[50%]">

                            </div>
                            <div onClick={() => {
                            setSoftness(0);
                             setSize(1) ;

                        }} className={(size !== 1) ? "w-[50%] bg-slate-300 rounded-r-full" : "w-[50%] bg-slate-600 rounded-r-full"}>

                            </div>
                        </div>
                    </div>
                    <div className="w-[calc(100%/5)] grid place-items-center">
                        <div onClick={() => {
                            setSoftness(0);
                            (size + 1 <= 2) ? setSize(size + 1) : setSize(0)

                        }} className="cursor-pointer  w-[40px] rounded-full h-[40px] text-center pt-2 text-slate-600 font-arrow font-bold text-2xl">{">"}</div>
                    </div>
                    <div className="w-[calc(100%/5)] grid place-items-center">
                        <div onClick={() => {
                            setSoftness(0);
                             setSize(2) ;

                        }} className={(size !== 2) ? "w-[25px] rounded-full h-[25px] bg-slate-300" : "w-[25px] rounded-full h-[25px] bg-slate-600"}></div>
                    </div>
                </div>


            </div>
        </div>
    )
}



export default Size; 