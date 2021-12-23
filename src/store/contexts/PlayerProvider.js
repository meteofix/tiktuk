import React, { createContext, useReducer } from 'react';
import { playerReducer } from '../reducers/playerReducer';

export const PlayerContext = createContext({
  isMuted: true,
  setIsMuted: () => false,
  playingId: 0,
  dispatch: () => false,
});

const PlayerProvider = ({ children }) => {
  const initialState = { id: 0, muted: true };
  const [playing, dispatch] = useReducer(playerReducer, initialState);

  return (
    <PlayerContext.Provider value={{ isMuted: playing.muted, playingId: playing.id, dispatch }}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
