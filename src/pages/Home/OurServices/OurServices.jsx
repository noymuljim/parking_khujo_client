import img1 from "../../../assets/s1.png";
import img2 from "../../../assets/s2.png";
import img3 from "../../../assets/s3.png";
import img4 from "../../../assets/s4.png";
const OurServices = () => {
    return (
        <div>
            <div className="text-center py-20">
                <h2 className="text-5xl font-bold text-black">Our <span className="text-blue-500">Services</span></h2>
                <p className="mt-4">Smart, Secure & Hassle-Free Parking Solutions Instant Booking & <span className="text-blue-500">Real-Time</span> Availability </p>
                <p className="text-blue-500">Find and reserve <span>a parking spot in seconds.</span></p>
            </div>

            <div className="flex gap-3 max-w-7xl mx-auto items-center">
                {/* left */}
                <div className="flex-1 hidden md:block">
                    <div className="overflow-hidden rounded-3xl shadow-xl">
                        <iframe
                            className="w-full aspect-video"
                            src="https://www.youtube.com/embed/WO9hnw9Nxpw?autoplay=1&mute=1&loop=1&playlist=WO9hnw9Nxpw"
                           
                            allow="autoplay; "
                
                        ></iframe>
                    </div>
                </div>
                {/* right */}
                <div className="flex-1 space-y-3">

                    <div className="flex gap-4 bg-blue-200 p-3 rounded-full">
                        <img className="h-[50px] w-[50px]" src={img1} alt="" />
                        <div>
                            <h1 className="font-bold">Smart Navigation & AI Suggestions</h1>
                            <p>Get guided directions and personalized parking recommendations.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 bg-blue-200 p-3 rounded-full">
                        <img className="h-[50px] w-[50px]" src={img2} alt="" />
                        <div>
                            <h1 className="font-bold">Smart Navigation & AI Suggestions</h1>
                            <p>Get guided directions and personalized parking recommendations.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 bg-blue-200 p-3 rounded-full">
                        <img className="h-[50px] w-[50px]" src={img3} alt="" />
                        <div>
                            <h1 className="font-bold">Smart Navigation & AI Suggestions</h1>
                            <p>Get guided directions and personalized parking recommendations.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 bg-blue-200 p-3 rounded-full">
                        <img className="h-[50px] w-[50px]" src={img4} alt="" />
                        <div>
                            <h1 className="font-bold">Smart Navigation & AI Suggestions</h1>
                            <p>Get guided directions and personalized parking recommendations.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurServices;