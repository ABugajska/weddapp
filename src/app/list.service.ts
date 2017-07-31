import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';



@Injectable()

export class ListService {
    constructor(private http: Http) {
        var obj;
        this.getJSON().subscribe(data => obj=data, error => console.log(error));
    }
    public getJSON(): Observable<any> {
        return this.http.get("./list.json")
            .map((res:any) => res.json())

    }
}