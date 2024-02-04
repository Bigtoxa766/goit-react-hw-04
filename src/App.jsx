import { FallingLines } from 'react-loader-spinner'
import axios from "axios";
import  { Toaster } from 'react-hot-toast';

import { useEffect, useState } from 'react';
import './App.css';
import { SearchBar } from './components/SearchBar/SearchBar';
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';
import { LoadMoreBtn } from './components/LoadMoreBtn/LoadMoreBtn';


const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)

  const searchImages = async (newQuery) => {
    setQuery(newQuery);
    setImages([])
    setLoading(false)
    setError(false)
    setPage(1)
  }

  const handleLoadMore = () => {
    setPage(page +1)
  }

  useEffect(() => {
    if (query === '') {
      return
    }

    async function fetchImages() {
      const CLIENT_ID = "W2pH_SyCpkyrmNxIOiGpmG0aEq1NmybzWVdMFQN9fIQ";
      const BASE_URL = `https://api.unsplash.com`;
    
      try {
        setLoading(true)
        setError(false)
        
        const response = await axios(`${BASE_URL}/search/photos?client_id=${CLIENT_ID}&page=${page}&query=${query}`);
        setImages(prevImages => [...prevImages, ...response.data.results]);
      
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [query, page]);
  
  return (
    <div>
      <SearchBar onSearch={searchImages} />
      {loading && <FallingLines />}
      {error && <ErrorMessage/>}
      {images.length > 0 && <ImageGallery items={images} />}
      {images.length > 0 && <LoadMoreBtn onLoadMore={ handleLoadMore} />}

      

      <Toaster
      position="top-right"/>
    </div>
  );
};

export default App
