import { connect } from 'react-redux'
import ProductList from '../panels/ProductList'
import { updateCustomerEntry, submit } from '../../actions/productaction'

const mapStateToProps = (state) => {
    return {
        selectedItems: state.customer.selectedItems,
        productList: state.customer.productList,
        categoryList: state.customer.categoryList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCustomerEntry:(args)=>{
            dispatch(updateCustomerEntry(args));
        },
        submit:() => {
            dispatch(submit());
        }
    }
}

const ProductListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList)

export default ProductListContainer