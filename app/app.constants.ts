import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server: string = "https://generic-receiver-api.herokuapp.com/";
    public ApiUrl: string = "healthcheck";
    public LocationApiUrl: string = "location";
    public ServerWithApiUrl = this.Server + this.ApiUrl;
    public ServerWithLocationApiUrl = this.Server + this.LocationApiUrl;
}