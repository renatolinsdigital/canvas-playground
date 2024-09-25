export const pfConfig = {
  size: 1,
  smoothing: 0.92,
  thinning: 0.21,
  streamline: 0.25,
  easing: (t: any) => 1 - --t * t * t * t,
  simulatePressure: true,
  start: {
    taper: 11,
    cap: false,
  },
  end: {
    taper: 1,
    cap: true,
  },
};
