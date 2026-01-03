export const CardSkillType = {
   NEAR:                    1,      // 近距離
   FAR:                     2,      // 遠距離
   RUSH:                    3,      // 連続
   CIRCLE:                  4,      // 周囲
   HEAL:                    5,      // 回復
   GUARD:                   6,      // ガード
   BUFF:                    7,      // 強化
   DEBUFF:                  8,      // 弱体化
   WARP:                    9,      // 移動
   TRAP:                    10,     // 設置
   COUNTER:                 11,     // カウンター
   OTHER:                   12,     // その他
} as const;
    
export type CardSkillType = typeof CardSkillType[keyof typeof CardSkillType];