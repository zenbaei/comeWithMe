import { LOAD_USER, SAVE_USER } from '../action-types';

export default (state = [], action = {}) => {
    switch (action.type) {
        case LOAD_USER:
            return 'loading user';
        default:
            return state;
    }
}