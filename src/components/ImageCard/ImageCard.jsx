import { useState } from "react";
import { ImageModal } from "../ImageModal/ImageModal"

export const ImageCard = ({ url, alt, modalImg }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <img src={url} alt={alt} onClick={() => setIsOpen(true)} />
      {isOpen && (
        <ImageModal isOpen={ isOpen} onClose={()=>setIsOpen(false)}>
          <img src={ modalImg} width={'600vw'}/>
        </ImageModal>
      )}
    </div>
  )
}