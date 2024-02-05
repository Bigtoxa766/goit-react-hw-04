import { useState } from "react";
import { ImageModal } from "../ImageModal/ImageModal"
import css from './ImageCard.module.css'

export const ImageCard = ({ url, alt, modalImg }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <img className={ css.img} src={url} alt={alt} onClick={() => setIsOpen(true)} />
      {isOpen && (
        <ImageModal isOpen={ isOpen} onClose={()=>setIsOpen(false)}>
          <img className={css.modalImg } src={ modalImg} width={'100%'} height={'500vw'}/>
        </ImageModal>
      )}
    </div>
  )
}