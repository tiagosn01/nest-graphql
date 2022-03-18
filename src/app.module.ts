import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppService } from './app.service';
import { StudentsModule } from './modules/students/students.module';
import { WorkplaceModule } from './modules/workplaces/workplace.module';
import { UniversitiesModule } from './modules/universities/universities.module';
import { AddressesModule } from './modules/addresses/addresses.module';
import { SpecialtiesModule } from './modules/specialties/specialties.module';
import { ProceduresModule } from './modules/procedures/procedures.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { AdminsWorkplacesModule } from './modules/admins-workplaces/admins-workplaces.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    StudentsModule,
    WorkplaceModule,
    UniversitiesModule,
    AddressesModule,
    SpecialtiesModule,
    ProceduresModule,
    ProjectsModule,
    AdminsWorkplacesModule,
  ],
  providers: [AppService],
})
export class AppModule {}
