export const changeShippingAddressMutation = (id, selected) => `
    mutation {
        updateProfile(input: {
            where: {
                id: "${id}"
            },
            data: {
                selectedShippingAddress: ${selected}
            }
        }){
            profile {
                _id,
                gender,
                username,
                firstname,
                lastname,
                birthday,
                emailConfirm,
                isSubscribed,
                image {
                    name,
                    url
                },
                orders {
                    numOrder,
                    amount,
                    items,
                    paymentStatus,
                    shippingStatus
                },
                shippingaddresses {
                    _id,
                    address,
                    address2,
                    zip,
                    city
                },
                billingaddresses {
                    _id,
                    address,
                    address2,
                    zip,
                    city
                },
                selectedShippingAddress,
                selectedBillingAddress
            }
        }
    }
`

export const changeBillingAddressMutation = (id, selected) => `
    mutation {
        updateProfile(input: {
            where: {
                id: "${id}"
            },
            data: {
                selectedBillingAddress: ${selected}
            }
        }){
            profile {
                _id,
                gender,
                username,
                firstname,
                lastname,
                birthday,
                emailConfirm,
                isSubscribed,
                image {
                    name,
                    url
                },
                orders {
                    numOrder,
                    amount,
                    items,
                    paymentStatus,
                    shippingStatus
                },
                shippingaddresses {
                    _id,
                    address,
                    address2,
                    zip,
                    city
                },
                billingaddresses {
                    _id,
                    address,
                    address2,
                    zip,
                    city
                },
                selectedShippingAddress,
                selectedBillingAddress
            }
        }
    }
`

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
                _id,
                gender,
                username,
                firstname,
                lastname,
                birthday,
                emailConfirm,
                isSubscribed,
                image {
                    name,
                    url
                },
                orders {
                    numOrder,
                    amount,
                    items,
                    paymentStatus,
                    shippingStatus
                },
                shippingaddresses {
                    _id,
                    address,
                    address2,
                    zip,
                    city
                },
                billingaddresses {
                    _id,
                    address,
                    address2,
                    zip,
                    city
                },
                selectedShippingAddress,
                selectedBillingAddress
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
                _id,
                gender,
                username,
                firstname,
                lastname,
                birthday,
                emailConfirm,
                isSubscribed,
                image {
                    name,
                    url
                },
                orders {
                    numOrder,
                    amount,
                    items,
                    paymentStatus,
                    shippingStatus
                },
                shippingaddresses {
                    _id,
                    address,
                    address2,
                    zip,
                    city
                },
                billingaddresses {
                    _id,
                    address,
                    address2,
                    zip,
                    city
                },
                selectedShippingAddress,
                selectedBillingAddress
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
                _id,
                gender,
                username,
                firstname,
                lastname,
                birthday,
                emailConfirm,
                isSubscribed,
                image {
                    name,
                    url
                },
                orders {
                    numOrder,
                    amount,
                    items,
                    paymentStatus,
                    shippingStatus
                },
                shippingaddresses {
                    _id,
                    address,
                    address2,
                    zip,
                    city
                },
                billingaddresses {
                    _id,
                    address,
                    address2,
                    zip,
                    city
                },
                selectedShippingAddress,
                selectedBillingAddress
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