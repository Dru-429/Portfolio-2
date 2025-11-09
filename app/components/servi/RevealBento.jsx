import { delay, easeIn, easeInOut, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { SiNotion } from "react-icons/si";
import { BsCursorFill } from "react-icons/bs";
import Eyes from "./Eyes.jsx";
import { RiRobot3Fill } from "react-icons/ri";
import { MdEventRepeat } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { BiSolidFoodMenu } from "react-icons/bi";

export const RevealBento = () => {
  return (
    <div className="text-background ">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid w-full grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <AutomationBlock />
        <RightBlock />
        <WebBotBlock />
        <BottomBlock />
      </motion.div>
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge("col-span-4 rounded-2xl bg-secondary p-6", className)}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-6 row-span-2 lg:col-span-6 relative">
    <div className="absolute lg:right-4 lg:top-[30%] right-[15%] bottom-[10%]">
      <Eyes />
    </div>
    <h1 className=" lg:text-2xl text-xl font-bold leading-tight text-background">
      Things I can help you with:{" "}
      <span className="text-accent-foreground lg:text-lg lg:block relative hidden m lg:-bottom-20">
        Think. Design. Built. Launch. Automate.
      </span>
    </h1>
  </Block>
);

const RightBlock = () => (
  <>
    <Block
      whileHover={{
        scale: 1.1,
      }}
      transition={{ duration: 0.1, ease: easeIn }}
      className="col-span-6 lg:col-span-3 bg-accent text-accent-foreground font-semibold hover:bg-foreground hover:text-accent-foreground hover:font-bold transition-all duration-100"
    >
      <div className="text-2xl z-10 opacity-90 flex flex-col lg:flex-row gap-1 justify-center items-center text-background">
        <BiSolidFoodMenu />
        <div>Digital</div>
        <div>Desgin</div>
      </div>
    </Block>

    <Block
      whileHover={{
        scale: 1.1,
      }}
      transition={{ duration: 0.1, ease: easeIn }}
      className="text-primary-foreground bg-primary/80 col-span-6 lg:col-span-3 font-semibold hover:bg-primary hover:font-bold transition-all duration-100 "
    >
      <div
        className="text-2xl z-10 opacity-90 flex flex-col lg:flex-row gap-1 justify-center items-center"
      >
        <CgWebsite /> {"   "}
        Web Dev
      </div>
    </Block>

    <Block
      whileHover={{
        // rotate: "-2.5deg",
        scale: 1.1,
      }}
      transition={{ duration: 0.2, ease: easeIn }}
      className="col-span-12 lg:col-span-6 bg-primary/60 text-2xl text-primary-foreground opacity-90 font-semibold hover:bg-primary hover:text-primary-foreground hover:font-bold transition-all duration-200"
    >
      <div className="flex justify-center items-center h-full text-2xl gap-2">
        <span className="text-2xl ">
          {" "}
          <SiNotion />
          {"  "}
        </span>
        <span>Notion Templates</span>
      </div>
    </Block>
  </>
);

const WebBotBlock = () => {
  // const ref = useRef();
  // const [position, setPosition] = useState({ x: 0, y: 0 })

  // const handleMouseMove = (e) => {
  //     const { clientX, clientY } = e;
  //     const { height, width, left, top } = ref.current.getBoundingClientRect();
  //     const x = clientX - (left - width / 2);
  //     const y = clientY - (top + height / 2);
  //     setPosition({ x, y });
  // };

  // const handleMouseLeave = () => {
  //     setPosition({
  //         x: 0, y: 0
  //     });
  // };
  // if (ref.current) {

  //     ref.current.addEventListener('mousemove', handleMouseMove);
  //     ref.current.addEventListener('mouseleave', handleMouseLeave);

  //     return () => {
  //         ref.current.removeEventListener('mousemove', handleMouseMove);

  //         ref.current.removeEventListener('mouseleave', handleMouseLeave);
  //     };
  // }

  // const { x, y } = position
  // console.log(x, y)

  return (
    <Block
      whileHover={{
        scale: 1.1,
      }}
      transition={{
        duration: 0.1,
        ease: easeInOut,
      }}
      className="col-span-12 flex flex-row lg:flex-col items-center gap-4 lg:col-span-3 bg-secondary text-secondary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-100 text-2xl font-semibold"
    >
      <p className=" text-2xl flex items-center justify-center w-full gap-2">
        <RiRobot3Fill /> Smart Web Bots
      </p>
    </Block>
  );
};

const BottomBlock = () => (
  <Block className="lg:hidden visible col-span-12 flex items-center bg-foreground text-2xl text-background font-semibold">
    <p className=" text-lg text-center tracking-tighter font-semibold flex items-center justify-center w-full gap-2">
      Think. Design. Built. Launch. Automate.
    </p>
  </Block>
);

const AutomationBlock = () => (
  <Block
    whileHover={{
      // rotate: "-2.5deg",
      scale: 1.05,
    }}
    transition={{ duration: 0.2, ease: easeIn }}
    className="col-span-12 lg:col-span-9 flex items-center font-semibold bg-accent hover:bg-foreground hover:font-bold text-background "
  >
    <p className="mb-3 text-2xl flex items-center justify-center w-full gap-2">
      <MdEventRepeat /> {" "} 
      Workflow & Web Automation
    </p>
  </Block>
);
