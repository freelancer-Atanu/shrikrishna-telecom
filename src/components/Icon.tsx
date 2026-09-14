import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons, type IconName } from "@/lib/icons";

interface IconProps {
  name: IconName;
  className?: string;
}

/** Decorative icon, hidden from assistive tech; pair with visible or sr-only text for meaning. */
export default function Icon({ name, className }: IconProps) {
  return <FontAwesomeIcon icon={icons[name]} className={className} aria-hidden="true" focusable="false" />;
}
