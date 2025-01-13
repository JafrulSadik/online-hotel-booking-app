"use client";

import { useState } from "react";
import { FaBed, FaDoorOpen, FaPerson } from "react-icons/fa6";
import Amenities from "./Amenities";
import EditableField from "./EditableFieldOne";
import ImageGellery from "./ImageGellery";
import Publish from "./Publish";

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
  },
  {
    key: "bedrooms",
    label: "How many bedrooms?",
    type: "number",
    icon: <FaDoorOpen />,
  },
  {
    key: "beds",
    label: "How many beds available?",
    type: "number",
    icon: <FaBed />,
  },
];

const CreateHotel = ({ session, lang }) => {
  const [hotelInfo, setHotelInfo] = useState({
    name: "",
    location: "",
    price: "",
    rooms: "",
    bedrooms: "",
    beds: "",
    description: "",
  });
  const [images, setImages] = useState(["", "", "", "", ""]);
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
      <Publish
        images={images}
        hotelInfo={hotelInfo}
        session={session}
        lang={lang}
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
            <h1 className="text-3xl font-bold mb-2 text-zinc-500">
              {hotelInfo[key] || label}
            </h1>
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
              <span>
                {hotelInfo[key] || label} {suffix}
              </span>
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

      {/* Amenities */}
      <Amenities />
    </>
  );
};

export default CreateHotel;
