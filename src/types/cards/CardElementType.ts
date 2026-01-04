export const CardElementType = {
   FIRE:                    1,      // 火
   WATER:                   2,      // 水
   WOOD:                    3,      // 木
   NONE:                    4,      // 無
} as const;

export type CardElementType = typeof CardElementType[keyof typeof CardElementType];