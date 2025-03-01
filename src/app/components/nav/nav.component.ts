import { Component } from '@angular/core';
import { iNavItem } from '../../interfaces/nav-item.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  constructor (private router: Router) {}

  navItems: iNavItem[] = [
    {
      title: 'about',
      active: true,
    },
    {
      title: 'projects',
      active: false,
    },
    {
      title: 'musings',
      active: false,
    }
  ];

  /**
   * Handles the clicking of a nav item.
   * @param navItem Nav Item that was clicked
   */
  public onNavItemClick(navItem: iNavItem): void {
    this.toggleActive(navItem);
    this.navigateTo(navItem.title);
  }

  /**
   * Toggles a navItem active and others inactive.
   * @param navItemToToggle Nav Item to toggle
   */
  private toggleActive(navItemToToggle: iNavItem): void {
    this.navItems.forEach((navItem: iNavItem) => {
      navItem.active = navItem.title === navItemToToggle.title;
    })
  }

  /**
   * Switches pages.
   * @param path Nav Item title
   */
  private navigateTo(path: string): void {
    this.router.navigateByUrl('/' + path);
  }
}
