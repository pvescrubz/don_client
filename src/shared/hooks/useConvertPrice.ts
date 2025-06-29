import { useCurrencyStore } from "../stores/currency.store";
import { TCurrencyCode } from "../typing/currency.type";

export const useConvertPrice = () => {
  const { currencyRates } = useCurrencyStore();

  const convert = (
    price: number | string,
    from: TCurrencyCode,
    to: TCurrencyCode
  ): number => {
    const numericPrice = typeof price === "string" ? parseFloat(price) : price;
    if (!currencyRates || !currencyRates[from] || !currencyRates[to]) {
      return 0;
    }

    const priceInRUB = numericPrice * parseFloat(currencyRates[from]);
    const convertedPrice = priceInRUB / parseFloat(currencyRates[to]);

    const rounded = Number(convertedPrice.toFixed(2));
    return isNaN(rounded) ? 0 : rounded;
  };

  return { convert };
};
