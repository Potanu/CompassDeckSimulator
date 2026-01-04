export const CollaborationTitle = {
   NONE:                    0,      // オリジナル
   GUILTY_GEAR:             1,      // GUILTY GEAR Xrd REV 2
   VOCALOID:                2,      // ボーカロイド
   HACKA_DOLL:              3,      // ハッカドール
   STREET_FIGHTER_5:        4,      // ストリートファイターⅤ
   REFLECTION:              5,      // THE REFLECTION
   RE_ZERO:                 6,      // re.ゼロから始める異世界生活
   BEATLESS:                7,      // BEATLESS
   SATSURIKU:               8,      // 殺戮の天使
   DANGAN_RONPA:            9,      // ダンガンロンパ
   KONOSUBA:                10,     // この素晴らしい世界に祝福を！
   SHINGEKI:                11,     // 進撃の巨人
   NEKOMIYA:                12,     // 猫宮ひなた
   STEINS_GATE:             13,     // STEINS;GATE
   FATE_STAY_NIGHT:         14,     // Fate/stay night
   CHO_KABUKI:              15,     // 超歌舞伎×千本桜
   DANMACHI:                16,     // ダンジョンに出会いを求めるのは間違っているだろうか
   FINAL_FANTASY_15:        17,     // ファイナルファンタジーXV
   BUNGOU:                  18,     // 文豪ストレイドッグス
   ATELIER_RYZA_2:          19,     // ライザのアトリエ2
   PERSONA_5:               20,     // ペルソナ5
   OVERROAD:                21,     // オーバーロード
   SWORD_ART_ONLINE:        22,     // ソードアート・オンライン
   NIER_AUTOMATA:           23,     // ニーアオートマタ
   TENSURA:                 24,     // 転生したらスライムだった件
   TOARU_RAILGUN:           25,     // とある科学の超電磁砲T
   MUSHOKU_TENSEI:          26,     // 無職転生
   ROCKMAN_EXE:             27,     // ロックマンエグゼ
   CHAINSAW_MAN:            28,     // チェンソーマン
   YOJO_SENKI:              29,     // 幼女戦記
   MADE_IN_ABYSS:           30,     // メイドインアビス
   HUNTER_HUNTER:           31,     // HUNTER×HUNTER
   TOARU_INDEX_3:           32,     // とある魔術の禁書目録Ⅲ
   KAGE_JITSU:              33,     // 陰の実力者になりたくて！
   POP_TEAM_EPIC:           34,     // ポプテピピック
   FATE_STRANGE_FAKE:       35,     // Fate/strange Fake
} as const;

export type CollaborationTitle = typeof CollaborationTitle[keyof typeof CollaborationTitle];