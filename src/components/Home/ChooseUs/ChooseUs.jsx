import React from "react";
import MobileVersionChooseUs from "./MobileVersionChooseUs";
import DesktopVersionChooseUs from "./DesktopVersionChooseUs";
const ChooseUs = () => {
  return (
    <>
      <section className="hidden md:block">
        <DesktopVersionChooseUs />
      </section>
      <section className="block md:hidden">
        <MobileVersionChooseUs />
      </section>
    </>
  );
};

export default ChooseUs;
