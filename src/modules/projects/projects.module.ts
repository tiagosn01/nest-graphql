import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CreateProjectInput } from './dto/create-project.input';
import { ProjectDTO } from './dto/project.dto';
import { UpdateProjectInput } from './dto/update-project.input';
import { Project } from './entities/project.entity';

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
export class ProjectsModule {}
