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
  /**
   * @description Production environment variables
   */
  env_production?: EnvVarObjectType;
  /**
   * @description Development environment variables
   */
  env_development?: EnvVarObjectType;
}
