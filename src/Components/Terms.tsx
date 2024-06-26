// import React from "react";
import "../test.css";
import "../glitch.css";
import { SelectedPage } from "../shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Terms = ({ setSelectedPage }: Props) => {
  return (
    <motion.div
      className="mx-auto  items-center justify-center "
      onViewportEnter={() => setSelectedPage(SelectedPage.Terms)}
    >
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
        {/* <section id="terms">
          <div className="">
            <h1 className="glitch font-head flex justify-center items-center text-2xl lg:text-6xl pt-20 pb-10 text-white">
              RULES
            </h1>
            <div className="flex justify-center ">
              <div className=" w-[50vh]  lg:w-[45rem] ">
                <h1 className="font-body text-2xl text-white text-center">
                  DO's
                </h1>
                <ul className="list-disc ml-10 lg:ml-0 text-xl text-start ">
                  <li>
                    Sint fugiat sunt excepteur et aute aute cupidatat incididunt
                    anim. Consectetur pariatur proident cillum ipsum ipsum sunt
                    id id deserunt. Ullamco eu officia nisi reprehenderit irure
                    velit aliquip aute cillum mollit eiusmod aliqua laboris. Et
                    cupidatat magna nulla velit consequat adipisicing magna
                    irure consequat nulla. Ex in ex est fugiat fugiat in. Tempor
                    irure in nisi id labore ipsum officia sit culpa ex ipsum.
                    Occaecat incididunt elit culpa aliquip aliqua in proident ut
                    tempor. Ex nulla nostrud consequat aliquip proident do
                    officia.
                  </li>
                  <li>
                    Labore mollit nulla cillum duis. Dolor dolore Lorem ipsum
                    labore magna non deserunt. Id in excepteur labore veniam
                    elit anim voluptate mollit minim sunt. Dolor et nostrud
                    aliquip voluptate eu veniam duis enim incididunt anim culpa.
                    Dolor elit ea nulla non cupidatat tempor aute. Nulla non
                    dolore enim laborum ea veniam et. Excepteur minim id
                    pariatur cupidatat. Nulla esse cupidatat et pariatur
                    reprehenderit et non velit eu dolore. Qui ea duis nostrud
                    occaecat sint esse consectetur ea amet nisi ipsum velit.
                    Commodo ut laborum amet officia consequat esse elit
                    exercitation voluptate adipisicing sit sint aliquip minim.
                    Qui voluptate minim eu veniam ipsum aliqua eu veniam
                    proident qui. Elit elit ipsum excepteur veniam.
                  </li>
                  <li>2</li>
                </ul>
              </div>
              <div className=" w-[50vh]  lg:w-[45rem]">
                <h1 className="font-body text-2xl text-white  text-center ">
                  DONT's
                </h1>
                <ul className="list-disc text-xl text-start lg:ml-10 lg:mr-5">
                  <li>
                    Eu mollit ut incididunt ad. Laboris fugiat sint ullamco
                    exercitation voluptate cupidatat nostrud commodo anim. Do
                    commodo incididunt fugiat culpa laboris est. Proident tempor
                    id occaecat id dolor sint consequat cupidatat laborum tempor
                    elit laboris sint laboris. Est dolore qui eiusmod
                    consectetur incididunt aliquip. Aute laboris culpa anim enim
                    nostrud velit tempor. Ex pariatur eiusmod sunt aute veniam
                    est exercitation velit quis exercitation. Elit anim irure ex
                    commodo commodo irure proident sunt Lorem magna sit. Fugiat
                    ex fugiat nostrud eiusmod aute est est aliquip voluptate.
                    Non sunt velit deserunt irure exercitation sint eiusmod nisi
                    excepteur in.
                  </li>
                  <li>Labore mollit nulla cillum duis. Dolor dolore Lorem ipsum
                    labore magna non deserunt. Id in excepteur labore veniam
                    elit anim voluptate mollit minim sunt. Dolor et nostrud
                    aliquip voluptate eu veniam duis enim incididunt anim culpa.
                    Dolor elit ea nulla non cupidatat tempor aute. Nulla non
                    dolore enim laborum ea veniam et. Excepteur minim id
                    pariatur cupidatat. Nulla esse cupidatat et pariatur
                    reprehenderit et non velit eu dolore. Qui ea duis nostrud
                    occaecat sint esse consectetur ea amet nisi ipsum velit.
                    Commodo ut laborum amet officia consequat esse elit
                    exercitation voluptate adipisicing sit sint aliquip minim.
                    Qui voluptate minim eu veniam ipsum aliqua eu veniam
                    proident qui. Elit elit ipsum excepteur veniam.
                  </li>
                  <li>2</li>

                </ul>
              </div>
            </div>
          </div>
        </section> */}

        <section id="terms">
          <div className="glitch font-body text-2xl lg:text-6xl flex justify-center items-center twxt-white pb-4">
            RULES
          </div>
          <div className="grid grid-rows-2 lg:grid-cols-2 lg:pl-10  lg:pt-8 ">
            <div className="p-6 text-[14px] lg:text-3xl lg:border-r-4 border-b-2 mx-10 ">
              <p className="font-body pb-4 text-center font-bold ">DO's</p>
              <ol className="list-decimal font-man px-12 lg:px-8">
                <li>
                  Now this is a story all about how, my life got flipped-turned
                  upside down
                </li>
                <li>
                  Now this is a story all about how, my life got flipped-turned
                  upside down
                </li>
              </ol>
            </div>  
            <div className="p-6 text-[14px] lg:text-3xl mx-10">
              <p className="font-body pb-4 text-center font-bold">DONT's</p>
              <ol className="list-decimal font-man px-12 lg:px-8">
                <li>
                  Now this is a story all about how, my life got flipped-turned
                  upside down
                </li>
                <li>
                  Now this is a story all about how, my life got flipped-turned
                  upside down
                </li>
              </ol>
            </div>
          </div>
        </section>
      </motion.div>
    </motion.div>
  );
};

export default Terms;
