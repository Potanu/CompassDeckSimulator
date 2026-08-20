export type StatusKey = "attack" | "defense" | "health";

const getTeamLevelRate = (key: StatusKey): number => key === "attack" ? 0.1 : 0.15;

export const getTeamLevelMultiplier = (key: StatusKey, level: number): number => {
  if (level <= 1) {
    return 1;
  }

  return 1 + (getTeamLevelRate(key) * (level - 1) / 8);
};

export const getTeamLevelAdjustedValue = (key: StatusKey, level: number, value: number): number => {
  return Math.round(Number(value ?? 0) * getTeamLevelMultiplier(key, level));
};
