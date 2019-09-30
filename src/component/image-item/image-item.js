import React from 'react';
import './image-item.css';

const ImageItem = ({value}) => {
    return (
        <li className='image-item grid'>
            <img className='image-image' src={value.imageLink} alt='img' />
            <span className='image-name'>{value.name}</span>
        </li>
    )
};

export default ImageItem;