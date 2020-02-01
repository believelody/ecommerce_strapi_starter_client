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
                username
                firstname
                lastname
                birthday
                image {
                    url
                    name
                }
            }
        }
    }
`