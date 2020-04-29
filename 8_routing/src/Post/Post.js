import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import blogCards from '../data';

const Post = () => {
    let { postid } = useParams();
    const clickedPostID = blogCards.find(element => element.cardID == postid)

    return (
        <div>
            I am a post with ID of {postid}. <br />
            {clickedPostID.title}<br />
            {clickedPostID.longDescr}<br />
            <Link to='/blog'>Back to Blog</Link>
        </div>
    );
}

export default Post;
