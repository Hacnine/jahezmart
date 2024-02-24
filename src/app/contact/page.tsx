import CustomBreadcrumbs from "@/components/common/ui/CustomBreadcrumbs";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <div
        className=" w-screen h-[300px] center mb-7"
        style={{
          backgroundImage: 'url("/images/background/laptop.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          className=" bg-black w-screen h-full text-2xl  text-white bg-opacity-50 text-center center flex-col"
          style={{ fontWeight: 500 }}
        >
          CONTACT US
          <CustomBreadcrumbs
            links={[{ linkName: "Contact", link: "/contact" }]}  textColor={true}
          />
        </div>
      </div>


      <div className="wrapper pb-8 start gap-10 ">
        <div className="w-[70%] shadow p-6">
          <h1 className="text-lg font-semibold mb-4">LEAVE US A MESSAGE</h1>
          <p className="mb-4">
            Use the form below to get in touch with the sales team
          </p>
          <form className="">
            <div className="flex items-start w-full gap-4">
              <div className="mb-4  w-1/2">
                <label htmlFor="firstName" className="block mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className=" outline-none focus:border-orangeRed w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4 w-1/2">
                <label htmlFor="lastName" className="block mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className=" outline-none focus:border-orangeRed w-full px-3 py-2 border rounded-md"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className=" outline-none focus:border-orangeRed w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className=" outline-none focus:border-orangeRed w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-1">
                Your message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                className=" outline-none focus:border-orangeRed w-full px-3 py-2 border rounded-md h-32"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-orangeRed text-white px-4 py-2 rounded-md hover:bg-orangeRed/80"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
        <div className="w-[30%] shadow p-6 rounded text-sm">
          <div className="">
            <h2 className="text-xl font-semibold mb-2">OUR STORE</h2>
            <p>7895 Dr New Albuquerue, NM 19800, United States Of America</p>
            <p>+566 477 256, +566 254 575</p>
            <p>info@domain.com</p>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-2">HOURS OF OPERATION</h2>
            <ul>
              <li className="between">
                <p>Saturday:</p> 12:00 PM
              </li>

              <li className="between">
                <p>Sunday:</p> 12:00 PM
              </li>
              <li className="between">
                <p>Monday:</p> 12:00 PM
              </li>
              <li className="between">
                <p>Tuesday:</p> 12:00 PM
              </li>
              <li className="between">
                <p>Wednesday:</p> 12:00 PM
              </li>
              <li className="between">
                <p>Thursday:</p> 12:00 PM
              </li>
              <li className="between">
                <p>Friday:</p> 12:00 PM
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-2">CAREERS</h2>
            <p className=" text-sm">
              If you are interested in employment opportunities at SWIFTCART,
              please email us:
              <a href="mailto:contact@familiar.com" className="text-orangeRed text-sm">contact@familiar.com</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
