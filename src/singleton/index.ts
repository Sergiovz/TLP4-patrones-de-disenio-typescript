import { ConexionDB } from "./clases/ConexionDB";

export { IConexionDB } from "./interfaces/IConexionDB";
export { ConexionDB } from "./clases/ConexionDB";

export function runSingleton(): void {
  console.log("\n=== Patrón Singleton: ConexionDB de Inventario ===");

  const instancia1 = ConexionDB.getInstance();
  instancia1.conectar();

  const instancia2 = ConexionDB.getInstance();
  instancia2.desconectar();
  instancia2.desconectar();
}
