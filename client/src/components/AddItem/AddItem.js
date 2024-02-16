// import { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Alert } from 'reactstrap';
// import { connect } from 'react-redux';
// import { addItem } from '../../actions/itemActions';
// import PropTypes from 'prop-types';

import { useState } from 'react';
import axios from 'axios';


const AddItem = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [message, setMessage] = useState("");

    const onChangeImage = e => {
        setImage(e.target.files[0]);
    }

    const changeOnclick= async (e) => {
        e.preventDefault();


        const formData = new FormData();

        formData.append("title", title);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("price", price);
        formData.append("image", image);

        setTitle("");
        setDescription("");
        setCategory("");
        setPrice("")

        // axios
        //     .post('http://localhost:3500/items', formData)
        //     .then((res) => console.log(res.data))
        //     .catch((err) => {
        //         console.log(err.message)
        //     })
        const result = await axios.post('http://localhost:3500/items', formData, { headers: { "Content-Type": "multipart/form-data"}})
    }

    const token = localStorage.getItem('token')
    const admin = localStorage.getItem('admin')

    return (
        <div>
            { !admin? (<Alert color="info" className=" alert text-center">Non sei autorizzato ad accedere a questa pagina</Alert>) :
            <Container>
                <h2 className="text-center mb-3">Add a new Item</h2>
                <span className="message">{message}</span>
                { token ?
                <Form onSubmit={changeOnclick} encType="multipart/form-data">
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Title of the item"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <br/>
                        <Label for="description">Description</Label>
                        <Input
                            type="text"
                            name="description"
                            id="description"
                            placeholder="Description of the item"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <br/>
                        <Label for="category">Category</Label>
                        <Input 
                            type="text"
                            name="category" 
                            id="category"
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
                            placeholder="Price of the item"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <br/>
                        <Label for="image">Choose an image</Label>
                        <Input
                            type="file"
                            name="image"
                            placeholder="choose an item"
                            onChange={onChangeImage}
                        />

                        
                        <Button color="dark" style={{marginTop: '2rem'}} block>
                            Add Item
                        </Button>
                    </FormGroup>
                </Form> : 
                <Alert className="text-center" color="danger">Login to add items!</Alert>
                }
            </Container>}
            </div>
    )

}




// class AddItem extends Component {
//     state = {
//         title: '',
//         description: '',
//         category: '',
//         price: '',
//     }

//     static propTypes = {
//         isAuthenticated: PropTypes.bool
//     }

//     onChange = (e) => {
//         this.setState({[e.target.name]:e.target.value});
//     }

//     onSubmit = async (e) => {
//         e.preventDefault();

//         const newItem = {
//             title: this.state.title,
//             description: this.state.description,
//             category: this.state.category,
//             price: this.state.price
//         }

//         await this.props.addItem(newItem);

//         // alert('Item added successfully');
//     }

//     render(){
//         const token = localStorage.getItem('token')
//         return(
            // <div>
            //     <Container>
            //         <h2 className="text-center mb-3">Add a new Item</h2>
            //         { token ?
            //         <Form onSubmit={this.onSubmit}>
            //             <FormGroup>
            //                 <Label for="title">Title</Label>
            //                 <Input
            //                     type="text"
            //                     name="title"
            //                     id="title"
            //                     placeholder="Title of the item"
            //                     onChange={this.onChange}
            //                 />
            //                 <br/>
            //                 <Label for="description">Description</Label>
            //                 <Input
            //                     type="text"
            //                     name="description"
            //                     id="description"
            //                     placeholder="Description of the item"
            //                     onChange={this.onChange}
            //                 />
            //                 <br/>
            //                 <Label for="category">Category</Label>
            //                 <Input 
            //                     type="text"
            //                     name="category" 
            //                     id="category"
            //                     placeholder="Category of the item"
            //                     onChange={this.onChange}
            //                     >
            //                 </Input>
            //                 <br/>
            //                 <Label for="price">Price</Label>
            //                 <Input
            //                     type="number"
            //                     name="price"
            //                     id="price"
            //                     placeholder="Price of the item"
            //                     onChange={this.onChange}
            //                 />
                            
            //                 <Button
            //                     color="dark"
            //                     style={{marginTop: '2rem'}}
            //                     block
            //                 >Add Item</Button>
            //             </FormGroup>
            //         </Form> : 
            //         <Alert className="text-center" color="danger">Login to add items!</Alert>
            //         }
            //     </Container>
            // </div>
//         )
//     }
// }

// const mapStateToProps = (state) => ({
//     item: state.item,
//     // isAuthenticated: state.auth.isAuthenticated,
// });

export default AddItem