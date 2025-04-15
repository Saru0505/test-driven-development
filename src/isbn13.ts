export function isValid(isbn: string): boolean {
  if (!/^\d{13}$/.test(isbn)) {
    if (!/^\d+$/.test(isbn)) throw new Error("Invalid ISBN format");
    throw new Error("ISBN must be 13 digits long");
  }

  const digits = isbn.split("").map(Number);

  const sum = digits
    .slice(0, 12)
    .reduce((acc, digit, idx) => acc + digit * (idx % 2 === 0 ? 1 : 3), 0);

  const check = (10 - (sum % 10)) % 10;

  return check === digits[12];
}
