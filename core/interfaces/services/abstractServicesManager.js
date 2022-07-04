export class AbstractServicesManager {
  constructor() {
    if (this.constructor === AbstractServicesManager) {
      throw new TypeError(
        'Abstract class "AbstractServicesManager" cannot be instantiatied directly'
      );
    }
  }
  getConfig() {
    throw new Error("You must implement this function");
  }
  getPaymentProvider() {
    throw new Error("You must implement this function");
  }
}
