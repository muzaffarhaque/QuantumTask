import React from "react";
import { CarouselBox, Header } from "../components";
import { Image } from "react-bootstrap";

import heroImage from "../assets/images/heroImage.png";
import featureFirstImage from "../assets/images/featureImage.png";
import featureSecImage from "../assets/images/featire2.png";
import featureThirdImage from "../assets/images/feature-3.png";
import product from "../assets/images/product.webp";
import contactUs from "../assets/images/contactUs.png";

export default function Home() {
  return (
    <section className="main-home-section">
      <Header />

      <div className="hero-section">
        <div className="container">
          <div className="main-hero-wrapper mb-wrap">
            <div className="hero-content">
              <h2 className="fs-34-28 text-primary fw-bold text-uppercase">
                WE Make Your idea's <br />{" "}
                <span className=" light-orange">INTO REALITY</span>{" "}
              </h2>
              <p className=" fs-14-12 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laudantium vero tenetur explicabo vitae sunt. Asperiores omnis,
                incidunt laboriosam tempore eos quos, culpa fuga nisi est
                repellat, perferendis nostrum. Totam, fuga.
              </p>
              <div className="d-flex align-items-center gap-3">
                <button className=" primary-btn">Get Started</button>
                <button className=" ghost-btn">Contact Us</button>
              </div>
            </div>
            <Image src={heroImage} alt="image" className="hero-image" />
          </div>
        </div>
      </div>

      <div className="feature-section">
        <h2 className="fx-28 fw-bold text-center">Feature</h2>
        <div className="container">
          <div className="feature-first-main-wrapper mb-wrap">
            <div className="w-51 d-flex align-items-center justify-content-center">
              <div className="blob-box">
                <Image src={featureFirstImage} alt="image" />
              </div>
            </div>
            <div className="w-51">
              <h6 className="fs-24-16 fw-semibold ">Card Title</h6>
              <p className="fs-16-13 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
                voluptas quas vel accusamus laborum mollitia, tenetur harum iste
                soluta.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="feature-section">
        {/* <h2 className='fx-28 fw-bold text-center'>Feature</h2> */}
        <div className="container">
          <div className="feature-first-main-wrapper flex-row-reverse feature-second-frame">
            <div className="w-51 d-flex align-items-center justify-content-center">
              <div className="blob-box">
                <Image src={featureSecImage} alt="image" />
              </div>
            </div>
            <div className="w-51">
              <h6 className="fs-24-16 fw-semibold ">Card Title</h6>
              <p className="fs-16-13 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
                voluptas quas vel accusamus laborum mollitia, tenetur harum iste
                soluta.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="feature-section">
        {/* <h2 className='fx-28 fw-bold text-center'>Feature</h2> */}
        <div className="container">
          <div className="feature-first-main-wrapper mb-wrap">
            <div className="w-51 d-flex align-items-center justify-content-center">
              <div className="blob-box">
                <Image src={featureThirdImage} alt="image" />
              </div>
            </div>
            <div className="w-51">
              <h6 className="fs-24-16 fw-semibold ">Card Title</h6>
              <p className="fs-16-13 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
                voluptas quas vel accusamus laborum mollitia, tenetur harum iste
                soluta.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="product-section">
        <h2 className="fx-28 fw-bold text-center">Product</h2>
        <div className="container">
          <div className="product-main-wrapper">
            {[1, 2, 3].map((ele, i) => {
              return (
                <div key={i} className="product-card">
                  <div className="image-box">
                    <Image src={product} alt="image" />
                  </div>
                  <div className="product-content">
                    <h6 className="fs-24-16 fw-semibold ">Product Title</h6>
                    <p className="fs-16-13 mb-0">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Fugit voluptas quas vel accusamus laborum mollitia,
                      tenetur harum iste soluta.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="carousel-section-frame">
        <h2 className="fx-28 fw-bold text-center mb-1">TESTIMONIAl</h2>
        <CarouselBox />
      </div>


      <div className="hero-section">
        <div className="container">
          <div className="main-hero-wrapper mb-wrap">
            <Image src={contactUs} alt="image" className="hero-image" />
            <div className="hero-content w-100">
              <div className="form-field-box w-100">
                <p className=" fs-18-16 mb-2 fw-semibold">Name</p>
                 <input type="text" className="input-box w-100 " placeholder="Name" />
              </div>
              <div className="form-field-box w-100 mt-3">
                <p className=" fs-18-16 mb-2 fw-semibold">Email</p>
                 <input type="email" className="input-box w-100 " placeholder="name@example.com" />
              </div>
              <div className="form-field-box w-100 mt-3">
                <p className=" fs-18-16 mb-2 fw-semibold">Example textArea</p>
                 <textarea rows={4} className="input-box w-100 " placeholder="" />
              </div>
              <div className="d-flex align-items-center gap-3 mt-4">
                <button className=" primary-btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
