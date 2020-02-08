export default (choice, total) => {
    switch (choice.type) {
        case 'credit_card':
            return `Buy $ ${total.toFixed(2)}`
        case '2x':
            return `Pay $ ${((total + choice.fees)/2).toFixed(2)} x 2 monthly`
        case '3x':
            return `Pay  $ ${((total + choice.fees)/3).toFixed(2)} x 3 monthly`
        case '4x':
            return `Pay $ ${((total + choice.fees)/4).toFixed(2)} x 4 monthly`
        default:
            return null;
    }
}