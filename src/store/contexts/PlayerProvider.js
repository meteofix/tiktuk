import React, { createContext, useMemo, useReducer } from 'react';
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
  const PlayerContextValue = useMemo(
    () => ({ isMuted: playing.muted, playingId: playing.id, dispatch }),
    [playing.muted, playing.id]
  );

  return <PlayerContext.Provider value={PlayerContextValue}>{children}</PlayerContext.Provider>;
};

export default PlayerProvider;
