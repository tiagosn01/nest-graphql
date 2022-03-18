import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CreateWorkplaceInput } from './dto/create-workplace.input';
import { UpdateWorkplaceInput } from './dto/update-workplace.input';
import { WorkplaceDTO } from './dto/workplace.dto';
import { Workplace } from './entities/workplace.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Workplace])],
      resolvers: [
        {
          DTOClass: WorkplaceDTO,
          EntityClass: Workplace,
          CreateDTOClass: CreateWorkplaceInput,
          UpdateDTOClass: UpdateWorkplaceInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})
export class WorkplaceModule {}
