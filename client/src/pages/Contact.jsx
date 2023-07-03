import { FcTouchscreenSmartphone } from "react-icons/fc";
import { FaEnvelope } from "react-icons/fa";

export const Contact = () => {
  return (
    <div>
      <div className="contact-wrapper mx-6 md:mx-16 lg:mx-24 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 shadow">
          <div className="p-6">
            <div className="grid-item  p-4 ">
              <div className="mt-6">
                <span className="ml-6 text-2xl font-semibold text-orange-500">
                  GET IN TOUCH
                </span>
                <div className="p-wrapper ml-6 mt-2  text-gray-500">
                  <p class="mb-3 text-gray-500 dark:text-gray-400  first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-orange-400 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
                    NearBuy value your feedback, questions, and inquiries.
                    Please feel free reaching out us using the contact form. Our
                    team will make effort to respond to your message promptly.
                  </p>
                  <p class="text-gray-500 dark:text-gray-400">
                    We appreciate your interest in our services and look forward
                    to hearing from you!
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-6 mt-4 ml-3 p-4">
              <span className="text-5xl flex items-center">
                <FcTouchscreenSmartphone className="mr-3" />
                <span className="text-xl text-gray-500">+1 (123) 456-7890</span>
              </span>

              <span className="text-2xl text-orange-400 flex items-center ml-3">
                <FaEnvelope className="mr-3" />
                <span className=" text-xl lg:text-2xl ml-3 text-gray-500">
                  Nearbuy@gmail.com
                </span>
              </span>
            </div>
          </div>

          <div className="grid-item">
            <div className="grid grid-cols-1 p-6 drop-shadow-2xl">
              <form action="" className="shadow rounded-lg p-8 ">
                <span className="text-3xl font-bold text-orange-500">
                  SAY SOMETHING
                </span>
                <input
                  type="text"
                  placeholder="Your Name.."
                  className="w-full px-4 py-2 mt-4 border-blue-400 border-2"
                />
                <br />
                <input
                  type="text"
                  placeholder="Your Mail"
                  className="w-full px-4 py-2 mt-4  border-blue-400 border-2"
                />
                <br />
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Message"
                  className="w-full px-4 py-2 mt-4  border-blue-400 border-2"
                ></textarea>
                <br />
                <input
                  type="submit"
                  value="SEND"
                  className="mt-4 px-4 py-2 bg-blue-500 font-semibold rounded-lg  border-blue-400 border-2 w-48 text-white"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="grid md:grid-cols-2 lg:mx-24 bg-blue-500 ">
          <div className="grid-item p-6 ml-6">
            <span className="text-4xl font-semibold text-white">NEARBUY</span>
            <p className="p-1 text-white shadow">
              Step into a world of premium products that blend functionality,
              durability, and sleek design for the modern lifestyle.
            </p>
          </div>
          <div className="grid-item p-6 ml-6 ">
            <span className="text-2xl font-semibold text-white">ABOUT US</span>

            <p className="p-1 text-white shadow">
              Welcome to our online store, where you'll find a wide range of
              high-quality products to enhance your everyday life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
