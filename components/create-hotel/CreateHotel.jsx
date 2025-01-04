"use client";
import { useState } from "react";
import { FaBed, FaDoorOpen, FaPerson } from "react-icons/fa6";
import Amenities from "./Amenities";
import EditableField from "./EditableField";
import ImageGellery from "./ImageGellery";
import Publish from "./Publish";

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

  const onSetImages = (index, link) => {
    const newImages = [...images];
    newImages[index] = link;
    setImages(newImages);
  };

  const handleEditClick = (field) => {
    setEditField(field);
  };

  const handleSave = (field, value) => {
    setHotelInfo({ ...hotelInfo, [field]: value });
    setEditField(null);
  };

  return (
    <>
      <Publish
        images={images}
        hotelInfo={hotelInfo}
        session={session}
        lang={lang}
      />

      <div className="mb-6">
        <span className="flex items-center">
          <EditableField
            key={"name"}
            fieldKey={"name"}
            value={hotelInfo.name}
            isEditing={editField === "name"}
            onEdit={handleEditClick}
            onSave={handleSave}
          >
            <h1
              className="text-3xl font-bold mb-2 text-zinc-500 edit"
              id="propertyName"
            >
              {hotelInfo.name || "Property Name"}
            </h1>
          </EditableField>
        </span>
        <div className="flex items-center text-gray-600">
          <EditableField
            key={"location"}
            fieldKey={"location"}
            value={hotelInfo.location}
            isEditing={editField === "location"}
            onEdit={handleEditClick}
            onSave={handleSave}
          >
            <span className="edit text-gray-600">
              {hotelInfo.location || "Property location"}{" "}
            </span>
          </EditableField>
        </div>
      </div>

      <ImageGellery images={images} onSetImages={onSetImages} />

      <div className="flex mb-4 gap-2">
        <div className="flex items-center space-x-3">
          <EditableField
            key={"price"}
            type={"number"}
            min={1}
            fieldKey={"price"}
            value={hotelInfo.price}
            isEditing={editField === "price"}
            onEdit={handleEditClick}
            onSave={handleSave}
          >
            <span className="text-xl font-bold text-gray-500">
              {hotelInfo.price ? hotelInfo.price + "$" : "Price in USD"}
            </span>
          </EditableField>
        </div>
        <span className="text-gray-500 ml-1">per night</span>
      </div>

      <div className="flex items-center mb-4 text-gray-500">
        {/* <!-- Stock --> */}
        <EditableField
          key={"rooms"}
          fieldKey={"rooms"}
          type={"number"}
          min={1}
          value={hotelInfo.rooms}
          isEditing={editField === "rooms"}
          onEdit={handleEditClick}
          onSave={handleSave}
        >
          <span>
            {hotelInfo.rooms
              ? `Available ${hotelInfo.rooms} rooms`
              : "Available X rooms"}
          </span>
        </EditableField>
      </div>

      {/* <!-- Property Details --> */}
      <div className="grid grid-cols-3 gap-8 text-gray-500">
        {/* <!-- Left Column: Property Description --> */}
        <div className="col-span-2">
          <div className="border-b pb-6 mb-6">
            <div className="grid grid-cols-1 gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <FaPerson />
                <EditableField
                  key={"guests"}
                  fieldKey={"guests"}
                  type={"number"}
                  min={1}
                  value={hotelInfo.guests}
                  isEditing={editField === "guests"}
                  onEdit={handleEditClick}
                  onSave={handleSave}
                >
                  <span>{hotelInfo.guests || "How many Guest can Stay?"}</span>
                </EditableField>
              </div>
              <div className="flex items-center gap-2">
                <FaDoorOpen />
                <EditableField
                  key={"bedrooms"}
                  fieldKey={"bedrooms"}
                  type={"number"}
                  min={1}
                  value={hotelInfo.bedrooms}
                  isEditing={editField === "bedrooms"}
                  onEdit={handleEditClick}
                  onSave={handleSave}
                >
                  <span>{hotelInfo.bedrooms || "How many Bedrooms ?"} </span>
                </EditableField>
              </div>
              <div className="flex items-center gap-2">
                <FaBed />
                <EditableField
                  key={"beds"}
                  fieldKey={"beds"}
                  type={"number"}
                  min={1}
                  value={hotelInfo.beds}
                  isEditing={editField === "beds"}
                  onEdit={handleEditClick}
                  onSave={handleSave}
                >
                  <span>{hotelInfo.beds || "How many beds available ?"}</span>
                </EditableField>
              </div>
            </div>
          </div>

          {/* <!-- Description --> */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">About this place</h3>
            <div className="flex items-center">
              <EditableField
                key={"description"}
                fieldKey={"description"}
                value={hotelInfo.description}
                isEditing={editField === "description"}
                onEdit={handleEditClick}
                onSave={handleSave}
                textarea={true}
              >
                <p className="text-gray-600 leading-relaxed edit">
                  {!hotelInfo.description
                    ? "Write a short description about this place"
                    : hotelInfo.description}
                </p>
              </EditableField>
            </div>
          </div>

          {/* <!-- Amenities --> */}
          <Amenities />
        </div>
      </div>
    </>
  );
};

export default CreateHotel;
