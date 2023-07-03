import { FaQuestionCircle, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FcTouchscreenSmartphone } from "react-icons/fc";

export const Help = () => {
  return (
    <div>
      <div className="help-wrapper mx-6 md:mx-16 lg:mx-24 mt-4">
        <div className="shadow p-6">
          <div>
            <h1 className="text-3xl font-bold text-orange-500">
              Need Help?
            </h1>
            <div className="p-wrapper mt-2 text-gray-500">
              <p className="mb-3">
                If you have any questions, concerns, or need assistance, our
                support team is here to help you. Please reach out to us using the contact details below.
              </p>
            </div>
          </div>
          <div className="grid gap-6 mt-4 ml-3">
            <div className="text-5xl flex items-center">
              <FaQuestionCircle className="mr-3" />
              <span className="text-xl text-gray-500">
                Contact our support team:
              </span>
            </div>
            <div className="text-2xl text-orange-400 flex items-center">
              <FaEnvelope className="mr-3" />
              <span className="text-xl lg:text-2xl text-gray-500">
                support@nearbuy.com
              </span>
            </div>
          </div>
          <div className="mt-8">
            <h1 className="text-3xl font-bold text-orange-500">
              Call us
            </h1>
            <p className="mt-4 text-gray-500">
              If you need direct inquiries, please call us using this number.
            </p>
            <div className="flex justify-center mt-8">
              <FcTouchscreenSmartphone className="text-5xl text-gray-500" />
              <span className="text-xl text-gray-500 ml-4">
                Call us at: 123-456-7890
              </span>
            </div>
            <div className="flex justify-center mt-8">
              <a href="https://www.facebook.com/nearbuy" target="_blank" rel="noopener noreferrer" className="mr-4">
                <FaFacebook className="text-3xl text-gray-500" />
              </a>
              <a href="https://www.twitter.com/nearbuy" target="_blank" rel="noopener noreferrer" className="mr-4">
                <FaTwitter className="text-3xl text-gray-500" />
              </a>
              <a href="https://www.instagram.com/nearbuy" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl text-gray-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;




