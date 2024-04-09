import { SelectedPage } from "../shared/types";
import { motion } from "framer-motion";
// import banner from "../assets/banner.jpg";
// import { useEffect, useState } from "react";
import "../glitch.css";

import bg from "../assets/bg.png";
import "../test.css";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  // const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  // const [glitch, setGlitch] = useState<boolean>(false);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setGlitch(true);
  //     setTimeout(() => {
  //       setGlitch(false);
  //     }, 300);
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, []);
  // console.log(setSelectedPage);
  // console.log(SelectedPage)
  return (
    <section id="home">
      <motion.div
        className="mx-auto items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
  
        <div className="pt-32 lg:pt-32 relative">
          <img src={bg} alt="" className="bg-cover" />
          {/* <h1 className="glitch font-head flex-justify">
        <span className="font-head" aria-hidden="true"> TEENS CAMP</span>
          TEENS CAMP
          <span className="font-head" aria-hidden="true"> TEENS CAMP</span>      
      </h1> */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="glitch flex justify-center text-white font-head text-[20px] pt-32 lg:text-[5rem] drop-shadow-2xl tracking-widest">
              DIVERGEN-Z
            </span>
            <span className="glitch flex justify-center text-white font-body text-[12px] lg:text-[2rem]  tracking-widest">
              GEN CHANGER
            </span>
          </div>
          {/* <img src={img} className={glitch ? 'glitch' : ''} alt="" /> */}
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
