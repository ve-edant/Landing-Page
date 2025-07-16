import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const SectionBlock = ({ title, items }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="relative py-8">
      <h2
        className={`text-3xl font-bold sticky top-0 z-20 bg-white py-4 ${
          inView ? "border-b border-black" : ""
        }`}
      >
        {title}
      </h2>

      <motion.div
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
        className="mt-4 space-y-2"
      >
        {inView &&
          items.map((item) => (
            <motion.div key={item} className="text-lg pl-4">
              {item}
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
};

const HomePageSection2 = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-0 py-8">
      <div className="md:mx-32 w-full">
        <p className="text-lg md:text-xl mb-4">
          We are a global creative agency that combines design expertise with
          technology and intelligence.
        </p>
      </div>

      <div className="mx-4 md:mx-48 h-[10vh] md:h-[100px] bg-yellow-100 flex items-center justify-center rounded-lg">
        <span className="text-xl font-semibold text-gray-600">
          [ Animation Here ]
        </span>
      </div>

      <div className="mt-10">
        <SectionBlock
          title="Design"
          items={[
            "UI Design",
            "UX Design",
            "UX Consultancy",
            "Design System",
            "Animation",
            "Illustrations",
          ]}
        />
        <SectionBlock
          title="Technology"
          items={[
            "Web Development",
            "Mobile Development",
            "DevOps",
            "API Integrations",
            "CMS & Headless CMS",
          ]}
        />
        <SectionBlock
          title="Marketing"
          items={[
            "SEO Strategy",
            "Performance Marketing",
            "Brand Positioning",
            "Content Marketing",
          ]}
        />
      </div>
    </section>
  );
};

export default HomePageSection2;