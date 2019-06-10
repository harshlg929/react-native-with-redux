import { ADD_ROOM } from './types';

export const addRoom = roomIndex => (
    {
      type: ADD_ROOM,
      payload: roomIndex,
    }
  );