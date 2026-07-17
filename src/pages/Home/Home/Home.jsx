

import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import MotionText from "../Motion/MotionText";
import Reviews from "../Reviews/Reviews";

const reviewsPromise = fetch('/reviews.json').then(res => res.json())


const Home = () => {
  return (
    <>
      <Banner />
      <MotionText></MotionText>
      {/* Other Sections */}
      <FAQ></FAQ>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>

    </>
  );
};

export default Home;