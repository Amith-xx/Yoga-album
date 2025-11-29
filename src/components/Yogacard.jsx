import React from 'react';
import '../css/card.css'

const Yogacard=({image,name,benefits,time_duration})=>{
    return(

        <li className="card">
            <img src={image} alt={name} loading="lazy"></img>

            <div className="card-body">
                <h3>{name}</h3>
                <p ><strong>Benefits:</strong>{benefits}</p>
                <p ><strong>Time:</strong>{time_duration}</p>
            </div>
        </li>
    )
}

export default Yogacard;