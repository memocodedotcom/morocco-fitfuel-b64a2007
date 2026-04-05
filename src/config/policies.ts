/** Single source of truth for policy URLs (footer, checkout, PDP). */
export const POLICY_ROUTES = {
  authenticity: '/authenticity',
  privacy: '/privacy',
  returns: '/returns',
} as const;
