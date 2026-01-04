import collaborationTitle from "../../data/common/m_collaboration_titles.json";
import imageAsset from "../../data/common/m_image_assets.json";

const maps = {
  CollaborationTitle: new Map(collaborationTitle.map((row) => [row.id, row])),
  ImageAsset: new Map(imageAsset.map((row) => [row.id, row])),
};

export function getAllCollaborationTitle() {
  return collaborationTitle;
}
  
export function getCollaborationTitleById(id: number) {
  return maps.CollaborationTitle.get(id);
}

export function getAllImageAsset() {
  return imageAsset;
}
  
export function getImageAssetById(id: number) {
  return maps.ImageAsset.get(id);
}
