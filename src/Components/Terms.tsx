
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
      className="mx-auto lg:w-5/6 items-center justify-center "
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
        <section id="terms">
          <div className="flex flex-col justify-center items-center">
            <h1 className="glitch font-head  text-2xl lg:text-6xl pt-20 pb-10 text-white">
              RULES
            </h1>
            <div className=" ">
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
        </section>
      </motion.div>
    </motion.div>
  );
};

export default Terms;
