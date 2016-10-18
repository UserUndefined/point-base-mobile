import { Injectable } from '@angular/core';
import http = require("http");
//import { Http, Response, Headers } from '@angular/http';
//import {NativeScriptHttpModule} from 'nativescript-angular';
//import {http} from 'nativescript-angular';
//import {NativeScriptHttpModule} from 'nativescript-angular/http';
//import { http } from 'http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { LocationItem } from './location.item';
import { Configuration } from './app.constants';
//import http = require('http');

@Injectable()
export class DataService {

    private actionUrl: string;
    //private headers: Headers;

    constructor(private _configuration: Configuration) {

        this.actionUrl = _configuration.ServerWithApiUrl;

        //this.headers = new Headers();
        //this.headers.append('Content-Type', 'application/json');
        //this.headers.append('Accept', 'application/json');
    }

    public GetHealthcheck(callback){
        //console.log('test');
        //return this._http.get(this.actionUrl)
            //.map((response: Response) => <LocationItem[]>response.json())
            //.map((response: Response) => console.log(response.json()))
            //.do(data => console.log(data))
            //.catch(this.handleError);
        //return this._http.get(this.actionUrl);
        http.getJSON(this.actionUrl).then(function (r) {
            //// Argument (r) is JSON!
            console.log(r);
            return callback(null, r);
        }, function (e) {
            //// Argument (e) is Error!
            console.log(e);
            return callback(e);
        });
    }

/*
    public GetAll = (): Observable<LocationItem[]> => {
        return this._http.get(this.actionUrl)
            .map((response: Response) => <LocationItem[]>response.json())
            .catch(this.handleError);
    }

    public GetSingle = (id: number): Observable<LocationItem> => {
        return this._http.get(this.actionUrl + id)
            .map((response: Response) => <LocationItem>response.json())
            .catch(this.handleError);
    }

    public Add = (itemName: string): Observable<LocationItem> => {
        let toAdd = JSON.stringify({ ItemName: itemName });

        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <LocationItem>response.json())
            .catch(this.handleError);
    }

    public Update = (id: number, itemToUpdate: LocationItem): Observable<LocationItem> => {
        return this._http.put(this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers })
            .map((response: Response) => <LocationItem>response.json())
            .catch(this.handleError);
    }

    public Delete = (id: number): Observable<Response> => {
        return this._http.delete(this.actionUrl + id)
            .catch(this.handleError);
    }
*/
/*
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
 */

}