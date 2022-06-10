import React from "react";
import { SoftnessContext } from "../context";





const Softness = (props) => {
    const { softness, setSoftness } = React.useContext(SoftnessContext);
    return (
        <div >



            <div className="flex w-[80%] lg:w-[50%] mx-auto">
                <div className="w-[calc(100%/5)] grid place-items-center">
                    {
                        props.maxsoftness !== 1 ? (<div onClick={() => {
                            (softness - 1 >= 0) ? setSoftness(softness - 1) : setSoftness((props.maxsoftness - 1))
                        }} className="cursor-pointer  w-[40px] rounded-full h-[25px] text-center  text-slate-600 font-arrow font-bold text-2xl">{"<"}</div>
                        ) : (<></>)
                    }

                </div>
                <div className="w-[calc(100%)] grid place-items-end">
                    <div className="w-[100%] h-[100px] flex mx-auto place-content-center">
                        {
                            props.data.map((s) => {
                                return (
                                    <div className="h-[100px]  px-3">
                                        <img src={s.imgsrc} className="h-[60px]">
                                        </img>
                                        <h1 className="w-full text-slate-400">
                                            {
                                                s.title
                                            }
                                        </h1>
                                    </div>
                                )
                            })
                        }
                        <div className="">

                        </div>
                    </div>


                </div>
                <div className="w-[calc(100%/5)] grid place-items-center">
                    {
                        props.maxsoftness !== 1 ? (
                            <div onClick={() => {
                                (softness + 1 <= (props.maxsoftness - 1)) ? setSoftness(softness + 1) : setSoftness(0)
                            }} className="cursor-pointer  w-[40px] rounded-full text-center text-slate-600 h-[25px] font-arrow font-bold text-2xl">{">"}</div>

                        ) : (<></>)}
                </div>
            </div>
        </div>
    )
}



export default Softness; 