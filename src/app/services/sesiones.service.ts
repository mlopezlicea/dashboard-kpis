import { Injectable } from '@angular/core';
import { SesionPorIp } from '../models/sesion-por-ip.model';

@Injectable({
  providedIn: 'root'
})
export class SesionesService {

  getTotal(datos: SesionPorIp[]): number {
    return datos.reduce((acc: number, s: SesionPorIp) => acc + s.historial.at(-1)!, 0);
  }

  getPromedio(datos: SesionPorIp[]): number {
    const valores = datos.map((d: SesionPorIp) => d.historial.at(-1)!);
    return valores.length > 0
      ? Math.round(valores.reduce((a: number, b: number) => a + b, 0) / valores.length)
      : 0;
  }

  getMaximo(datos: SesionPorIp[]): number {
    return datos.length > 0
      ? Math.max(...datos.flatMap((d: SesionPorIp) => d.historial))
      : 0;
  }

  getUltimaSesion(ip: SesionPorIp): number {
    return ip.historial.at(-1)!;
  }
}
