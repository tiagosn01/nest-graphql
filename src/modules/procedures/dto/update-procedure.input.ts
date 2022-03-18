import { CreateProcedureInput } from './create-procedure.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateProcedureInput extends PartialType(CreateProcedureInput) {
  @Field(() => ID, { nullable: true })
  id: string;
}
