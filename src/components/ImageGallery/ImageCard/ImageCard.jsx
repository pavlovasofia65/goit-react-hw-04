import css from './ImageCard.module.css'

export default function ImageCard({photo, onClick}){
    return (
        <div onClick={onClick}>
            <img src={photo.urls.small} alt={photo.description} />
        </div>
);
}