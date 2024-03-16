import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardFooter,
  CardTitle,
} from "react-bootstrap";
import "./Reviews.css";
import Person1 from "../utils/img/person1.png";

export function Reviews() {
  return (
    <div className="reviews-section container">
      <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Reviews</h2>
      <div className="row g-4">
        <div className="col-lg-6">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsam, non incidunt nesciunt placeat laudantium perferendis.
                </CardText>
              </div>
            </CardBody>
            <CardFooter className="d-flex align-items-center">
              <img
                src={Person1}
                className="img-fluid rounded-circle mx-3 shadow"
                alt=""
              />
              <CardTitle className="text-success">John Mike</CardTitle>
            </CardFooter>
          </Card>
        </div>
        <div className="col-lg-6">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Beatae, doloribus.
                </CardText>
              </div>
            </CardBody>
            <CardFooter className="d-flex align-items-center">
              <img
                src={Person1}
                className="img-fluid rounded-circle mx-3 shadow"
                alt=""
              />
              <CardTitle className="text-success">Mustafa Karimi</CardTitle>
            </CardFooter>
          </Card>
        </div>
        <div className="col-lg-6">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  officia porro dolores sequi? Commodi cupiditate facilis
                  molestiae animi omnis fuga!
                </CardText>
              </div>
            </CardBody>
            <CardFooter className="d-flex align-items-center">
              <img
                src={Person1}
                className="img-fluid rounded-circle mx-3 shadow"
                alt=""
              />
              <CardTitle className="text-success">Ahmad Mosa</CardTitle>
            </CardFooter>
          </Card>
        </div>
        <div className="col-lg-6">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quasi velit, cumque impedit maxime cupiditate inventore
                  aspernatur vel autem modi, cum quisquam, iusto amet laboriosam
                  incidunt.
                </CardText>
              </div>
            </CardBody>
            <CardFooter className="d-flex align-items-center">
              <img
                src={Person1}
                className="img-fluid rounded-circle mx-3 shadow"
                alt=""
              />
              <CardTitle className="text-success">Ali sena</CardTitle>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
