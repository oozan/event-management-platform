import { Controller, Post, Get, Body } from '@nestjs/common';
import { EventService } from './event.service';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  async create(@Body() body: any) {
    return this.eventService.createEvent(body);
  }

  @Get()
  async list() {
    return this.eventService.listEvents();
  }
}
