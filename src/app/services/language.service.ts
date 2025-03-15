import { inject, Injectable } from '@angular/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  cookie = inject(SsrCookieService);

  changeLanguage(lang: string) {
    this.cookie.set('lang', lang); // you need check on Application tools if the cookie is set

    //TODO: Implement language change

    console.log('Language changed to', lang);
  }

}
