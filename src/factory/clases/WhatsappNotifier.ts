import { INotifier } from "../interfaces/INotifier";

export class WhatsappNotifier implements INotifier {
  send(to: string, message: string): void {
    if (!this.isValidPhoneNumber(to)) {
      throw new Error(`Formato de número de teléfono inválido: ${to}`);
    }
    console.log(`[WhatsApp] A: ${to} — ${message}`);
  }

  private isValidPhoneNumber(phone: string): boolean {
    const phoneRegex = /^\+?\d{10,15}$/;
    return phoneRegex.test(phone);
  }
}
