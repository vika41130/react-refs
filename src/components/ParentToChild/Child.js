import React from 'react';

const Child = (props) => {
    return (
        <div>
            <button onClick={ props.doWhatever }>title: { props.title }, description: {}</button>
        </div>
    );
}

export default Child;