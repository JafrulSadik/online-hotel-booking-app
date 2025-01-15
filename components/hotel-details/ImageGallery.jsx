import Image from "next/image";

const ImageGallery = ({ images }) => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4 mb-8 h-[500px]">
      <div className="col-span-2 row-span-2">
        <Image
          src={images[0]}
          alt="Main Room"
          height={500}
          width={700}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <Image
          src={images[1]}
          alt="Room 1"
          height={500}
          width={700}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <Image
          height={500}
          width={700}
          src={images[2]}
          alt="Room 2"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <Image
          src={images[3]}
          height={500}
          width={700}
          alt="Room 3"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <Image
          src={images[4]}
          height={500}
          width={700}
          alt="Room 4"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
