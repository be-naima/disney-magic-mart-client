import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";
import { FaUserCircle, FaGrinStars } from 'react-icons/fa';
import { BiCategoryAlt, BiDetail } from 'react-icons/bi';
import { GiTwoCoins } from 'react-icons/gi';
import { MdAttachEmail } from 'react-icons/md';
import { RiShoppingBasketFill } from 'react-icons/ri';
import { Helmet } from "react-helmet";


const ToyDetail = () => {
    const toy_detail = useLoaderData();
    const { toyName, seller, sub_catagory, price, rating, quantity, img, description, emai } = toy_detail
    return (
        <div className="accounts_background">
            <Helmet>
                <title>DisneyMagicMart | {toyName}</title>
            </Helmet>
            <div className="md:w-9/12 md:mx-auto mx-0 md:mt-10 bg-white ">
                <div className="shadow-2xl pt-16 ps-16 pe-16 ">
                    <h1 className="text-4xl pb-10  text-center  font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-200  to-blue-800" >{toyName}</h1>
                    <div className="hero mb-20 ">

                        <div className="hero-content flex-col lg:flex-row  ">
                            <img src={img} className="md:w-96  rounded-lg shadow-xl mb-10" />
                            <div className="md:ms-4 ms-0">

                                <div className="font-bold flex items-center mb-2 text-purple-800"><FaUserCircle className="text-xl" /><p className="ms-1">Seller : <span className="text-black">{seller}</span></p></div>
                                <div className="font-bold flex items-center mb-2 text-purple-800"><MdAttachEmail className="text-xl" /><p className="ms-1">Email : <span className="text-black">{emai}</span></p></div>
                                <div className="font-bold flex items-center mb-2 text-purple-800"><BiCategoryAlt className="text-xl" /><p className="ms-1">Sub-Category : <span className="text-black">{sub_catagory}</span></p></div>
                                <div className="font-bold flex items-center mb-2 text-purple-800"><GiTwoCoins className="text-xl" /><p className="ms-1">Price : <span className="text-black">£ {price}</span></p></div>

                                <div className="font-bold flex items-center mb-2 text-purple-800"><RiShoppingBasketFill className="text-xl" /><p className="ms-1">Quantuty : <span className="text-black">{quantity}</span></p></div>
                                <div className="font-bold flex items-center  mb-2 text-purple-800"><BiDetail className="text-xl" /><p className="ms-1">Product Detail : </p></div><span className="text-black font-bold mb-2">{description}</span>
                                <div className="flex mb-10"><div className="font-bold flex items-center mb-2 mt-2 text-purple-800"><FaGrinStars className="text-xl" /><p className="ms-1 me-2">Rating : <span className="text-black"></span></p></div>
                                    <Rating
                                        style={{ maxWidth: 120 }}
                                        value={rating}
                                        readOnly
                                    /></div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ToyDetail;