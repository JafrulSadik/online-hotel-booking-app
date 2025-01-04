const ImageGallery = ({ images }) => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4 mb-8 h-[500px]">
      <div className="col-span-2 row-span-2">
        <img
          src={images[0]}
          alt="Main Room"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <img
          src={images[1]}
          alt="Room 1"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <img
          src={images[2]}
          alt="Room 2"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <img
          src={images[3]}
          alt="Room 3"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <img
          src={images[4]}
          alt="Room 4"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
