import { Component, OnInit } from '@angular/core';
import { WalletServiceService } from './providers/wallet-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'splinter-wallet';

  constructor(private ws: WalletServiceService) { }

  ngOnInit(): void {
    console.log(this.ws.testString);
  }
}
