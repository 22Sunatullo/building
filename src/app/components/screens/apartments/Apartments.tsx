import { FC } from "react";

import backgrounA from "public/assets/background/background3.png";
import { url } from "inspector";

const Apartments: FC = () => {
  const styling = {
    backgroundmage: "url(public/assets/background/background3.png)",
    width: "100%",
    height: "1200px",
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: "",
          width: '100%',
          height: '1200px',
          padding:"100px"
        }}
      ></div>
    </div>
  );
};

export default Apartments;
