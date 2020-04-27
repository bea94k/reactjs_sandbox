import React from 'react';
import './About.css';
/* import portrait from '../../public/img/portrait'; */

const About = () => {
    return (
        <div className="about grid-wrap about-grid">
            <img src='/img/portrait.jpg' alt="portrait of a man" />
            <div className="about-content">
                <p>Maecenas ultrices pellentesque tellus, ut tincidunt sapien imperdiet sit amet. Aenean mattis, tortor ornare imperdiet venenatis, lacus ex blandit erat, at faucibus eros lorem ac odio. Nulla facilisi. Vivamus malesuada erat vestibulum enim aliquet, nec elementum nunc condimentum. In volutpat pulvinar felis, nec dignissim felis mollis aliquet. Integer lacinia, mi eget lacinia commodo, sem quam pulvinar lacus, faucibus euismod orci felis suscipit mauris. Nulla congue tempus molestie. Suspendisse convallis semper enim vitae imperdiet. Aenean ultricies dolor nec sem consectetur lacinia.</p>
                <p>Vestibulum rhoncus sem ac blandit malesuada. Pellentesque a est condimentum, consequat mauris at, scelerisque enim. Nunc feugiat a diam ac pulvinar. Proin condimentum euismod tempor. Donec vulputate sem ut lectus scelerisque, in auctor sem faucibus. Proin ornare lectus sit amet mi dignissim, sit amet hendrerit enim sodales. Etiam est dui, rutrum at volutpat malesuada, cursus vitae quam. Phasellus at fringilla risus. Pellentesque id rhoncus elit. Sed tincidunt nec nunc eu sagittis. Sed euismod urna sed nunc malesuada, a fermentum nisi malesuada. Donec non posuere ligula. Sed consectetur justo lectus, eu varius ante sagittis sed. Nulla viverra lorem id interdum pretium. Duis euismod magna non ipsum eleifend hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </div>
        </div>
    );
}

export default About;
