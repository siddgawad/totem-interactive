import React from "react";
import galleryImage from "../../assets/aboutassets/gallery.png";

const ResponsiveImageGallery = () => {
  return (
    <div className="w-full pt-16 sm:pt-20 md:pt-24 lg:pt-32">
      <div className=" w-full h-0 pb-[56.25%]">
        {" "}
        {/* 16:9 aspect ratio */}
        <img
          src={galleryImage}
          alt="Image Gallery"
          className="absolute top-0 left-0 w-full h-full object-contain rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default ResponsiveImageGallery;
