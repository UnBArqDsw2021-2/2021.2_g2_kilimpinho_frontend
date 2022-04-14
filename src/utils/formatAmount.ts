export const formatAmount = (
  amount: number,
  currency = "BRL",
  currencyDisplay = "symbol"
): string => {
  try {
    const numberFormat = new Intl.NumberFormat(["pt-BR"], {
      style: "currency",
      currency,
      currencyDisplay,
    });

    return numberFormat.format(amount);
  } catch (error) {
    return " ";
  }
};
