import React from "react";
import MobileTimeline from "./MobileTimeline";
import DesktopTimeline from "./DesktopTimeline";

const Timeline = () => {
  return (
    <>
      <section className="pb-[80px] md:pb-[60px]">
        {/* MobileTimeline for small devices and tablets */}
        <div className="block lg:hidden">
          <MobileTimeline />
        </div>

        {/* DesktopTimeline for larger devices */}
        <div className="hidden lg:block">
          <DesktopTimeline />
        </div>
      </section>
    </>
  );
};

export default Timeline;
