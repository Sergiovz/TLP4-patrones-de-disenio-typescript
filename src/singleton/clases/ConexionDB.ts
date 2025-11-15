import { IConexionDB } from "../interfaces/IConexionDB";

export class ConexionDB implements IConexionDB {
  public readonly host: string;
  public readonly puerto: number;
  public readonly usuario: string;
  private conectada: boolean = false;

  private static instance: ConexionDB | null = null;

  private constructor() {
    this.host = "localhost";
    this.puerto = 5432;
    this.usuario = "inventario_user";
  }

  public static getInstance(): ConexionDB {
    if (!ConexionDB.instance) {
      ConexionDB.instance = new ConexionDB();
    } else {
      console.log("DB ya está conectada (Singleton).");
    }
    return ConexionDB.instance;
  }

  public conectar(): void {
    if (!this.conectada) {
      console.log(
        `Conectado a DB -> ${this.usuario}@${this.host}:${this.puerto}`
      );
      this.conectada = true;
    } else {
      console.log("DB ya está conectada (Singleton).");
    }
  }

  public desconectar(): void {
    if (this.conectada) {
      console.log(`Desconectado de la DB.`);
      this.conectada = false;
    } else {
      console.log(`DB ya está desconectada.`);
    }
  }
}
