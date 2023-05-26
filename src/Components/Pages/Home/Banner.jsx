import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const Banner = () => {
    
      useEffect(()=>{
        Aos.init({
            duration: 1200,
          })
      },[])
    return (
        <div className="banner " >
            <div className="flex items-center justify-center flex-col md:flex-row  md:w-9/12 md:mx-auto mx-0" >
                <div className="" data-aos="fade-right">
                    <img src="bannerPic.png" className="w-10/12 md:mx-0 mx-auto   md:mt-16 mb-0 md:pb-16 pb-0"  alt="" />
                </div>
                <div className="mx-10 md:mx-0" data-aos="fade-left">
                    <div className="">
                        <h4 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br  from-blue-300  to-blue-800 ">Disney Toys <span className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-300  to-pink-800"> The Endless Fun!</span></h4>

                    </div>
                    <div className="text-dark font-bold md:mt-8 mt-2  ">
                        <p >Unlock the world of Disney magic at your fingertips! Explore our website and let the enchantment begin</p>
                    </div>
                    <div className="  mt-6">
                        <button className="btn bg-pink-800 text-center  border-0">Explore Our Website</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;