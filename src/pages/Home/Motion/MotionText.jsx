import { motion } from "motion/react";

const items = [
  "🚗 Real-Time Parking",
  "📍 Find Nearby Parking",
  "⭐ Trusted by 10K+ Drivers",
  "🅿️ Instant Booking",
  "🚙 Smart Navigation",
  "🔒 Secure Parking",
];

const MotionText = () => {
  return (
    <div className="overflow-hidden bg-[#000000] py-10">
      <motion.div
        className="flex w-max"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          ease: "linear",
          duration: 12,
          repeat: Infinity,
        }}
      >



        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="mx-8 whitespace-nowrap text-xl font-semibold text-white"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MotionText;