export const changEmailMutation = (id, email) => `
    mutation {
        updateUser(input: {
            where: {
                id: "${id}"
            },
            data: {
                email: "${email}"
            }
        })
        {
            user {
                _id
                email
                username
            }
        }
    }
`

export const deleteUserMutation = id => `
    mutation {
        deleteUser(input: {
            where: {
                id: "${id}"
            }
        })
        {
            user {
                _id
            }
        }
    }
`