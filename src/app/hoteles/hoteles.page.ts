import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ServiciosService } from '../services/servicios.service';
import { HotelesService} from './hoteles.service';
import { HotelDetailPage } from './hotel-detail/hotel-detail.page';
@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.page.html',
  styleUrls: ['./hoteles.page.scss'],
})
export class HotelesPage implements OnInit {

  public hoteles:any[] = []

  constructor(private hotelService: HotelesService,
    private service: ServiciosService,
    public modalController:ModalController) { }

  ngOnInit() {
  this.hoteles = this.hotelService.getHoteles()

  }

  async reservar(hotel) {
    console.log(hotel)
    const modal = await this.modalController.create({
      component: HotelDetailPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      presentingElement: await this.modalController.getTop() // Get the top-most ion-modal
    });
    return await modal.present();
  }


}
