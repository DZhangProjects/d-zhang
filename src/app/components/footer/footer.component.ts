import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  /**
   * Gets the years of Copyrights as a string.
   * @returns Year range as 2025 - XXXX or 2025 if current year is 2025
   */
  public getCopyrightYears(): string {
    return this.currentYear === 2025 ? '2025' : `2025 - ${this.currentYear}`;
  }
}
