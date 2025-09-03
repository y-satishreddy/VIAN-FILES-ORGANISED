import React from "react";

const ContactForm = () => {
  return (
    <section className="w-full flex justify-center items-center py-[50px] px-5 md:px-10 md:py-[80px] pt-[0px] md:pt-[0px]">
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        {/* Heading */}
        <h1 className="text-[#F44336] font-bold text-2xl md:text-3xl text-center mb-8">
          Got a query? <br /> Talk to us.
        </h1>
        {/* Form */} <br />
        <form className="w-full flex flex-col items-center">
          {["Name*", "Phone*", "Email*", "Message"].map((label) => (
            <div key={label} className="w-full mb-4">
              <input
                type={label === "Email" ? "email" : "text"}
                placeholder={label}
                className="w-full bg-transparent border-b-1 border-[#F47920] text-gray-700 text-center py-3 focus:outline-none"
                style={{ borderRadius: 0 }}
              />
            </div>
          ))}
          <button
            type="submit"
            className="inline-block px-10 mt-2 py-1 border-2 border-[#f37820] text-[#f37820] text-sm md:text-base transition-colors duration-300 bg-orange-red-gradient hover:text-white w-fit"
          >
            Submit
          </button>
        </form>
        <p className=" text-color-red pt-[20px] text-center font-size-12px">
          We keep your information strictly confidential and we don’t spam your
          email.
        </p>
      </div>
    </section>
  );
};

export default ContactForm;
