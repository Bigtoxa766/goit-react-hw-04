import { ImageCard } from "../ImageCard/ImageCard"

export const ImageGallery = ({ items }) => {

  return (
    <ul>
        {items.map(({id, alt_description, urls:{small, regular}}) => (
          <li key={id}>
            <ImageCard url={small} modalImg={regular} alt={alt_description} />
          </li>
  ))}
      </ul>
  )
}