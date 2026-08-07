import cardAttributeType from "../../data/cards/m_card_attribute_types.json";
import cardElementType from "../../data/cards/m_card_element_types.json";
import cardRarityType from "../../data/cards/m_card_rarity_types.json";
import cardSkillType from "../../data/cards/m_card_skill_types.json";
import cardCategoryType from "../../data/cards/m_card_category_types.json";
import cardCastTimeType from "../../data/cards/m_card_cast_time_types.json";
import cardData from "../../data/cards/m_cards.json";
import cardAttributeData from "../../data/cards/m_card_attributes.json";
import cardStatusData from "../../data/cards/m_card_statuses.json";
import cardLevelStatusData from "../../data/cards/m_card_level_statuses.json";

type CardAttributeRow = (typeof cardAttributeData)[number];
type CardStatusRow = (typeof cardStatusData)[number];
type CardLevelStatusRow = (typeof cardLevelStatusData)[number];

const maps = {
  CardAttributeType: new Map(cardAttributeType.map((row) => [row.id, row])),
  CardElementType: new Map(cardElementType.map((row) => [row.id, row])),
  CardRarityType: new Map(cardRarityType.map((row) => [row.id, row])),
  CardSkillType: new Map(cardSkillType.map((row) => [row.id, row])),
  CardCategoryType: new Map(cardCategoryType.map((row) => [row.id, row])),
  CardCastTimeType: new Map(cardCastTimeType.map((row) => [row.id, row])),
};

const cardAttributeMap = new Map<number, CardAttributeRow>(cardAttributeData.map((row) => [row.cardId, row]));
const cardStatusMap = new Map<number, CardStatusRow>(cardStatusData.map((row) => [row.card_id, row]));
const cardLevelStatusMap = new Map<number, Map<number, CardLevelStatusRow>>();

cardLevelStatusData.forEach((row) => {
  const cardLevelMap = cardLevelStatusMap.get(row.card_id) ?? new Map<number, CardLevelStatusRow>();
  cardLevelMap.set(row.level, row);
  cardLevelStatusMap.set(row.card_id, cardLevelMap);
});

export function getAllCard() {
  return cardData;
}

export function getCardById(id: number) {
  return cardData.find((row) => row.id === id);
}

export function getAllCardAttributeType() {
  return cardAttributeType;
}

export function getCardAttributeTypeById(id: number) {
  return maps.CardAttributeType.get(id);
}

export function getCardAttributeTypeByCardId(cardId: number) {
  const attribute = cardAttributeMap.get(cardId);
  if (!attribute) {
    return undefined;
  }

  return getCardAttributeTypeById(attribute.cardAttributeTypeId);
}

export function getAllCardElementType() {
  return cardElementType;
}

export function getCardElementTypeById(id: number) {
  return maps.CardElementType.get(id);
}

export function getAllCardRarityType() {
  return cardRarityType;
}

export function getCardRarityTypeById(id: number) {
  return maps.CardRarityType.get(id);
}

export function getAllCardSkillType() {
  return cardSkillType;
}

export function getCardSkillTypeById(id: number) {
  return maps.CardSkillType.get(id);
}

export function getAllCardCategoryType() {
  return cardCategoryType;
}

export function getCardCategoryTypeById(id: number) {
  return maps.CardCategoryType.get(id);
}

export function getAllCardCastTimeType() {
  return cardCastTimeType;
}

export function getCardCastTimeTypeById(id: number) {
  return maps.CardCastTimeType.get(id);
}

export function getAllCardStatus() {
  return cardStatusData;
}

export function getCardStatusByCardId(cardId: number) {
  return cardStatusMap.get(cardId);
}

export function getAllCardLevelStatus() {
  return cardLevelStatusData;
}

export function getCardLevelStatusByCardId(cardId: number) {
  return cardLevelStatusMap.get(cardId);
}

export function getCardLevelStatusByCardIdAndLevel(cardId: number, level: number) {
  return cardLevelStatusMap.get(cardId)?.get(level);
}

export function getCardStatusDisplayByCardId(cardId: number, level = 1) {
  const status = getCardStatusByCardId(cardId);
  const levelStatus = getCardLevelStatusByCardIdAndLevel(cardId, level);

  return {
    cooldownTime: status?.cooldownTime ?? 0,
    abilityLabel: status?.abilityLabel ?? "",
    attack: levelStatus?.attack ?? 0,
    defense: levelStatus?.defense ?? 0,
    health: levelStatus?.health ?? 0,
  };
}
