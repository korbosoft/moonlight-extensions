import Commands from "@moonlight-mod/wp/commands_commands";
import { CommandType, InputType, OptionType, StringCommandOption } from "@moonlight-mod/types/coreExtensions/commands";
import { UserStore } from "@moonlight-mod/wp/common_stores";
import { User } from "@moonlight-mod/types";

Commands.registerCommand({
    type: CommandType.CHAT,
    inputType: InputType.BUILT_IN_TEXT,
    id: "slap",
    description: "Slaps the victim.",
    options: [
        {
            name: "victim",
            description: "The victim of the slapping",
            type: OptionType.STRING,
            required: true
        }
    ],
    execute: (options) => {
        const victim = options.find((o): o is StringCommandOption => o.name === "victim")
        return { content: `<@${UserStore.getCurrentUser().id}> slaps ${victim.value} around a bit with a large trout` };
    }
});
