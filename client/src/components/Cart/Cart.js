import { Component, Fragment } from 'react';
import {Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Alert, Container} from 'reactstrap';

function Cart (props) {

    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems?.reduce((a, c) => a + c.price * c.qty, 0);

    return (
        <section className="h-100" style={{ backgroundColor: "#eee" }}>
           <Fragment>
                {cartItems?.length === 0 && <Alert color="info" className="text-center">Your cart is empty!</Alert>}
            </Fragment>
            <Container className="py-5 h-100">
                <div className="justify-content-center align-items-center h-100">
                        <div key={cartItems?.id} >
                        {cartItems?.map((item)=>(
                            <Card className="rounded-3 mb-4">
                                <CardBody className="p-4">
                                    <CardTitle tag="h5">{item.title}</CardTitle>
                                    <CardSubtitle tag="h6">€ {item.price}</CardSubtitle>
                                    <CardText>Quantity - {item.qty} x €{item.price}</CardText>
                                    <Button className="add" onClick={() => onAdd(item)}>+</Button>
                                    <Button className="remove" onClick={() => onRemove(item)}>-</Button>
                                </CardBody>
                            </Card>
                        ))}
                            <br/>
                            {cartItems?.length !== 0 && (
                                <>
                                    <hr></hr>
                                    <Card className="rounded-3 mb-4">
                                        <CardBody className="p-4">
                                            <CardTitle tag="h5">Totale</CardTitle>
                                            <CardSubtitle tag="h6"> €{itemsPrice}</CardSubtitle>
                                        </CardBody>
                                        <Button onClick={() => alert('I prodotti visualizzati non sono ancora disponibili')}>Checkout</Button>
                                    </Card>
                                </>
                            )}
                        </div>
                </div>
            </Container>
        </section>
    )
}

export default Cart