import React from "react";

export const About = () => {
  return (
    <>
      <div className="mt-[100px] lg:mt-10">
        <div className="mt-10 w-[90vw] h-[35vh] lg:w-[40vw] sm:h-[35vh] border-2 shadow flex flex-col items-center mb-10">
          <img src="./location.png" alt="" className="mt-10" />
          <p className="text-3xl font-bold mt-5">Headquarter</p>
          <p className="text-xl font-medium mt-2">Kathmandu,Nepal</p>
        </div>
        <div className="mt-10 w-[90vw] h-[35vh] lg:w-[40vw] border-2 shadow flex flex-col items-center mb-10">
          <img src="./phone.png" alt="" className="mt-10" />
          <p className="text-3xl font-bold mt-5">Phone</p>
          <p className="text-xl font-medium mt-2">+977 9845192116</p>
        </div>
        <div className="mt-10 w-[90vw] h-[35vh] lg:w-[40vw] border-2 shadow flex flex-col items-center mb-10">
          <img src="./email.png" alt="" className="mt-10" />
          <p className="text-3xl font-bold mt-5">Email</p>
          <p className="text-xl font-medium mt-2">
            PremPachabhaiyamagar@gmail.com
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
