import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Example } from "../construct/example";

export interface ExampleStackProps extends StackProps {
  vpcCidr: string;
}

export class ExampleStack extends Stack {
  constructor(scope: Construct, id: string, props: ExampleStackProps) {
    super(scope, id, props);

    new Example(this, "Example", {
      example: "example",
    });
  }
}
