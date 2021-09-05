import { combineReducers } from 'redux';
import { authentication } from './authentication';

const RootReducers = combineReducers({
    authentication,
});

export default RootReducers;