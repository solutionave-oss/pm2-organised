import { CreatePm2Entry } from "src/utils";

export const suc = CreatePm2Entry([
  {
    name: "suc",
    script: "echo $MODE",
    env_development: {
      MODE: "DEV",
    },
    env_production: {
      MODE: "PROD",
    },
  },
]);
