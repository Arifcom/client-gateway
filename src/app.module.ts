import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER',
        transport: Transport.TCP,
        options: {
          host: process.env.USER_SERVICE_HOST,
          port: parseInt(process.env.USER_SERVICE_PORT),
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
