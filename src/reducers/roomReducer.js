import { combineReducers } from 'redux';

const INITIAL_STATE = {
    current: [],
    possible: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
    ],
};

const roomReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_ROOM':
            // Pulls current and possible out of previous state
            // We do not want to alter state directly in case
            // another action is altering it at the same time
            const {
                current,
                possible,
            } = state;

            // Pull friend out of rooms.possible
            // Note that action.payload === roomIndex
            const addedRoom = possible.splice(action.payload, 1);

            // And put friend in rooms.current
            current.push(addedRoom);

            // Finally, update our redux state
            const newState = { current, possible };
            return newState;
        default:
            return state
    }
};

export default combineReducers({
    rooms: roomReducer,
});