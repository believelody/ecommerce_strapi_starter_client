import React from 'react'
import { Pane } from 'evergreen-ui'
import ImageGallery from 'react-image-gallery'
import { apiUrl } from '../../api'
import isMobile from '../../utils/isMobile.utils'

const ProductImageGallery = ({ images }) => {
  let WIDTH = isMobile() ? 300 : 430
  let HEIGHT = isMobile() ? 430 : 300
  let IMG_WIDTH = isMobile() ? WIDTH : WIDTH - 80
  let IMG_HEIGHT = isMobile() ? HEIGHT - 80 : HEIGHT

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
            width: 80,
            height: 80,
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
        showFullscreenButton={false}
        useBrowserFullscreen={false}
        thumbnailPosition={isMobile() ? 'top' : 'left'}
      />
    </Pane>
  )
}

export default ProductImageGallery
