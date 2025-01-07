type EnvVarObjectType = Record<string, string | number>;

interface IEcosystemEntry {
  /**
   * @description Name of the application, spaces are converted to '-' and overall case is converted to lowercase
   */
  name: string;
  /**
   * @description Command PM2 will run for you
   */
  script: string;
  /**
   * @description Path you want to watch
   */
  watch?: string;
  env_production?: EnvVarObjectType;
  env_development?: EnvVarObjectType;
}
