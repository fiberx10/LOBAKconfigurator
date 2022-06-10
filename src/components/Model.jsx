import React, { useEffect, useContext } from "react";
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { SizeContext, SoftnessContext } from "../context";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Loading = ()=>{
    return(
        <div className="w-full h-full bg-red text-white">
                    Loading .......
        </div>
    )
}
const Model = (props) => {
    const { size, setSize } = useContext(SizeContext);
    return (
        <div className=" bg-white grid place-items-center py-7 pt-5 " >
            <div className="lg:w-[300px] h-[180px] w-full grid relative place-items-center">
                <Swiper
                    modules={[Navigation, Pagination, Keyboard, Scrollbar, A11y]}
                    spaceBetween={0}
                    Keyboard={true}
                    loop={true}
                    slidesPerView={1}
                    onSlideChange={(swiper) => setSize(swiper.realIndex)}
                    className="max-w-full h-[180px] z-0 relative "
                    style={{ zIndex: 99999999 }}
                >
                    <SwiperSlide className="min-h-full min-w-full opacity-0">aaaaa</SwiperSlide>
                    <SwiperSlide className="min-h-full min-w-full opacity-0">aaa</SwiperSlide>
                    <SwiperSlide className="min-h-full min-w-full opacity-0">a</SwiperSlide>


                </Swiper>

                <main style={{ zIndex: 0 }} className="lg:w-[300px] w-screen h-[180px] z-50 grid place-items-center absolute" >
                    {
                        props.models.map((m) => {
                            return (
                                <React.Suspense fallback={Loading}>
                                     <div className={"w-[300px] h-[300px] absolute grid place-content-center place-items-center"}  style={{ zIndex: m.index }}>
                                    <img className="w-[290px] h-[265px]  " src={m.model} alt="model" />
                                </div>
                                </React.Suspense>
                               

                            )
                        })
                    }


                </main>
            </div>
        </div>
    )
}



export default Model; 