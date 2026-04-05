/** Optional public URLs; leave empty to hide social icons in the footer. */
export const socialUrls = {
  instagram: (import.meta.env.VITE_SOCIAL_INSTAGRAM as string | undefined)?.trim() || '',
  facebook: (import.meta.env.VITE_SOCIAL_FACEBOOK as string | undefined)?.trim() || '',
};

/** WhatsApp business number without + (e.g. 212600000000). Used for checkout handoff. */
export const whatsappE164 =
  (import.meta.env.VITE_WHATSAPP_E164 as string | undefined)?.replace(/\D/g, '') || '212600000000';
