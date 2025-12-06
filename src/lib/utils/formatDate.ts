/* eslint-disable @typescript-eslint/no-explicit-any */
export default function formatDate(release_date: any) {
  if (!release_date) return "TBA";

  const formatter = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const newDate = new Date(release_date * 1000);
  return formatter.format(newDate);
}
