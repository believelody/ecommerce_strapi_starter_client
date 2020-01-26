export const changeProfileImage = (_id, img) => `
    mutation {
        updateProfile(input: {
            where: {
                id: "${_id}"
            },
            data: {
                birthday: "25/12/2000"
            }
        }){
            profile {
                image {
                    url
                    name
                }
            }
        }
    }
`