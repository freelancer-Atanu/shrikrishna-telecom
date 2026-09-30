import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faLocationDot,
  faPhone,
  faMobileScreenButton,
  faScrewdriverWrench,
  faBlender,
  faHeadphones,
  faLaptop,
  faCameraRetro,
  faPrint,
  faDiamondTurnRight,
  faStar,
  faBars,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faGoogle } from "@fortawesome/free-brands-svg-icons";

export const icons = {
  location: faLocationDot,
  phone: faPhone,
  mobile: faMobileScreenButton,
  wrench: faScrewdriverWrench,
  blender: faBlender,
  headphones: faHeadphones,
  laptop: faLaptop,
  camera: faCameraRetro,
  print: faPrint,
  directions: faDiamondTurnRight,
  star: faStar,
  bars: faBars,
  tag: faTag,
  whatsapp: faWhatsapp,
  google: faGoogle,
} satisfies Record<string, IconDefinition>;

export type IconName = keyof typeof icons;
