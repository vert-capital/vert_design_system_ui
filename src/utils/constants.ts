export const DATE_TIME_PATTERN = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/;

export const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

export const ITENS_COLOR = {
  yellow: "#E6CF42",
  primary: "#00747A",
  green: "#41d394",
  red: "#F07363",
  orange: "#F4A053",
  purple: "#885DE2",
  blue: "#8CB3FF",
  black: "#171919",
};

export const APPLICATIONS_NAME = {
  1: "Obrigações",
  2: "Eventos de pagamentos",
  3: "Integralizações",
  4: "Subscrições",
  5: "Atualização de status dos patrimônios",
  6: "Marcos dos patrimônios",
  7: "Vencimento das séries",
  8: "Status das séries",
} as const;

export const APPLICATIONS_COLORS = {
  1: { color: "#3DA5A5", disabled: "#77C0C0", hover: "#2B7373" },
  2: { color: "#F28E83", disabled: "#F2B5B0", hover: "#C15A4F" },
  3: { color: "#3B634E", disabled: "#6E8C7C", hover: "#2B3F3A" },
  4: { color: "#86381D", disabled: "#B36A4D", hover: "#5A2412" },
  5: { color: "#F4A053", disabled: "#F4CFA3", hover: "#C17A2B" },
  6: { color: "#A5AF80", disabled: "#C0C9A5", hover: "#737B4F" },
  7: { color: "#E6CF42", disabled: "#E6E0A5", hover: "#B3A12B" },
  8: { color: "#171919", disabled: "#4F4F4F", hover: "#000000" },
} as const;

export const APPLICATIONS_REFERENCE_NAME = {
  1: "obligations",
  2: "payment_events",
  3: "integrations",
  4: "subscriptions",
  5: "patrimony_status",
  6: "patrimony",
  7: "series_expiration",
  8: "series_status",
};
