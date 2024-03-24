import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl:AlertController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss:false,
      header: 'Notificacion',
      subHeader: 'esta es la notificacion',
      message: 'Completo los pasos para  esta pagina puede continuar con la siguiente  :) ',
      buttons: ['Continuar'],
    });

    await alert.present();
  }

}
