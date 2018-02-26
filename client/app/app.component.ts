import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewChecked {
  variableTest = '';
  variableTest2 = '';
  onSelectionChange(message: string): void {
    this.variableTest = message;
  }
  onValueChange(message: string): void {
    this.variableTest2 = message;
  }
  constructor(public auth: AuthService,
    private changeDetector: ChangeDetectorRef) { }
  // This fixes: https://github.com/DavideViolante/Angular-Full-Stack/issues/105
  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }

}
