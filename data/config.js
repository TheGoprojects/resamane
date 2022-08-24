const config = {
  defaultTitle: 'Résidences Amane',
  url:
    process.env.NODE_ENV !== 'development'
      ? process.env.NEXT_PUBLIC_SITE_URL
      : 'http://localhost:8888/resamane',
  defaultDescription:
    'Vous l’avez imaginé, nous l’avons construit... Bienvenue dans votre nouveau lieu de vie, Résidences Amane',
  googleAnalyticsID: 'G-PE8QW0ZGTZ2',
  GRAPHQL_URL:
    process.env.NODE_ENV !== 'development'
      ? process.env.NEXT_PUBLIC_GRAPHQL_URL
      : 'http://localhost:8888/resamane/graphql',
}

export default config