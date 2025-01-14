const { default: Rating } = require("./Rating");

const PropertyHeader = ({ name, location, rating, totalReviews }) => {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold mb-2">{name}</h1>
      <div className="flex items-center">
        <Rating rating={rating} totalReviews={totalReviews} />
        <span className="mx-2">·</span>
        <span>{location}</span>
      </div>
    </div>
  );
};
export default PropertyHeader;
