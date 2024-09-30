import {
  FaFacebookF,
  FaInstagram,
  FaLocationArrow,
  FaPhone,
  FaTwitter,
  FaVoicemail,
  FaYoutube,
} from "react-icons/fa";

// import logo from "FT.png";
import { Link } from "react-router-dom";

const links = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/products",
    name: "Products",
  },
  {
    path: "/product-management",
    name: "Product Management",
  },
  {
    path: "/cart",
    name: "Cart",
  },
  {
    path: "/about-us",
    name: "About",
  },
];

const Footer = () => {
  return (
    <div className="mt-10">
      <div className="flex lg:flex-row lg:gap-y-0 gap-y-5 flex-col justify-between p-[60px] bg-emerald-100">
        <div className="flex lg:flex-row flex-col lg:gap-x-5 lg:gap-y-0 gap-y-5">
          <img src="FT.png" alt="" className="lg:h-[150px] w-auto" />
          <div className="space-y-2">
            <p className="text-3xl font-bold leading-0 -mt-2">
              <span className="text-secondaryColor">Fitness</span>{" "}
              <span className="text-primaryColor">Tools</span>
            </p>
            <p className="flex items-center gap-3">
              <FaLocationArrow className="text-secondaryColor" /> Mymensingh,
              Bangladesh
            </p>
            <p className="flex items-center gap-3">
              <FaVoicemail className="text-secondaryColor" />{" "}
              fitnesstools@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <FaPhone className="text-secondaryColor" /> +880 171 1111111
            </p>
          </div>
        </div>
        <div className="">
          <p className="font-semibold mb-2">Important links</p>
          <div className="flex flex-col gap-y-2">
            {links?.map((menu, idx) => (
              <Link key={idx} to={menu?.path}>
                {menu?.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3 font-semibold">Follow us on</p>
          <div className="flex gap-x-4 items-center text-secondaryColor">
            <p>
              <FaFacebookF className="text-2xl hover:text-primaryColor cursor-pointer" />{" "}
            </p>
            <p>
              <FaInstagram className="text-2xl hover:text-primaryColor cursor-pointer" />{" "}
            </p>
            <p>
              <FaYoutube className="text-2xl hover:text-primaryColor cursor-pointer" />{" "}
            </p>
            <p>
              <FaTwitter className="text-2xl hover:text-primaryColor cursor-pointer" />{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
