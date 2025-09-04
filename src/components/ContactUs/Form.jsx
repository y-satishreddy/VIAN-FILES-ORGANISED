import { useState } from "react";
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Name is required";
        } else if (!/^[A-Za-z.\s]+$/.test(value)) {
          error = "Only letters and dot allowed";
        }
        break;

      case "phone":
        if (!value.trim()) {
          error = "Phone is required";
        } else if (!/^[6-9]\d{9}$/.test(value)) {
          error = "Must be 10 digits, start with 6/7/8/9";
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Enter a valid email (must contain @ and .)";
        }
        break;
      default:
        break;
    }

    return error;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name !== "message") {
      setErrors({
        ...errors,
        [name]: validateField(name, value),
      });
    }
  };
  const validateAll = () => {
    let newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (field !== "message") {
        const error = validateField(field, formData[field]);
        if (error) newErrors[field] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAll()) {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      setErrors({});
    }
  };
  return (
    <section className="w-full flex justify-center items-center py-[50px] px-5 md:px-10 md:py-[80px] pt-[0px] md:pt-[0px]">
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        <h1 className="text-[#F44336] font-bold text-2xl md:text-3xl text-center pb-[20px]">
          Got a query? <br /> Talk to us.
        </h1>
        <form
          className="w-full flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <div className="w-full mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b-1 border-[#F47920] text-gray-700 text-center py-1 focus:outline-none"
              style={{ borderRadius: 0 }}
              required
            />
            <div className="min-h-[20px]">
              {errors.name && (
                <p className="text-color-red font-size-12px text-center">
                  {errors.name}
                </p>
              )}
            </div>
          </div>
          <div className="w-full mb-4">
            <input
              type="text"
              name="phone"
              placeholder="Phone*"
              value={formData.phone}
              onChange={handleChange}
              maxLength="10"
              className="w-full bg-transparent border-b-1 border-[#F47920] text-gray-700 text-center py-1 focus:outline-none"
              style={{ borderRadius: 0 }}
              required
            />
            <div className="min-h-[20px]">
              {errors.phone && (
                <p className="text-color-red font-size-12px text-center">
                  {errors.phone}
                </p>
              )}
            </div>
          </div>
          <div className="w-full mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b-1 border-[#F47920] text-gray-700 text-center py-1 focus:outline-none"
              style={{ borderRadius: 0 }}
              required
            />
            <div className="min-h-[20px]">
              {errors.email && (
                <p className="text-color-red font-size-12px text-center">
                  {errors.email}
                </p>
              )}
            </div>
          </div>
          <div className="w-full mb-4">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b-1 border-[#F47920] text-gray-700 text-center py-2 focus:outline-none"
              style={{ borderRadius: 0 }}
            />
          </div>
          <button
            type="submit"
            className="inline-block px-10 mt-2 py-1 border-2 border-[#f37820] text-[#f37820] text-sm md:text-base transition-colors duration-300 bg-orange-red-gradient hover:text-white w-fit"
          >
            Submit
          </button>
        </form>
        <p className="text-color-red pt-[20px] text-center font-size-12px">
          We keep your information strictly confidential and we don’t spam your
          email.
        </p>
      </div>
    </section>
  );
};
export default Form;
