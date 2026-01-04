export const HeroMedalType = {
   ATK_UP:                  1,      // 攻撃力アップ
   DEF_UP:                  2,      // 防御力アップ
   HP_UP:                   3,      // 体力アップ
   MOVE_SPEED_UP:           4,      // 移動速度アップ
   HS_GAIN_UP:              5,      // HS増加量アップ
   COOLDOWN_REDUCTION:      6,      // クールタイム短縮
   CAPTURE_SPEED_UP:        7,      // 拠点制圧速度アップ
   RESIST_FIRE_UP:          8,      // 火属性耐性アップ
   RESIST_WATER_UP:         9,      // 水属性耐性アップ
   RESIST_WOOD_UP:          10,     // 木属性耐性アップ
   RESIST_STUN_UP:          11,     // スタン耐性アップ
   RESIST_SILENT_UP:        12,     // サイレント耐性アップ
   RESIST_POISON_UP:        13,     // ポイズン耐性アップ
} as const;

export type HeroMedalType = typeof HeroMedalType[keyof typeof HeroMedalType];