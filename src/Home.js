import React from "react";
import MyNavbar from "./Navbar";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "./img/slide1.png";
import Slide2 from "./img/slide2.webp";
import Slide3 from "./img/slide3.jpeg";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import Cards1 from "./img/cards1.png";
import Cards2 from "./img/cards2.png";
import Cards3 from "./img/cards3.png";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Home() {
  return (
    <div>
      <MyNavbar />
      <div className="home">
        <LeftSide />
        {/*<Profile ekle, documentation page olustur, our team, cardlar, adversiement */}
        <div className="mitte">
          <MyCarousel />
          <Cards />
        </div>
        <RightSide />
      </div>
    </div>
  );
}

function MyCarousel() {
  return (
    <Carousel classname="carousel">
      <Carousel.Item>
        <img className="d-block w-100" src={Slide1} alt="_" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Slide2} alt="_" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Slide3} alt="_" />
      </Carousel.Item>
    </Carousel>
  );
}

function Cards() {
  return (
    <CardGroup className="cards">
      <Card className="card">
        <Card.Img variant="top" src={Cards1} />
        <Card.Body>
          <Card.Title className="title">Simple</Card.Title>
          <Card.Text className="parag">
            Includes utilities to simplify common use cases like store setup,
            creating reducers, immutable update logic, and more.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Go to <a href="https://redux-toolkit.js.org/">Redux Page</a>
          </small>
        </Card.Footer>
      </Card>
      <Card className="card">
        <Card.Img variant="top" src={Cards2} />
        <Card.Body>
          <Card.Title className="title">Opinionated</Card.Title>
          <Card.Text className="parag">
            Provides good defaults for store setup out of the box, and includes
            the most commonly used Redux addons built-in.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Go to <a href="https://redux-toolkit.js.org/">Redux Page</a>
          </small>
        </Card.Footer>
      </Card>
      <Card className="card">
        <Card.Img variant="top" src={Cards3} />
        <Card.Body>
          <Card.Title className="title">Powerful</Card.Title>
          <Card.Text className="parag">
            Takes inspiration from libraries like Immer and Autodux to let you
            write "mutative" immutable update logic, and even create entire
            "slices" of state automatically.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Go to <a href="https://redux-toolkit.js.org/">Redux Page</a>
          </small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Home;
