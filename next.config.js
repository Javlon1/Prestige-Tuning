module.exports = {
  // Настройки прокси для решения проблем с CORS
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.example.com/:path*',
      },
      {
        source: '/:path*',
        destination: '/404', // Перенаправляем все остальные запросы на страницу 404
      },
    ];
  },

  // Настройки для компонента next/image
  images: {
    domains: ["646eb6f042d8c8660ed1ad7d55dabf1a.serveo.net"], // Домен сайта
  },
};