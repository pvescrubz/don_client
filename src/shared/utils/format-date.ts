export const formatDate = (dateString: Date) => {
  return new Date(dateString).toLocaleString("ru-RU");
};
