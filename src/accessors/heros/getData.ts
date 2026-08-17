import hero from "../../data/heros/m_heros.json";
import heroRoleType from "../../data/heros/m_hero_role_types.json";
import heroMedalType from "../../data/heros/m_hero_medal_types.json";
import heroMedalColorType from "../../data/heros/m_hero_medal_color_types.json";
import heroStatus from "../../data/heros/m_hero_statuses.json";
import heroDetails from "../../data/heros/m_hero_details.json";
import { ImageAsset } from "../../types/common";
import { getImageAssetById } from "../common/getData";

const maps = {
  Hero: new Map(hero.map((row) => [row.id, row])),
  HeroRoleType: new Map(heroRoleType.map((row) => [row.id, row])),
  HeroMedalType: new Map(heroMedalType.map((row) => [row.id, row])),
  HeroMedalColorType: new Map(heroMedalColorType.map((row) => [row.id, row])),
  HeroStatus: new Map(heroStatus.map((row) => [row.id, row])),
  HeroDetail: new Map(heroDetails.map((row) => [row.heroId, row])),
};

export function getAllHero() {
  return hero;
}

export function getAllHeroStatus() {
  return heroStatus;
}

export function getHeroStatusById(id: number) {
  return maps.HeroStatus.get(id);
}

export function getHeroDetailByHeroId(id: number) {
  return maps.HeroDetail.get(id);
}

export function getHeroById(id: number) {
  return maps.Hero.get(id);
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

export function getAllHeroMedalColorType() {
  return heroMedalColorType;
}
  
export function getHeroMedalColorTypeById(id: number) {
  return maps.HeroMedalColorType.get(id);
}

export function getHeroMedalTypeImageAssetById(id: number) {
  const typeToImageAssetMap: Record<number, ImageAsset> = {
    1: ImageAsset.SWORD,
    2: ImageAsset.SHIELD,
    3: ImageAsset.HEART,
    4: ImageAsset.SHOES,
    5: ImageAsset.HUMAN,
    6: ImageAsset.CLOCK,
    7: ImageAsset.KEY,
    8: ImageAsset.FIRE,
    9: ImageAsset.WATER,
    10: ImageAsset.LEAF,
    11: ImageAsset.BOLT,
    12: ImageAsset.SPEECH_BUBBLE,
    13: ImageAsset.BEAKER,
  };

  return typeToImageAssetMap[id] ?? ImageAsset.NONE;
}

export function getHeroMedalTypeImagePathById(id: number) {
  const imageAsset = getImageAssetById(getHeroMedalTypeImageAssetById(id));
  return imageAsset ? `/CompassDeckSimulator/${imageAsset.imagePath}` : '';
}
