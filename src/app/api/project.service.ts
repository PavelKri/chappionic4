import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { IProject } from '../models/models.project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public projects$: Observable<IProject[]>

  constructor(
    private http: HttpClient,
    private storage : Storage
  ) {}

  getProjects():Observable<IProject[]> {
    return this.http.get('http://localhost:3000/projects') as  Observable<IProject[]>; 
/*
    this.storage.get("projectes").then((res)=>{
       if (res.length > 0) {
        this.projects$ = res;
       } else {
        this.projects$ = this.http.get('http://localhost:3000/projects') as  Observable<IProject[]>; 
       }
    });
    return this.projects$;
    */
  }
}
