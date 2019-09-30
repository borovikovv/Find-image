import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ImageReducer from './reducer/image-reducer';


const reducer = combineReducers({
    ImageReducer: ImageReducer,
    form: formReducer
});

let store = createStore(reducer);

export default store;