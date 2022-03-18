import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProcedureInput {
  @Field()
  name: string;

  @Field()
  description: string;
}
