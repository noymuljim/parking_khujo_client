

import Banner from "../Banner/Banner";
import BecomePartner from "../../Others/BecomePartner/BecomePartner";
import FAQ from "../FAQ/FAQ";
import HowWorks from "../HowWorks/HowWorks";
import MotionText from "../Motion/MotionText";
import OurServices from "../OurServices/OurServices";
import Reviews from "../Reviews/Reviews";

const reviewsPromise = fetch('/reviews.json').then(res => res.json())


const Home = () => {
  return (
    <>
      <Banner />
      <MotionText></MotionText>
      {/* Other Sections */}
      <OurServices></OurServices>
      <HowWorks></HowWorks>
      <FAQ></FAQ>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
      <BecomePartner></BecomePartner>

    </>
  );
};

export default Home;