import { NextRequest, NextResponse } from "next/server";
import { Resource } from "sst";

export default function middleware(req: NextRequest) {
  console.log(
    `Attempting to access FOO here will throw
    Error: "FOO" is not linked
    because an NPM package called "process" is installed
    and sst is importing from "process" without specifying "node:process"
    due to issues with other runtimes.`,
    Resource.FOO.value
  );
  return NextResponse.next();
}
