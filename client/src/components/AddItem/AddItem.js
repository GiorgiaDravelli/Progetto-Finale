import { Button, Form, FormGroup, Label, Input, Container, Alert } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';


const AddItem = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [sendItem, setSendItem] = useState(false);

    const onChangeImage = e => {
        setImage(e.target.files[0]);
    }

    const changeOnclick= async (e) => {
        e.preventDefault();

        try{
            const result = await axios.post("https://biodiversitygardens.onrender.com/items",{
                title,
                description,
                category,
                price
            }, { headers: { "Content-Type": "application/json"}})

            console.log(result)
            setSendItem(true)
        } catch(err){
            console.log(err.message)
        }



        // console.log("title " + title)
        // console.log("description " +description)
        // console.log("category " +category)
        // console.log("price " +price)
        // console.log("image " +image)

        // try {
        // const formData = new FormData();

        // formData.append("title", title);
        // formData.append("description", description);
        // formData.append("category", category);
        // formData.append("price", price);
        // formData.append("image", image);

        // setTitle("");
        // setDescription("");
        // setCategory("");
        // setPrice("")

        // const result = await axios.post("https://biodiversitygardens.onrender.com/items", formData, { headers: { "Content-Type": "multipart/form-data"}})
        // console.log(result)
        // }
        // catch(err){
        //     console.log(err.message)
        // }
    }

    const token = localStorage.getItem('token')
    const admin = localStorage.getItem('admin')

    return (
        <div>
            { admin? (<Alert color="info" className=" alert text-center">Non sei autorizzato ad accedere a questa pagina</Alert>) :
            <Container>
                <h2 className="text-center mb-3">Add a new Item</h2>
                { token ?
                <Form onSubmit={changeOnclick} encType="multipart/form-data">
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input
                            type="text"
                            name="title"
                            id="title"
                            value={title}
                            placeholder="Title of the item"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <br/>
                        <Label for="description">Description</Label>
                        <Input
                            type="text"
                            name="description"
                            id="description"
                            value={description}
                            placeholder="Description of the item"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <br/>
                        <Label for="category">Category</Label>
                        <Input 
                            type="text"
                            name="category" 
                            id="category"
                            value={category}
                            placeholder="Category of the item"
                            onChange={(e) => setCategory(e.target.value)}
                            >
                        </Input>
                        <br/>
                        <Label for="price">Price</Label>
                        <Input
                            type="number"
                            name="price"
                            id="price"
                            value={price}
                            placeholder="Price of the item"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <br/>
                        {/* <Label for="image">Choose an image</Label>
                        <Input
                            type="file"
                            name="image"
                            placeholder="choose an item"
                            onChange={onChangeImage}
                        /> */}

                        
                        <Button color="dark" style={{marginTop: '2rem'}} block>
                            Add Item
                        </Button>
                        { sendItem ?
                        <Alert color="info" className="text-center">Prodotto aggiunto!</Alert> : ""}
                    </FormGroup>
                </Form> : 
                <Alert className="text-center" color="danger">Login to add items!</Alert>
                }
            </Container>}
            </div>
    )

}

export default AddItem