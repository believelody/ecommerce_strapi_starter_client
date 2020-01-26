import React from 'react'
import { FilePicker, Card } from 'evergreen-ui'
import Image from '../image/Image'

const ProfileImage = ({ image, setImage }) => {

    const handleChange = async files => {
        let oFReader = new FileReader()
        oFReader.readAsDataURL(files[0])
        oFReader.onload = function (oFREvent) {
            console.log(oFREvent)
            setImage({ url: oFREvent.target.result, name: files[0].name})
        }
        // dispatchLoading({ type: SET_LOADING })
        // try {
        //     const {data} = await api.profile.changeImage(profile._id, files[0].name)
        //     console.log(data)
        // } catch (e) {
        //     console.log(e)
        // }
        // dispatchLoading({ type: RESET_LOADING })
    }

    return (
        image &&
        <Card
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            width={300}
            height='auto'
            borderRight
        >
            <Image src={image.url} alt={image.name} />
            <FilePicker
                width='100%'
                onChange={handleChange}
                placeholder="Change your profile photo"
                name='image'
            />
        </Card>
    )
}

export default ProfileImage
