import fs from "fs";
import path from "path";

// jsonからenum(as const)に変換する対象ファイル
// 実行コマンド「npm run generate-enums-from-json」
const groups = [
  {
    group: "cards",
    items: [
      { entity: "CardAttributeType",  json: "m_card_attribute_types.json" },
      { entity: "CardElementType",    json: "m_card_element_types.json" },
      { entity: "CardRarityType",     json: "m_card_rarity_types.json" },
      { entity: "CardSkillType",      json: "m_card_skill_types.json" },
      { entity: "CardCategoryType",   json: "m_card_category_types.json" },
      { entity: "CardCastTimeType",   json: "m_card_cast_time_types.json" },
    ],
  },
  {
    group: "heros",
    items: [
      { entity: "Hero",               json: "m_heros.json" },
      { entity: "HeroRoleType",       json: "m_hero_role_types.json" },
      { entity: "HeroMedalType",      json: "m_hero_medal_types.json" },
    ],
  },
  {
    group: "common",
    items: [
      { entity: "CollaborationTitle", json: "m_collaboration_titles.json" },
      { entity: "ImageAsset",         json: "m_image_assets.json" },
    ],
  },
];

const DATA_ROOT = "./src/data";
const TYPE_ROOT = "./src/types";
const ACCESSOR_ROOT = "./src/accessors";

for (const group of groups) {
  const indexExports = [];  // indexファイル記述用

  // jsonファイルからtsファイルを自動生成する（as const定義ファイル）
  for (const item of group.items) {
    const jsonPath = path.join(DATA_ROOT, group.group, item.json);
    const tsDir = path.join(TYPE_ROOT, group.group);
    const tsPath = path.join(tsDir, `${item.entity}.ts`);
    const json = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

    const body = json
      .map((row) => {
        // enumの自動出力結果がガタガタになるのでvalueとコメント位置を調整する 
        const keyPart = `${row.key}: `;
        const valuePart = `${row.id}`;
        const valuePadding = " ".repeat(Math.max(25 - keyPart.length, 1));      // 可読性を上げるため値を揃える
        const commentPadding = " ".repeat(Math.max(7 - valuePart.length, 1));   // 可読性を上げるためコメントを揃える
        return `   ${row.key}: ${valuePadding}${row.id},${commentPadding}// ${row.label}`
      }).join("\n");
    
    const ts = 
`export const ${item.entity} = {
${body}
} as const;

export type ${item.entity} = typeof ${item.entity}[keyof typeof ${item.entity}];`;

    fs.mkdirSync(tsDir, { recursive: true });
    fs.writeFileSync(tsPath, ts);

    indexExports.push(`export * from "./${item.entity}";`);
  }

  // フォルダごとにindex.ts を自動生成
  const indexPath = path.join(TYPE_ROOT, group.group, "index.ts");
  fs.writeFileSync(indexPath, indexExports.join("\n") + "\n");

  // フォルダごとget関数をまとめたtsファイルを作成する
  const accessorDir = path.join(ACCESSOR_ROOT, group.group);
  const toVarName = (entity) => entity.charAt(0).toLowerCase() + entity.slice(1);

  const imports = group.items
  .map((item) =>
    `import ${toVarName(item.entity)} from "../../data/${group.group}/${item.json}";`
  ).join("\n");

  const maps = group.items
  .map((item) =>
    `  ${item.entity}: new Map(${toVarName(item.entity)}.map((row) => [row.id, row])),`
  ).join("\n");

  const functions = group.items
  .map((item) =>
`export function getAll${item.entity}() {
  return ${item.entity.charAt(0).toLowerCase() + item.entity.slice(1)};
}
  
export function get${item.entity}ById(id: number) {
  return maps.${item.entity}.get(id);
}\n`
  ).join("\n");

  const accessorTs =
`${imports}

const maps = {
${maps}
};

${functions}`;

  fs.mkdirSync(accessorDir, { recursive: true });
  fs.writeFileSync(path.join(accessorDir, "getData.ts"), accessorTs);
}
