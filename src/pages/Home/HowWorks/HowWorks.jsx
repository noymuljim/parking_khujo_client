import { FaLocationDot, FaSquareParking } from "react-icons/fa6";
import { IoWallet } from "react-icons/io5";
import { RiReservedFill } from "react-icons/ri";
import img from "../../../assets/thumb.jpg"
import { HiArrowRight } from "react-icons/hi";

const HowWorks = () => {
    return (
        <div>
            <div className="text-center py-20">
                <h2 className="text-5xl font-bold text-black">How it <span className="text-blue-500">works?</span></h2>
                <p className="mt-4">Simple, Fast, & <span className="text-blue-500">Stress Free!</span></p>
            </div>



            <div className="bg-[#1E1D38]">
                <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10 items-center p-5">

                    <div className="md:flex-1">
                        <div className="flex-col justify-center items-center space-y-4">

                            <div className="flex gap-4 p-4 items-center bg-white rounded-2xl">
                                <div className="bg-blue-300 p-5 rounded-3xl">
                                    <FaLocationDot />
                                </div>
                                <div>
                                    <h1 className="font-bold">Location</h1>
                                    <p>Enter Location & Find Available Parking Spots.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 items-center bg-white rounded-2xl">
                                <div className="bg-blue-300 p-5 rounded-3xl">
                                    <IoWallet />

                                </div>
                                <div>
                                    <h1 className="font-bold">Pay</h1>
                                    <p>Pay Securely & Get a QR Code for Instant Access.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 items-center bg-white rounded-2xl">
                                <div className="bg-blue-300 p-5 rounded-3xl">
                                    <RiReservedFill />

                                </div>
                                <div>
                                    <h1 className="font-bold">Reserve</h1>
                                    <p>Select & Reserve Your Spot in Seconds</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 items-center bg-white rounded-2xl">
                                <div className="bg-blue-300 p-5 rounded-3xl">
                                    <FaSquareParking />

                                </div>
                                <div>
                                    <h1 className="font-bold">Park</h1>
                                    <p>Park & Enjoy Your Day – No More Wasted Time!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 relative overflow-hidden">
                        <img
                            className="hidden md:block w-full h-full object-cover"
                            src={img}
                        />

                      
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1D38] via-[#1E1D38]/10 to-transparent"></div>

                        <div className="absolute bottom-8 left-30 z-20">
                            <button className="group flex items-center gap-3 rounded-full bg-[#2e9bfa]  p-2 pl-6 text-white font-semibold  transition-all duration-300 hover:-translate-y-1">
                                <span>Find your nearest parking space</span>

                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:translate-x-1">
                                    <HiArrowRight className="text-[#0F4C81] text-lg" />
                                </span>
                            </button>
                        </div>



                     

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowWorks;