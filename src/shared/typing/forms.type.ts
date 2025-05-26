import { TGamePlatform } from "../lib/platorms.config";

export interface IForm {
  onClose?: () => void;
  config?: TGamePlatform;
}
