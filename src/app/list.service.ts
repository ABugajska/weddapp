import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class ListService {
    constructor(private http: HttpClient) {
    }

    public getData(): Observable<any> {
        return this.http.get("./assets/list.json")
            
            .catch((error:any) => {console.log('error');
            return Observable.of(undefined);
        });

    }
}