import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CreateUniversityInput } from './dto/create-university.input';
import { UniversityDTO } from './dto/universities.dto';
import { UpdateUniversityInput } from './dto/update-university.input';
import { University } from './entities/university.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([University])],
      // describe the resolvers you want to expose
      resolvers: [
        {
          DTOClass: UniversityDTO,
          EntityClass: University,
          CreateDTOClass: CreateUniversityInput,
          UpdateDTOClass: UpdateUniversityInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})
export class UniversitiesModule {}
