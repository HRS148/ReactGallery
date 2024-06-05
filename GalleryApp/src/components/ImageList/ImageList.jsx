import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import './ImageList.css'

const ImageList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [imageList, setImageList] = useState([]);
    const [offset, setOffset] = useState(0); // Track the current offset
    const navigate = useNavigate();

    async function downloadImages() {
        try {
            const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=20`);
            console.log(response.data);
            const imageResults = response.data.photos;
            const imageResultsPromise = imageResults.map((image) => axios.get(image.url));
            const imageData = await axios.all(imageResultsPromise);
            console.log(imageData);

            const processedImageList = imageData.map((imgData, index) => ({
                id: imageResults[index].id,
                title: imageResults[index].title,
                description: imageResults[index].description,
                url: imageResults[index].url,
                data: imgData.data,
            }));

            setImageList(processedImageList);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        downloadImages();
    }, [offset]);

    const handleNextClick = () => {
        setOffset((prevOffset) => prevOffset + 20);
    };

    const handlePrevClick = () => {
        if (offset >= 20) { // Check if offset is greater than or equal to 20
            setOffset((prevOffset) => prevOffset - 20);
        }
    };

    return (
        <div className='image-list-container'>
            <div className='title'></div>
            {!isLoading && (
                <ul className='image-list'>
                    {imageList.map((image) => (
                        <li key={image.id} className='image-item'
                            onClick={() => navigate(`/image/${image.id}`)}>
                            <img src={image.url} alt={image.title} className='image'/>
                        </li>
                    ))}
                </ul>
            )}
            {isLoading ? 'Loading...' : 'Data Loaded'}
            <div>
                <button onClick={handlePrevClick}>previous</button>
                <button onClick={handleNextClick}>Next</button>
            </div>
        </div>
    );
};

export default ImageList;
