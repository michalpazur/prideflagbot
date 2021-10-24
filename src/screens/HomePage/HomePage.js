import React from "react";
import Flag from "../../components/Flag/Flag";
import { flags } from "../../static/flags";

const HomePage = () => {
  return (
    <React.Fragment>
      {flags.map((flag) => (
        <Flag flag={flag} key={flag.name} />
      ))}
    </React.Fragment>
  );
};

export default HomePage;
