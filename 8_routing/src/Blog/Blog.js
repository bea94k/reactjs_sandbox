import React, { Component } from 'react';
import Card from '../Card/Card';
import './Blog.css';

const blogCards = [
    {
        cardID: 1,
        title: 'Brunch',
        shortDecsr: 'Brunch yada yada yada Brunch yada yada yada yada yada',
        longDescr: 'Brunch yada yada yada Brunch yada yada yada yada yada Brunch yada yada yada Brunch yada yada yada yada yada Brunch yada yada yada Brunch yada yada yada yada yada',
        img: '/img/brunch.jpg',
        alt: 'brunch food'
    },
    {
        cardID: 2,
        title: 'Corgi',
        shortDecsr: 'Corgi yada yada yada Corgi yada yada yada yada yada',
        longDescr: 'Corgi yada yada yada Corgi yada yada yada yada yada Corgi yada yada yada Corgi yada yada yada yada yada Corgi yada yada yada Corgi yada yada yada yada yada',
        img: '/img/corgi.jpg',
        alt: 'corgi dog'
    },
    {
        cardID: 3,
        title: 'Coffee',
        shortDecsr: 'Coffee yada yada yada Coffee yada yada yada yada yada',
        longDescr: 'Coffee yada yada yada Coffee yada yada yada yada yada Coffee yada yada yada Coffee yada yada yada yada yada Coffee yada yada yada Coffee yada yada yada yada yada',
        img: '/img/coffee.jpg',
        alt: 'coffee cup'
    },
    {
        cardID: 4,
        title: 'Vinyl',
        shortDecsr: 'Vinyl yada yada yada Vinyl yada yada yada yada yada',
        longDescr: 'Vinyl yada yada yada Vinyl yada yada yada yada yada Vinyl yada yada yada Vinyl yada yada yada yada yada Vinyl yada yada yada Vinyl yada yada yada yada yada',
        img: '/img/vinyl.jpg',
        alt: 'vinyl record playing'
    },
]


class Blog extends Component {
    state = {
        cards: blogCards
    };


    render() {
        const blogCardsList = this.state.cards.map((card, index) => {

            return (
                <Card
                    key={card.cardID}
                    title={card.title}
                    shortDescr={card.shortDecsr}
                    longDescr={card.longDescr}
                    img={card.img}
                    alt={card.alt}
                />
            )
        })

        return (
            <div className="blog-grid grid-wrap">
                {blogCardsList}
            </div>
        )
    }
}

export default Blog;
