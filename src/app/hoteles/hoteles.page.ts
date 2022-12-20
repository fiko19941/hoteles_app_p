import { Component, OnInit } from '@angular/core';
import { HotelesService} from './hoteles.service';
@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.page.html',
  styleUrls: ['./hoteles.page.scss'],
})
export class HotelesPage implements OnInit {

  public hoteles:any[] = []

  constructor(private hotelService: HotelesService ){}

  ngOnInit() {
  this.hoteles = this.hotelService.getHoteles()

  }


}
