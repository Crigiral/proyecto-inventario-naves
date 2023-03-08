import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComandoRegistrarLanzadera } from './aplicacion/lanzadera/ComandoRegistrarLanzadera';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mongodb',
    //   url: 'mongodb://localhost:27017',
    //   database: 'nave-espacial',
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   ssl: true,
    //   useUnifiedTopology: true,
    //   useNewUrlParser: true,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
