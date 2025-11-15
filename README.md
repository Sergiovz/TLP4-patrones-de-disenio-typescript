# Taller de Lenguajes de Programación IV

## Descripción del Proyecto

Este proyecto es una implementación práctica de patrones de diseño en TypeScript. Se desarrolló como parte del curso de Taller de Lenguajes de Programación IV, con el objetivo de comprender y aplicar cuatro patrones de diseño fundamentales en programación orientada a objetos.

## Patrones Implementados

### 1. Singleton - Conexión a Base de Datos

El patrón Singleton garantiza que una clase tenga solo una instancia en toda la aplicación y proporciona un punto de acceso global a ella.

**Implementación:**

- Clase `ConexionDB` que simula una conexión a base de datos PostgreSQL
- Constructor privado para evitar instanciación directa
- Método estático `getInstance()` que retorna siempre la misma instancia
- Control de estado de conexión (conectada/desconectada)
- Propiedades de configuración: host, puerto y usuario

**Caso de uso:** Gestionar una única conexión a la base de datos del sistema de inventario, evitando múltiples conexiones innecesarias.

### 2. Factory Method - Sistema de Notificaciones

El patrón Factory Method define una interfaz para crear objetos, pero permite que las subclases decidan qué clase instanciar.

**Implementación:**

- Interfaz `INotifier` con método `send(to, message)`
- Factory `NotifierFactory` que crea instancias según el canal especificado
- Tres tipos de notificadores: `EmailNotifier`, `SmsNotifier`, `WhatsappNotifier`
- Validaciones de formato para cada canal (regex para emails y números de teléfono)

**Caso de uso:** Sistema de notificaciones multicanal que permite enviar mensajes por email, SMS o WhatsApp sin cambiar el código cliente.

### 3. Adapter - Cliente HTTP Intercambiable

El patrón Adapter permite que interfaces incompatibles trabajen juntas, convirtiendo la interfaz de una clase en otra que el cliente espera.

**Implementación:**

- Interfaz `IHttpClient` con método genérico `get<T>(url)`
- Dos adaptadores: `FetchAdapter` (API Fetch nativa) y `AxiosAdapter` (biblioteca Axios)
- Clase `SimpleHttpClient` que permite cambiar el adapter en tiempo de ejecución
- Integración con JSONPlaceholder API para pruebas

**Caso de uso:** Cliente HTTP que puede alternar entre Fetch y Axios de forma transparente, permitiendo cambiar la implementación sin modificar el código que consume el servicio.

### 4. Observer - Notificaciones Profesor-Estudiantes

El patrón Observer define una dependencia uno-a-muchos entre objetos, de manera que cuando un objeto cambia de estado, todos sus dependientes son notificados automáticamente.

**Implementación:**

- Interfaz `IPublisher` con métodos `subscribe()`, `unsubscribe()` y `notify()`
- Interfaz `ISubscriber` con método `update(message)`
- Clase `Professor` como publicador de mensajes
- Clase `Student` como suscriptor que recibe notificaciones

**Caso de uso:** Sistema de notificaciones académicas donde un profesor puede enviar mensajes a sus estudiantes suscritos, y estos reciben las actualizaciones automáticamente.

## Tecnologías Utilizadas

- **TypeScript 5.6.2:** Lenguaje principal del proyecto
- **Node.js:** Entorno de ejecución
- **tsx:** Ejecutor de TypeScript sin necesidad de compilación previa
- **Axios:** Cliente HTTP para el patrón Adapter

## Requisitos Previos

Antes de clonar y ejecutar el proyecto, asegúrate de tener instalado:

- Node.js (versión 16 o superior)
- npm o yarn
- Git

## Instalación y Uso

### Clonar el Repositorio

```bash
git clone https://github.com/Sergiovz/TS-Patrones-Dise-o.git
cd TS-Patrones-Dise-o
```

### Instalar Dependencias

```bash
npm install
```

### Ejecutar el Proyecto

Para ejecutar todos los patrones de forma secuencial:

```bash
npm run dev
```

O ejecutar directamente con npx:

```bash
npx tsx src/app.ts
```

### Salida Esperada

Al ejecutar el proyecto, verás en la consola la demostración de cada patrón:

```
=== Patrón Observer: Profesor -> Estudiantes ===
[Suscripción] Jhon Doe se suscribió.
[Suscripción] Jane Adams se suscribió.
[Suscripción] Alice Smith se suscribió.
[Notificación] Jhon Doe recibió: TP1: Implementar patrón Observer - fecha de entrega viernes 18:00.
[Notificación] Jane Adams recibió: TP1: Implementar patrón Observer - fecha de entrega viernes 18:00.
[Notificación] Alice Smith recibió: TP1: Implementar patrón Observer - fecha de entrega viernes 18:00.
...

=== ADAPTER: Fetch ↔ Axios ===
Con fetch: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
Con axios: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

=== SINGLETON: ConexionDB de Inventario ===
Conectado a DB -> inventario_user@localhost:5432
DB ya está conectada (Singleton).
Desconectado de la DB.
DB ya está desconectada.

=== FACTORY: Crear notificaciones (Email/SMS/WhatsApp) ====
[Email] A: ana@mail.com — Recordatorio de clase a las 10:00.
[SMS] A: +549370000000 — Tu nota de TP1 ya está disponible.
[WhatsApp] A: +549370000000 — Se reprogra la clase para mañana 9:00.
```

## Estructura del Proyecto

```
src/
├── app.ts                          # Punto de entrada principal
├── singleton/                      # Patrón Singleton
│   ├── clases/
│   │   └── ConexionDB.ts
│   ├── interfaces/
│   │   └── IConexionDB.ts
│   └── index.ts
├── factory/                        # Patrón Factory Method
│   ├── clases/
│   │   ├── EmailNotifier.ts
│   │   ├── SmsNotifier.ts
│   │   ├── WhatsappNotifier.ts
│   │   └── NotifierFactory.ts
│   ├── interfaces/
│   │   ├── INotifier.ts
│   │   └── channel.ts
│   └── index.ts
├── adapter/                        # Patrón Adapter
│   ├── clases/
│   │   ├── FetchAdapter.ts
│   │   ├── AxiosAdapter.ts
│   │   └── SimpleHttpClient.ts
│   ├── interfaces/
│   │   └── IHttpClient.ts
│   └── index.ts
└── observer/                       # Patrón Observer
    ├── clases/
    │   ├── Professor.ts
    │   └── Student.ts
    ├── interfaces/
    │   ├── IPublisher.ts
    │   └── ISubscriber.ts
    └── index.ts
```

## Autor

Proyecto desarrollado para la materia Taller de Lenguajes de Programación IV.

## Licencia

Este proyecto es de uso académico.
