import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './Home.js';
import About from './About';
import BlogList from './blog/list';
import BlogDetails from './blog/details';
import Contact from './Contact.js';
// import Terms from './legal/Terms.js';
// import BusinessDetails from './business/BusinessDetails';
// import BusinessList from './business/BusinessList';
// import PersonDetails from './person/PersonDetails';
// import Privacy from './legal/Privacy.js';
// import BusinessCategory from './business/BusinessCategory.js';
// import Search from './Search.js';
// import Pricing from './Pricing.js';

const Pages = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element= {<Home/>} />
                <Route path = "/blog/" element = {<BlogList/>} />
                <Route path = "/blog/:slug" element = {<BlogDetails/>} />
                <Route path = "/about" element = {<About/>} />
                <Route path = "/contact" element={<Contact/>} />
                {/* <Route path = "/search" element = {<Search/>} />
                <Route path = "/terms" element = {<Terms/>} />
                <Route path = "/privacy" element = {<Privacy/>} />
                <Route path='/pricing' element={<Pricing/>} /> */}
            </Routes>
        </Router>
    );
};

export default Pages;