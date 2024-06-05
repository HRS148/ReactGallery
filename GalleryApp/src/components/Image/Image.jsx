import React from 'react';

function Image({ image }) {
    return (
        <div key={image.id}>
            <img src={image.url} alt={image.description} />
        </div>
    );
}

export default Image;
