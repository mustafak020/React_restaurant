import React from "react";
import "./Menu.css";
import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";
import BreakfastImg from "../utils/img/breakfast.jpg";
import LunchImg from "../utils/img/lunch.jpg";
import DinnerImg from "../utils/img/dinner.jpg";
import DesertImg from "../utils/img/desert.jpg";

const breakfast = [
  {
    id: 1,
    name: "English Breakfast",
    description:
      "smoked bacon, sausage, tomato, mushrooms, black pudding, backed beans, eggs",
    price: "$12",
  },
  {
    id: 2,
    name: "Avacado toast",
    description: "peached egg, avacado, onion, tomatoes, bread",
    price: "$23",
  },
  {
    id: 3,
    name: "Burrito",
    description:
      "tortilla, egg, cheese, potatoes, pork meat, sausage, tomato, mushrooms, black pudding, backed beans, eggs",
    price: "$43",
  },
];

const lunch = [
  {
    id: 1,
    name: "Ceasar Salad",
    description: "chiken breast, romaine salad, lettuce, croutons, parpesan",
    price: "$32",
  },
  {
    id: 2,
    name: "spaghetti carbonara",
    description: "spagetti, pancetta, garlic, eggs, parmessan",
    price: "$20",
  },
  {
    id: 3,
    name: "pizza",
    description: "chorizo, italian salami, tomatos, mushrooms, olives",
    price: "$43",
  },
];
const dinner = [
  {
    id: 1,
    name: "Spicy Beef",
    description: "spicy beef, potatoes, carrots, cheese suace, spicies",
    price: "$42",
  },
  {
    id: 2,
    name: "spagatti Bologense",
    description: "onion, carrot, celery, minced meat, spafhetti, parmesan",
    price: "$22",
  },
  {
    id: 3,
    name: "chikpea curry",
    description:
      "opion, chikpea, garlic, mushrooms, tomatoes, spicestortilla, egg, cheese, potatoes, pork meat, sausage, tomato, mushrooms, black pudding, backed beans, eggs",
    price: "$21",
  },
];

const desert = [
  {
    id: 1,
    name: "lemon cake",
    description: "flour, sugar, baking powder, lemon",
    price: "$13",
  },
  {
    id: 2,
    name: "chnnamon Rolls",
    description: "floar, egg, cheese, cinnamon, yeast, sour crea, milk",
    price: "$32",
  },
  {
    id: 3,
    name: "vegan pancake",
    description: "flour, sugar, baking powder, soya milk, blueberries",
    price: "$8",
  },
];

function Menu() {
  return (
    <div className="menu-page">
      <header className="mt-5">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className="text-light">Menu</h1>
        </div>
      </header>
      <div className="breakfast my-5">
        <div className="container">
          <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">
            Breakfast
          </h2>
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                src={BreakfastImg}
                className="img-fluid w-75 mt-5 mt-lg-0"
                alt=""
              />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {breakfast.map((breakfast) => (
                <div key={breakfast.id}>
                  <Card className="border-0">
                    <CardBody>
                      <CardTitle className="text-center fs-3">
                        {breakfast.name}
                      </CardTitle>
                      <CardText className="text-center fs-5">
                        {breakfast.description}
                      </CardText>
                      <CardText className="text-center fs-3 fw-bold text-success">
                        {breakfast.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="lunch bg-dark text-light py-5">
        <div className="container">
          <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">
            Lunch
          </h2>
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {lunch.map((lunch) => (
                <div key={lunch.id}>
                  <Card className="border-0 bg-dark text-light">
                    <CardBody>
                      <CardTitle className="text-center fs-3">
                        {lunch.name}
                      </CardTitle>
                      <CardText className="text-center fs-5">
                        {lunch.description}
                      </CardText>
                      <CardText className="text-center fs-3 fw-bold text-success">
                        {lunch.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                src={LunchImg}
                className="img-fluid w-75 mt-5 mt-lg-0"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="dinner my-5">
        <div className="container">
          <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">
            dinner
          </h2>
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                src={DinnerImg}
                className="img-fluid w-75 mt-5 mt-lg-0"
                alt=""
              />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {dinner.map((dinner) => (
                <div key={dinner.id}>
                  <Card className="border-0">
                    <CardBody>
                      <CardTitle className="text-center fs-3">
                        {dinner.name}
                      </CardTitle>
                      <CardText className="text-center fs-5">
                        {dinner.description}
                      </CardText>
                      <CardText className="text-center fs-3 fw-bold text-success">
                        {dinner.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="desert bg-dark text-light py-5">
        <div className="container">
          <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">
            desert
          </h2>
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {desert.map((desert) => (
                <div key={desert.id}>
                  <Card className="border-0 bg-dark text-light">
                    <CardBody>
                      <CardTitle className="text-center fs-3">
                        {desert.name}
                      </CardTitle>
                      <CardText className="text-center fs-5">
                        {desert.description}
                      </CardText>
                      <CardText className="text-center fs-3 fw-bold text-success">
                        {desert.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                src={DesertImg}
                className="img-fluid w-75 mt-5 mt-lg-0"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
