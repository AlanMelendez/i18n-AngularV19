import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-language-selector',
  imports: [],
  templateUrl: './language-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSelectorComponent {

  languageService = inject(LanguageService);
  currentLang = this.languageService.currentLang;

  protected languages = signal([
    { code: 'en', flag: '🇺🇸' },
    { code: 'es', flag: '🇪🇸' },
    { code: 'fr', flag: '🇫🇷' },
    { code: 'it', flag: '🇮🇹' },
  ]);

  /**
   *
   */
  constructor() {
  }


  onChangeLanguage(lang: Event) {
    const target = lang.target as HTMLInputElement;
    const language = target.value;

    this.languageService.changeLanguage(language);
  }
 }
