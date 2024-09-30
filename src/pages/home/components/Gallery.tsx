const Gallery = () => {
  return (
    <div className="my-10">
      <div className="text-center my-4">
        <h2 className="text-4xl font-extrabold text-emerald-500">
          Image Gallery
        </h2>
        <p className="text-2xl font-bold text-fuchsia-500 mt-2">
          our healthy customers
        </p>
      </div>
      <div className="photo-gallery flex lg:flex-row flex-col gap-5 lg:px-auto px-4">
        <div className="column">
          <div className="photo">
            <img
              src="https://i.postimg.cc/tJws7ZDg/h1.webp"
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
          <div className="my-4">
            <img
              src="https://i.postimg.cc/D0P23SDD/h8.webp"
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
          <div className="photo">
            <img
              src="https://i.postimg.cc/HxGHJ01R/h10.webp"
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://i.postimg.cc/rwSDFp48/h4.webp"
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
          <div className="my-4">
            <img
              src="https://i.postimg.cc/KYWj0gSD/h5.webp"
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
          <div>
            <img
              src="https://i.postimg.cc/Sszs3NmF/h6.webp"
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://i.postimg.cc/m24DpsqJ/h7.webp"
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
          <div className="my-4">
            <img
              src="https://i.postimg.cc/Hs8JRzs8/h2.webp"
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
          <div>
            <img
              src="https://i.postimg.cc/dVxJFPHq/h9.webp"
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://i.postimg.cc/vThdSpxw/h12.jpg"
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
          <div className="my-4">
            <img
              src="https://i.postimg.cc/sgqC8Pxx/h15.jpg"
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
          <div>
            <img
              src="https://i.postimg.cc/Sszs3NmF/h6.webp"
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
