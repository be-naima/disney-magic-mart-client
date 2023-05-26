import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '@smastrom/react-rating/style.css'
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FcSearch } from "react-icons/fc";
import { Helmet } from "react-helmet";
const AllToys = () => {
    
    const [toys, setToys] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('https://disney-magic-mart-server.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return (

        <div className="md:w-9/12 md:mx-auto my-20 ">
            <Helmet>
        <title>DisneyMagicMart | AllToys</title>
    </Helmet>
            <div className="form-control mb-14  ">
                <div className="input-group flex justify-center">
                    <input type="text" placeholder="Search…" className="input input-bordered border-pink-400" onChange={(e) => setSearch(e.target.value)} />
                    <button className="btn btn-square bg-pink-300 border-0 border-pink-400">
                        <FcSearch className="text-2xl"></FcSearch>
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full ">
                    {/* head */}
                    <thead className="">
                        <tr>

                            <th className="bg-sky-200 text-blue-800 font-bold">Toy</th>
                            <th className="bg-sky-200 text-blue-800 font-bold">Seller</th>
                            <th className="bg-sky-200 text-blue-800 font-bold">Sub-Catagory</th>
                            <th className="bg-sky-200 text-blue-800 font-bold">Price</th>
                            <th className="bg-sky-200 text-blue-800 font-bold">Quantity</th>
                            <th className="bg-sky-200 text-blue-800 font-bold " ></th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.filter(toy => {
                                return search.toLocaleLowerCase === '' ? toy : toy.toyName.toLocaleLowerCase().includes(search) || toy.toyName.includes(search)
                            }).map(toy => <tr className="font-bold" key={toy._id}>



                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-18 h-16 relative end-4 md:end-0">
                                                <img src={toy.img} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{toy.toyName}</div>
                                            <div className="text-sm "><div>
                                                <Rating
                                                    style={{ maxWidth: 80 }}
                                                    value={toy.rating}
                                                    readOnly
                                                />
                                            </div></div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {toy.seller}

                                </td>
                                <td>
                                    <p className="">{toy.sub_catagory}</p>
                                </td>
                                <td>
                                    £ {toy.price}

                                </td>

                                <td>{toy.quantity}</td>

                                <td>

                                    <Link to={`/toydetails/${toy._id}`}> <button className="btn btn-ghost md:btn-xs  hover:bg-purple-500 hover:text-white   bg-pink-300 font-bold text-fuchsia-900">View Details  <BsArrowRightCircleFill className="ms-2 "></BsArrowRightCircleFill></button></Link>

                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default AllToys;