import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event } from './event.schema';

@Injectable()
export class EventService {
  constructor(@InjectModel(Event.name) private eventModel: Model<Event>) {}

  async createEvent(data: Partial<Event>) {
    const event = new this.eventModel(data);
    return event.save();
  }

  async listEvents() {
    return this.eventModel.find().exec();
  }
}
