// The Gilded Vault — configuration: one place for every number the game tunes.
// Room, speeds, vision, alarm and tools. Nothing here touches the DOM.
export const ROOM = { width: 1280, height: 720, wall: 24 };

export const THIEF = {
  radius: 13,
  speed: 178, // px per second
  color: '#e8e4d8',
  coat: '#3b4a6b',
};

export const GUARD = {
  radius: 14,
  coneRange: 235,
  coneHalfAngle: (32 * Math.PI) / 180,
  color: '#c94f43',
  uniform: '#5d3a2e',
};

export const CAMERA = {
  coneRange: 265,
  coneHalfAngle: (30 * Math.PI) / 180,
  color: '#e23b3b',
};

export const ALARM = {
  risePerSecond: 30, // while any watcher sees the thief
  fallPerSecond: 20, // while hidden
  max: 100,
};

export const TOOLS = {
  smokeUses: 2,
  smokeRadius: 150,
  smokeSeconds: 4,
  decoyUses: 1,
  decoyRange: 280, // how far a decoy can be thrown
  decoyLureSeconds: 4,
};

export const SCORE = {
  base: 1500,
  perSecond: 8,
  perDetection: 150,
  ghostBonus: 400,
};

export const STEP = 1 / 60;
export const CAUGHT_FREEZE_SECONDS = 1.4;
