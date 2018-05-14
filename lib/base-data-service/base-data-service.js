import { BaseApiService } from './base-api-service';
import { ConfigurationManager } from 'lib/configuration-manager/modules/ConfigurationManager';



/**
 * Provides High-level API for domain specific data
 * Owns data validation, pre/post-processing of request/response data
 */
export class BaseDataService {
  /**
   * @param  {BaseApiService} apiService
   * @param  {ConfigurationManager} config
   * @param  {Object} logger
   */
  constructor(apiService, config, logger) {
    if (! (apiService instanceof BaseApiService)) {
      throw new TypeError('[BaseDataService] Unrecognized `apiService` argument, it must be the instance of `BaseApiService`');
    }

    if (! (config instanceof ConfigurationManager)) {
      throw new TypeError('[BaseDataService] Unrecognized `config` argument, it must be the instance of `ConfigurationManager`');
    }

    this.api    = apiService;
    this.config = config;
    this.logger = logger;
  }
}