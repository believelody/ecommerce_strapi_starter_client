export default currentIndex => {
    switch (currentIndex) {
        case 0:
            return {type: 'credit_card', fees: 0}
        case 1:
            return {type: 'paypal', fees: 0}
        case 2:
            return {type: '2x', fees: 3.99}
        case 3:
            return {type: '3x', fees: 7.99}
        case 4:
            return {type: '4x', fees: 10.99}
    
        default:
            return null;
    }
}