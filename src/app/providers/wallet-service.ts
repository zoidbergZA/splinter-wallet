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

    const path = window['path'];
    const process = window['process'];

    console.log(`process chdir: ${process.chdir}`);
    console.log(`process execPath: ${process.execPath}`);
    console.log(`process resourcesPath: ${process.resourcesPath}`);

    const serviceFilename = 'turtle-service.exe';
    const serviceBin: string = path.join(process.resourcesPath, 'app', 'dist', 'splinter-wallet', 'assets', serviceFilename);

    console.log(`service bin path: ${serviceBin}`);

    const serviceSettings: ServiceSettings = { service_bin: serviceBin, service_host: '???', service_port: 123 };
  }
}

export interface ServiceSettings {
  service_bin: string;
  service_host: string;
  service_port: number;
  service_password?: string;
  daemon_host?: string;
  daemon_port?: string;
}
