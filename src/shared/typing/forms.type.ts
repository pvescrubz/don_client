import { TGamePlatform } from "../content/lib/platorms.config";

export interface IForm {
  onClose?: () => void;
  config?: TGamePlatform;
}
