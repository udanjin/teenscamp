
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  isTopOfPage: boolean;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ isTopOfPage,children, setSelectedPage }: Props) => {
  const navbarBackground = isTopOfPage
    ? "rounded-md bg-secondary-500 px-10 py-2 font-body text-black hover:text-white"
    : "rounded-md bg-secondary-500 px-10 py-2 font-body text-white hover:text-grey-400";
    // console.log(isTopOfPage);
  return (
    <AnchorLink
      className={`${navbarBackground}`}
      onClick={() => setSelectedPage(SelectedPage.Register)}  
      href={`#${SelectedPage.Register}` }
    >
     {children}
    </AnchorLink>
  );
};

export default ActionButton;
