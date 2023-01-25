import React from 'react';
// import {Link}  from 'react-router-dom'
function Ps(props){
    console.log(props.tittle.name)
    const {tittle}=props;
    return(
        <div>
            <h1>data type {props.tittle.name}</h1>
            <p>{tittle.name}</p>
            <p>{tittle.age}</p>

        </div>
    )
}
export default Ps;