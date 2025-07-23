import React from "react";
import  "./homepage.scss";

const Homepage = () => {
  return (
    <div className="products-container">
      {/* <div className="hero-section" style={{backgroundImage: `url(./images/logo-6.jpg)`}}>
        <div className="hero-content">
          <p>فروش ویژه نوروز</p>
          <button>اطلاعات بیشتر</button>
        </div>
      </div> */}
      <section  className="hero" style={{backgroundImage: `url(/images/smart-bike.jpg)`}}>
        <div className="hero__overlay">
          <h1 className="hero__title">SmartBike Devices</h1>
          <p className="hero__subtitle">Ride smarter, ride safer</p>
          <button className="hero__btn">اطلاعات بیشتر</button>
        </div>
      </section>

      <div className="product-container">
        <div className="products__intro">
        <h2 className="product-title">Products</h2>
        <p>
          Placeholder text
          Lorem ipsum is a placeholder text commonly used in publishing and graphic design to demonstrate the visual form of a document or a
        </p>
        </div>

        <div className="products__cards">
          <div className="card card-left" style={{backgroundImage: `url(./images/card-1.jpg)`}}>
            <h3>CXX-p2</h3>
            <p>Placeholder text</p>
          </div>
          <div className="card card-right" style={{backgroundImage: `url(./images/card-2.jpg)`}}>
            <h3>CXX-ASX</h3>
            <p>Placeholder text</p>
          </div>
        </div>
      </div>

      <div className="products__info">
        <div className="info__container">
          <div className="info__cards">
            <div className="info__box">
            </div>
          </div>
          <div className="info__cards">
            <div className="info__box"></div>
          </div>
          <div className="info__cards">
            <div className="info__box"></div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Homepage;