import React from "react";

function Data (props){
    return(
<div className="Data"> 
    <h3>{props.fullName}</h3>
    <h3>{props.bio}</h3>
    <h3>{props.profession}</h3>
    


</div>
    );
}
export default Data;