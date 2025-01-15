"use client";

import { useState } from "react";
import { FaBed, FaDoorOpen, FaPerson } from "react-icons/fa6";
import Amenities from "../create-hotel/Amenities";
import EditableField from "../create-hotel/EditableField";
import ImageGellery from "../create-hotel/ImageGellery";
import Update from "./Update";

const FIELD_CONFIG = [
  { key: "name", label: "Property Name", type: "text" },
  { key: "location", label: "Property Location", type: "text" },
  { key: "price", label: "Price in USD", type: "number", suffix: "$/night" },
  { key: "rooms", label: "Available X rooms", type: "number" },
  {
    key: "guests",
    label: "How many guests can stay?",
    type: "number",
    icon: <FaPerson />,
    suffix: "guests",
  },
  {
    key: "bedrooms",
    label: "How many bedrooms?",
    type: "number",
    icon: <FaDoorOpen />,
    suffix: "bedrooms",
  },
  {
    key: "beds",
    label: "How many beds available?",
    type: "number",
    icon: <FaBed />,
    suffix: "beds",
  },
];

const UpdateHotel = ({ session, lang, hotel, hotelId }) => {
  const {
    name,
    location,
    price,
    rooms,
    bedrooms,
    beds,
    description,
    amenities: hotelAmenities,
    images: hotelImages,
  } = JSON.parse(hotel);

  const [hotelInfo, setHotelInfo] = useState({
    name,
    location,
    price,
    rooms,
    bedrooms,
    beds,
    description,
  });

  const [images, setImages] = useState([...hotelImages]);
  const [amenities, setAmenities] = useState([...hotelAmenities]);
  const [editField, setEditField] = useState(null);

  const handleSave = (field, value) => {
    setHotelInfo((prev) => ({ ...prev, [field]: value }));
    setEditField(null);
  };

  const onSetImages = (index, link) => {
    const newImages = [...images];
    newImages[index] = link;
    setImages(newImages);
  };

  return (
    <>
      <Update
        images={images}
        amenities={amenities}
        hotelInfo={hotelInfo}
        session={session}
        lang={lang}
        hotelId={hotelId}
      />

      {/* Hotel Information */}
      <div className="mb-6">
        {FIELD_CONFIG.slice(0, 2).map(({ key, label, type }) => (
          <EditableField
            key={key}
            fieldKey={key}
            value={hotelInfo[key]}
            type={type}
            isEditing={editField === key}
            onEdit={setEditField}
            onSave={handleSave}
          >
            {key === "name" && (
              <h1 className="text-3xl font-bold mb-2 text-zinc-500">
                {hotelInfo[key] || label}
              </h1>
            )}

            {key === "location" && (
              <span className="edit text-gray-600">
                {hotelInfo.location || "Property location"}{" "}
              </span>
            )}
          </EditableField>
        ))}
      </div>

      {/* Image Gallery */}
      <ImageGellery images={images} onSetImages={onSetImages} />

      {/* Other Fields */}
      <div className="mb-4 grid grid-cols-1 gap-4">
        {FIELD_CONFIG.slice(2).map(({ key, label, type, suffix, icon }) => (
          <div className="flex items-center gap-2 text-gray-500" key={key}>
            {icon}
            <EditableField
              fieldKey={key}
              value={hotelInfo[key]}
              type={type}
              isEditing={editField === key}
              onEdit={setEditField}
              onSave={handleSave}
            >
              {key !== "price" && key !== "rooms" && (
                <span>
                  {hotelInfo[key] || label} {suffix}
                </span>
              )}

              {key === "rooms" && (
                <span className="text-gray-500">
                  {`Available ${hotelInfo[key] || "X"} rooms`}
                </span>
              )}

              {key === "price" && (
                <>
                  <span className="text-xl font-bold text-gray-500">
                    {hotelInfo[key] ? hotelInfo[key] + "$" : "Price in USD"}
                  </span>
                  <span> per night</span>
                </>
              )}
            </EditableField>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">About this place</h3>
        <EditableField
          key="description"
          fieldKey="description"
          value={hotelInfo.description}
          isEditing={editField === "description"}
          onEdit={setEditField}
          onSave={handleSave}
          textarea
        >
          <p className="text-gray-600 leading-relaxed">
            {hotelInfo.description ||
              "Write a short description about this place"}
          </p>
        </EditableField>
      </div>
      <Amenities amenities={amenities} onSetAmenities={setAmenities} />
    </>
  );
};

export default UpdateHotel;
