import { CreatePm2Entry } from "utils";

export const lo_pal = CreatePm2Entry({
  name: "lopal",
  script: "echo $MODE",
  env_development: {
    MODE: "DEV",
  },
  env_production: {
    MODE: "PROD",
  },
});
