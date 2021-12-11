import constants from '../constants'


const initialState = {
    customerData: {},
    selectedItems: [],
    transactionDetails:[],
    productList:[],
    categoryList:[],
    isTransactionProgress: false
};

export default function customer(state = initialState, action) {
    switch (action.type) {
        case 'CUSTOMER_DATA':
            return { ...state,
                customerData: action.customerData
            }
        case 'CUSTOMER_SELECTED_ITEMS':
            return { ...state,
                selectedItems: action.selectedItems
            }
        case 'LIST_CATEGORY_PRODUCT':
            return { ...state,
                productList: action.productList,
                categoryList: action.categoryList
            }
        case 'TRANSACTION_STARTED':
            return {...state, isTransactionProgress: true};
        case 'TRANSACTION_SAVED':
            return {...state, isTransactionProgress: false};
        case 'CLEAR_DATA':
            return initialState;
        default:
            return state;
    }
}