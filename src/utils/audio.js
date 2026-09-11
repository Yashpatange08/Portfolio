// Audio module disabled per user request
// Completely silent no-op stub to prevent any AudioContext initialization or errors
export const soundFx = {
  init: () => {},
  toggleMute: () => true,
  isMuted: () => true,
  playHover: () => {},
  playClick: () => {},
  playLevelShift: () => {},
};
