import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/courses">Courses</Link>
                </li>
            </ul>
        </nav>
    )
}

const Home = () => {
    return (
        <h1>I'm a HOME page</h1>
    )
}

const About = () => {
    return (
        <h1>I'm an ABOUT page</h1>
    )
}

const Courses = () => {
    let { path, url } = useRouteMatch();

    return (
        <div>
            <h1>I'm a COURSES page</h1>
            <ul>
                <li>
                    {/* use the url that got us to this page before, and add something more */}
                    <Link to={`${url}/html&css`}>HTML and CSS</Link>
                </li>
                <li>
                    <Link to={`${url}/UIprototyping`}>UI prototyping</Link>
                </li>
                <li>
                    <Link to={`${url}/reactbasics`}>Basics of React.js</Link>
                </li>
                <li>
                    <Link to={`${url}/about`}>About inside courses</Link>
                </li>
            </ul>

            <Switch>
                 <Route path={`${path}/about`} component={About} />
                 <Route path={`${path}/:CourseId`}>
                     <Topic />
                 </Route>
            </Switch>
        </div>
    )
}

const Topic = () => {
    let { CourseId } = useParams();
    return(
    <h2>This is page for {CourseId}</h2>
    )
}



const Nestedrouting = () => {
    return (
        <Router>
            <Nav />
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/courses" component={Courses} />
                </Switch>
            </main>
        </Router>
    );
}

export default Nestedrouting;
