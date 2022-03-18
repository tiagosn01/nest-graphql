import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { AdminsWorkplaceDTO } from './dto/admins-workplace.dto';
import { CreateAdminsWorkplaceInput } from './dto/create-admins-workplace.input';
import { UpdateAdminsWorkplaceInput } from './dto/update-admins-workplace.input';
import { AdminsWorkplace } from './entities/admins-workplace.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([AdminsWorkplace])],
      // describe the resolvers you want to expose
      resolvers: [
        {
          DTOClass: AdminsWorkplaceDTO,
          EntityClass: AdminsWorkplace,
          CreateDTOClass: CreateAdminsWorkplaceInput,
          UpdateDTOClass: UpdateAdminsWorkplaceInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})
export class AdminsWorkplacesModule {}
