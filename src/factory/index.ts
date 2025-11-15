export { INotifier } from "./interfaces/INotifier";
export type { NotificationChannel } from "./interfaces/channel";

export { EmailNotifier } from "./clases/EmailNotifier";
export { SmsNotifier } from "./clases/SmsNotifier";
export { WhatsappNotifier } from "./clases/WhatsappNotifier";
export { NotifierFactory } from "./clases/NotifierFactory";

export async function runFactory(): Promise<void> {
  console.log("\n=== Patrón Factory: Crear notificaciones (Email/SMS/WhatsApp) ====");

  const { NotifierFactory } = await import("./clases/NotifierFactory");

  const notifications: Array<{
    channel: "email" | "sms" | "whatsapp";
    to: string;
    message: string;
  }> = [
    {
      channel: "email",
      to: "jhonDoe@mail.com",
      message: "Recordatorio de clase a las 10:00.",
    },
    {
      channel: "sms",
      to: "+549370000000",
      message: "Tu nota de TLP4 ya está disponible.",
    },
    {
      channel: "whatsapp",
      to: "+549370000000",
      message: "Se reprogra la clase para mañana 09:00.",
    },
  ];

  for (const { channel, to, message } of notifications) {
    try {
      const notifier = NotifierFactory.create(channel);
      notifier.send(to, message);
    } catch (error: any) {
      console.error(
        `Error enviando notificación por ${channel}:`,
        error.message
      );
    }
  }
}
