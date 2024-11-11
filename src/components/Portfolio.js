import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <>
      <div className="my-4 py-4" id="portfolio">
        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
          Products
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900 mb-8"></div>
        </div>
        <div className="px-4" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                  Travel Agency Management Solution
                </h4>
                <p className="text-md font-medium leading-5 h-auto md:h-48">
                  Developed a comprehensive solution tailored for travel
                  agencies, streamlining itinerary planning, booking management,
                  customer relationship management, and payment processing. This
                  platform enables agencies to efficiently manage operations,
                  enhance customer experience, and improve workflow automation,
                  making it easier for travel agents to deliver seamless and
                  personalized travel experiences.
                </p>
                <div className="flex justify-center my-4">
                  <Link
                    to="/get-demo"
                    className="text-white bg-[#120A31] hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                  >
                    Book Appointment
                    <svg
                      className="w-4 h-4 ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                  School Management Portal
                </h4>
                <p className="text-md font-medium leading-5 h-auto md:h-48">
                  Our holistic School Management Portal (SMP) is the essential
                  solution for any educational institution. This tool simplifies
                  administrative tasks, automates processes, and fosters
                  seamless communication between teachers, students, parents,
                  and administrators. With capabilities to manage student
                  enrollment, attendance, grades, schedules, and much more, SMP
                  is designed to enhance every aspect of school management.
                </p>
                <div className="flex justify-center my-4">
                  <Link
                    to="/get-demo"
                    className="text-white bg-[#120A31] hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                  >
                    Book Appointment
                    <svg
                      className="w-4 h-4 ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>

                {/* <ul className="border-t border-gray-300 py-8 space-y-6">
                                    <li className="flex items-center space-x-2 px-8">
                                        <span className="bg-blue-600 rounded-full p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                            </svg>
                                        </span>
                                        <span className="text-gray-600 capitalize">Free Setup Guidance</span>
                                    </li>
                                </ul> */}
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                  Payroll Management System
                </h4>
                <p className="text-md font-medium leading-5 h-auto md:h-48">
                  The Payroll Management System streamlines the employee payment
                  process for organizations of any size, ensuring that your
                  workforce is paid accurately and punctually. By reducing the
                  manual effort involved in payroll management, this system
                  allows you to enjoy benefits like improved payment accuracy.
                  Additionally, it easily integrates with your current
                  management systems through robust APIs.
                </p>
                <div className="flex justify-center my-4">
                  <Link
                    to="/get-demo"
                    className="text-white bg-[#120A31] hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                  >
                    Book Appointment
                    <svg
                      className="w-4 h-4 ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                  Event Management System
                </h4>
                <p className="text-md font-medium leading-5 h-auto md:h-48">
                  The Event Management System we offer simplifies the
                  organization of diverse events, whether they are weddings,
                  memorials, or any special occasion. With a user-friendly,
                  customizable menu, you have the flexibility to define the
                  experience for your guests, making each event truly
                  one-of-a-kind. Backed by successful use cases for many
                  different types of events, you can trust our platform to
                  ensure a hassle-free event management process.
                </p>
                <div className="flex justify-center my-4">
                  <Link
                    to="/get-demo"
                    className="text-white bg-[#120A31] hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                  >
                    Book Appointment
                    <svg
                      className="w-4 h-4 ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
