/**
 * Created by Home on 11/20/16.
 */
import {Injectable, OnInit} from '@angular/core';
import {Http, Headers} from "@angular/http";

@Injectable()
export class MyHttpService {

    headers: Headers = new Headers({'Content-Type': 'application/json'});
    baseUrl: string  = 'http://localhost:3000';

    constructor(private _http: Http) { }

    getUser(userId: string) {
        this._http.get(this.baseUrl + '/users/' + userId, {headers: this.headers})
            .map(response => {
                let data = response.json();
                console.log(JSON.stringify(data));
            })

    }
}