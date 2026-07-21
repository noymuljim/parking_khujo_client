import { HiArrowRight } from "react-icons/hi";
import { FaMoneyBillWave, FaMapMarkerAlt, FaParking, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router";

const BecomePartner = () => {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="bg-[#0B2545] text-white py-24">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-16">
                    <div>
                        <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
                            Join Our Partner Network
                        </span>

                        <h1 className="text-5xl font-bold leading-tight mt-6">
                            Turn Your Empty Parking Space
                            <span className="text-[#53B7FF]"> Into Income</span>
                        </h1>

                        <p className="mt-6 text-lg text-slate-300 ">
                            List your parking space, receive bookings automatically, and earn
                            money with ParkingKhujo.
                        </p>

                        {/* customized btn */}
                        <Link to="/ApplyPartnerApplication">
                        <button className="group mt-10 flex items-center gap-4 rounded-full bg-[#53B7FF] px-2 py-2 pl-7 font-semibold">
                            <span>Apply as Partner</span>

                            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                                <HiArrowRight className="text-[#0B2545] text-xl group-hover:translate-x-1 duration-300" />
                            </span>
                        </button> 
                        </Link>

               

                    </div>

                    <img
                        src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a"
                        className="rounded-3xl shadow-2xl"
                    />
                </div>
            </section>

            {/* why */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-5xl font-bold text-center">
                        Why Become a Partner?
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">


                        <div className="group bg-white rounded-3xl p-8 text-center shadow-lg
                transition-all duration-300 ease-in-out
                hover:scale-105 hover:-translate-y-2
                hover:shadow-2xl cursor-pointer">

                            <FaMoneyBillWave
                                className="mx-auto text-5xl text-[#0F4C81]
                   transition-transform duration-300
                   group-hover:scale-125 group-hover:-rotate-6"
                            />

                            <h3 className="mt-6 text-xl font-bold">
                                Earn More
                            </h3>

                            <p className="mt-3 text-gray-500">
                                Generate passive income from unused parking spaces.
                            </p>
                        </div>




                        <div className="group bg-white rounded-3xl p-8 text-center shadow-lg
                transition-all duration-300 ease-in-out
                hover:scale-105 hover:-translate-y-2
                hover:shadow-2xl cursor-pointer">
                            <FaParking className="mx-auto text-5xl text-[#0F4C81]
                   transition-transform duration-300
                   group-hover:scale-125 group-hover:-rotate-6" />
                            <h3 className="font-bold text-xl mt-6">Smart Management</h3>
                            <p className="mt-3 text-gray-500">
                                Accept bookings automatically.
                            </p>
                        </div>

                        <div className="group bg-white rounded-3xl p-8 text-center shadow-lg
                transition-all duration-300 ease-in-out
                hover:scale-105 hover:-translate-y-2
                hover:shadow-2xl cursor-pointer">
                            <FaMapMarkerAlt className="mx-auto text-5xl text-[#0F4C81]
                   transition-transform duration-300
                   group-hover:scale-125 group-hover:-rotate-6" />
                            <h3 className="font-bold text-xl mt-6">More Customers</h3>
                            <p className="mt-3 text-gray-500">
                                Thousands of drivers can discover your parking.
                            </p>
                        </div>

                        <div className="group bg-white rounded-3xl p-8 text-center shadow-lg
                transition-all duration-300 ease-in-out
                hover:scale-105 hover:-translate-y-2
                hover:shadow-2xl cursor-pointer">
                            <FaShieldAlt className="mx-auto text-5xl text-[#0F4C81]
                   transition-transform duration-300
                   group-hover:scale-125 group-hover:-rotate-6" />
                            <h3 className="font-bold text-xl mt-6">Secure Payments</h3>
                            <p className="mt-3 text-gray-500">
                                Safe transactions and monthly payouts.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="bg-blue-100 py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-5xl font-bold text-center">
                        How It Works
                    </h2>

                    <div className="grid md:grid-cols-4 gap-10 mt-16 text-center">
                        <div>
                            <div className="w-16 h-16 rounded-full bg-[#0F4C81] text-white flex items-center justify-center mx-auto text-2xl font-bold">
                                1
                            </div>
                            <h3 className="font-bold mt-5">Apply</h3>
                            <p className="text-gray-500 mt-2">
                                Submit your application.
                            </p>
                        </div>

                        <div>
                            <div className="w-16 h-16 rounded-full bg-[#0F4C81] text-white flex items-center justify-center mx-auto text-2xl font-bold">
                                2
                            </div>
                            <h3 className="font-bold mt-5">Approval</h3>
                            <p className="text-gray-500 mt-2">
                                Our team verifies your information.
                            </p>
                        </div>

                        <div>
                            <div className="w-16 h-16 rounded-full bg-[#0F4C81] text-white flex items-center justify-center mx-auto text-2xl font-bold">
                                3
                            </div>
                            <h3 className="font-bold mt-5">List Parking</h3>
                            <p className="text-gray-500 mt-2">
                                Add your parking spaces.
                            </p>
                        </div>

                        <div>
                            <div className="w-16 h-16 rounded-full bg-[#0F4C81] text-white flex items-center justify-center mx-auto text-2xl font-bold">
                                4
                            </div>
                            <h3 className="font-bold mt-5">Start Earning</h3>
                            <p className="text-gray-500 mt-2">
                                Receive bookings and payouts.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="max-w-5xl mx-auto rounded-[40px] bg-[#0B2545] text-white text-center px-8 py-20">
                    <h2 className="text-5xl font-bold">
                        Ready to Grow With Us?
                    </h2>

                    <p className="mt-6 text-slate-300 max-w-2xl mx-auto">
                        Join ParkingKhujo today and transform your parking space into a
                        reliable source of income.
                    </p>

                    <Link to="/ApplyPartnerApplication" className="btn bg-[#53B7FF] hover:bg-[#3fa8f4] border-none rounded-full text-white mt-10 px-10"> Apply as Partner</Link>

                </div>
            </section>
        </div>
    );
};

export default BecomePartner;