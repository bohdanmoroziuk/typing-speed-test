import { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => (
  <header className="header">
    <Container className="py-2">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1 className="text-center">{title}</h1>
        </Col>
      </Row>
    </Container>
  </header>
);

export default Header;
