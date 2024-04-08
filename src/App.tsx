import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import { SelectedPage } from "./shared/types";
import Home from "./Components/Home"
import Video from "./Components/Video";
import Faction from "./Components/Faction";

import Register from "./Components/Register";
import Terms from "./Components/Terms";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-bg">
      
      <Navbar
         isTopOfPage={isTopOfPage}
         selectedPage={selectedPage}
         setSelectedPage={setSelectedPage}
      />
      <Home 
      setSelectedPage={setSelectedPage}
      />
      <Video
      setSelectedPage={setSelectedPage}
      />
      <Faction
      setSelectedPage={setSelectedPage}
      />
      <Terms
      setSelectedPage={setSelectedPage}
      />
      <Register
      setSelectedPage={setSelectedPage}
      />
       {/* <Amity  />  */}
        {/* <Abnegation setSelectedPage={setSelectedPage} />
       
        {/* <Candor setSelectedPage={setSelectedPage} /> */}
        {/* <Dauntless setSelectedPage={setSelectedPage} /> */}
        {/* <Erudite setSelectedPage={setSelectedPage} /> */}
      {/* <div>
        <img className="content-banner lg:w-screen" alt="" />
      </div> */}
      {/* <h1 className="">Tst</h1> */}
    </div>
  );
}

export default App;
