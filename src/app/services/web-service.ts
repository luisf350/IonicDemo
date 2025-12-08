import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebService {

  private httpClient = inject(HttpClient);

  constructor() { }

  request<T>(url: string, path: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', body?: any) {
    //return this.httpClient.request<T>(´${url}/ ${path}´, method, body);
    return new Promise<T>((resolve, reject) => {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      });
      const options = {
        headers: headers
      };
      if (method === 'GET') {
        this.httpClient.get<T>(`${url}/${path}`, options).subscribe({
          next: (data) => {
            resolve(data);
          },
          error: (error) => {
            reject(error);
          }
        });
      }
      if (method === 'POST') {
        this.httpClient.post<T>(`${url}/${path}`, body, options).subscribe({
          next: (data) => {
            resolve(data);
          },
          error: (error) => {
            reject(error);
          }
        });
      }
      if (method === 'PUT') {
        this.httpClient.put<T>(`${url}/${path}`, body, options).subscribe({
          next: (data) => {
            resolve(data);
          },
          error: (error) => {
            reject(error);
          }
        });
      }
      if (method === 'DELETE') {
        this.httpClient.delete<T>(`${url}/${path}`, options).subscribe({
          next: (data) => {
            resolve(data);
          },
          error: (error) => {
            reject(error);
          }
        });
      }
    })
  }
}
