module.exports = {
    reactStrictMode: false,
    poweredByHeader: false,
    webpack: (config, { dev, isServer }) => {
      // Perform customizations to webpack config
      // Important: return the modified config
      return config;
    },
  };