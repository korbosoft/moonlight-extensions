import Commands from "@moonlight-mod/wp/commands_commands";
import { InputType, CommandType } from "@moonlight-mod/types/coreExtensions/commands";
import UserStore from "@moonlight-mod/wp/common_stores";

Commands.registerCommand({
  type: CommandType.CHAT,
  inputType: InputType.BUILT_IN,
  id: "slap",
  description: "Slaps the victim.",
  options: [
    {
      name: "victim",
      description: "The victim of the slapping",
      type: OptionType.STRING
    }
  ],
  execute: (options) => {
    const victim = options.find((o): o is StringCommandOption => o.name === "victim")
    return { content: `<@${UserStore.getCurrentUser().id}> slaps ${victim} around a bit with a large trout` };
  }
});
