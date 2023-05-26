
import Swal from 'sweetalert2'
import { useLoaderData } from "react-router-dom";

const UpdateToy = () => {
   
    const toyInfo = useLoaderData()
    const {toyName,price,quantity,sub_catagory,img,rating,seller,_id,status,description} = toyInfo
   
    const hanndleUpdateToy = event =>{
        event.preventDefault();
        const form = event.target;  
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
       

        const updatedToy = {
            
            price:price,
            quantity:quantity,
            description:description
            
           
        }
        fetch(`https://disney-magic-mart-server.vercel.app/toys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    .then((result) => {
                        if (result.value) {
                          
                          window.location.href =("/mytoys"); 
                        }
                      });
                    
                }
                else{
                    Swal.fire({
                        title: '',
                        text: 'You have not updated any data',
                        icon: 'question',
                        confirmButtonText: 'Cool'
                    })
                    .then((result) => {
                        if (result.value) {
                          
                          window.location.href =("/mytoys"); 
                        }
                      });

                }
            })

        //console.log(product);
       // console.log(name,email,price,quantity,rating,url,description,checkedCatagory);
        
        }
    return (
        <div>
            <div className="md:w-9/12 md:mx-auto card shadow-2xl bg-base-100 mt-20 mb-20">
                <form onSubmit={hanndleUpdateToy}>
                    <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-6 ">
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price (£)</span>
                            </label>
                            <input type="number" placeholder="Price" defaultValue={price} className="input input-bordered" name="price" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" placeholder="Available Quantity" defaultValue={quantity} className="input input-bordered" name="quantity" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Description</span>
                            </label>
                            <textarea rows={4}
                                cols={100} placeholder="Type here..." defaultValue={description} className="border-2 rounded-lg p-4" name="description" required />
                        </div>
                        
                    </div>
                    
                    
                    <div className="form-control  mt-6">
                        <button type="submit" className="btn btn-primary btn-block button_design text-fuchsia-950 font-bold border-0 ">Update Toy</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;