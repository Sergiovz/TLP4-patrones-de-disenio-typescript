import { INotifier } from "../interfaces/INotifier";

export class EmailNotifier implements INotifier {
  send(to: string, message: string): void {
    if (!this.isValidEmail(to)) {
      throw new Error(`Formato de email inválido: ${to}`);
    }
    console.log(`[Email] A: ${to} — ${message}`);
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
