import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Project} from '../models/project.model';

@Injectable()
export class ProjectListService {
    projects: Array<Project>;

    constructor(private _http: Http) {

    }

    getAll(): Observable<Array<Project>> {
        const url = 'http://192.168.1.6:8085/projects';
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers: headers});

        return this._http.get(url, options).map((response) => {
            console.log(response);
            return response.json();
        });
    }
}
