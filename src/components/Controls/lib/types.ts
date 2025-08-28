import Checkbox from "../../ToggleControls/Checkbox/Checkbox";
import Radio from "../../ToggleControls/Radio/Radio";
import Select from "../Select/Select";
import Textarea from "../Textarea/Textarea";
import Textbox from "../Textbox/Textbox";

export type TControl =
  | typeof Select
  | typeof Textbox
  | typeof Textarea;

export type TToggleControl =
  | typeof Checkbox
  | typeof Radio;
