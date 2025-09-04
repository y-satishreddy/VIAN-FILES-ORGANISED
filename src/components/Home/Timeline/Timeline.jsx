import React from "react";
import MobileTimeline from "./MobileTimeline";
import DesktopTimeline from "./DesktopTimeline";

const Timeline = () => {
  return (
    <>
      <section className="pb-[80px] md:pb-[60px]">
        <div className="block lg:hidden">
          <MobileTimeline />
        </div>
        <div className="hidden lg:block">
          <DesktopTimeline />
        </div>
      </section>
    </>
  );
};

export default Timeline;
