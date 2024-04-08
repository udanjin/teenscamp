export enum SelectedPage {
  Home = "home",
  Faction = "faction",
  Video = "video",
  Terms = "terms",
  Register = "register",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
