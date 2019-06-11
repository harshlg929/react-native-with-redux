import { combineReducers } from 'redux';

const INITIAL_STATE = {
    current: [],
    totalRooms: [
        { roomNo: '1', patientName: 'john1', doctorName: 'Jamra1', disease: 'Suffering from Dangue and Jaundice' },
        { roomNo: '2', patientName: 'john2', doctorName: 'Jamra2', disease: 'Suffering from Dangue and Jaundice' },
        { roomNo: '3', patientName: 'john3', doctorName: 'Jamra3', disease: 'Suffering from Dangue and Jaundice' },
        { roomNo: '4', patientName: 'john4', doctorName: 'Jamra4', disease: 'Suffering from Dangue and Jaundice' },
        { roomNo: '5', patientName: 'john5', doctorName: 'Jamra5', disease: 'Suffering from Dangue and Jaundice' },
        { roomNo: '6', patientName: 'john6', doctorName: 'Jamra6', disease: 'Suffering from Dangue and Jaundice' },
        { roomNo: '7', patientName: 'john7', doctorName: 'Jamra7', disease: 'Suffering from Dangue and Jaundice' },
        { roomNo: '8', patientName: 'john8', doctorName: 'Jamra8', disease: 'Suffering from Dangue and Jaundice' },
        { roomNo: '9', patientName: 'john9', doctorName: 'Jamra9', disease: 'Suffering from Dangue and Jaundice' },
    ],
};

const roomReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_ROOM':
            const {
                current,
                totalRooms,
            } = state;
            const addedRoom = totalRooms.splice(action.payload, 1);
            current.push(addedRoom[0]);
            const newState = { current, totalRooms };
            return newState;
        default:
            return state
    }
};

export default combineReducers({
    rooms: roomReducer,
});