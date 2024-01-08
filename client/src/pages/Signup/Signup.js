import { SignupForm } from '../../components/SignupForm/SignupForm'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer';
import { Container, Col, Row } from "react-bootstrap";
import { LoginForm } from '../../components/LoginForm/LoginForm';


export const Signup = () => {
  return (
    <div>
        <Header/>
        <Container>
            <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
                <SignupForm/>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
                <LoginForm/>
            </Col>
            </Row>
        </Container>
        <Footer/>
    </div>
  );
}