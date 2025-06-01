import { TGamePlatform } from "../content/platorms.config";

export interface IForm {
  onClose?: () => void;
  config?: TGamePlatform;
}
