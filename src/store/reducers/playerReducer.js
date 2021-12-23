const SET_PLAYING_ID = 'SET_PLAYING_ID';
const SET_MUTED = 'SET_MUTED';

export function playerReducer(state, action) {
  switch (action.type) {
    case SET_PLAYING_ID:
      return { ...state, id: action.payload };
    case SET_MUTED:
      return { ...state, muted: action.payload };
    default:
      return state;
  }
}

export const setPlayingId = (payload) => ({ type: SET_PLAYING_ID, payload });
export const setMuted = (payload) => ({ type: SET_MUTED, payload });
