export const formatCardNumber = (value: string) => {
  const cleaned = value.replace(/\D/g, "").slice(0, 19);

  return cleaned.replace(/(.{4})/g, "$1 ").trim();
};

export const formatExpiry = (value: string) => {
  const cleaned = value.replace(/\D/g, "").slice(0, 4);

  if (cleaned.length <= 2) return cleaned;

  return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
};

export const formatCVC = (value: string) => {
  return value.replace(/\D/g, "").slice(0, 4);
};
