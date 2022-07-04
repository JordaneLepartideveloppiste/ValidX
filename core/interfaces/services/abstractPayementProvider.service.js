export class AbstractPaymentProviderService {
  constructor() {
    if (this.constructor === AbstractPaymentProviderService) {
      throw new TypeError(
        'Abstract class "AbstractPaymentProviderService" cannot be instantiatied directly'
      );
    }
  }
}
