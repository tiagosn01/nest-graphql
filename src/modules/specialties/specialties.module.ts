import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CreateSpecialtyInput } from './dto/create-specialty.input';
import { SpecialtyDTO } from './dto/specialty.dto';
import { UpdateSpecialtyInput } from './dto/update-specialty.input';
import { Specialty } from './entities/specialty.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Specialty])],
      // describe the resolvers you want to expose
      resolvers: [
        {
          DTOClass: SpecialtyDTO,
          EntityClass: Specialty,
          CreateDTOClass: CreateSpecialtyInput,
          UpdateDTOClass: UpdateSpecialtyInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})
export class SpecialtiesModule {}
