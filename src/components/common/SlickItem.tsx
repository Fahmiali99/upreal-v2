import { portfolio } from "@/utils/portfolio";
import React, { Component, useState } from "react";
import Slider from "react-slick";
import Modal from "./Modal";

interface MultipleItemsProps {
  handleOpen: () => void;
}

type Settings = {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
};

function SlickItem() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  const handleImageClick = (image: any) => {
    setSelectedImage(image);
    setIsOpen(!isOpen);
  };

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 10000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {portfolio.map((item, idx) => {
          return (
            <button
              key={idx}
              onClick={() => handleImageClick(item)}
              className="block text-white  focus:ring-4  font-medium rounded-lg text-sm py-2.5 text-center "
              type="button"
            >
              <div className="px-2">
                <img src={item.link} alt="" />
              </div>
            </button>
          );
        })}
      </Slider>
      <Modal open={isOpen} handleClose={handleClose} image={selectedImage} />
    </div>
  );
}

export default SlickItem;
