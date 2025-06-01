export const formatedPrice = (price: string | number): string | null => {
  const num = typeof price === "string" ? parseFloat(price) : price;

  if (typeof num !== "number" || isNaN(num)) {
    return null;
  }
  return num.toLocaleString("ru-RU");
};
