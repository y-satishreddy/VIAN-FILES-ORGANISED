import DesktopVersionChooseUs from "./DesktopVersionChooseUs";
import MobileVersionChooseUs from "./MobileVersionChooseUs";
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
