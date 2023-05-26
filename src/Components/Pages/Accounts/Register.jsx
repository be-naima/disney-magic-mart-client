import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProviders/AuthProvider';


const Register = () => {
    const { createUser, update_profile } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const [error, setError] = useState('')

    const handleRegister = event => {

        event.preventDefault()
        const form = event.target;
        const Your_Name = form.Your_Name.value;
        const Photo_url = form.Photo_url.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm_password = form.confirm_password.value;

        setError('')
        //console.log(Your_Name, Photo_url, email, password, confirm_password);
        form.reset()

        if (password !== confirm_password) {

            setError("Password doesn't match.")
            return 0;
        }
        if (password.length < 6) {
            setError("Please give atleast 6 characters")
            return 0;
        }
        createUser(email, password)
            .then(result => {
                const logged = result.user;
                if(logged){
                    Swal.fire({
                        title: 'Successfully Created Account!',
                        text: '',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    .then((result) => {
                        if (result.value) {
                          
                            navigate(from, { replace: true })
                        }
                      });
                    
                }

                update_profile(result.user, Your_Name, Photo_url)


            })
            .catch(error => {
                setError(error.message);
            })


    }


    return (
        <div className='accounts_background'>
            <Helmet>
                <title>DisneyMagicMart | Register</title>
            </Helmet>

            <img src="loginmicky.png" className="w-96 mx-auto relative bottom-16 " alt="" />
            <div className="card  w-full md:max-w-lg max-w-sm shadow-2xl bg-base-100 mx-auto relative bottom-52 accounts_background_form">
                <h1 className="text-5xl  flex justify-center text-center font-bold mt-14 text-purple-900">Register<span className="text-pink-400"> Now!</span></h1>
                <div className="card-body ">
                    <form onSubmit={handleRegister}>
                        <div className='grid grid-cols-1 md:grid-cols-2 g-4'>
                            <div className="form-control md:me-2">
                                <label className="label">
                                    <span className="label-text text-violet-950 font-bold">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" required name="Your_Name" />
                            </div>
                            <div className="form-control md:me-2">
                                <label className="label">
                                    <span className="label-text text-violet-950 font-bold">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" required name="email" />
                            </div>
                            <div className="form-control md:me-2">
                                <label className="label">
                                    <span className="label-text text-violet-950 font-bold">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required name="password" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-violet-950 font-bold">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="confirm password" className="input input-bordered" required name="confirm_password" />

                            </div>
                        </div>
                        <div className="form-control md:me-2">
                            <label className="label">
                                <span className="label-text text-violet-950 font-bold">Photo url</span>
                            </label>
                            <input type="text" placeholder="Photo url" className="input input-bordered" required name="Photo_url" />

                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn button_design border-0 text-violet-950 font-bold">Register</button>
                            <p className="text-red-600">{error}</p>



                        </div>
                    </form>


                    <a className=" mt-3 ms-2 text-violet-950 font-bold mb-24">Already Have an Accout? <Link to="/login" className="text-pink-700">Login Now</Link> </a>
                </div>
            </div>
        </div>



    );
};

export default Register;