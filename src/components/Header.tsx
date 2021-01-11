import React from "react";

interface Props {
  text: string;
  subtext: string;
}

const Header = ({ text, subtext }: Props) => {
  return (
    <div>
      <h1>{text}</h1>
      <h3>{subtext}</h3>
    </div>
  );
};

export default Header;
