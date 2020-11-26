import CepService from "../types/cep-service";
import Cart from "./cart";

class CepCalculator {
  constructor(private readonly _cepService: CepService) {}

  calculateShipping = (cart: Cart) => {
    if (cart.value >= 100) {
      return cart.value;
    }

    return this._cepService.getCepValue(cart.user.cep) + cart.value;
  };
}

export default CepCalculator;
