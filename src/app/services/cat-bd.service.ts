import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface CatBd {
  id: number;
  id_servidor: number;
  ip_gestion: string;
  val_sitio: string;
  ip_tmp: string;
  nombre: string;
  version_val: string;
  version: string;
  puerto: string;
  en_monitoreo: string;
  ambiente_val: string;
  estado_val: string;
  us_mon_id: string;
  us_mon: string;
  estatus_bd: string;
  sesiones_activas: number;
  bloqueos: number;
  consultas_lentas: number;
}

@Injectable({
  providedIn: 'root'
})
export class CatBdService {
  private readonly API_URL = 'http://localhost:8080/api/catbd';

  constructor(private http: HttpClient) {}

  getAll(): Observable<CatBd[]> {
    return this.http.get<CatBd[]>(this.API_URL);
  }

  getById(id: number): Observable<CatBd> {
    return this.http.get<CatBd>(`${this.API_URL}/${id}`);
  }

  getBySite(site: string): Observable<CatBd[]> {
    return this.http.get<CatBd[]>(`${this.API_URL}/site/${site}`);
  }
}
