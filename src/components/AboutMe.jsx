import React, { useEffect, useState } from 'react';
import { Card, ListGroup, ListGroupItem, Container, Row, Col, Button } from 'react-bootstrap';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const AboutMe = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const querySnapshot = await getDocs(collection(db, 'skills'));
      const dataArray = [];
      querySnapshot.forEach((doc) => {
        dataArray.push(doc.data());
      });
      setData(dataArray);
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Renderiza los datos obtenidos de la base de datos */}
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.category}</p>
          {/* Agrega otros datos que desees mostrar */}
        </div>
      ))}
    </div>
  );





  const [openFrontEnd, setOpenFrontEnd] = useState(false);
  const [openBackEnd, setOpenBackEnd] = useState(false);

  const toggleFrontEnd = () => setOpenFrontEnd(!openFrontEnd);
  const toggleBackEnd = () => setOpenBackEnd(!openBackEnd);


  return (
    <Container>
      <Row className="my-4">
        <Col xs={12} md={6}>
          <Card style={{ width: '100%' }}>
            <Card.Body>
              <Card.Title>Sobre mí</Card.Title>
              <Card.Text>
                Soy David Palazzi, Full Stack Developer
              </Card.Text>
            </Card.Body>
            <Card>
              <Card.Header>
                <Button
                  variant="link"
                  onClick={toggleFrontEnd}
                  aria-controls="front-end-collapse"
                  aria-expanded={openFrontEnd}
                >
                  Front End
                </Button>
              </Card.Header>
              <Card.Body id="front-end-collapse" style={{ display: openFrontEnd ? 'block' : 'none' }}>
                <ListGroup>
                  <ListGroupItem>HTML 5</ListGroupItem>
                  <ListGroupItem>CSS</ListGroupItem>
                  <ListGroupItem>JavaScript</ListGroupItem>
                  <ListGroupItem>React</ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <Button
                  variant="link"
                  onClick={toggleBackEnd}
                  aria-controls="back-end-collapse"
                  aria-expanded={openBackEnd}
                >
                  Backend
                </Button>
              </Card.Header>
              <Card.Body id="back-end-collapse" style={{ display: openBackEnd ? 'block' : 'none' }}>
                <ListGroup>
                  <ListGroupItem>Node</ListGroupItem>
                  <ListGroupItem>Express</ListGroupItem>
                  <ListGroupItem>MongoDB</ListGroupItem>
                  <ListGroupItem>JavaScript</ListGroupItem>
                  {/* Agrega aquí más habilidades */}
                </ListGroup>
              </Card.Body>
            </Card>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={myImage} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
  }

export default AboutMe;
