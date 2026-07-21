
import { useForm } from "react-hook-form";
import loginImg from "../../../assets/log.jpg";
import logo from "../../../assets/plogo.png";
import { Link } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import SocialLogin from "../socialLogin/socialLogin";
import axios from "axios";
import { confirmPasswordReset } from "firebase/auth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
const Register = () => {
    const axiosSecure = useAxiosSecure()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser, updateUserProfile } = useAuth();


    const handleRegister = (data) => {
        // console.log('get photo from',data.photo[0])
        const profileImage = data.photo[0];




        registerUser(data.email, data.password)
            .then(result => {
                console.log(result.user);




                const formData = new FormData();
                formData.append('image', profileImage)

                // const imgAiPIurl = `https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_image_host_key}`

                const imgAiPIurl = `https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_image_host_key}`;
                axios.post(imgAiPIurl, formData)
                    .then(res => {
                        //console.log('after img upld',res.data.data.url)

                        const photoURL = res.data.data.url;

                        const userInfo = {
                            email: data.email,
                            displayName: data.displayName,
                            photoURL: photoURL
                        }
                        axiosSecure.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user stored in db')
                                }
                            })


                        const userProfile = {
                            displayName: data.name,
                            photoURL: res.data.data.url
                        }

                        updateUserProfile(userProfile)
                            .then(() => {
                                console.log('user profile updated')
                            })
                            .catch(err => {
                                confirmPasswordReset.log(err)
                            })
                    })


                toast.success('Registration successful')
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
                        {/* name */}
                        <label className="label text-white">Name</label>
                        <input type="name "{...register('name', { required: true })}
                            className="input w-full rounded-3xl" placeholder="Enter your name"></input>
                        {errors.name?.type === "required" &&
                            <p className="text-red-500">you must need to enter your name</p>}
                        {/* image */}
                        <label className="label text-white">Photo</label>
                        {/* <input type="file" className="file-input" /> */}
                        {/* Daisy--> file input */}
                        <input type="file" {...register('photo', { required: true })}
                            className="file-input w-full rounded-3xl" placeholder="Upload your photo" />

                        {errors.name?.type === 'required' &&
                            <p className='text-red-500'>Photo is required</p>}


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
                        {
                            errors.password?.type === 'pattern' &&
                            <p className="text-red-500">must have 1 uppercase letter 1 lowercase letter
                                1 number 1 special</p>
                        }

                        <button className="btn bg-primary hover:bg-secondary  rounded-3xl text-white my-4 ">Register Now</button>
                        <SocialLogin></SocialLogin>
                        <p className="text-center text-white  font-bold">Already have an account?
                            <Link to="/login" state={location.state}
                                className='ml-2 text-green-500 underline'>Login</Link></p>


                    </fieldset>
                </div>
            </form>
        </div>
    );
};

export default Register;