import { useState } from 'react'
import './App.css'
import fetchPhotos from '../gallery-api.js'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import ImageGallery from '../ImageGallery/ImageGallery'
import ImageModal from '../ImageModal/ImageModal'
import Loader from '../Loader/Loader'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'
import SearchBar from '../SearchBar/SearchBar.jsx'

function App() {
  const [gallery, setGallery] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = async (newSearch) => {
    try {
      setLoading(true);
      setError(null);
      setGallery([]);
      setSearch(newSearch);
      setPage(1);
      const data = await fetchPhotos(newSearch, 1);
      setGallery(data);
    } catch(error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  }
  
  const handleLoadMore = async() => {
    try {
      setLoading(true);
      const nextPage = page + 1;
      const data = await fetchPhotos(search, nextPage);
      setGallery((prevGallery) => [...prevGallery, ...data]);
      setPage(nextPage);
    } catch (error) {
      setError("Failed to load more images.");
    } finally {
      setLoading(false);
    }
  }

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  return (
      <>
        <SearchBar onSubmit={handleSubmit}/>
        {error && <ErrorMessage message={error} />}
        {loading && <Loader/>}
        {!loading && gallery.length === 0 && search !=='' && <p>No photos found.</p>}
        {gallery.length > 0 && (
      <>
        <ImageGallery photos={gallery} onImageClick={openModal}/>
        <LoadMoreBtn onClick={handleLoadMore} />
      </>
    )}
    <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        imageSrc={selectedImage}
      /></>
    )
}

export default App