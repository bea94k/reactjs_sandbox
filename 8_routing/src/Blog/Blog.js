import React, { Component } from 'react';
import Card from '../Card/Card';
import './Blog.css';

const blogCards = [
    {
        cardID: 1,
        title: 'Brunch',
        shortDecsr: 'Brunch yada yada yada Brunch yada yada yada yada yada',
        longDescr: 'Brunch yada yada yada Brunch yada yada yada yada yada Brunch yada yada yada Brunch yada yada yada yada yada Brunch yada yada yada Brunch yada yada yada yada yada',
        img: 'http://source.unsplash.com/HlNcigvUi4Q'
    },
    {
        cardID: 2,
        title: 'Corgi',
        shortDecsr: 'Corgi yada yada yada Corgi yada yada yada yada yada',
        longDescr: 'Corgi yada yada yada Corgi yada yada yada yada yada Corgi yada yada yada Corgi yada yada yada yada yada Corgi yada yada yada Corgi yada yada yada yada yada',
        img: 'http://source.unsplash.com/KQN500iE8KA'
    },
    {
        cardID: 3,
        title: 'Cofee',
        shortDecsr: 'Cofee yada yada yada Cofee yada yada yada yada yada',
        longDescr: 'Cofee yada yada yada Cofee yada yada yada yada yada Cofee yada yada yada Cofee yada yada yada yada yada Cofee yada yada yada Cofee yada yada yada yada yada',
        img: 'http://source.unsplash.com/_wkd7XBRfU4'
    },
    {
        cardID: 4,
        title: 'Retro',
        shortDecsr: 'Retro yada yada yada Retro yada yada yada yada yada',
        longDescr: 'Retro yada yada yada Retro yada yada yada yada yada Retro yada yada yada Retro yada yada yada yada yada Retro yada yada yada Retro yada yada yada yada yada',
        img: 'http://source.unsplash.com/R4Rdi0EfBws'
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
                />
            )
        })

        return (
            <div>
                {blogCardsList}
            </div>
        )
    }
}

export default Blog;
