import React from "react";

type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <h1 className="font-head drop-shadow-2xl items-center text-lg mt-8 md:text-5xl font-bold justify-center text-center ">{children}</h1>
  );
};

export default HText;
