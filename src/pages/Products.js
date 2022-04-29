import React from 'react';
import {NavLink} from 'react-router-dom';
const productos = [
    {nombre:"PC-Asus", model:"500", color:"white", id:"01"},
    {nombre:"PC-Intel", model:"600", color:"red", id:"02"},
    {nombre:"PC-MSI", model:"700", color:"green", id:"03"},
    {nombre:"PC-Gigabyte", model:"800", color:"blue", id:"03"},
];


const Products = () =>{return (
<>
{productos.map((prod)=>{return <h2><NavLink to={"/product/"+ prod.nombre}>{prod.nombre}</NavLink></h2>})}
<NavLink to="/welcome">Home</NavLink>
</>
)}

export default Products;