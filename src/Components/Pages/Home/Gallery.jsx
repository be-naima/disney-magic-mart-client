
import { Swiper, SwiperSlide } from 'swiper/react';
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Gallery.css'
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
const Gallery = () => {
    
    useEffect(()=>{
        Aos.init({
            duration: 1200,
          })
      },[])
    return (
        <div className='md:w-9/12 md:mx-auto mx-0'>
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r mt-44 from-blue-600 via-green-500 to-indigo-400 text-center ">Photo Gallery</h1>
            <div className="container" data-aos="fade-down">
            
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                >
                    <SwiperSlide>
                        <img src="https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/412343248467-4?fmt=webp&qlt=70&wid=652&hei=652&defaultImage=no-image-image_uk"  alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/412303968855-1?fmt=webp&qlt=70&wid=652&hei=652&defaultImage=no-image-image_uk"  alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/460011771786-1?fmt=webp&qlt=70&wid=652&hei=652&defaultImage=no-image-image_uk" alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/460062469328-1?fmt=webp&qlt=70&wid=652&hei=652&defaultImage=no-image-image_uk" alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/412303617647-2?fmt=webp&qlt=70&wid=652&hei=652&defaultImage=no-image-image_uk" alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/460011772363-3?fmt=webp&qlt=70&wid=652&hei=652&defaultImage=no-image-image_uk" alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/461019946152-5?fmt=webp&qlt=70&wid=652&hei=652&defaultImage=no-image-image_uk" alt="slide_image" />
                    </SwiperSlide>

                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <ion-icon name="arrow-back-outline"></ion-icon>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default Gallery;