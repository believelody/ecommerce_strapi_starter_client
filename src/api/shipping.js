import { create, update, deleteData } from './'

export default {
    createAddress: data => create('shippingaddresses', data),
    updateAddress: (id, data) => update('shippingaddresses', id, data),
    deleteAddress: id => deleteData('shippingaddresses', id)
}
