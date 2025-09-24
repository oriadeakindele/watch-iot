export default () => ({
  app: {
    name: process.env.APP_NAME ?? "watch-iot",
    env: process.env.NODE_ENV ?? "development",
    port: Number(process.env.PORT ?? 3001),
  },
});
