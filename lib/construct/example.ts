import { Construct } from "constructs";

export interface ExampleProps {
  example: string;
}

export class Example extends Construct {
  constructor(scope: Construct, id: string, props: ExampleProps) {
    super(scope, id);
  }
}
