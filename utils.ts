export function formatDateWithIntl(date: Date) {
  const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return dateFormatter.format(date).replace(",", ""); // Remove the comma between date and time
}
