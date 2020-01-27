export const updateNamesMutation = (_id, data) => `
    mutation {
        updateProfile(input: {
            where: {
                id: "${_id}"
            },
            data: {
                username: "${data.username}",
                firstname: "${data.firstname}",
                lastname: "${data.lastname}"
            }
        }){
            profile {
                username
                firstname
                lastname,
                image {
                    url
                    name
                }
            }
        }
    }
`