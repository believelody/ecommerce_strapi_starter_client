import randomstring from 'randomstring'

export const generateVerifyCode = () => randomstring.generate({
    length: 8,
    charset: 'alphanumeric'
})