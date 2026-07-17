

import Banner from "../Banner/Banner";
import MotionText from "../Motion/MotionText";

const Home = () => {
  return (
    <>
      <Banner />
    <MotionText></MotionText>
      {/* Other Sections */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold">
            Parking Near You
          </h1>

        </div>
      </section>
    </>
  );
};

export default Home;