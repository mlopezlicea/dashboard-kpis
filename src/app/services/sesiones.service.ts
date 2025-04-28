import { Injectable } from '@angular/core';
import { SesionPorIp } from '../models/sesion-por-ip.model';

@Injectable({
  providedIn: 'root'
})
export class SesionesService {

  /**
   * Calcula el total de sesiones activas a partir de la última muestra de cada IP.
   */
  getTotal(datos: SesionPorIp[]): number {
    return datos.reduce((acc, s) => acc + s.historial.at(-1)!, 0);
  }

  /**
   * Calcula el promedio de sesiones actuales usando el último valor de cada IP.
   */
  getPromedio(datos: SesionPorIp[]): number {
    const valores = datos.map(d => d.historial.at(-1)!);
    return valores.length > 0
      ? Math.round(valores.reduce((a, b) => a + b, 0) / valores.length)
      : 0;
  }

  /**
   * Devuelve el valor máximo histórico de sesiones en todas las IPs.
   */
  getMaximo(datos: SesionPorIp[]): number {
    return datos.length > 0
      ? Math.max(...datos.flatMap(d => d.historial))
      : 0;
  }

  /**
   * Devuelve la IP que tiene el valor máximo actual de sesión.
   */
  getIpConPicoActual(datos: SesionPorIp[]): string | null {
    if (!datos.length) return null;
    const ordenadas = [...datos].sort((a, b) => b.historial.at(-1)! - a.historial.at(-1)!);
    return ordenadas[0]?.ip ?? null;
  }
}
