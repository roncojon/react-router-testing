import React from 'react';
import classes from '../components/Styles.css'
import {Link, NavLink} from 'react-router-dom';

const Welcome = () =>{return <>
<h2>WELCOME</h2>
<h3><NavLink to='/' className={classes.active} >Go to '/'</NavLink></h3>
<h3><Link to='/' className={classes.active}>Also go to '/' TESTING of class.active on a Link, not working as a NavLink</Link></h3>
<h3><Link to='/product' className={classes.active}>Products</Link></h3></>
}

export default Welcome;