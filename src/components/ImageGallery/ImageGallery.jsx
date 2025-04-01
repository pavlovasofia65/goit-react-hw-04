import ImageCard from "./ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ photos, onImageClick }) {
    return (
    <ul className={css.gallery}>
        {photos.map((photo) => (
        <li key={photo.id} className={css.galleryItem}>
            <ImageCard
            photo={photo}
            onClick={() => onImageClick(photo.urls.regular)}
            />
        </li>
        ))}
    </ul>
    );
}
