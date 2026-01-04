import cardAttributeType from "../../data/cards/m_card_attribute_types.json";
import cardElementType from "../../data/cards/m_card_element_types.json";
import cardRarityType from "../../data/cards/m_card_rarity_types.json";
import cardSkillType from "../../data/cards/m_card_skill_types.json";
import cardCategoryType from "../../data/cards/m_card_category_types.json";
import cardCastTimeType from "../../data/cards/m_card_cast_time_types.json";

const maps = {
  CardAttributeType: new Map(cardAttributeType.map((row) => [row.id, row])),
  CardElementType: new Map(cardElementType.map((row) => [row.id, row])),
  CardRarityType: new Map(cardRarityType.map((row) => [row.id, row])),
  CardSkillType: new Map(cardSkillType.map((row) => [row.id, row])),
  CardCategoryType: new Map(cardCategoryType.map((row) => [row.id, row])),
  CardCastTimeType: new Map(cardCastTimeType.map((row) => [row.id, row])),
};

export function getAllCardAttributeType() {
  return cardAttributeType;
}
  
export function getCardAttributeTypeById(id: number) {
  return maps.CardAttributeType.get(id);
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
