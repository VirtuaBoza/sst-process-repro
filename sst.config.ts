/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "sst-repro-3",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const FOO = new sst.Secret("FOO", "BAR");
    new sst.aws.Nextjs("MyWeb", {
      link: [FOO],
    });
  },
});
