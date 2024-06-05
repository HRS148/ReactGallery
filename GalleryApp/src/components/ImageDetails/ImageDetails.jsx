import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './ImageDetails.module.css'; 

const ImageDetails = () => {
    const { id } = useParams(); 
    const [imageData, setImageData] = useState({});
    
    async function fetchImageData() {
        try {
            const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
            console.log('API Response:', response.data); 
            setImageData(response.data.photo);
        } catch (error) {
            console.error('API Error:', error); 
        }
    }
    
    useEffect(() => {
        console.log('ImageDetails component rendered.'); 
        fetchImageData();
    }, [id]);

    return (
        <div className={styles['image-details-container']}> 
            <div>
            <img src={imageData.url} alt={imageData.title} className={styles['image']} /> 
            </div>
            <div>
            <p className={styles['image-title']}>{imageData.title}</p>
            <p className={styles['image-description']}>{imageData.description}</p>
            </div>
            
        </div>
    );
};

export default ImageDetails;
