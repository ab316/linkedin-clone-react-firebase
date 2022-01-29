import React from 'react';
import Header from '../../components/header/Header';
import LeftSide from '../../components/leftside/LeftSide';
import Main from '../../components/main/Main';
import RightSide from '../../components/rightside/RightSide';
import {Container, Layout, Section} from './styled';

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

        <Layout>
          <LeftSide />
          <Main />
          <RightSide />
        </Layout>
      </Container>
    </>
  );
}

export default Home;
