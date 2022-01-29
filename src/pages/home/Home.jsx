import React from 'react';
import Header from '../../components/header/Header';
import {Container, Section} from './styled';

function Home() {
  return (
    <>
      <Header />
      <Container>
        <Section>
          <h5>
            <a>Hiring in a hurry? - </a>
          </h5>
          <p>
            Find talented pros in record time with Upwork and keep business
            moving.
          </p>
        </Section>
      </Container>
    </>
  );
}

export default Home;
