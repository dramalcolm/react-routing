import React from 'react';

const pageError = (props) => {
    return(
        <div>
            <h1>404 PAGE NOT FOUND FOR {props.location.pathname}</h1>
        </div>
    );
} 
export default pageError;