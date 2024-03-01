import CustomBreadcrumbs from "../../components/common/ui/CustomBreadcrumbs";
import React from "react";

const AboutPage = () => {
  const teamMembers = [
    {
      image: "/images/teamMember/member1.jpg",
      name: "John Doe",
      position: "CEO",
      description:
        "John is responsible for leading our company and ensuring its overall success.",
    },
    {
      image: "/images/teamMember/member2.jpg",
      name: "Jane Smith",
      position: "Head of Design",
      description:
        "Jane oversees the design team, ensuring our products are both aesthetically pleasing and user-friendly.",
    },
    {
      image: "/images/teamMember/member3.jpg",
      name: "Alex Johnson",
      position: "Lead Developer",
      description:
        "Alex leads our development team, ensuring our products are built with the latest technologies and best practices.",
    },
    {
      image: "/images/teamMember/member4.jpg",
      name: "Alex Johnson",
      position: "Director",
      description:
        "Alex leads our development team, ensuring our products are built with the latest technologies and best practices.",
    },
  ];
  return (
    <div className="wrapper center flex-col px-4 ">
      <div
        className=" w-screen h-[300px] center mb-20"
        style={{ backgroundImage: 'url("/images/background/laptop.jpg")', backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center', }}
      >
        <div
          className=" bg-black w-screen h-full text-2xl  text-white bg-opacity-50 text-center center flex-col"
          style={{ fontWeight: 500 }}
        >
          ABOUT US
          <CustomBreadcrumbs links={[{ linkName: "About", link: "/about" }]}  textColor={true}/>

        </div>
      </div>

      <div className="">
        <section className="mb-8 center gap-10">
          <img src="/images/background/computer.jpg" className="w-1/2" alt="" />
          <div className="">
            <h2 className="text-orangeRed text-sm font-semibold mb-4 w-1/2">
              OUR HISTORY
            </h2>
            <p className="text-lg font-semibold text-gray-600 pb-4">
              Creative and new fashion trends collection. Fashion is a potent
              visual marker of our times.
            </p>

            <p className=" text-sm font-sans text-gray-500">
              Trend analysis of any given era will reveal society's values and
              aspirations. The urge to creative expression runs deep.
            </p>
            <div className="flex mt-6">
              <div className="w-1/3">
                <h3 className="text-2xl text-orangeRed font-semibold">12</h3>
                <p>Years Experience</p>
              </div>
              <div className="w-1/3">
                <h3 className="text-2xl text-orangeRed font-semibold">20K</h3>
                <p>Happy Customers</p>
              </div>
              <div className="w-1/3">
                <h3 className="text-2xl text-orangeRed font-semibold">100%</h3>
                <p>Clients Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8 center gap-10">
          <div className="w-1/2">
            <h2 className="font-semibold mb-4 text-orangeRed text-sm">
              OUR VISION
            </h2>
            <p className="text-lg font-semibold text-gray-600 pb-4">
              Our vision is simple - we exist to accelerate our customers’
              progress.
            </p>{" "}
            <p  className=" text-sm font-sans text-gray-500">
              {" "}
              We design and deliver our customers’ digital transformation by
              bringing together their vision with our industry knowledge and
              deep technological expertise.
            </p>
            <ul className=" text-sm font-sans text-gray-500 list-disc pl-6 ">
              <li>We build strong relationships</li>
              <li>We encourage initiative and provide opportunity</li>
              <li>We embrace change and creativity</li>
              <li>We champion an environment of honesty</li>
            </ul>
          </div>

          <img src="/images/background/coffee.jpg" className="w-1/2" alt="" />
        </section>
      </div>

      <section className="mb-6 center flex-col">
        <h2 className="text-3xl font-semibold mb-4 text-orangRed">
          MEET OUR TEAM
        </h2>
        <div className="center gap-3">
          {teamMembers.map((member, index) => (
            <>
              <div className="mb-6 center flex-col">
                <img
                  src={member.image}
                  className="w-[250px] h-[320px]"
                  alt=""
                />
                <div className="center flex-col mt-2">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
