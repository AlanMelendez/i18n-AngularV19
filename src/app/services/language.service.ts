import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  cookie = inject(SsrCookieService);
  translate = inject(TranslateService);
  currentLang = signal('');

  changeLanguage(lang: string) {
    this.cookie.set('lang', lang); // you need check on Application tools if the cookie is set

    //TODO: Implement language change
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.currentLang.set(lang);

    // console.log('Language changed to', this.currentLang());
  }

}
