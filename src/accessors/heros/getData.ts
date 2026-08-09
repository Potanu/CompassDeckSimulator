import hero from "../../data/heros/m_heros.json";
import heroRoleType from "../../data/heros/m_hero_role_types.json";
import heroMedalType from "../../data/heros/m_hero_medal_types.json";
import heroMedalColorType from "../../data/heros/m_hero_medal_color_types.json";
import heroStatus from "../../data/heros/m_hero_statuses.json";
import { ImageAsset } from "../../types/common";
import { HeroMedalType } from "../../types/heros";
import { getImageAssetById } from "../common/getData.ts";

const maps = {
  Hero: new Map(hero.map((row) => [row.id, row])),
  HeroRoleType: new Map(heroRoleType.map((row) => [row.id, row])),
  HeroMedalType: new Map(heroMedalType.map((row) => [row.id, row])),
  HeroMedalColorType: new Map(heroMedalColorType.map((row) => [row.id, row])),
  HeroStatus: new Map(heroStatus.map((row) => [row.id, row])),
};

export function getAllHero() {
  return hero;
}

export function getAllHeroStatus() {
  return heroStatus;
}

export function getHeroById(id: number) {
  return maps.Hero.get(id);
}

export function getHeroStatusById(id: number) {
  return maps.HeroStatus.get(id);
}

export function getAllHeroRoleType() {
  return heroRoleType;
}
  
export function getHeroRoleTypeById(id: number) {
  return maps.HeroRoleType.get(id);
}

export function getAllHeroMedalType() {
  return heroMedalType;
}

export function getHeroMedalTypeById(id: number) {
  return maps.HeroMedalType.get(id);
}

const medalTypeToImageAssetMap: Record<HeroMedalType, ImageAsset> = {
  [HeroMedalType.ATK_UP]: ImageAsset.SWORD,
  [HeroMedalType.DEF_UP]: ImageAsset.SHIELD,
  [HeroMedalType.HP_UP]: ImageAsset.HEART,
  [HeroMedalType.MOVE_SPEED_UP]: ImageAsset.SHOES,
  [HeroMedalType.HS_GAIN_UP]: ImageAsset.HUMAN,
  [HeroMedalType.COOLDOWN_REDUCTION]: ImageAsset.CLOCK,
  [HeroMedalType.CAPTURE_SPEED_UP]: ImageAsset.KEY,
  [HeroMedalType.RESIST_FIRE_UP]: ImageAsset.FIRE,
  [HeroMedalType.RESIST_WATER_UP]: ImageAsset.WATER,
  [HeroMedalType.RESIST_WOOD_UP]: ImageAsset.LEAF,
  [HeroMedalType.RESIST_STUN_UP]: ImageAsset.BOLT,
  [HeroMedalType.RESIST_SILENT_UP]: ImageAsset.SPEECH_BUBBLE,
  [HeroMedalType.RESIST_POISON_UP]: ImageAsset.BEAKER,
};

export function getHeroMedalTypeImageAssetById(id: number) {
  return medalTypeToImageAssetMap[id as HeroMedalType] ?? ImageAsset.NONE;
}

export function getHeroMedalTypeImagePathById(id: number) {
  const imageAsset = getImageAssetById(getHeroMedalTypeImageAssetById(id));
  return imageAsset ? `/CompassDeckSimulator/${imageAsset.imagePath}` : '';
}

export function getAllHeroMedalColorType() {
  return heroMedalColorType;
}
  
export function getHeroMedalColorTypeById(id: number) {
  return maps.HeroMedalColorType.get(id);
}
