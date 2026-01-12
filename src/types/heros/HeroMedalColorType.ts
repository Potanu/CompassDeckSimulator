export const HeroMedalColorType = {
   SILVER:                  1,      // シルバー
   YELLOW:                  2,      // 黄色
   GREEN:                   3,      // 緑
   PURPLE:                  4,      // 紫
} as const;

export type HeroMedalColorType = typeof HeroMedalColorType[keyof typeof HeroMedalColorType];