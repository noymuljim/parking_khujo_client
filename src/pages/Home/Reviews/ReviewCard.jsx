import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
    const { userName,parking_name, user_photoURL, ratings, review: tought } = review;
                     



    return (
        <div className="bg-[#CBD5E1] p-4 rounded-3xl space-y-10">
            <FaQuoteLeft></FaQuoteLeft>
            <p>{tought}</p>
            <div className="border-b-1 border-dashed border-[#0B4B57] "></div>

            <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-primary p-1 ">
                    <img className="w-full h-full rounded-full"
                        src={user_photoURL} alt="" />
                </div>
                <div>
                    <h2>{userName}</h2>
                    <h2>{parking_name}</h2>
                    <p>{ratings}</p>
                </div>
            </div>

        </div>
    );
};

export default ReviewCard;