import {
  RESET_STATS_TO_DEFAULTS,
  CHANGE_CANVAS_TEXTFIELD,
  CHANGE_CANVAS_TEXT_SIZE,
  CHANGE_PARTICLE_RADIUS,
  CHANGE_PARTICLE_COLOR,
  CHANGE_SCALE_BY_X,
  CHANGE_SCALE_BY_Y,
  CHANGE_STEP_ON_X,
  CHANGE_STEP_ON_Y,
  StatsActionType,
  IStats,
  CanvasTextFieldType,
  CanvasStepType,
  CanvasTextSizeType,
  /* CanvasFontType, */
  CanvasScaleType,
  ParticleRadiusType,
  ParticleColorType,
} from "./types";

export const resetStats = (defaultStats: IStats): StatsActionType => {
  return {
    type: RESET_STATS_TO_DEFAULTS,
    payload: defaultStats,
  };
};

export const setCanvasText = (
  newText: CanvasTextFieldType
): StatsActionType => {
  return {
    type: CHANGE_CANVAS_TEXTFIELD,
    payload: newText,
  };
};

export const setCanvasTextSize = (
  newTextSize: CanvasTextSizeType
): StatsActionType => {
  return {
    type: CHANGE_CANVAS_TEXT_SIZE,
    payload: newTextSize,
  };
};

export const setParticleRadius = (
  newRadius: ParticleRadiusType
): StatsActionType => {
  return {
    type: CHANGE_PARTICLE_RADIUS,
    payload: newRadius,
  };
};

export const setParticleColor = (
  newColor: ParticleColorType
): StatsActionType => {
  return {
    type: CHANGE_PARTICLE_COLOR,
    payload: newColor,
  };
};

export const setCanvasScaleX = (
  newScaleX: CanvasScaleType
): StatsActionType => {
  return {
    type: CHANGE_SCALE_BY_X,
    payload: newScaleX,
  };
};

export const setCanvasScaleY = (
  newScaleY: CanvasScaleType
): StatsActionType => {
  return {
    type: CHANGE_SCALE_BY_Y,
    payload: newScaleY,
  };
};

export const setCanvasStepX = (newStepX: CanvasStepType): StatsActionType => {
  return {
    type: CHANGE_STEP_ON_X,
    payload: newStepX,
  };
};

export const setCanvasStepY = (newStepY: CanvasStepType): StatsActionType => {
  return {
    type: CHANGE_STEP_ON_Y,
    payload: newStepY,
  };
};
