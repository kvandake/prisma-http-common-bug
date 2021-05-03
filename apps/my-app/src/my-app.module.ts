import { Module } from '@nestjs/common';
import { MyAppController } from './my-app.controller';
import { MyAppService } from './my-app.service';
import { PrismaModule } from "./prisma";

@Module({
  imports: [PrismaModule],
  controllers: [MyAppController],
  providers: [MyAppService],
})
export class MyAppModule {}
