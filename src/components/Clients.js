import React from "react";
import kws from "../images/clients/kws.png";
import geps from "../images/clients/geps.png";
import protergia from "../images/clients/protergia.png";
import travello10 from "../images/clients/Travello10logo.png";
import noteshala from "../images/noteshalla.jpg";
import propertywallah from "../images/propertywallah.svg";

const clientImage = {
  height: "10rem",
  width: "auto",
  mixBlendMode: "colorBurn",
  cursor: "pointer", // Add this line
};

const Clients = () => {

  const handleTravello10 = () => {
    window.open("https://travello10.com", "_blank");
  }
  const handleNoteshalla = () => {
    window.open("https://www.notesshaala.live", "_blank");
  };
  
  return (
    <div className="mt-8 bg-gray-100">
      <section data-aos="fade-up">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            Our Clients
          </h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
            Some of our clients.
          </h2>
        </div>
        <div className="p-16" data-aos="fade-in" data-aos-delay="600">
          <div className="w-full flex justify-center items-center flex-wrap gap-14">
            {/* <div
              style={clientImage}
              className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100"
            >
              <img src={propertywallah} alt="client" className="" />
            </div> */}
            <div
              style={clientImage}
              className="overflow-hidden p-3 flex justify-center transition-all ease-in-out hover:opacity-100 "
            >
              <img src={travello10} alt="client" onClick={handleTravello10} className="" />
            </div>
            
            <div
              style={clientImage}
              className="overflow-hidden p-3 flex justify-center transition-all ease-in-out hover:opacity-100"
            >
              <img src={noteshala} alt="client"  onClick={handleNoteshalla}  />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
