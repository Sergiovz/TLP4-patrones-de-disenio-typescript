import { INotifier } from '../interfaces/INotifier';
import { EmailNotifier } from './EmailNotifier';
import { SmsNotifier } from './SmsNotifier';
import { WhatsappNotifier } from './WhatsappNotifier';

export class NotifierFactory {
  static create(channel: string): INotifier {
    switch (channel.toLowerCase()) {
      case 'email':
        return new EmailNotifier();
      case 'sms':
        return new SmsNotifier();
      case 'whatsapp':
        return new WhatsappNotifier();
      default:
        throw new Error(`Canal no soportado: ${channel}`);
    }
  }
}