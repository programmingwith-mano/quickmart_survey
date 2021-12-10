import { connect } from 'react-redux'
import ProductList from '../panels/ProductList'
import { updateCustomerEntry } from '../../actions/productaction'

const mapStateToProps = (state) => {
    return {
        selectedItems: state.customer.selectedItems,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCustomerEntry:(args)=>{
            dispatch(updateCustomerEntry(args));
        }
    }
}

const ProductListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList)

export default ProductListContainer