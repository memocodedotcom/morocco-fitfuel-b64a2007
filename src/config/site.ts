/** Optional public URLs; leave empty to hide social icons in the footer. */
export const socialUrls = {
  instagram: (import.meta.env.VITE_SOCIAL_INSTAGRAM as string | undefined)?.trim() || '',
  facebook: (import.meta.env.VITE_SOCIAL_FACEBOOK as string | undefined)?.trim() || '',
};
