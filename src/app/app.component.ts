import { Component, OnInit } from '@angular/core';
import { WalletService } from './providers/wallet-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'splinter-wallet';

  constructor(private ws: WalletService) { }

  ngOnInit(): void {
    console.log(this.ws.testString);
  }
}
