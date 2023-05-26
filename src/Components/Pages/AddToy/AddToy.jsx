import { useContext, useState } from "react";
import { AuthContext } from '../../AuthProviders/AuthProvider'
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet";
const AddToy = () => {
    const [catagory, setCatagory] = useState(null)
    const [error, setError] = useState('')
    const { user } = useContext(AuthContext)
    const handleCatagory = event => {
        const value = event.target.value;
        setCatagory(value)
    }
    const hanndleAddToy = event => {
        event.preventDefault();

        const form = event.target;
        const name = user?.displayName ? user.displayName : form.displayName.value;
        const email = user?.email ? user.email : form.email.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const url = form.url.value;
        const description = form.description.value;
        const toyname = form.toyname.value
        let checkedCatagory = null;
        if (catagory) {
            checkedCatagory = catagory;
        }
        else {
            setError('Please Choose a catagory!!')
            return;
        }

        const product = {
            seller: name,
            toyName: toyname,
            sub_catagory: checkedCatagory,
            price: price,
            quantity: quantity,
            img: url,
            description: description,
            rating: rating,
            emai: email

        }
        fetch('https://disney-magic-mart-server.vercel.app/toys', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Successfully Added!',
                        text: 'Successfully Added!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                
            })

        console.log(product);
        // console.log(name,email,price,quantity,rating,url,description,checkedCatagory);
        form.reset();
        setCatagory(null)
        setError('')
    }
    return (
        <div className="accounts_background">
        <div className="md:w-9/12 md:mx-auto card shadow-2xl bg-base-100 mt-20 mb-20 ">
            <h1 className="text-4xl font-bold pt-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-400 text-center pb-3">Add a Toy</h1>
            <Helmet>
                <title>DisneyMagicMart | AddToys</title>
            </Helmet>
            <form onSubmit={hanndleAddToy}>
                <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Seller's Name" defaultValue={user?.displayName} className="input input-bordered" name="name" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Seller's Email" defaultValue={user?.email} className="input input-bordered" name="email" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" placeholder="toy name" className="input input-bordered" name="toyname" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price (£)</span>
                        </label>
                        <input type="number" placeholder="Price" className="input input-bordered" name="price" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="number" placeholder="Available Quantity" className="input input-bordered" name="quantity" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" placeholder="Rating of the product" className="input input-bordered" name="rating" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Description</span>
                        </label>
                        <textarea rows={4}
                            cols={100} placeholder="Type here..." className="border-2 rounded-lg p-4" name="description" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub-catagory</span>
                        </label>
                        <div className="border-2 py-3 px-4" required>
                            <input type="checkbox" checked={catagory === 'Princess'} className="mb-4 mt-4 me-4" value={"Princess"} onChange={handleCatagory} />Princess <br />
                            <input type="checkbox" checked={catagory === 'Soft Toy'} className="mb-4 me-4" value={"Soft Toy"} onChange={handleCatagory} />Soft Toy <br />
                            <input type="checkbox" checked={catagory === 'Action'} className="me-4" value={"Action"} onChange={handleCatagory} />Action
                        </div>
                    </div>



                </div>
                <div className="form-control  grid grid-cols-1 px-8 pt-0">
                    <label className="label">
                        <span className="label-text">Url</span>
                    </label>
                    <input type="text" placeholder="product url" className="input input-bordered w-full" name="url" required />
                </div>
                <p className="ps-8 font-bold text-red-600 mt-4">{error}</p>
                <div className="form-control  mt-6">
                    <button type="submit" className="btn btn-primary btn-block button_design text-fuchsia-950 font-bold border-0">Add Toy</button>
                </div>
            </form>
        </div></div>


    );
};

export default AddToy;