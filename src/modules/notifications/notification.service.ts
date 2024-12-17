import { Injectable } from '@nestjs/common';
import { sendEmail } from '../../utils/email.utils';

@Injectable()
export class NotificationService {
  async sendEventReminder(email: string, eventName: string, eventDate: Date) {
    const subject = `Reminder: ${eventName}`;
    const text = `Hi! Don't forget about your upcoming event: ${eventName} on ${eventDate.toDateString()}.`;
    await sendEmail(email, subject, text);
  }
}
