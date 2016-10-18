import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server: string = "https://generic-receiver-api.herokuapp.com/";
    public ApiUrl: string = "healthcheck";
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}