import React, { useState } from "react";

const Contact = () => {
  const contact_info = [
    { logo: "mail-outline", text: "kiranpawar6519@gmail.com" },
    { logo: "call-outline", text: "+91 9617617648" },
    { logo: "location-outline", text: "Indore-452001 M.P, India" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://portfoliobackend-yw9r.onrender.com/send-email", // ✅ FIXED URL
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      alert(data.message);

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-4 rounded-lg mx-auto">

          {/* FORM */}
          <form onSubmit={handleSubmit} className="flex flex-col flex-1 gap-5">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 rounded bg-gray-700 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 rounded bg-gray-700 outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="p-3 rounded bg-gray-700 outline-none"
              rows="5"
            />

            <button
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-700 transition px-6 py-2 rounded w-fit"
            >
              Send Message
            </button>
            <button 
  onClick={() => alert("Working")}
  className="bg-red-500 text-white p-3"
>
  Test Button
</button>

          </form>

          {/* CONTACT INFO */}
          <div className="flex flex-col gap-7">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex text-left gap-4 items-center"
              >
                <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  {/* ✅ FIXED ICON */}
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;