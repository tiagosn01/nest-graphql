import { CreateUniversityInput } from './create-university.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateUniversityInput extends PartialType(CreateUniversityInput) {
  @Field(() => ID, { nullable: true })
  id?: string;
}
