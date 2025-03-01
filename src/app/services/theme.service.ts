import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkThemeClass = 'dark-theme';

  enableDarkTheme() {
    document.body.classList.add(this.darkThemeClass);
  }

  disableDarkTheme() {
    document.body.classList.remove(this.darkThemeClass);
  }

  toggleTheme() {
    document.body.classList.toggle(this.darkThemeClass);
  }
}
