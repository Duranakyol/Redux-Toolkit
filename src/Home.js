import React from "react";
import MyNavbar from "./Navbar";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "./img/slide1.png";
import Slide2 from "./img/slide2.webp";
import Slide3 from "./img/slide3.jpeg";

function Home() {
  return (
    <div className="home">
      <MyNavbar />
      {/*<Profile ekle, documentation page olustur, our team, cardlar, adversiement */}
      <div className="carousel">
        <UncontrolledExample />
      </div>
    </div>
  );
}

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={Slide1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Slide2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Slide3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
