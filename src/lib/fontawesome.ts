import { config } from "@fortawesome/fontawesome-svg-core";

/** Next.js manages CSS; disable FontAwesome's runtime style injection to avoid a flash of unstyled icons. */
config.autoAddCss = false;
