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
} as const;

export type ImageAsset = typeof ImageAsset[keyof typeof ImageAsset];