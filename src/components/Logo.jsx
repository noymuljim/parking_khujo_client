import pl from "../assets/plogo.png"
const Logo = () => {
    return (
        <div className="flex justify-end items-center">
            <h2 className="text-3xl font-bold mr-2 bg-gradient-to-r from-[#FACC15] via-[#EAB308] to-[#10B981] bg-clip-text text-transparent">
                Parking Khujo
            </h2>
            <img className="h-[50px] w-[50px]" src={pl}></img>
        </div>
    );
};

export default Logo;