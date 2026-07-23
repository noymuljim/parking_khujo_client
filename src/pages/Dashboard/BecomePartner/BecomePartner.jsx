import { useForm, useWatch } from "react-hook-form";
import { FaMoneyBillWave, FaMapMarkerAlt, FaParking, FaShieldAlt, FaUser } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import { useLoaderData } from "react-router";
import { FaLocationDot } from "react-icons/fa6";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const BecomePartner = () => {
    const axiosSecure = useAxiosSecure()
    const serviceCenters = useLoaderData();
    const regionsDuplicate = serviceCenters.map(c => c.region)
    const regions = [...new Set(regionsDuplicate)]


    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors }, control, } = useForm();

    const handleApplication = (data) => {
        
        axiosSecure.post('/applications', data)
            .then(res => {
                console.log('after saving applications', res.data)
            })

            toast.success('')
    }

    const riderRegion = useWatch({ control, name: 'region' })
    const districtsByRegion = (region) => {
        const regionDistricts = serviceCenters.filter(c => c.region === region);
        const districts = regionDistricts.map(d => d.district);
        return districts;
    }
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-100 via-white to-white py-20">

            <div>
                {/* Background Blur */}
                <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-blue-300/100 blur-3xl"></div>

                <div className="relative max-w-7xl mx-auto px-6">

                    {/* Hero */}
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h1 className="text-5xl md:text-6xl font-black mt-4">
                            Turn Your Parking Space
                            <span className="text-primary"> Into Income</span>
                        </h1>

                        <p className="mt-6 text-lg text-gray-600 leading-8">
                            Join hundreds of parking owners who are earning passive income
                            by listing their parking spaces on Parking Khujo.
                        </p>
                    </div>

                    {/* Two Column */}
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Left */}
                        <div>

                            <h2 className="text-4xl text-center font-bold mb-12">
                                Why Become a Partner?
                            </h2>

                            <div className="grid sm:grid-cols-2 gap-8">

                                {/* Card */}
                                <div className="group bg-white rounded-3xl border border-transparent p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:border-primary">

                                    <FaMoneyBillWave className="mx-auto text-5xl text-primary transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" />

                                    <h3 className="mt-6 text-xl font-bold text-center">
                                        Passive Income
                                    </h3>

                                    <p className="mt-3 text-gray-500 text-center">
                                        Generate extra income from your unused parking spaces.
                                    </p>

                                </div>

                                <div className="group bg-white rounded-3xl border border-transparent p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:border-primary">

                                    <FaParking className="mx-auto text-5xl text-primary transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" />

                                    <h3 className="mt-6 text-xl font-bold text-center">
                                        Automated Booking
                                    </h3>

                                    <p className="mt-3 text-gray-500 text-center">
                                        Accept reservations without phone calls or paperwork.
                                    </p>

                                </div>

                                <div className="group bg-white rounded-3xl border border-transparent p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:border-primary">

                                    <FaMapMarkerAlt className="mx-auto text-5xl text-primary transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" />

                                    <h3 className="mt-6 text-xl font-bold text-center">
                                        Reach More Drivers
                                    </h3>

                                    <p className="mt-3 text-gray-500 text-center">
                                        Thousands of drivers can easily discover your parking.
                                    </p>

                                </div>

                                <div className="group bg-white rounded-3xl border border-transparent p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:border-primary">
                                    <FaShieldAlt className="mx-auto text-5xl text-primary transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" />
                                    <h3 className="mt-6 text-xl font-bold text-center">
                                        Secure Payments
                                    </h3>
                                    <p className="mt-3 text-gray-500 text-center">
                                        Receive safe and transparent payouts every month.
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* Right */}
                        <div >

                            <h2 className="text-4xl font-bold mb-12 text-center">
                                How It Works
                            </h2>
                            <ul className="timeline timeline-vertical">

                                {/* Step 1 */}
                                <li>
                                    <div className="timeline-start timeline-box bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl">
                                        <h3 className="font-bold text-lg text-center">Apply</h3>
                                        <p className="text-gray-500 mt-2 text-center text-sm">
                                            Submit your partner application with your parking details.
                                        </p>
                                    </div>

                                    <div className="timeline-middle w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center text-xl font-bold shadow-lg">
                                        1
                                    </div>

                                    <hr className="bg-primary" />
                                </li>

                                {/* Step 2 */}
                                <li>
                                    <hr className="bg-primary" />

                                    <div className="timeline-middle w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center text-xl font-bold shadow-lg">
                                        2
                                    </div>

                                    <div className="timeline-end timeline-box bg-white  rounded-2xl shadow-lg p-6 hover:shadow-xl ">
                                        <h3 className="font-bold text-lg text-center">Verification</h3>
                                        <p className="text-gray-500 mt-2 text-sm text-center">
                                            Our admin reviews and verifies your application.
                                        </p>
                                    </div>

                                    <hr className="bg-primary" />
                                </li>

                                {/* Step 3 */}
                                <li>
                                    <hr className="bg-primary" />

                                    <div className="timeline-start timeline-box bg-white border border-gray-100 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                                        <h3 className="font-bold text-lg text-center">Add Parking</h3>
                                        <p className="text-gray-500 text-center text-sm mt-2">
                                            List your parking spots with images, pricing and availability.
                                        </p>
                                    </div>

                                    <div className="timeline-middle w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center text-xl font-bold shadow-lg">
                                        3
                                    </div>

                                    <hr className="bg-primary" />
                                </li>

                                {/* Step 4 */}
                                <li>
                                    <hr className="bg-primary" />

                                    <div className="timeline-middle w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center text-xl font-bold shadow-lg">
                                        4
                                    </div>

                                    <div className="timeline-end timeline-box bg-white  rounded-2xl shadow-lg p-6 hover:shadow-xl ">
                                        <h3 className="font-bold text-lg text-center">Start Earning</h3>
                                        <p className="text-gray-500 mt-2 text-center text-sm">
                                            Receive bookings, manage customers and earn passive income.
                                        </p>
                                    </div>
                                </li>

                            </ul>

                        </div>

                    </div>
                </div>



            </div>

            {/* application form */}
            <form onSubmit={handleSubmit(handleApplication)}>
                <fieldset className="fieldset p-4">

                    <div className="p-10 bg-gray-100 rounded-2xl space-y-4">
                        <h1 className="text-3xl font-semibold flex"><span className="mr-4"><FaUser /></span> Personal Information</h1>
                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="flex-1">
                                {/* name */}
                                <legend className="fieldset-legend">Name</legend>
                                <input type="text" {...register('name', { required: true })}
                                    className="input w-full rounded-3xl" placeholder="Enter your name"></input>
                                {errors.name?.type === "required" &&
                                    <p className="text-red-500">you must need to enter your name</p>}
                            </div>


                            <div className="flex-1">

                                {/* email */}
                                <legend className="fieldset-legend">Email</legend>
                                <input type="email" {...register('email')}
                                    className="input w-full rounded-3xl" value={user.email} />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="flex-1">
                                {/* Phone Number */}
                                <legend className="fieldset-legend">WhatsApp</legend>
                                <input type="number" {...register('number', { required: true })}
                                    className="input w-full rounded-3xl" placeholder="enter your whatsApp number" />

                                {errors.number?.type === 'required' &&
                                    <p className='text-red-500'>Please enter number </p>}
                            </div>
                            <div className="flex-1">
                                {/* NID*/}
                                <legend className="fieldset-legend">NID</legend>
                                <input type="number" {...register('number', { required: true })}
                                    className="input w-full rounded-3xl" placeholder="enter your NID number" />

                                {errors.number?.type === 'required' &&
                                    <p className='text-red-500'>Please enter NID </p>}
                            </div>
                        </div>
                    </div>


                    <div className="p-10 bg-gray-100 rounded-2xl space-y-4 mt-8">
                        <h1 className="text-3xl font-semibold flex"><span className="mr-4"><FaLocationDot />
                        </span> Address</h1>
                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="flex-1">


                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Region</legend>
                                    <select {...register('region')}
                                        defaultValue="Pick a region" className="select w-full rounded-2xl">
                                        <option disabled={true}>Pick a region</option>
                                        {
                                            regions.map((r, index) => <option key={index} value={r}>{r}</option>
                                            )
                                        }

                                    </select>

                                </fieldset>


                            </div>


                            <div className="flex-1">

                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Districts</legend>
                                    <select {...register('district')}
                                        defaultValue="Pick a district" className="select w-full rounded-2xl">
                                        <option disabled={true}>Pick a District</option>
                                        {
                                            districtsByRegion(riderRegion).map((r, index) => <option key={index} value={r}>{r}</option>
                                            )
                                        }

                                    </select>

                                </fieldset>
                            </div>
                        </div>

                    </div>

                    {/* Terms & Declaration */}
                    <div className="p-10 bg-gray-100 rounded-2xl space-y-5 mt-8">

                        <h2 className="text-3xl font-semibold">
                            Terms & Declaration
                        </h2>

                        {/* Confirm Information */}
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                {...register("confirmInfo", { required: true })}
                                className="checkbox checkbox-primary"
                            />
                            <span className="text-sm">
                                I confirm that all the information provided is true and accurate.
                            </span>
                        </label>

                        {errors.confirmInfo && (
                            <p className="text-red-500">
                                You must confirm this declaration.
                            </p>
                        )}

                        {/* Terms */}
                        <label className="flex items-start gap-3 cursor-pointer ">
                            <input
                                type="checkbox"
                                {...register("agreeTerms", { required: true })}
                                className="checkbox checkbox-primary "
                            />

                            <span className="text-sm">
                                I agree to the <span className="text-primary font-semibold underline cursor-pointer">
                                    Parking Khujo Partner Terms & Conditions
                                </span>.
                            </span>
                        </label>

                        {errors.agreeTerms && (
                            <p className="text-red-500">
                                You must accept the terms and conditions.
                            </p>
                        )}

                    </div>
                </fieldset>
                <div className="flex justify-center ">
                    <button className="btn rounded-3xl p-6 bg-primary text-white">Submit</button>
                </div>

            </form>
        </section>

    );
};

export default BecomePartner;