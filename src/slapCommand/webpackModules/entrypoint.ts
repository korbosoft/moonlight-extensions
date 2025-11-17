import { greeting } from "@moonlight-mod/wp/slapCommand_someLibrary";

const logger = moonlight.getLogger("slapCommand/entrypoint");
logger.info("Hello from entrypoint!");
logger.info("someLibrary exports:", greeting);

const natives = moonlight.getNatives("slapCommand");
logger.info("node exports:", natives);
