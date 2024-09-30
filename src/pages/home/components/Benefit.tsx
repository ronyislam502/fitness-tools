const benefitsData = [
  {
    title: "High Quality",
    description: "Our products are made with the highest quality materials.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH28LpcMvGBljGtKzH4BbkXDpvz8dLoao3gg&s",
  },
  {
    title: "Affordable Prices",
    description: "We offer competitive prices on all our products.",
    image:
      "https://plus.unsplash.com/premium_photo-1682310152051-5d6f901b19b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QWZmb3JkYWJsZSUyMFByaWNlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Fast Shipping",
    description: "Enjoy fast and reliable shipping on all orders.",
    image:
      "https://img.freepik.com/premium-vector/fast-shipping-logo_10250-3101.jpg",
  },
  {
    title: "Customer Support",
    description: "Our team is here to help you 24/7 with any inquiries.",
    image:
      "https://cdn.educba.com/academy/wp-content/uploads/2017/02/Customer-Support-1.jpg",
  },
];

const Benefit = () => {
  return (
    <>
      <div className="my-8">
        <h2 className="text-4xl text-center font-extrabold mb-6 russo-one-regular text-emerald-500 mt-16">
          Benefits of our product
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-16">
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              className="text-center bg-white border border-emerald-500 p-4 rounded-lg lg:w-[500px] lg:mx-auto"
            >
              <img
                src={benefit.image}
                alt={benefit.title}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-bold text-black">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Benefit;
