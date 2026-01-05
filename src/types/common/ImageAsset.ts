export const ImageAsset = {
   NONE:                    0,      // なし
   HEXAGON:                 1,      // 六角形
   SHOES:                   2,      // 足
   SWORD:                   3,      // 剣
   WAND_STARS:              4,      // 星の杖
   SHIELD:                  5,      // 盾
   HEART:                   6,      // ハート
   SETTING_MEDAL:           7,      // 設定（メダル）
   CARD_RED:                8,      // カード（赤）
   CARD_BLUE:               9,      // カード（青）
   CARD_GREEN:              10,     // カード（緑）
   CARD_PURPLE:             11,     // カード（紫）
   SPEECH_BUBBLE:           12,     // 吹き出し
   CLOCK:                   13,     // 時計
   KEY:                     14,     // 鍵
   BOLT:                    15,     // 雷
   BEAKER:                  16,     // ビーカー
   HUMAN:                   17,     // 人
   LEAF:                    18,     // 木属性
   WATER:                   19,     // 水属性
   FIRE:                    20,     // 火属性
} as const;

export type ImageAsset = typeof ImageAsset[keyof typeof ImageAsset];