/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    FOO: {
      type: "sst.sst.Secret"
      value: string
    }
    MyWeb: {
      type: "sst.aws.Nextjs"
      url: string
    }
  }
}
export {}
