import * as types from './types';

export function embedLink(link) {
    return {
        type: types.LINK,
        link
    };
}
