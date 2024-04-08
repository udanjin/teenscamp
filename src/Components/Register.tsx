
import Reclogo from "../assets/reclogo.png";
import { motion } from "framer-motion";
import { SelectedPage } from "../shared/types";
import "../test.css";
import "../glitch.css";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Register({  setSelectedPage}:Props) {
  return (
    <motion.div
    className="mx-auto  items-center justify-center md:flex "
    onViewportEnter={() => setSelectedPage(SelectedPage.Register)}
  >
 <section id="register" className="">
      <h1 className="glitch font-head flex justify-center items-center text-2xl lg:text-4xl pt-36 text-white drop-shadow-2xl	">REGISTER NOW</h1>
    <div className="flex justify-center w-full items-center">
    
        <a href="http://">
        <img src={Reclogo} alt="" className="w-48 lg:w-96 drop-shadow-2xl	" />
        </a>
        
    </div>

    </section>
  </motion.div>
   
  );
}

export default Register;
