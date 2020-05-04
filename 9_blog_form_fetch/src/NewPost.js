import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NewPost = () => {
    return (
        <>
            <h2 style={{ 'text-align': 'center' }}>Create a new post</h2>
            <Form style={{ width: '50%', margin: '0 auto' }}>
                <Form.Group controlId="newPost.email">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control type="email" placeholder="jane.doe@somewhere.com" />
                    <Form.Text className="text-muted"> We'll never share your email with anyone else.</Form.Text>
                </Form.Group>
                <Form.Group controlId="newPost.firstname">
                    <Form.Label>Your first name:</Form.Label>
                    <Form.Control type="text" placeholder="Jane" />
                </Form.Group>
                <Form.Group controlId="newPost.lastname">
                    <Form.Label>Your lastname:</Form.Label>
                    <Form.Control type="text" placeholder="Doe" />
                </Form.Group>
                <Form.Group controlId="newPost.content">
                    <Form.Label>New post content</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="Hello! What do you want to talk about today?" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
             </Button>
            </Form>
        </>
    );
}

export default NewPost;
