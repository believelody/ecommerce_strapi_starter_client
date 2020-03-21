import React from 'react'
import Profile from '../components/profile/Profile'
import Page from '../components/page/Page'

const bg = `linear-gradient(140deg, rgba(60, 60, 60, 0.04) 0%, rgba(60, 60, 60, 0.04) 18%,rgba(228, 228, 228, 0.04) 18%, rgba(228, 228, 228, 0.04) 100%),linear-gradient(252deg, rgba(159, 159, 159, 0.04) 0%, rgba(159, 159, 159, 0.04) 76%,rgba(255, 255, 255, 0.04) 76%, rgba(255, 255, 255, 0.04) 100%),linear-gradient(148deg, rgba(165, 165, 165, 0.04) 0%, rgba(165, 165, 165, 0.04) 30%,rgba(221, 221, 221, 0.04) 30%, rgba(221, 221, 221, 0.04) 100%),linear-gradient(196deg, rgba(238, 238, 238, 0.04) 0%, rgba(238, 238, 238, 0.04) 41%,rgba(176, 176, 176, 0.04) 41%, rgba(176, 176, 176, 0.04) 100%),linear-gradient(295deg, rgba(245, 245, 245, 0.04) 0%, rgba(245, 245, 245, 0.04) 75%,rgba(68, 68, 68, 0.04) 75%, rgba(68, 68, 68, 0.04) 100%),linear-gradient(89deg, rgba(179, 179, 179, 0.04) 0%, rgba(179, 179, 179, 0.04) 22%,rgba(30, 30, 30, 0.04) 22%, rgba(30, 30, 30, 0.04) 100%),linear-gradient(165deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.04) 40%,rgba(147, 147, 147, 0.04) 40%, rgba(147, 147, 147, 0.04) 100%),linear-gradient(293deg, rgba(204, 204, 204, 0.04) 0%, rgba(204, 204, 204, 0.04) 73%,rgba(62, 62, 62, 0.04) 73%, rgba(62, 62, 62, 0.04) 100%),linear-gradient(90deg, rgb(215, 117, 38),rgb(171, 161, 219))`

const ProfilePage = () => {

  return (
    <Page bg={bg}>
      <Profile />
    </Page>
  )
}

export default ProfilePage
