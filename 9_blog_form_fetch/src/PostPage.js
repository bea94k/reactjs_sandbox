import React from 'react';
import { Link, useParams } from 'react-router-dom';
import postData from './data';
import Button from 'react-bootstrap/Button';

const PostPage = () => {
    let { postID } = useParams();
    const clickedPostID = postData.find(element => element.cardID === postID)

    return (
        <div className="home-grid">
            <img src={clickedPostID.img} alt={clickedPostID.alt} />
            <div>
                <h2>{clickedPostID.title}</h2>
                <p>{clickedPostID.descr}</p>
                <Link to='/blog'><Button>Back to Blog</Button></Link>
            </div>
        </div>
    );
}

export default PostPage;
