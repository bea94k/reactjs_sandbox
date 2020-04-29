import React from 'react';
import Card from '../Card/Card';
import blogCards from '../data';
import { Link, useRouteMatch } from 'react-router-dom';
// import './Blog.css';


const Blog = () => {
    let { url } = useRouteMatch();

    const blogCardsList = blogCards.map((card, index) => {

        return (

            <Card
                key={card.cardID}
                title={card.title}
                shortDescr={card.shortDecsr}
                longDescr={card.longDescr}
                img={card.img}
                alt={card.alt}
                link={<Link to={`${url}/${card.cardID}`}><button>Read more</button></Link>} />
        )
    })

    return (
        <div className="blog-grid grid-wrap">
            {blogCardsList}
        </div>
    );
}

export default Blog;