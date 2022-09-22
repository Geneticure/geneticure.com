import type { AstroUserConfig } from "astro";
import compress from "astro-compress";

export default (): AstroUserConfig => ({ integrations: [compress()] });
