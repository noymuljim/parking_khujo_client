
import { useForm } from "react-hook-form";
import loginImg from "../../../assets/log.jpg";
import logo from "../../../assets/plogo.png";
import { NavLink } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import SocialLogin from "../socialLogin/socialLogin";
const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser } = useAuth();


    const handleRegister = (data) => {
        registerUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error)
            })

        // console.log('get all info form data', data)
    }
    return (

        <div className="relative  w-full h-screen">
            <img className="w-full h-full object-cover"
                src={loginImg} alt="" />
            {/* dark layer */}
            <div className="absolute inset-0 bg-[#0B2545]/60"></div>

            <form onSubmit={handleSubmit(handleRegister)}
                className="absolute inset-0 flex items-center justify-center z-10">

                <div className="card w-full max-w-md rounded-3xl bg-white/10  border
                backdrop-blur-xl border-white/20 shadow-2xl">

                    <div className="flex justify-center items-center ">
                        <img className="w-15 h-15 animate-[bounce_2s_infinite]" src={logo} alt="" />
                    </div>
                    <h2 className="text-2xl font-bold text-center -mt-3 text-white">
                        Register
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
                            // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])+$/
                        })}

                            className="input w-full rounded-3xl" placeholder="Enter password" />
                        {errors.password?.type === 'required' &&
                            <p className="text-red-500">plaease enter password</p>}
                        {errors.password?.type === 'minLength' &&
                            <p className="text-red-500">pass need 6 character or more</p>}
                        {/* {
                            errors.password?.type === 'pattern' &&
                            <p className="text-red-500">must have 1 uppercase letter 1 lowercase letter
                                1 number 1 special</p>
                        } */}

                        <button className="btn btn-neutral my-4">Register Now</button>
                        <SocialLogin></SocialLogin>
                        <p className="text-center text-white">Already have an account? <NavLink to="/login" className='ml-2 text-yellow-500 underline'>Login</NavLink></p>


                    </fieldset>
                </div>
            </form>
        </div>
    );
};

export default Register;