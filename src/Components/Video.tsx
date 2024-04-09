
import { SelectedPage } from "../shared/types";
import { motion } from "framer-motion";
import HText from "../shared/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Video = ({ setSelectedPage }: Props) => {
  return (
    <section id="video"
    // style={{
    //   backgroundImage:
    //     "linear-gradient(to bottom right, #434446 20%, #000000 100%)",
    // }}
    >
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Video)}
      >
        <motion.div
          className="md:mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 2 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <motion.div
            className="md:mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="grid justify-items-center text-white drop-shadow-2xl	">
              <HText>TEENS CAMP 2024.</HText>
              <p className=" text-white font-man text-center  mt-4 md:text-lg mb-6 text-xs p-2">
                Reprehenderit veniam ipsum sint id incididunt cillum laborum
                aute. Laborum ut amet magna minim est pariatur officia ipsum
                enim. Fugiat ullamco excepteur laborum nulla reprehenderit.
                Proident commodo proident non magna cillum elit esse officia
                commodo labore. Nisi dolore nostrud
              </p>
              <h1 className="font-body text-white text-lg md:text-6xl md:mt-16 md:mb-10 font-bold drop-shadow-2xl ">
                Video
              </h1>
            </div>
          </motion.div>

          <div className="flex items-center justify-center pb-4 mt-4">
            {/* <iframe
            className="w-1/2 aspect-video border-4 drop-shadow-2xl border-black "
            src="https://www.youtube.com/watch?v=xHa7s9-4Ku4"
          ></iframe> */}
            <iframe
              className=" aspect-video md:w-1/2 pb-8"
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/Nsqp4XUtAVs?si=cDtJNcJhevVKnofS"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // referrer-policy="strict-origin-when-cross-origin"
              // allow-fullscreen
            ></iframe>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Video;
