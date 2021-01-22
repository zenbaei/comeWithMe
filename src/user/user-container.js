import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadUser } from './user-actions';

const mapStateToProps = state => ({
    users: state.users
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        loadUser
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps) ();