import { Setting } from './settings.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      verticalPosition: "top",
      horizontalPosition: "right"
    })
  }
  create(setting: Setting): Observable<Setting> {
    return this.http.post<Setting>(this.baseUrl, setting)
  }
}
