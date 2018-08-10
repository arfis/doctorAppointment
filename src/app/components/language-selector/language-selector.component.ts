import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {

  selectedLang;

  constructor(private _translateService: TranslateService) { }

  ngOnInit() {
    this._translateService.onLangChange.subscribe(
      lang => this.selectedLang = lang.lang
    )
  }

  switchLanguage(lang) {
    this._translateService.use(lang);
  }

  isSelectedLang(lang) {
    console.log(lang === this.selectedLang);
    console.log(this.selectedLang);
    return lang === this.selectedLang;
  }
}
