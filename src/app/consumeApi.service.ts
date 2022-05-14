import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ConsumeApi {
  constructor(private httpClient: HttpClient) {}

  selectMascotas(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/v1/api/pets');
  }

  selecMascotaByStatus(id:string): Observable<any>{
    return this.httpClient.get('http://localhost:3000/v1/api/pets/findByStatus?status='+id);
  }
  
  selecMascotaById(id:string): Observable<any>{
    return this.httpClient.get('http://localhost:3000/v1/api/pets/'+id);
  }
  
  selecCategory(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/v1/api/pets/category/1');
  }
  selecTag(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/v1/api/pets/tags/1');
  }
  selecStatus(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/v1/api/pets/status/1');
  }

  GuardarMascota(
    name: string,
    url: string,
    category: string,
    tag: string,
    status: string
  ):Observable<any> {
    return this.httpClient.post<string>('http://localhost:3000/v1/api/pets', {
      category: { id: parseInt(category) },
      name: name,
      photoUrls: url,
      tags: { id: tag },
      status: status,
    });
  }

  ActualizarMascota(
    id:string,
    name: string,
    url: string,
    category: string,
    tag: string,
    status: string
  ):Observable<any> {
    return this.httpClient.put<string>('http://localhost:3000/v1/api/pets', {
      id: id,
      category: { id: parseInt(category) },
      name: name,
      photoUrls: url,
      tags: { id: tag },
      status: status,
    });
  }

  EliminarMascota(id:string):Observable<any>{
  return this.httpClient.delete('http://localhost:3000/v1/api/pets/'+id);
  }
}
