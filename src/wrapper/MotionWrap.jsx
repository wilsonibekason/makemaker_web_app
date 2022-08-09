// import React from "react";
// import { motion } from "framer-motion/dist/es";

// const MotionWrap = (Component, classNames) =>
//   function HOC() {
//     return (
//       <motion.div
//         whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
//         transition={{ duration: 0.5 }}
//         className={`${classNames} app__flex`}
//       >
//         <Component />
//       </motion.div>
//     );
//   };
// function Text() {
//     const [flip, set] = useState(false)
//     const props = useSpring({
//       to: { opacity: 1 },
//       from: { opacity: 0 },
//       reset: true,
//       reverse: flip,
//       delay: 200,
//       config: config.molasses,
//       onRest: () => set(!flip),
//     })

//     return <animated.h1 style={props}>hello</animated.h1>
//   }

// export default MotionWrap;

import React from "react";
import { useSpring, animated } from "react-spring";

const MotionWrap = (Component, classNames) =>
  function HOC() {
    const props = useSpring({});

    const { o, xyz, color } = useSpring({
      from: { o: 0, xyz: [0, 0, 0], color: "red" },
      o: 1,
      xyz: [10, 20, 5],
      color: "green",
    });
    return (
      <animated.div
        style={{
          transform: xyz.to((x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`),
          opacity: [0, 0, 1],
          transition: "opacity 0.5s ease-in-out",
        }}
        className={`${classNames}`}
      >
        <Component />
      </animated.div>
    );
  };

export default MotionWrap;
