export class AbstractConfigService {
  constructor() {
    if (this.constructor === AbstractConfigService) {
      throw new TypeError(
        'Abstract class "AbstractConfigService" cannot be instantiatied directly'
      );
    }
  }

  
}
