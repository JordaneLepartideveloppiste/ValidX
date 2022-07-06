import { ConfigServiceInterface } from "./configInterface.service"
import { PaymentProviderServiceInterface } from "./payementProviderInterface.service";

export interface AbstractServicesManager {
  
  getConfig() : ConfigServiceInterface;
  getPaymentProvider() : PaymentProviderServiceInterface;

}
