import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Form, Container } from 'react-bootstrap';

const App = () => {
  return (
    <Container className="p-3">
      <h1 className="header">Ogden's Basic English Spell Checker</h1>
      <Form onSubmit={() => {}}>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Control size="lg" type="text" placeholder="Enter any word!" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default App;
