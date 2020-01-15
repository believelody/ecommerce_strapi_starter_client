import React from 'react'
import { Pane, IconButton } from 'evergreen-ui'
import ImageGallery from 'react-image-gallery'
import { apiUrl } from '../../api'
import isMobile from '../../utils/isMobile.utils'

const ProductImageGallery = ({ images }) => {
  let WIDTH = isMobile() ? 300 : 430
  let HEIGHT = isMobile() ? 430 : 300
  let THUMB_SIZE = isMobile() ? 40 : 80
  let IMG_WIDTH = isMobile() ? WIDTH : WIDTH - THUMB_SIZE
  let IMG_HEIGHT = isMobile() ? HEIGHT - THUMB_SIZE : HEIGHT

  const items = images
    .map(image => ({
      renderItem: () => (
        <img
          style={{
            width: IMG_WIDTH,
            height: IMG_HEIGHT,
            objectFit: 'cover'
          }}
          src={`${apiUrl}${image.url}`}
        />
      ),
      renderThumbInner: () => (
        <img
          style={{
            width: THUMB_SIZE,
            height: THUMB_SIZE,
            objectFit: 'contain'
          }}
          src={`${apiUrl}${image.url}`}
        />
      ),
    }))

  return (
    <Pane width={WIDTH} height={HEIGHT} paddingBottom={isMobile() ? 5 : 0}>
      <ImageGallery
        items={items}
        showBullets
        showPlayButton={false}
        thumbnailPosition={isMobile() ? 'top' : 'left'}
        onThumbnailClick={
          (event, index) => {
            console.log(event)
            console.log(index)
          }
        }
      />
    </Pane>
  )
}

export default ProductImageGallery
