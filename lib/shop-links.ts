// The Shopify store sits on a separate domain, and every outbound link to it
// carries rel="noreferrer", which strips the referrer header. Untagged clicks
// therefore arrive in Shopify's reports as Direct and cannot be distinguished
// from anything else. UTM parameters survive that, and Shopify folds
// utm_source into its "Sessions by referrer" report — so tagged links show up
// as "website" and the store's traffic can finally be attributed to this site.
export function withUtm(url: string, medium: string, campaign: string) {
  return `${url}${url.includes('?') ? '&' : '?'}utm_source=website&utm_medium=${medium}&utm_campaign=${campaign}`
}
