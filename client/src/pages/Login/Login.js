import { LoginForm } from '../../components/LoginForm/LoginForm'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer';
import { Container, Col, Row } from "react-bootstrap";


export const Login = () => {
  return (
    <div>
        <Header/>
        <Container>
            <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
                <LoginForm/>
            </Col>
            </Row>
        </Container>
        <Footer/>
    </div>
  );
}