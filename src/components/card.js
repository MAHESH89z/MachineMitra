import React from "react";

const Card = ({id, name, email, username}) =>{
return (
<div className=' tc i dib bg-light-green b--dark-pink br3 ma2 pa3 grow shadow-5'>
    <img alt='photos' src={`https://robohash.org/${id}?size=200x200`} />
    <div>
        <p>{name}</p>
        <p>{email}</p>
        <p>{username}</p>
    </div>

</div>
);
}

export default Card