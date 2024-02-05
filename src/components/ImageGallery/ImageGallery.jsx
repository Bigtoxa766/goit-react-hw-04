import { ImageCard } from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css'

export const ImageGallery = ({ items }) => {

  return (
    <ul className={css.cardList}>
        {items.map(({id, alt_description, urls:{small, regular}}) => (
          <li className={css.cardItem} key={id}>
            <ImageCard url={small} modalImg={regular} alt={alt_description} />
          </li>
  ))}
      </ul>
  )
}