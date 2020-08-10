export type CurrencyCode = "USD" | "NGN" | "IDR";

export type Currency = {
  code: CurrencyCode;
  symbol: string;
  decimals: number;
};

export const CURRENCIES: { [key: string]: Currency } = {
  USD: {
    code: "USD",
    symbol: "$",
    decimals: 2,
  },
  NGN: {
    code: "NGN",
    symbol: "₦",
    decimals: 0,
  },
  IDR: {
    code: "IDR",
    symbol: "Rp",
    decimals: 0,
  },
};

export function format(amount: number, code: CurrencyCode): string {
  const currency = CURRENCIES[code];

  const str = amount.toLocaleString(undefined, {
    minimumFractionDigits: currency.decimals,
    maximumFractionDigits: currency.decimals,
  });

  return `${currency.symbol} ${str}`;
}
