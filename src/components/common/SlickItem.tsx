import { portfolio } from "@/utils/portfolio";
import React, { Component } from "react";
import Slider, { Settings } from "react-slick";

class MultipleItems extends Component<{}, { counter: number }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    const settings: Settings = {
      dots: true,
      infinite: true,
      speed: 7000,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
    };
    return (
      <div>
        <Slider {...settings}>
          {portfolio.map((item, idx) => (
            <div key={idx} className="  ">
              <div className="px-2">
                <img src={item.link} alt="" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default MultipleItems;
