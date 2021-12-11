import store from '../store/store'

export function updateCustomerEntry(values) {
    return {type: 'CUSTOMER_SELECTED_ITEMS', selectedItems: values};
}

export function saveCustomerEntry(values) {
    return {type: 'CUSTOMER_DATA', customerData: values};
}

export function submit() {
    let customerInfo = store.getState().customer.customerData;
    let selectedItems = store.getState().customer.selectedItems;
    let productList = store.getState().customer.productList;
    let customerTransactionVO = [];
    selectedItems.forEach((item) => {
        productList.forEach((product) => {
            if (item === product.productId) {
                customerTransactionVO.push({
                    customerId: customerInfo.customerId,
                    productId : item,
                    categoryId : product.categoryId
                });
            }
        });
    });
    console.log('submitDataArr'+customerTransactionVO);
    return {type: 'DUMMY'};
}

export function startOver() {
    return {type: 'CLEAR_DATA'};
}