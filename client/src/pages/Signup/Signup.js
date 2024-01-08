import { SignupForm } from '../../components/SignupForm/SignupForm'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer';
import { Container, Col, Row } from "react-bootstrap";


export const Signup = () => {
  return (
    <div>
        <Header/>
        <Container>
            <Row>
            <Col xs={12} sm={12} md={8} lg={8}>
                <SignupForm/>
            </Col>
            </Row>
        </Container>
        <Footer/>
    </div>
  );
}