import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class FormService {
    constructor(private httpClient: HttpClient) {
    }
saveInfo(firstname: string, lastname: string) {
	const headers = new HttpHeaders()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        // this.httpClient.post('http://54.169.178.148:3011/api/users', {
	   this.httpClient.post('http://app:3011/api/users', {
            firstname: firstname,
            lastname: lastname
        }, { headers: headers }
).subscribe((response) => {
            console.log(response)
        });
    }
}
