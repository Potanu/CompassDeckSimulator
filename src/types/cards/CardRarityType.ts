export const CardRarityType = {
   N:                       1,      // N
   R:                       2,      // R
   SR:                      3,      // SR
   UR:                      4,      // UR
} as const;
    
export type CardRarityType = typeof CardRarityType[keyof typeof CardRarityType];