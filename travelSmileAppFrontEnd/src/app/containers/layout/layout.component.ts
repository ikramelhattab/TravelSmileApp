import { AfterViewInit, Component, isDevMode, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav'
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { ToolbarTitleService } from 'src/app/containers/toolbar-title.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {

  modeMenu: MatDrawerMode = 'side';
  showMenu = true;
  userFirstName = '';
  userLastName = '';
  userEmail = '';
  isUserAdmin = false;
  pageTitle = '';

  private screenWidth = new BehaviorSubject<number>(window.outerWidth);

  constructor(
    private router: Router,
    private authservice: AuthService,
    private titleService: ToolbarTitleService) {
     }


  ngOnInit(): void {

    this.titleService.currentTitle.subscribe(title => {
      this.pageTitle = title;
    });
  }


  ngAfterViewInit(): void {
    this.screenWidth.asObservable().subscribe(width => {
      if (width < 640) {
        this.showMenu = false;
        this.modeMenu = 'over';
      } else if (width > 640) {
        this.showMenu = true;
        this.modeMenu = 'side';
      }
    });
  }


 /*  logOut() {
    this.authservice.logout().subscribe(success => {
      // Remove login cookie locally
      // Because navigator won't save the one from the server in production
      // TODO only the server can set login cookie
      if (!isDevMode()) {
        this.authservice.setCookie('login', '', 0);
      }

      this.router.navigate(['/login']);
    });
      error => {
        console.error(error);
        this.authservice.showErrorDialog('Impossible de se déconnecter',
          'Veuillez essayer de se déconnecter à nouveau. Si le problème persiste, verifiez votre connexion internet');
      }); 

  }*/

}
