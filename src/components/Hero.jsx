import React from "react";

function Hero() {
  return (
    <section className="d-flex flex-column justify-content-between" id="hero">
      <div id="hero-top">
        <nav className="navbar navbar-light navbar-expand-md">
          <div className="container-fluid">
            <a className="navbar-brand" id="logo" href="#"></a>
            <button
              data-bs-toggle="collapse"
              className="navbar-toggler"
              data-bs-target="#navcol-1"
            >
              <span className="visually-hidden">Toggle navigation</span>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Model X
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Model S
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Model 3
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Roadster
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Energy
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Sign In
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <h1 className="text-center" id="title">
          Tesla
        </h1>
        <h2
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="750"
          data-aos-once="true"
          id="subtitle"
        >
          Roadster
        </h2>
      </div>
      <div id="hero-bottom">
        <div className="container">
          <div className="row">
            <div
              className="col-8 offset-2"
              data-aos="fade-up"
              data-aos-duration="750"
              data-aos-once="true"
            >
              <p>
                Lorem Ipsum&nbsp;is simply dummy text of the printing and
                typesetting industry.&nbsp;
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col" data-aos="fade-up" data-aos-delay="50">
              <p className="p-top">
                <i className="icon ion-speedometer"></i>&nbsp;1.9s
              </p>
              <p className="p-down" style={{ fontSize: "13px" }}>
                0-60 mph
              </p>
            </div>
            <div
              className="col col-border"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <p className="p-top">+250mph</p>
              <p className="p-down" style={{ fontSize: "13px" }}>
                Top Speed
              </p>
            </div>
            <div
              className="col col-border"
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-once="true"
            >
              <p className="p-top">620mi</p>
              <p className="p-down" style={{ fontSize: "13px" }}>
                Mile Range
              </p>
            </div>
            <div
              className="col align-self-center"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <button className="btn btn-primary reverse-btn" type="button">
                Reserve Now
              </button>
            </div>
          </div>
          <div className="row g-0 arrow-button">
            <div className="col offset-0">
              <button className="btn btn-link arrow-button" type="button">
                <i
                  className="icon ion-ios-arrow-down arrow-icon"
                  style={{ fontSize: "32px", color: "var(--bs-light)" }}
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="250"
                  data-aos-once="true"
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
