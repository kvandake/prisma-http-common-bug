import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from './client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {

  async onModuleInit() {
    await this.$connect();
  }

  protected execute(params: any, next: Function): Promise<void> {
    return next(params);
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
