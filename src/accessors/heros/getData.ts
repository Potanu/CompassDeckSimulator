import hero from "../../data/heros/m_heros.json";
import heroRoleType from "../../data/heros/m_hero_role_types.json";
import heroMedalType from "../../data/heros/m_hero_medal_types.json";
import heroMedalColorType from "../../data/heros/m_hero_medal_color_types.json";
import heroStatus from "../../data/heros/m_hero_statuses.json";

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

export function getAllHeroMedalColorType() {
  return heroMedalColorType;
}
  
export function getHeroMedalColorTypeById(id: number) {
  return maps.HeroMedalColorType.get(id);
}
