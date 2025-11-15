import { INotifier } from "../interfaces/INotifier";

export class SmsNotifier implements INotifier {
  send(to: string, message: string): void {
    if (!this.isValidPhoneNumber(to)) {
      throw new Error(`Formato de número de teléfono inválido: ${to}`);
    }
    console.log(`[SMS] A: ${to} — ${message}`);
  }

  private isValidPhoneNumber(phone: string): boolean {
    const phoneRegex = /^\+?\d{10,15}$/;
    return phoneRegex.test(phone);
  }
}
