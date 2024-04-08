
import { SelectedPage } from "../shared/types";

import {motion } from "framer-motion";
import abnegation from "../assets/abnegation.jpg";
import amity from "../assets/amity.jpg";
import candor from "../assets/candor.jpg";
import dauntless from "../assets/dauntless.jpg";
import erudite from "../assets/erudite.jpg";
import check from "../assets/checkfaction.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const abnegations = abnegation;
const amitys = amity;
const candors = candor;
const dauntles = dauntless;
const erudites = erudite;

const Faction = ({ setSelectedPage }: Props) => {
  const factions = [
    {
      src: abnegations,
      title: "Abnegation",
      description:
        " Faksi yang berisikan orang-orang dengan sifat Penolong yang unggul. Sifat Abnegation adalah faksi yang menjalankan pemerintahan, paling tidak pamrih, selalu berusaha untuk rendah hati, dan bertugas untuk menolong siapapun yang sedang berada dalam kesulitan.",
    },
    {
      src: amitys,
      title: "Amity",
      description:
        "Faksi yang berisikan orang-orang dengan sifat Damai/Ketenangan yang unggul Amity berdedikasi pada kedamaian, kebaikan, pengampunan kepercayaan, kemandirian, dan netralitas. Contoh: Sifat Amity lambat marah namun cepat memaafkan.",
    },
    {
      src: candors,
      title: "Candor",
      description:
        "Faksi yang berisikan orang-orang dengan sifat Jujur yang unggul. Para Candor melihat kejujuran dan kebohongan sejelas hitam dan putih. Memegang teguh sifat kejujuran, dan percaya hanya ada baik atau buruk dalam hidup, jadi tidak ada yang namanya abu-abu.",
    },
    {
      src: dauntles,
      title: "Dauntless",
      description:
        "Faksi yang berisikan orang-orang dengan sifat Pemberani yang unggul. Para Dauntless memegang prinsip untuk hidup tanpa rasa takut, mereka suka banget adrenalin yang tinggi.",
    },
    {
      src: erudites,
      title: "Erudite",
      description:
        "Faksi yang berisikan orang-orang dengan sifat Jenius/Intelektual yang unggul. Para Erudite mengejar ilmu pengetahuan dan percaya bahwa ilmu pengetahuan merupakan hal paling penting dalam kehidupan manusia, intinya mirip kutu buku dan jeniuz.",
    },
  ];

  return (
    <section id="faction">
      <motion.div
        className="mx-auto  items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Faction)}
      ></motion.div>

      <div className="flex flex-col">
        {factions.map((faction, index) => (
          <div key={index} className="relative">
            <motion.div
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 2 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="min-h-[10rem] md:h-full">
                <img src={faction.src} alt="" className="relative " />
                <div className="absolute top-0 left-0 p-4 lg:mt-10 lg:ml-10 text-white">
                  <h1 className="font-head text-lg md:text-6xl font-bold ">
                    {faction.title}
                  </h1>
                  <div className=" flex items-center justify-center">
                    <p className="text-white text-center font-sub mt-8 text-[12px] lg:text-3xl lg:pt-72 tracking-widest">
                      {faction.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
        <div className="flex justify-center md:h-full ">
          <a href="https://www.epicreads.com/blog/divergent-quiz-factions/">
            <img src={check} alt="" className="h-48 lg:h-96 drop-shadow-2xl	" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faction;
