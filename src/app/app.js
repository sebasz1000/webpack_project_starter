import { ComponentService } from "./component.service";
import { generateService } from "./generate.service";

const componentService = new ComponentService();
export const run = messages => {
  componentService.onClick(() => {
    componentService.setResult(generateService(messages));
  });
};
