import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-qr-code-scanner',
  templateUrl: './qr-code-scanner.component.html',
  styleUrls: ['./qr-code-scanner.component.scss'],
})
export class QrCodeScannerComponent implements OnInit {

  scanResult : String;
  scanned : Boolean = false;

  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }

  startScan()  {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scanResult = barcodeData.text;
      console.log('Barcode data', barcodeData);
      this.scanned = true;
     }).catch(err => {
         console.log('Error', err);
     });
  }
}