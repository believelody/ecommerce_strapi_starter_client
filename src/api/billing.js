import { create, deleteData, update } from './'

export default {
    createAddress: data => create('billingaddresses', data),
    updateAddress: (id, data) => update('billingaddresses', id, data),
    deleteAddress: data => deleteData('billingaddresses', data)
}
