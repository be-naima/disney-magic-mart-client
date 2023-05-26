import { Link } from "react-router-dom";
import { GrUpdate } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
const MyToy = ({ mytoy, handleDelete }) => {
    const { toyName, price, quantity, sub_catagory, img, rating, seller, _id } = mytoy
    console.log(mytoy);
    return (

        <tr className="font-bold">

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-18 h-16 relative end-4 md:end-0">
                            <img src={img} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyName}</div>
                        <div className="text-sm "><div>
                                <Rating
                                    style={{ maxWidth: 80 }}
                                    value={rating}
                                    readOnly
                                />
                            </div></div>
                    </div>
                </div>
            </td>
            <td>
                £ {price}
                <br />
                <span ></span>
            </td>
            <td>{quantity}</td>

            <td>
                <p className="">{sub_catagory}</p>
            </td>
            
            <td>


            <Link to={`/toyupdate/${_id}`}> <button className="btn btn-ghost btn-xs hover:bg-purple-500 hover:text-white  bg-pink-300 font-bold">Update  <GrUpdate className="ms-2"></GrUpdate></button></Link>
            
            <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs bg-purple-300 hover:bg-purple-500 hover:text-white ms-4 me-1  font-bold">
                Delete <RiDeleteBin6Line className="ms-2"></RiDeleteBin6Line>
            </button>
            </td>
        </tr>

    );
};

export default MyToy;