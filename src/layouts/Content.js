import React, { Component } from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ItemImg from './img.svg';
import { MdLocationOn } from "react-icons/md";
import { MdAlarm } from "react-icons/md";

class Content extends Component {
  render() {
    return (
      <CardColumns>
        <Card>
          <Card.Img variant="top" src={ItemImg} />
          <Card.Body>
            <Card.Title>FREE MOVIE + $5 HAPPY HOUR SPECIALS + FREE POPCORN @The Soda Factory</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
             <MdAlarm /> Mon, 09 Dec · 5:00 pm
            </ListGroupItem>
            <ListGroupItem>
              <MdLocationOn /> Sydney, Australia
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Detail</Card.Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={ItemImg} />
          <Card.Body>
            <Card.Title>FREE MOVIE + $5 HAPPY HOUR SPECIALS + FREE POPCORN @The Soda Factory</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
             <MdAlarm /> Mon, 09 Dec · 5:00 pm
            </ListGroupItem>
            <ListGroupItem>
              <MdLocationOn /> Sydney, Australia
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Detail</Card.Link>
          </Card.Body>
        </Card>
      </CardColumns>
    );
  }
}

export default Content;
