import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { config } from './shared/config/config'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: config.db.connection_string,
      entities: [`${__dirname}/**/entity/*.entity{.ts,.js}`],
      synchronize: false,
      logging: false,
      extra: {
        max: config.db.pool_size,
      },
    }),
  ],
  controllers: [
    AppController,
  ],
})
export class AppModule {
}
