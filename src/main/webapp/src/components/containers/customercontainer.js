import { connect } from 'react-redux'
import { saveCustomerEntry } from '../../actions/productaction'
import FormUserDetails from '../panels/FormUserDetails'

const mapStateToProps = (state) => {
    return {
        selectedItems: state.customer.selectedItems,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveCustomerEntry:(args)=>{
            dispatch(saveCustomerEntry(args));
        }
    }
}

const UserFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormUserDetails)

export default UserFormContainer