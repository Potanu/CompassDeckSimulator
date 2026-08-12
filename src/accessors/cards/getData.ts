import cardAttributeType from "../../data/cards/m_card_attribute_types.json";
import cardElementType from "../../data/cards/m_card_element_types.json";
import cardRarityType from "../../data/cards/m_card_rarity_types.json";
import cardSkillType from "../../data/cards/m_card_skill_types.json";
import cardCategoryType from "../../data/cards/m_card_category_types.json";
import cardCastTimeType from "../../data/cards/m_card_cast_time_types.json";
import cards from "../../data/cards/m_cards.json";
import cardStatuses from "../../data/cards/m_card_statuses.json";
import cardLevelStatuses from "../../data/cards/m_card_level_statuses.json";

const maps = {
  CardAttributeType: new Map(cardAttributeType.map((row) => [row.id, row])),
  CardElementType: new Map(cardElementType.map((row) => [row.id, row])),
  CardRarityType: new Map(cardRarityType.map((row) => [row.id, row])),
  CardSkillType: new Map(cardSkillType.map((row) => [row.id, row])),
  CardCategoryType: new Map(cardCategoryType.map((row) => [row.id, row])),
  CardCastTimeType: new Map(cardCastTimeType.map((row) => [row.id, row])),
};

export function getAllCard() {
  return cards;
}

export function getCardStatusDisplayByCardId(id: number, level = 1) {
  const card = cards.find((item) => item.id === id);
  const cardStatus = cardStatuses.find((item) => item.cardId === id);
  const matchingLevelStatuses = cardLevelStatuses.filter((item) => item.cardId === id);
  const levelStatus = matchingLevelStatuses.find((item) => item.level === level)
    ?? matchingLevelStatuses.find((item) => item.level === 1)
    ?? matchingLevelStatuses[0];

  if (!card) {
    return {
      cooldownTime: 0,
      attack: 0,
      defense: 0,
      health: 0,
      abilityLabel: "",
      level,
    };
  }

  return {
    cooldownTime: cardStatus?.cooldownTime ?? 16,
    attack: levelStatus?.attack ?? 0,
    defense: levelStatus?.defense ?? 0,
    health: levelStatus?.health ?? 0,
    abilityLabel: cardStatus?.abilityLabel ?? "",
    level,
  };
}

export function getAllCardAttributeType() {
  return cardAttributeType;
}
  
export function getCardAttributeTypeById(id: number) {
  return maps.CardAttributeType.get(id);
}

import cardAttributes from "../../data/cards/m_card_attributes.json";

export function getCardAttributeTypeByCardId(cardId: number) {
  const card = cards.find((item) => item.id === cardId);
  const attributeRows = cardAttributes.filter((item) => item.cardId === cardId);

  if (!card) {
    return undefined;
  }

  const attributeTypeId = attributeRows[0]?.cardAttributeTypeId;
  return attributeTypeId != null ? getCardAttributeTypeById(attributeTypeId) : undefined;
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
