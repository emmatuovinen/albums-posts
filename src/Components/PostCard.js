import React from "react";
import { Link } from "react-router-dom";
import { Card, CardTitle, Col, Row, CardBody } from "reactstrap";

const PostCard = props => {
  const postUrl = `comments/${props.id}`;

  return (
    <Col xs={12} md={12} lg={6}>
      <Row>
        <Card className="cardBody">
          <Link to={postUrl}>
            <CardBody>
              <CardTitle className="cardStyle">{props.title}</CardTitle>
            </CardBody>
          </Link>
        </Card>
      </Row>
    </Col>
  );
};

export default PostCard;
