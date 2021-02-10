import { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Header from 'components/Header';
import TypingTest from 'components/TypingTest';

const App: FC = () => (
  <div className="app">
    <Header title="Typing-Speed Test" />
    <main>
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <TypingTest />
          </Col>
        </Row>
      </Container>
    </main>
  </div>
);

export default App;
