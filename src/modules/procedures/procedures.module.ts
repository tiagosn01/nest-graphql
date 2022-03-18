import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CreateProjectInput } from '../projects/dto/create-project.input';
import { ProjectDTO } from '../projects/dto/project.dto';
import { UpdateProjectInput } from '../projects/dto/update-project.input';
import { Project } from '../projects/entities/project.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Project])],
      // describe the resolvers you want to expose
      resolvers: [
        {
          DTOClass: ProjectDTO,
          EntityClass: Project,
          CreateDTOClass: CreateProjectInput,
          UpdateDTOClass: UpdateProjectInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})
export class ProceduresModule {}
