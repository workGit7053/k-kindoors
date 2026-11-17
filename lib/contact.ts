export const WHATSAPP_PHONE = "918851629191";
export const CALL_PHONE = "918527721904";
export const CALL_PHONE_DISPLAY = "+91 85277 21904";

export function getWhatsAppUrl(message?: string): string {
  const baseUrl = `https://wa.me/${WHATSAPP_PHONE}`;
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
}

export function getCallUrl(): string {
  return `tel:+${CALL_PHONE}`;
}
