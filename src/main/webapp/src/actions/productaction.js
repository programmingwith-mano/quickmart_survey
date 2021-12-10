
export function updateCustomerEntry(values) {
    console.log('args111111:'+values);
    return {type: 'CUSTOMER_SELECTED_ITEMS', selectedItems: values};
}