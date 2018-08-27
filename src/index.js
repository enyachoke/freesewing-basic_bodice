import freesewing from "freesewing";
import pluginBundle from "@freesewing/plugin-bundle";

import config from "../config/config";
import { version } from "../package.json";

import back from "./back";
import front from "./front";
import ref from "./ref";

var pattern = new freesewing.Pattern({ version: version, ...config }).with(
  pluginBundle
);

pattern.draft = function() {
  this.parts.back = this.draftBack(new pattern.Part());
  this.parts.front = this.draftFront(new pattern.Part().copy(this.parts.back));
  this.parts.ref = this.draftRef(new pattern.Part());
  return pattern;
};

pattern.draftBack = part => back.draft(part);
pattern.draftFront = part => front.draft(part);
pattern.draftRef = part => ref.draft(part);

export default pattern;
