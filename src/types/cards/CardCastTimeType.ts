export const CardCastTimeType = {
   NONE:                    1,      // 無
   SHORT:                   2,      // 短
   LONG:                    3,      // 長
} as const;
    
export type CardCastTimeType = typeof CardCastTimeType[keyof typeof CardCastTimeType];