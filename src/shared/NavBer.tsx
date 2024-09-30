import { Link } from "react-router-dom";

const Navbar = () => {
  //   const cart = useAppSelector((state) => state.cart);
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
      path: "/about-us",
      name: "About",
    },
  ];
  return (
    <div className="navbar max-w-screen-xl fixed z-10 bg-opacity-30 text-white bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  z-[1] shadow rounded-box text-base font-medium mt-3 w-52 p-2"
          >
            {links?.map((menu, idx) => (
              <Link key={idx} to={menu?.path}>
                {menu?.name}
              </Link>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <span className="text-amber-400">FITNESS TOOLS</span>
        </a>
      </div>
      <div className="navbar-center hidden mx-4 lg:flex ">
        <ul className="menu menu-horizontal lg:gap-4 font-medium text-xl">
          {links?.map((menu, idx) => (
            <Link key={idx} to={menu?.path}>
              {menu?.name}
            </Link>
          ))}
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
