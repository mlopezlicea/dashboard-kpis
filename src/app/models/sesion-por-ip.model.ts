export interface SesionPorIp {
    ip: string;              // Dirección IP del host
    componente: string;      // Nombre del componente o servicio asociado
    color: string;           // Color único asignado a la IP
    historial: number[];     // Historial de sesiones activas a lo largo del tiempo
  }
  