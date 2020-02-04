export const subscribeNewsletterMutation = (_id, checked) => `
    mutation {
        updateProfile(input: {
            where: {
                id: "${_id}"
            },
            data: {
                isSubscribed: ${checked}
            }
        }){
            profile {
                _id
                isSubscribed
                username
                firstname
                lastname
                image {
                    url
                    name
                }
                emailConfirm
            }
        }
    }
`

export const confirmVerificationMutation = (_id, confirm, code) => `
    mutation {
        updateProfile(input: {
            where: {
                id: "${_id}"
            },
            data: {
                code: "${code}",
                emailConfirm: ${confirm}
            }
        }){
            profile {
                _id
                emailConfirm
            }
        }
    }
`

export const updateInfoMutation = (_id, data) => `
    mutation {
        updateProfile(input: {
            where: {
                id: "${_id}"
            },
            data: {
                username: "${data.username}",
                firstname: "${data.firstname}",
                lastname: "${data.lastname}",
                birthday: "${data.birthday}"
            }
        }){
            profile {
                _id
                gender
                username
                firstname
                lastname
                birthday
                image {
                    url
                    name
                }
                emailConfirm
                isSubscribed
            }
        }
    }
`

export const deleteProfileMutation = id => `
    mutation {
        deleteProfile(input : {
            where: {
                id: "${id}"
            }
        })
        {
            profile {
                _id
            }
        }
    }
`