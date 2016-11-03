import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from "rxjs";

@Injectable()
export class SocrataService {
    constructor(private http: Http) {
    }

    getPermits() {
		let permitData = this.http.get('https://data.seattle.gov/resource/i5jq-ms7b.json?$limit=50');
		return permitData;
    }
}