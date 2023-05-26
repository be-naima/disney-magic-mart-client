import { Rating } from "@smastrom/react-rating";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Review = () => {
    useEffect(() => {
        Aos.init({
            duration: 1200,
        })
    }, [])

    return (

        <div className='md:w-9/12 md:mx-auto mx-9'>

            <h1 className="text-4xl md:text-5xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r mt-36 mb-20 from-blue-600 via-green-500 to-indigo-400 text-center ">Product Review</h1>

            <div className="grid md:grid-cols-3 grid-cols-1" >
            <div className="card card-compact w-80 h-96 bg-base-100 shadow-xl md:mb-0 mb-10" data-aos="fade-right">
            <figure><img src="https://img.freepik.com/free-vector/winter-background-with-pastel-color-brushes-leaves_220290-42.jpg" className="w-96 h-96" alt="Shoes" /></figure>
                    <div className="avatar ">
                        <div className="w-20 rounded-full mx-auto relative bottom-12 ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlSsM_zWNlyk48PDkksBkB-OkK988cUMEME0f1jTmblGuKAwMSNc2ujrDXjz_pHiZZX5E&usqp=CAU" className="" />
                        </div>
                    </div>
                    <div className="card-body relative bottom-10">

                        <h2 className="card-title">Alena Mirza</h2>
                        <p>The toy I purchased exceeded my expectations! It was well-made, durable, and provided endless hours of fun for my child. Highly recommended!❤️❤️</p>

                    </div>
                    <footer className="footer footer-center p-4 bg-base-200 text-base-content">
                        <div>
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={3.6}

                                readOnly
                            />
                        </div>
                    </footer>
                </div>
            <div className="card card-compact w-80 h-96 bg-base-100 shadow-xl md:mb-0 mb-10" data-aos="fade-right">
            <figure><img src="https://img.freepik.com/free-vector/winter-background-with-pastel-color-brushes-leaves_220290-42.jpg" className="w-96 h-96" alt="Shoes" /></figure>
                    <div className="avatar ">
                        <div className="w-20 rounded-full mx-auto relative bottom-12 ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://img.freepik.com/free-photo/time-manage-business-portrait-confident-ready-good-looking-redhead-female-entrepreneur-with-freckles-standing-warm-stylish-sweater-holding-hands-crossed-chest-assured-pose-smiling_1258-80986.jpg?t=st=1684597168~exp=1684597768~hmac=32322d75eb266b7654383b68d192eaa657ab5a2a4127362550e5e9f7a91991c7" className="" />
                        </div>
                    </div>
                    <div className="card-body relative bottom-10">

                        <h2 className="card-title">Nitu Rity</h2>
                        <p>I bought a soft toy.This toy is a true gem! It's well-designed, durable, and provides endless entertainment. Highly recommended for kids !👍❤️</p>

                    </div>
                    <footer className="footer footer-center p-4 bg-base-200 text-base-content">
                        <div>
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={4.1}

                                readOnly
                            />
                        </div>
                    </footer>
                </div>
            <div className="card card-compact w-80 h-96 bg-base-100 shadow-xl md:mb-0 mb-10" data-aos="fade-right">
            <figure><img src="https://img.freepik.com/free-vector/winter-background-with-pastel-color-brushes-leaves_220290-42.jpg" className="w-96 h-96" alt="Shoes" /></figure>
                    <div className="avatar ">
                        <div className="w-20 rounded-full mx-auto relative bottom-12 ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://img.freepik.com/premium-photo/spring-beauty-young-beautiful-stylish-female-model-posing-against-pink-background-cross-arms_1258-88398.jpg?w=2000" className="" />
                        </div>
                    </div>
                    <div className="card-body relative bottom-10">

                        <h2 className="card-title">Ridi Nupur</h2>
                        <p>This Disney toy is pure magic! The characters instantly bring joy to any child. With its high-quality craftsmanship, it's a must-have for Disney fans of all ages!🔥🔥</p>

                    </div>
                    <footer className="footer footer-center p-4 bg-base-200 text-base-content">
                        <div>
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={4.8}

                                readOnly
                            />
                        </div>
                    </footer>
                </div>




            </div>

        </div>
    );
};

export default Review;