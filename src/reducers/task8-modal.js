const OPEN_MODAL = 'scratch-gui/task8Modal/OPEN_MODAL';
const CLOSE_MODAL = 'scratch-gui/task8Modal/CLOSE_MODAL';

const initialState = {
    open: false,
};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
    case OPEN_MODAL:
        return Object.assign({}, state, {
            open: true
        });
    case CLOSE_MODAL:
    return Object.assign({}, state, {
        open: false
    });
    default:
        return state;
    }
};

const openTask8Modal = function () {
    return {type: OPEN_MODAL};
};
const closeTask8Modal = function () {
    return {type: CLOSE_MODAL};
};

export{
    reducer as default,
    initialState as task8ModalInitialState,
    openTask8Modal,
    closeTask8Modal
}