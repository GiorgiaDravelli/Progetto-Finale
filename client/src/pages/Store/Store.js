import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Alert} from 'reactstrap';
import Cart from '../../components/Cart/Cart'
import CartHeader from '../../components/CartHeader/CartHeader'
import './Store.css';


const Store = () => {

    const token = localStorage.getItem('token')
    const id = localStorage.getItem('id')

    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [loading, setLoading] = useState(false)

    const onAdd = (item) => {
        const exist = cartItems.find(x => x.title === item.title);
        if(exist) {
            setCartItems(cartItems.map(x => x.title === item.title ? {...exist, qty: exist.qty + 1} : x ))
        } else {
            setCartItems([...cartItems, {...item, qty: 1}])
        }
        console.log(cartItems[0])
    };
    const onRemove = (item) => {
        const exist = cartItems.find(x => x.title === item.title);
        if(exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.title !== item.title));
        } else {
            setCartItems(cartItems.map(x => x.title === item.title ? {...exist, qty: exist.qty - 1} : x ))
        }
    }

    useEffect (() => {
        setLoading(true);
        axios
            .get('http://localhost:3500/items')
            // .get('https://biodiversitygardens.onrender.com/items')

            .then((response) => {
                setItems(response.data);
                setLoading(false);
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error.message);
                setLoading(false);
            })
    }, []);

    return (
    <>
        <CartHeader onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
        { !token? (<Alert color="info" className=" alert text-center">Effettua il log in per vedere lo Store!</Alert>) :
        <>
        <div className=" main row ">
            {items?.map((item)=>(
                <div className="col-md-2">
                    <Card className="mb-4">
                        {/* <img
                            alt="img"
                            src={`server/uploads/${item.image}`}
                        /> */}
                        <CardBody>
                            <CardTitle tag="h5">{item.title}</CardTitle>
                            <CardText>{item.description}</CardText>
                            <CardText>{item.category}</CardText>
                            <CardSubtitle tag="h6">€ {item.price}</CardSubtitle>
                                <Button onClick={() => onAdd(item)}
                                color="success"
                                size="sm"
                                >Aggiungi al Carrello
                            </Button> 
                        </CardBody>
                    </Card>
                </div>
            ))}
        </div></>}
    </>
    )
}

export default Store