import { Rating } from "@smastrom/react-rating";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProviders/AuthProvider";


const SubCtagoryCard = ({ catagory }) => {
    const { _id, img, rating, price, toyName,quantity } = catagory;
    const {user} = useContext(AuthContext)
    return (
        <div>
            <div className="card text-center  bg-base-100 shadow-2xl w-96 mx-auto  mb-10 rounded-xl">
                <figure><img src={img} className="w-52 ps-5 pt-3" /></figure>
                <div className="card-body">
                    <h2 className=" text-center text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-200  to-blue-800">{toyName}</h2>
                    <p>Price: £ {price}</p>
                    <p>Quantity:  {quantity}</p>
                   

                </div>
                <footer className="footer flex justify-between  md:p-4 p-4 bg-base-300  rounded-b-xl">
                    <div>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={rating}
                            readOnly
                        />
                    </div>
                    <div className="card-actions ">
                        <Link to={`/toydetails/${_id}`}><button  className="rounded-lg btn-primary text-fuchsia-950 btn-sm button_design ">View Details</button></Link>

                    </div>

                </footer>
            </div>

        </div>
    );
};

export default SubCtagoryCard;