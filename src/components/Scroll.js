import React from "react";

const Scroll = (props) =>{
    return (
<div style={{overflowY:'scroll' , border:'1px lightest green', height:'950px'}}>
    {props.children}
</div>
    )
};

export default Scroll