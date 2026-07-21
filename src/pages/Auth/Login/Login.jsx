import { useForm } from "react-hook-form";
import loginImg from "../../../assets/log.jpg";
import logo from "../../../assets/plogo.png";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../socialLogin/socialLogin";
import useAuth from "../../../Hooks/useAuth";
import { toast } from "react-toastify";
const Login = () => {

    const location=useLocation();
    //console.log('in loginpage',location);
    const navigate=useNavigate();


    const { register, handleSubmit, formState: { errors } } = useForm();

    const { signInUser } = useAuth();

    const handleLogin = (data) => {



        signInUser(data.email, data.password)
            .then((res) => {
                console.log("Login Success:", res.user);
                navigate(location?.state || '/')
            })
            toast.success('Welcome 🚗')
            .catch((err) => {
                console.log(err);
               
            });


    }
    return (

        <div className="relative  w-full h-screen">
            <img className="w-full h-full object-cover"
                src={loginImg} alt="" />
            {/* dark layer */}
            <div className="absolute inset-0 bg-[#0B2545]/60"></div>

            <form onSubmit={handleSubmit(handleLogin)}
                className="absolute inset-0 flex items-center justify-center z-10">

                <div className="card w-full max-w-md rounded-3xl bg-white/10  border
                backdrop-blur-xl border-white/20 shadow-2xl">

                    <div className="flex justify-center items-center ">
                        <img className="w-15 h-15 animate-[bounce_2s_infinite]" src={logo} alt="" />
                    </div>
                    <h2 className="text-2xl font-bold text-center -mt-3 text-white">
                        Welcome Back
                    </h2>
                    {/* form data */}
                    <fieldset className="fieldset p-4">
                        {/* email */}
                        <label className="label text-white">Email</label>
                        <input type="email" {...register('email', { required: true })}
                            className="input w-full rounded-3xl" placeholder="Enter email" />

                        {errors.email?.type === 'required' &&
                            <p className='text-red-500'>Please enter email </p>}
                        {/* pass */}
                        <label className="label text-white">Password</label>
                        <input type="password" {...register('password', {
                            required: true, minLength: 6,
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
                        })}

                            className="input w-full rounded-3xl" placeholder="Enter password" />
                        {errors.password?.type === 'required' &&
                            <p className="text-red-500">plaease enter password</p>}
                        {errors.password?.type === 'minLength' &&
                            <p className="text-red-500">pass need 6 character or more</p>}
                        {
                            errors.password?.type === 'pattern' &&
                            <p className="text-red-500">must have 1 uppercase letter 1 lowercase letter
                                1 number 1 special</p>
                        }

                        <button className="btn rounded-3xl bg-primary hover:bg-secondary btn-neutral my-4">Login</button>
                        <SocialLogin></SocialLogin>

                        <p className="text-center text-white font-bold">Are you new here? 


                       <Link  to="/register"state={location.state}
                       className='ml-2 text-green-500 underline'>Register</Link>     
                         </p>


                    </fieldset>
                </div>
            </form>
        </div>
    );
};

export default Login;