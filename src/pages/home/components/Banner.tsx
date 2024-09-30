import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Carousel>
      <div className="relative">
        <img src="https://i.postimg.cc/VkSwsZbm/SLIDE-001.jpg" />
        <div className="absolute lg:top-[40%] top-[8%] lg:left-[100px] left-8">
          <p className=" text-white lg:text-4xl text-2xl font-bold">
            Unleash Your Full Potential <br /> With Premium Fitness Gear !
          </p>
          <button className="btn btn-primary mt-4">
            <Link
              to="/products"
              className="bg-secondaryColor text-white lg:font-bold font-semibold lg:py-3 lg:px-5  py-2 px-4 rounded-sm hover:bg-primaryColor"
            >
              Explore our products
            </Link>
          </button>
        </div>
      </div>
      <div className="relative">
        <img src="https://i.postimg.cc/PqYkYL47/SLIDE-002.jpg" />
        <div className="absolute lg:top-[40%] top-[8%] lg:left-[100px] left-8">
          <p className=" text-white lg:text-4xl text-2xl font-bold">
            Unleash Your Full Potential <br /> With Premium Fitness Gear !
          </p>
          <button className="btn btn-primary mt-4">
            <Link
              to="/products"
              className="bg-secondaryColor text-white lg:font-bold font-semibold lg:py-3 lg:px-5  py-2 px-4 rounded-sm hover:bg-primaryColor"
            >
              Explore our products
            </Link>
          </button>
        </div>
      </div>
      <div className="relative">
        <img src="https://i.postimg.cc/43pxs4Yz/SLIDE-003.jpg" />
        <div className="absolute lg:top-[40%] top-[8%] lg:left-[100px] left-8">
          <p className=" text-white lg:text-4xl text-2xl font-bold">
            Unleash Your Full Potential <br /> With Premium Fitness Gear !
          </p>
          <button className="btn btn-primary mt-4">
            <Link
              to="/products"
              className="bg-secondaryColor text-white lg:font-bold font-semibold lg:py-3 lg:px-5  py-2 px-4 rounded-sm hover:bg-primaryColor"
            >
              Explore our products
            </Link>
          </button>
        </div>
      </div>
      <div className="relative">
        <img src="https://i.postimg.cc/NMYfMhXZ/SLIDE-004.jpg" />
        <div className="absolute lg:top-[40%] top-[8%] lg:left-[100px] left-8">
          <p className=" text-white lg:text-4xl text-2xl font-bold">
            Unleash Your Full Potential <br /> With Premium Fitness Gear !
          </p>
          <button className="btn btn-primary mt-4">
            <Link
              to="/products"
              className="bg-secondaryColor text-white lg:font-bold font-semibold lg:py-3 lg:px-5  py-2 px-4 rounded-sm hover:bg-primaryColor"
            >
              Explore our products
            </Link>
          </button>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
