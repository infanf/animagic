module.exports = {
  resolve: {
    alias: {
      '@': './src',
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build',
    sourcemap: true,
  },
  base: '/animagic/',
  publicDir: 'public',
}; 