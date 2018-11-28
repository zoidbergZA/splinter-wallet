import { Injectable } from '@angular/core';

/*
  native Node modules are imported using the native.js file located in the root folder, added as script in angular.json
  adding global declarations to polyfills.js removes tsc errors
*/

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  testString = 'hello from wallet service!';

  private chilldProcess: any;

  constructor() {
    console.log(window['fs']);
    console.log(window['os']);

    this.chilldProcess = window['childProcess'];
    console.log(this.chilldProcess);
  }
}
