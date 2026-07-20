import { HiArrowRight } from "react-icons/hi";
import heroVideo from "../../../assets/heroanim.mp4";
import { NavLink } from "react-router";
const Banner = () => {

  return (
    <div className="relative h-screen">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-around items-center text-center z-20">
        <div>
          <h1 className="font-hero text-9xl font-bold text-white">
            Find. Park. Go.
          </h1>

          <p className="mt-6 text-sm text-[#CBD5E1]">
            Never Waste Time Looking for Parking Again!
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-6">

            <div className="flex items-center gap-2">
              <span className="text-[#10B981] text-sm">●</span>
              <p className="text-xl text-white">Real-Time Parking Availability</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#10B981] text-sm">●</span>
              <p className="text-xl text-white">Instant Booking</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#10B981] text-sm">●</span>
              <p className="text-xl text-white">Hassle-Free Parking</p>
            </div>

          </div>
        </div>

        <div>
          <NavLink to='/becomePartner' 
          className='group flex items-center gap-3 rounded-full bg-primary px-2 py-2 pl-6 text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'><span>Become a Parking Partner</span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:translate-x-1">
              <HiArrowRight className="text-[#0F4C81] text-lg" />
            </span> </NavLink>


        </div>

      </div>

    </div>

  );

};

export default Banner;