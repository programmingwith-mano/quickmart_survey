import store from '../store/store'
import axios from 'axios';

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
    let result = {};
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
    return function (distpach) {
        return axios({
        method: "post",
        url: 
          "http://quickmartsurvey-env.eba-dwrqsghb.ap-south-1.elasticbeanstalk.com/api/quickmart/customers/transaction",
          //"http://localhost:5000/api/quickmart/customers/transaction",
        data: {"customerTransactionVO": Object.values(customerTransactionVO),
        "customerData": customerInfo}
    }).then(function (response) {
        return {type: 'TRANSACTION_SAVED'};
    })
    .catch(error => {
        return error;
    }); 
}
}

export function updateTransactionStatus() {
    return {type: 'TRANSACTION_STARTED'};
}

export function startOver() {
    return {type: 'CLEAR_DATA'};
}