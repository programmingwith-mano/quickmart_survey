import constants from '../constants'


const initialState = {
    customerData: {},
    selectedItems: []
};

export default function customer(state = initialState, action) {
    switch (action.type) {
        case 'CUSTOMER_DATA':
            return { ...state,
                customer: action.customerData
            }
        case 'CUSTOMER_SELECTED_ITEMS':
            return { ...state,
                selectedItems: action.selectedItems
            }
        default:
            return state;
    }
}