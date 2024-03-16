
import CustomBreadcrumbs from "../../components/common/ui/CustomBreadcrumbs";
import ContactForm from "../../components/forms/ContactForm";

export const metadata = {
  title: "Contact"
}
const ContactPage = () => {
  return (
    <>
      <section
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
            links={[{ linkName: "Contact", link: "/contact" }]}
            textColor={true}
          />
        </div>
      </section>

      <section className="wrapper pb-8 flex md:items-start items-center md:flex-row flex-col gap-10 text-sm text-gray-600 ">
        <div className=" w-full md:w-[70%] shadow p-6">
          <h1 className="text-lg font-semibold mb-4">LEAVE US A MESSAGE</h1>
          <p className="mb-4 font-sans text-sm">
            Use the form below to get in touch with the sales team
          </p>
          <ContactForm/>
        </div>
        <div className=" w-full md:w-[30%] shadow p-6 rounded text-sm">
          <div className="">
            <h2 className="text-base font-semibold mb-2">OUR STORE</h2>
            <div className=" font-sans text-gray-500">
              <p>7895 Dr New Albuquerue, NM 19800, United States Of America</p>
              <p>+566 477 256, +566 254 575</p>
              <p>info@domain.com</p>
            </div>
          </div>

          <div className="mt-8 text-gray-500 text-sm">
            <h2 className="text-base font-semibold mb-2 text-gray-600 ">
              HOURS OF OPERATION
            </h2>
            <ul>
              <li className="between">
                <p>Saturday:</p>{" "}
                <p className="font-sans text-orangeRed"> 12:00 PM </p>
              </li>

              <li className="between">
                <p>Sunday:</p>{" "}
                <p className="font-sans text-orangeRed"> 12:00 PM </p>
              </li>
              <li className="between">
                <p>Monday:</p>{" "}
                <p className="font-sans text-orangeRed"> 12:00 PM </p>
              </li>
              <li className="between">
                <p>Tuesday:</p>{" "}
                <p className="font-sans text-orangeRed"> 12:00 PM </p>
              </li>
              <li className="between">
                <p>Wednesday:</p>{" "}
                <p className="font-sans text-orangeRed"> 12:00 PM </p>
              </li>
              <li className="between">
                <p>Thursday:</p>{" "}
                <p className="font-sans text-orangeRed"> 12:00 PM </p>
              </li>
              <li className="between">
                <p>Friday:</p>{" "}
                <p className="font-sans text-orangeRed"> 12:00 PM </p>
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-base text-gray-600  font-semibold mb-2">
              CAREERS
            </h2>
            <p className="font-sans text-sm text-gray-500">
              If you are interested in employment opportunities at SWIFTCART,
              please email us:
              <a
                href="mailto:contact@familiar.com"
                className="text-orangeRed text-sm"
              >
                contact@familiar.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
