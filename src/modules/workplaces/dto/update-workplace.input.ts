import { CreateWorkplaceInput } from './create-workplace.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateWorkplaceInput extends PartialType(CreateWorkplaceInput) {
  @Field(() => ID, { nullable: true })
  id?: string;
}
