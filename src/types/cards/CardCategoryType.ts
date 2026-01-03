export const CardCategoryType = {
   REGULAR:                 1,      // 通常
   COLLABORATION:           2,      // コラボ
   SEASON:                  3,      // シーズン
   EVENT:                   4,      // イベント
} as const;
    
export type CardCategoryType = typeof CardCategoryType[keyof typeof CardCategoryType];