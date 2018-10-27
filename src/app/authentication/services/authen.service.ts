import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AuthenServic {
    private accessKey = 'accessToken';


    // กำหนดค่า access token ไว้ในความจำ browser
    setAuthenticated(acessToken: string): void {
        localStorage.setItem(this.accessKey, acessToken);
    }

    // ดึงค่า access token ในความจำ browser  ออกมา
    getAuthenticated(): string {
        return localStorage.getItem(this.accessKey);
    }

    // ล้างค่า access token ในความจำ browser
    clearAuthenticatied(): void {
        localStorage.removeItem(this.accessKey );
    }
}
