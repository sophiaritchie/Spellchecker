import React, { ChangeEvent, FormEvent, useState } from 'react';

import Button from 'react-bootstrap/Button';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Form, Container } from 'react-bootstrap';

const App = () => {
  const [word, setWord] = useState('');

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    console.log(e);
    e.preventDefault();
    setWord(e.currentTarget.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const apiUrl = `http://localhost:3001?${word}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  }
  return (
    <Container className="p-3">
      <h1 className="header">Ogden&apos;s Basic English Spell Checker</h1>
      <Form
        onSubmit={() => {
          handleSubmit;
        }}
      >
        <Form.Group className="mb-3" controlId="wordInput">
          <Form.Control
            size="lg"
            type="text"
            placeholder="Enter any word!"
            onChange={() => handleInput}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
export default App;
