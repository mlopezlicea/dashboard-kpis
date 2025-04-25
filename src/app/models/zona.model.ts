import { SesionPorIp } from './sesion-por-ip.model';

export interface Zona {
  nombre: string;
  datos: SesionPorIp[];
  total: number;
  promedio: number;
  maximo: number;
  ipSeleccionada: string | null;
  selector: (ip: string) => void;
}
