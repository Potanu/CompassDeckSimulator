import fs from "fs";
import path from "path";

// jsonからenum(as const)に変換する対象ファイル
// 実行コマンド「npm run generate-enums-from-json」
const targets = [
  {
    // カード効果区分マスタ
    src: "./src/data/cards/m_card_attribute_types.json",
    dst: "./src/types/cards/CardAttributeType.ts",
    constName: "CardAttributeType",
  },
  {
    // カード属性マスタ
    src: "./src/data/cards/m_card_element_types.json",
    dst: "./src/types/cards/CardElementType.ts",
    constName: "CardElementType",
  },
  {
    // カードレアリティマスタ
    src: "./src/data/cards/m_card_rarity_types.json",
    dst: "./src/types/cards/CardRarityType.ts",
    constName: "CardRarityType",
  },
  {
    // カードスキルマスタ
    src: "./src/data/cards/m_card_skill_types.json",
    dst: "./src/types/cards/CardSkillType.ts",
    constName: "CardSkillType",
  },
  {
    // カードカテゴリマスタ
    src: "./src/data/cards/m_card_category_types.json",
    dst: "./src/types/cards/CardCategoryType.ts",
    constName: "CardCategoryType",
  },
  {
    // カードCTマスタ
    src: "./src/data/cards/m_card_cast_time_types.json",
    dst: "./src/types/cards/CardCastTimeType.ts",
    constName: "CardCastTimeType",
  },
  {
    // ヒーローマスタ
    src: "./src/data/heros/m_heros.json",
    dst: "./src/types/heros/Hero.ts",
    constName: "Hero",
  },
  {
    // ヒーローロールマスタ
    src: "./src/data/heros/m_hero_role_types.json",
    dst: "./src/types/heros/HeroRoleType.ts",
    constName: "HeroRoleType",
  },
  {
    // ヒーローメダルマスタ
    src: "./src/data/heros/m_hero_medal_types.json",
    dst: "./src/types/heros/HeroMedalType.ts",
    constName: "HeroMedalType",
  },
  {
    // コラボタイトルマスタ
    src: "./src/data/common/m_collaboration_titles.json",
    dst: "./src/types/common/CollaborationTitle.ts",
    constName: "CollaborationTitle",
  }
];

// 順番に出力していく（js → ts）
for (const t of targets) {
    const json = JSON.parse(fs.readFileSync(t.src, "utf-8"));
    const body = json
        .map((row) => {
                // enumの自動出力結果がガタガタになるのでvalueとコメント位置を調整する 
                const keyPart = `${row.key}: `;
                const valuePart = `${row.id}`;
                const valuePadding = " ".repeat(Math.max(25 - keyPart.length, 1));      // 25文字目に値を揃えたい
                const commentPadding = " ".repeat(Math.max(7 - valuePart.length, 1));   // valueから7文字空けてコメントをそろえたい
                return `   ${row.key}: ${valuePadding}${row.id},${commentPadding}// ${row.label}`
            }
        )
        .join("\n");

    const ts = `export const ${t.constName} = {\n${body}\n} as const;\n`
    ts += `export type ${t.constName} = typeof ${t.constName}[keyof typeof ${t.constName}];`;

    fs.mkdirSync(path.dirname(t.dst), { recursive: true });
    fs.writeFileSync(t.dst, ts);
}
