import { connect } from 'react-redux'
import { startOver } from '../../actions/productaction'
import Confirm from '../panels/Confirm';

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        startOver:()=>{
            dispatch(startOver());
        }
    }
}

const ConfirmContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Confirm)

export default ConfirmContainer