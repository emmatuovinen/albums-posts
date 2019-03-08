import React from "react";
import { Link } from "react-router-dom";
import { Card, CardTitle, CardBody, Col, Row } from "reactstrap";

const AlbumCard = props => {
  const albumUrl = `photos/${props.id}`;

  return (
    <Col xs={12} md={12} lg={6}>
      <Row>
        <Card className="cardBody">
          <Link to={albumUrl}>
            <CardBody>
              <CardTitle className="cardStyle">{props.title}</CardTitle>
            </CardBody>
          </Link>
        </Card>
      </Row>
    </Col>
  );
};

export default AlbumCard;
