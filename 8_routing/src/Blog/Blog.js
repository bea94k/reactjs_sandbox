import React from 'react';
import PostCard from '../PostCard/PostCard';
import blogCards from '../data';
import { useRouteMatch } from 'react-router-dom';
import CardDeck from 'react-bootstrap/CardDeck';
// import './Blog.css';


const Blog = () => {
    let { url } = useRouteMatch();

    const blogCardsList = blogCards.map((card, index) => {

        return (

            <PostCard
                key={card.cardID}
                title={card.title}
                shortDescr={card.shortDescr}
                longDescr={card.longDescr}
                img={card.img}
                alt={card.alt}
                link={`${url}/${card.cardID}`} />
        )
    })

    return (
        <div className="blog-grid grid-wrap">
            <CardDeck>
                {blogCardsList}
            </CardDeck>
        </div>
    );
}

export default Blog;