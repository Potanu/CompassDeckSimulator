export const HeroMedalType = {
   ATK_UP:                  1,      // 攻撃力
   DEF_UP:                  2,      // 防御力
   HP_UP:                   3,      // 体力
   MOVE_SPEED_UP:           4,      // 移動速度
   HS_GAIN_UP:              5,      // HS増加量
   COOLDOWN_REDUCTION:      6,      // クールタイム
   CAPTURE_SPEED_UP:        7,      // 拠点制圧速度
   RESIST_FIRE_UP:          8,      // 火属性耐性
   RESIST_WATER_UP:         9,      // 水属性耐性
   RESIST_WOOD_UP:          10,     // 木属性耐性
   RESIST_STUN_UP:          11,     // スタン耐性
   RESIST_SILENT_UP:        12,     // サイレント耐性
   RESIST_POISON_UP:        13,     // ポイズン耐性
} as const;

export type HeroMedalType = typeof HeroMedalType[keyof typeof HeroMedalType];