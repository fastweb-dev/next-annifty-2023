export const apiEndpoint = 'https://annifty.prismic.io/api/v2'
export const accessToken = process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === 'artist') {
    return `/${doc.uid}`
  }
  return '/'
}

// Additional helper function for Next/Link components
export const hrefResolver = (doc) => {
  if (doc.type === 'artist') {
    return '/[uid]'
  }
  return '/'
}