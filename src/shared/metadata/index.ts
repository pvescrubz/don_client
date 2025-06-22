import { CONFIG } from "../model/config";

export const image = [
  {
    url : `${CONFIG.APP_BASE_URL}/images/metabg.webp`,
    width: 1200,
    height: 630,
    alt: "Don Viche"
  }
]

export const DISABLED_ROBOTS = {
  index: false,
  follow: false, 
  nocache: true, 
  googleBot: {
    index: false,
    follow: false,
  }
}

