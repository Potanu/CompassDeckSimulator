export const HeroRoleType = {
   SPRINTER:                1,      // スプリンター
   ATTACKER:                2,      // アタッカー
   GUNNER:                  3,      // ガンナー
   TANK:                    4,      // タンク
} as const;
    
export type HeroRoleType = typeof HeroRoleType[keyof typeof HeroRoleType];