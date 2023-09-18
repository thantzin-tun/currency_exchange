import { Currency } from "components";
import React from "react";
import { HomeBackground } from "theme";

const Home = () => {
  return (
    <>
      <HomeBackground>
        <div className="upper_part"></div>
        <div className="w-full p-10 flex justify-center items-center">
          <Currency />
        </div>
        <div className="lower_part"></div>
      </HomeBackground>
    </>
  );
};

export default Home;
