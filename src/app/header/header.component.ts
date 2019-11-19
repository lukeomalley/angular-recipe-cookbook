import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(
    private dataStorage: DataStorageService,
    private authService: AuthService
  ) {}
  userSub: Subscription;

  ngOnInit() {
    this.userSub = this.authService.user.subscribe();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onSaveRecipes() {
    this.dataStorage.storeRecipes();
  }

  onFetchRecipes() {
    this.dataStorage.fetchRecipes().subscribe();
  }
}
