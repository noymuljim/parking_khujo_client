import {
    FaMoneyBillWave,
    FaMapMarkerAlt,
    FaParking,
    FaShieldAlt,
} from "react-icons/fa";

const BecomePartner = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-100 via-white to-white py-20">

            {/* Background Blur */}
            <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-blue-300/100 blur-3xl"></div>
            <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-sky-300/30 blur-3xl"></div>

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

                {/* CTA */}
             

            </div>
        </section>
    );
};

export default BecomePartner;