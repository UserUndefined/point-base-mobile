import { Injectable } from '@angular/core';
import http = require("http");
//import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { LocationItem } from './location.item';
import { Configuration } from './app.constants';

@Injectable()
export class DataService {

    private actionUrl: string;
    private locationUrl: string;

    constructor(private _configuration: Configuration) {
        this.actionUrl = _configuration.ServerWithApiUrl;
        this.locationUrl = _configuration.ServerWithLocationApiUrl;
    }

    public GetHealthcheck(callback){
        http.getJSON(this.actionUrl).then(function (r) {
            console.log(r);
            return callback(null, r);
        }, function (e) {
            console.log(e);
            return callback(e);
        });
    }

    public PostLocation(location, callback){
        http.request({
            url: this.locationUrl,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify(location)
        }).then(function (response) {
            console.log(response);
            return callback(null, response);
        }, function (error) {
            console.log(error);
            return callback(error);
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