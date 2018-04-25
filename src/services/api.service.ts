
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {
    private static DATA_PATH = 'https://tsh-app.firebaseio.com/events.json';

	constructor(private http: Http) {

	}

	public getEvents(): any {
		return this.http.get(`${ApiService.DATA_PATH}`, '{responseType: "text"}');
	}
}