
import { GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProviders/AuthProvider";

const Login = () => {
    const { googleSignIn, logIn } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
   
    
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        form.reset()
        setError('')
        logIn(email, password)
            .then(result => {
                const logged = result.user;
                if(logged){
                    Swal.fire({
                        title: 'You Have Successfully Logged In',
                        text: '',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    
                }

                navigate(from, { replace: true })

            })
            .catch(error => {
                if (error.message === 'Firebase: Error (auth/wrong-password).')
                    setError('Password is wrong')

                setError(error.message)
            })
    }
    const handleGoogle = () => {
        googleSignIn(googleProvider)
            .then((result) => {

                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                const user = result.user;
                if(user){
                    Swal.fire({
                        title: 'You Have Successfully Logged In',
                        text: '',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    
                }

                navigate(from, { replace: true })
                //console.log(user);

            }).catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                setError(error.message)
                const email = error.customData.email;

                const credential = GoogleAuthProvider.credentialFromError(error);
                setError(errorMessage)


            });
    }
    return (
        <div className="accounts_background">

            <Helmet>
                <title>DisneyMagicMart | Login</title>
            </Helmet>
            <img src="loginmicky.png" className="w-96 mx-auto relative bottom-16 " alt="" />
            <div className="card  w-full max-w-lg shadow-2xl bg-base-100 mx-auto relative bottom-52 accounts_background_form">
                <h1 className="text-5xl  flex justify-center text-center font-bold mt-14 text-purple-900">Login<span className="text-pink-400"> Now!</span></h1>

                <div className="card-body ">
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-violet-950 font-bold">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" required name="email" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-violet-950 font-bold">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required name="password" />

                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn button_design border-0 text-violet-950 font-bold">Login</button>
                            <p className="text-red-600">{error}</p>



                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogle} type="submit" className="btn button_design border-0 text-violet-950 font-bold"><FcGoogle className="me-4 text-3xl font-bold"></FcGoogle> Login with Google</button>
                    <a className=" mt-3 ms-2 mb-16 text-violet-950 font-bold">Don't Have an Accout? <Link to="/register" className="text-pink-700">Register Now</Link> </a>
                </div>
            </div>
        </div>


    );
};

export default Login;