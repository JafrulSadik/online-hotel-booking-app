"use client";
const AmenityItem = ({ icon: Icon, label, amenities, onSetAmenities }) => {
  const handleAmenities = () => {
    const aminity = amenities.find((aminity) => aminity === label);
    if (aminity) {
      onSetAmenities(amenities.filter((aminity) => aminity !== label));
    } else {
      onSetAmenities([...amenities, label]);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        className="accent-black"
        onChange={handleAmenities}
      />
      <div className="flex items-center gap-2 cursor-pointer">
        <Icon />
        <span>{label}</span>
      </div>
    </div>
  );
};

export default AmenityItem;
