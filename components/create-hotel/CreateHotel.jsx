"use client";
import { useState } from "react";
import { FaPencilAlt, FaSave } from "react-icons/fa";
import { FaBed, FaDoorOpen, FaPerson } from "react-icons/fa6";
import ImageGellery from "./ImageGellery";

const CreateHotel = () => {
  const [hotel, setHotel] = useState({
    name: "",
    location: "",
    price: "",
    rooms: "",
    bedrooms: "",
    beds: "",
    description: "",
  });

  const [images, setImages] = useState([]);

  return (
    <>
      <button className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:brightness-90 absolute top-4 right-4">
        <FaSave className="mr-2" />
        Publish
      </button>
      {/* <!-- Property Title and Rating --> */}
      <div className="mb-6">
        <span className="flex items-center">
          <h1
            className="text-3xl font-bold mb-2 text-zinc-500 edit"
            id="propertyName"
          >
            {hotel.name || "Property Name"}
          </h1>
          <FaPencilAlt className="text-gray-400 size-4 ml-3 cursor-pointer text-sm hover:scale-110 transition-all" />
        </span>
        <div className="flex items-center text-gray-600">
          <span className="edit text-gray-600">
            {hotel.location || "Property location"}{" "}
          </span>
          <FaPencilAlt className="text-gray-400 size-4 ml-3 cursor-pointer text-sm hover:scale-110 transition-all" />
        </div>
      </div>

      <ImageGellery />

      <div className="flex mb-4 gap-2">
        <div className="flex items-center space-x-3">
          <span className="text-xl font-bold text-gray-500">
            {hotel.price ? hotel.price + "$" : "Price in USD"}
          </span>
          <FaPencilAlt className="text-gray-400 size-4  cursor-pointer text-sm hover:scale-110 transition-all" />
        </div>
        <span className="text-gray-500 ml-1">per night</span>
      </div>

      <div className="flex items-center mb-4 text-gray-500">
        {/* <!-- Stock --> */}
        <span>
          {hotel.rooms ? `Available ${hotel.rooms} rooms` : "Available X rooms"}
        </span>
        <FaPencilAlt className="text-gray-400 size-4 ml-3 cursor-pointer text-sm hover:scale-110 transition-all" />
      </div>

      {/* <!-- Property Details --> */}
      <div className="grid grid-cols-3 gap-8 text-gray-500">
        {/* <!-- Left Column: Property Description --> */}
        <div className="col-span-2">
          <div className="border-b pb-6 mb-6">
            <div className="grid grid-cols-1 gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <FaPerson />
                <span>{hotel.guests || "How many Guest can Stay?"}</span>
                <FaPencilAlt className="text-gray-400 size-4 ml-3 cursor-pointer text-sm hover:scale-110 transition-all" />
              </div>
              <div className="flex items-center gap-2">
                <FaDoorOpen />
                <span>{hotel.bedrooms || "How many Bedrooms ?"} </span>
                <FaPencilAlt className="text-gray-400 size-4 ml-3 cursor-pointer text-sm hover:scale-110 transition-all" />
              </div>
              <div className="flex items-center gap-2">
                <FaBed />
                <span>{hotel.beds || "How many beds available ?"}</span>
                <FaPencilAlt className="text-gray-400 size-4 ml-3 cursor-pointer text-sm hover:scale-110 transition-all" />
              </div>
            </div>
          </div>

          {/* <!-- Description --> */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">About this place</h3>
            <div className="flex items-center">
              <p className="text-gray-600 leading-relaxed edit">
                Write a short description about this place
              </p>
              <FaPencilAlt className="text-gray-400 size-4 ml-3 cursor-pointer text-sm hover:scale-110 transition-all" />
            </div>
          </div>

          {/* <!-- Amenities --> */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              What this place offers
            </h3>
            <div className="grid grid-cols-2 gap-4" id="amenities">
              <div className="flex items-center gap-2 cursor-pointer">
                <i className="fa-solid fa-umbrella-beach"></i>
                <span>Beach access</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <i className="fa-solid fa-person-swimming"></i>
                <span>Private pool</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <i className="fa-solid fa-wifi"></i>
                <span>Free Wi-Fi</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <i className="fa-solid fa-sink"></i>
                <span>Kitchen</span>
              </div>

              <div className="flex items-center gap-2 cursor-pointer">
                <i className="fa-solid fa-square-parking"></i>
                <span>Free Parking</span>
              </div>

              <div className="flex items-center gap-2 cursor-pointer">
                <i className="fa-solid fa-dumbbell"></i>
                <span>Fitness Center</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateHotel;
