import constants from '../constants'


const initialState = {
    customerData: {},
    selectedItems: [],
    transactionDetails:[],
    productList:[],
    categoryList:[]
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
        case 'DUMMY':
            return {...state};
        case 'CLEAR_DATA':
            return initialState;
        default:
            return state;
    }
}