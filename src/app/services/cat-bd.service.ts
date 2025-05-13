import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface CatBd {
  id: number;
  nombre: string;
  ip_gestion: string;
  estado_val: string;
  ambiente_val: string;
  en_monitoreo: string;
  sesiones_activas: number;
  // agrega más campos si los necesitas
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
