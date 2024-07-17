import { Image } from "antd";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import user from "../assets/images/feature-3.png";
import user1 from "../assets/images/usrr1.avif";
import user2 from "../assets/images/user2.avif";
import user3 from "../assets/images/user3.avif";
export default function CarouselBox() {
  return (
    <div className="carousel-main-wrapper">
      <Carousel>
        {[,user1,user2,user,user3].map((ele, i) => {
          return (
            <Carousel.Item key={i}>
              <div className="carouser-card-frame">
                <div className="image-box text-center">
                  <Image src={ele} alt="image" />
                </div>
                <p className=" fs-18-14 text-center mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente tempora placeat, molestias aspernatur sit ea nesciunt
                  at in optio delectus! Fugit cum ipsa excepturi cumque
                  adipisci, a rerum? Modi, beatae!
                </p>
                <h6 className=" fs-18-14 text-center">
                  {" "}
                  <span className="">Pulla Willson</span> , Media Analysis
                </h6>
              </div>

              {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
