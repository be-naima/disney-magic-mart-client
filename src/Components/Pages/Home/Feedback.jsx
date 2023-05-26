
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Swal from 'sweetalert2'
const Feedback = () => {
    useEffect(()=>{
        Aos.init({
            duration: 1200,
          })
      },[])
    const handlefeedback = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const feedback = form.feedback.value;
        console.log(email,feedback);
        
        const addFeedback ={
            email:email,
            feedback: feedback
        }
        fetch('https://disney-magic-mart-server.vercel.app/feedbacks',{
            method: "POST",
            headers:{
                'content-type': "application/json"
            },
            body: JSON.stringify(addFeedback)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Successfully Added!',
                    text: '',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
        form.reset();
    }
    return (
        <div className="md:w-9/12 md:mx-auto mb-20">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r mt-36 from-blue-600 via-green-500 to-indigo-400 text-center ">Feedback</h1>
            <div className="flex md:flex-row flex-col md:mt-8 mt-2  bg-base-100 drop-shadow-2xl md:py-10 py-10 rounded-xl px-10">


                <div className="md:me-20 me-0" data-aos="fade-right">
                    <div className="flex md:justify-center items-center md:flex-row flex-col mt-20">
                        <img src="feedback.png" className="md:w-80 w-52" alt="" />
                        <div className="text-center mb-10 md:text-left md:mb-0">
                            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-300 to-pink-600">Leave us a <br /> feedback!</h2>
                            <p className="md:mt-5 mt-0">Your feedback to improve our website is highly valued. Please share your suggestions freely.</p>
                        </div>
                    </div>

                </div>
                <form onSubmit={handlefeedback} className="border-2 rounded-2xl">
                    <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-fuchsia-950 font-bold">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" name="email" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-fuchsia-950 font-bold">Your Feedback</span>
                                </label>
                                <textarea rows={4}
                                    cols={30} placeholder="Type here..." className="border-2 rounded-lg p-4" name="feedback" required />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary button_design border-0 text-fuchsia-950 font-extrabold">Submit</button>
                            </div>
                        </div>
                    </form>

               
            </div>
        </div>
    );
};

export default Feedback;