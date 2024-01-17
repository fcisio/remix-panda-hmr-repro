/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],

  /**
   * Watch changes to the panda theme
   *
   * ⚠️ This is not the source of the issue.
   * If you comment this line, the bug will still happen.
   *
   * 1. Change a token value
   * 2. Hit save on a file watched by panda (ex: app/routes/_index.tsx)
   * 3. The styles disapear
   */
  watchPaths: ["./panda.config.ts"],

  postcss: true,
};
