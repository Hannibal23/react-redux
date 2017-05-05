import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const link = (state = '', action) => {
    switch (action.type) {
        case types.LINK:
            if (link.charAt(12) === 'y') {
                const number = link.substring(32);
                const embed = 'https://www.youtube.com/embed/' + number;
                return embed;
            }
            return action.embed;
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    link,
    routing
});

export default rootReducer;
