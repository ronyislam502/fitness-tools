import { Link } from "react-router-dom";

const categories = [
  {
    image: "https://i.postimg.cc/FRcWTqnF/Dumbbells.webp",
    label: "Cardio Equipment",
  },
  {
    image: "https://i.postimg.cc/PJj694BW/Exercise-Bikes.png",
    label: "Strength Training",
  },
  {
    image: "https://i.postimg.cc/GtxMCDCZ/Kettlebells.png",
    label: "Yoga & Pilates",
  },
  {
    image: "https://i.postimg.cc/m2TXSm3R/Power-Racks.png",
    label: "Fitness Accessories",
  },
  {
    image: "https://i.postimg.cc/hPMCZVMm/Treadmills.png",
    label: "Home Gym Equipment",
  },
  {
    image: "https://i.postimg.cc/T3wtzhH4/Weight-Benches.png",
    label: "Recovery & Wellness",
  },
];

const Categories = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-5">
        {categories.map((category, index) => (
          <Link
            to={"/products"}
            state={category.label}
            key={index}
            className="card flex flex-col gap-y-3 items-center justify-center rounded-lg p-5 border border-emerald-500"
          >
            <img
              src={category.image}
              alt={category.label}
              className="w-[250px]"
            />
            <p className="text-xl font-bold text-black">{category.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
