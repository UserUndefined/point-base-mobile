import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class LocationItem {
    constructor(public lat: string, public long: string){}
}
