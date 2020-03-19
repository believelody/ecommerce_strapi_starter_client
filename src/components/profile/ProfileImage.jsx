import React from 'react'
import { FilePicker, Card } from 'evergreen-ui'
import Image from '../image/Image'

const ProfileImage = ({ image, setImage, profileId }) => {

    const handleChange = async files => {
        let oFReader = new FileReader()
        oFReader.readAsDataURL(files[0])
        oFReader.onload = function (oFREvent) {
            setImage({ url: oFREvent.target.result, name: files[0].name, file: files[0]})
        }
    }

    return (
        <Card
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            width='30%'
            height='auto'
        >
            <Image 
                width='100%' 
                height='auto' 
                src={image && image.url || '/blank_profile.webp'} 
                alt={image && image.name || 'no pics'} 
            />
            <FilePicker
                width='100%'
                onChange={handleChange}
                placeholder="Change your profile photo"
                name='files'
            />
            <input type="hidden" name="ref" value={`profile`} />
            <input type="hidden" name="refId" value={`${profileId}`} />
            <input type="hidden" name="field" value={`image`} />
        </Card>
    )
}

export default ProfileImage
