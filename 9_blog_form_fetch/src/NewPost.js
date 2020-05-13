import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// TO DO:
// reset input fields after clicking "add recipe"
// success message if response.status == 201 - conditional rendering?
// delete button in blog cards

const NewPost = () => {
    const [newPost, setNewPost] = useState({
        dish: '',
        ingredients: '',
        descr: '',
        img: ''
    });

    const changeHandler = (e) => {
        setNewPost({
            ...newPost,
            [e.target.name]: e.target.value
        });
    };


    const addRecipeHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/posts', newPost)
            .then((response) => {
                console.log(response.data)
                /* if (response.status == 201) {
                    let successMessage = 'Your recipe has been added!'
                } */
            })
    }


    return (
        <div className='grid-1-2-col'>
            <img src='https://source.unsplash.com/PkkLkjJdUZw' alt='Orange pots in a kitchen'></img>
            <div>
                {/* <p>{successMessage}</p> */}
                <h2 style={{ 'textAlign': 'center', marginTop: '1rem' }}>Create a new recipe</h2>
                <Form>
                    <Form.Group controlId="newPost.dish">
                        <Form.Label>Name of the dish:</Form.Label>
                        <Form.Control type="text" name="dish" placeholder="What are we making?" onChange={changeHandler} />
                    </Form.Group>
                    <Form.Group controlId="newPost.ingredients">
                        <Form.Label>Main ingredients:</Form.Label>
                        <Form.Control type="text" name="ingredients" placeholder="What do we need?" onChange={changeHandler} />
                    </Form.Group>
                    <Form.Group controlId="newPost.descr">
                        <Form.Label>Description/Steps:</Form.Label>
                        <Form.Control as="textarea" rows="5" name="descr" placeholder="How do we make it happen?" onChange={changeHandler} />
                    </Form.Group>
                    <Form.Group controlId="newPost.img">
                        <Form.Label>URL of a photo of the dish:</Form.Label>
                        <Form.Control type="text" name="img" placeholder="ex. https://source.unsplash.com/sTPy-oeA3h0" onChange={changeHandler} />
                    </Form.Group>
                    <Button onClick={addRecipeHandler} variant="dark" type="submit" className="float-right">
                        Add recipe
             </Button>
                </Form>
            </div>
        </div>
    );
}

export default NewPost;
