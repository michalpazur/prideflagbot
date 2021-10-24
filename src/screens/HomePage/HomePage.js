import React, { useState } from "react";
import Flag from "./components/Flag/Flag";
import { flags } from "../../static/flags";
import Search from "./components/Search/Search";

const HomePage = () => {
  const [filteredFlags, setFilteredFlags] = useState(flags);

  const handleSearch = (value) => {
    if (!value || value === "") {
      setFilteredFlags(flags);
    } else {
      value = value.toLowerCase();
      const filteredFlags = flags.filter((flag) =>
        flag.name.toLowerCase().includes(value)
      );
      setFilteredFlags(filteredFlags);
    }
  };

  return (
    <React.Fragment>
      <Search updateValue={handleSearch} />
      {filteredFlags.map((flag) => (
        <Flag flag={flag} key={flag.name} />
      ))}
    </React.Fragment>
  );
};

export default HomePage;
