import { useContext, useEffect, useState } from "react";

import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProviders/AuthProvider";
import MyToy from "./MyToy";
import { TbArrowsSort } from 'react-icons/tb';
import { Helmet } from "react-helmet";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [sortOrder, setSortOrder] = useState("");

    useEffect(() => {
      let url = `https://disney-magic-mart-server.vercel.app/toys?email=${user?.email}&sortOrder=${sortOrder}`;
  
      fetch(url)
        .then((res) => res.json())
        .then((data) => setMyToys(data));
    }, [user?.email, sortOrder]);
  
    const handleSort = (sort) => {
      setSortOrder(sort);
    };
  
    const handleDelete = id => {
        // const proceed = confirm('Are You sure you want to delete??');
        Swal.fire({
            title: 'Are you sure?',
            text: '',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'rgb(147 51 234)',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
        })


            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://disney-magic-mart-server.vercel.app/toys/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                // alert('deleted successful');
                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                );

                                const remaining = myToys.filter(mytoy => mytoy._id !== id);
                                setMyToys(remaining);
                            }
                        })
                }
            });
    }

   


    return (
        <div className="md:w-9/12 md:mx-auto my-20">
            <Helmet>
                <title>DisneyMagicMart | MyToys</title>
            </Helmet>
            <div className="dropdown me-3 md:me-0  dropdown-bottom mb-20 flex justify-end">
                <label tabIndex={0} className="btn btn-sm button_design border-0 text-fuchsia-950 font-bold"><TbArrowsSort className="me-1 text-fuchsia-950 font-bold"></TbArrowsSort> Sort By</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={()=>handleSort('desc')}><a className="text-fuchsia-950 font-bold"><span className="text-pink-700 font-bold">Price:</span> High to Low</a></li>
                    <li onClick={()=>handleSort('asc')}><a className="text-fuchsia-950 font-bold"><span className="text-pink-700 font-bold">Price:</span> Low to High</a></li>
                </ul>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full ">
                    {/* head */}
                    <thead className="">
                        <tr>

                            <th className="bg-sky-200 text-blue-800 font-bold">Toy</th>
                            <th className="bg-sky-200 text-blue-800 font-bold">Price</th>
                            <th className="bg-sky-200 text-blue-800 font-bold">Quantity</th>
                            <th className="bg-sky-200 text-blue-800 font-bold">Sub-Catagory</th>
                            <th className="bg-sky-200 text-blue-800 font-bold pe-24 md:pe-0" >Update/Delete</th>


                        </tr>
                    </thead>
                    <tbody>
                        { 
                            myToys.map(mytoy => <MyToy
                                key={mytoy._id}
                                mytoy={mytoy}
                                handleDelete={handleDelete}
                            ></MyToy>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;