import { Injectable } from '@angular/core';
import { Hotel } from './hoteles.model';

@Injectable({
  providedIn: 'root'
})
export class HotelesService {

  private hoteles: Hotel[] = [
    {
      id:'1',
      title: 'HOTEL TEQUENDAMA',
      imageURL:'https://z.cdrst.com/foto/hotel-sf/393c0/granderesp/hotel-tequendama-inn-estacion-general-ca3f42e.jpg',
      descrip:'El Hotel Tequendama Inn Estación By Sercotel es un agradable alojamiento 4 estrellas que goza de una ubicación privilegiada en el paseo marítimo de Buenaventura con vistas al Pacífico desde los balcones de sus habitaciones y también desde el jardín que alberga una agradable piscina al aire libre con zona infantil y solárium. Las habitaciones son luminosas y ofrecen un diseño sencillo que incorpora equipamiento moderno como aire acondicionado, caja fuerte, minibar, wifi, teléfono, ventilador y baño privado con artículos de aseo personal y secador para el cabello. Muchas de las habitaciones están disponibles con balcón privado y además los huéspedes disfrutan de recepción 24 horas y de servicio de traslado al aeropuerto. Asimismo, en la propiedad los viajeros podrán degustar platos tradicionales colombianos gracias al restaurante y también podrán tomar algo de forma relajada en el bar.',
      comements:['Excelente Hotel']
    },
    {
      id:'2',
      title: 'AYENDA YUBARTA',
      imageURL:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/52942596.jpg?k=d0e1017e70e3b5aec3f4d51574d088813841e8edd6122253a9374d30b5f8a52b&o=&hp=1',
      descrip:'El Ayenda Yubarta está situado en Buenaventura. Dispone de terraza con vistas al mar, restaurante, bar y salón compartido.Todas las habitaciones cuentan con TV de pantalla plana por cable, aire acondicionado, armario, escritorio, minibar y baño privado con artículos de aseo gratuitos. Algunas tienen vistas al mar, caja fuerte y zona de estar amplia. La ropa de cama y las toallas están incluidas.',
      comements:['Excelente Hotel']
    },
    {
      id:'3',
      title: 'HOTEL TORREMAR',
      imageURL:'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/itemimages/66/27/6627326_v3.jpeg',
      descrip:'El hotel cuenta con 14 pisos distribuidos en locales comerciales, discoteca, parqueaderos y lujosas habitaciones con balcón, equipadas con fantásticas comodidades, tales como aire acondicionado, ventanas anti-ruido, cerraduras electrónicas, mini-bar, televisor LCD, televisión por cable, acceso a Internet de alta velocidad, escritorio ejecutivo, teléfono con discado directo, baños con tina y TV. Además de restaurante, bar, gimnasio, tres ascensores, parqueadero en cuatro pisos del hotel y salones para conferencias y eventos.',
      comements:['Excelente Hotel']
    },
    {
      id:'4',
      title: 'HOTEL COSMOS',
      imageURL:'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/301798475_594070408914915_582017303527563390_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4l3_DfkpTscAX-UMLxh&_nc_ht=scontent-bog1-1.xx&oh=00_AfBg6VAp8MyzvwNdcT0IAmC6oX-U6O7W58XJrsPenMGo6Q&oe=63822CA2',
      descrip:'Cosmos Pacífico Hotel es la mejor elección en Buenaventura para todos sus viajes de negocios y ocio por su conectividad, ubicación privilegiada, gastronomía y servicios para todos. Regálese una estadía de lujo en este hotel en Buenaventura, con servicio para eventos sociales y empresariales. Reserve siempre con la mejor tarifa aquí, la web oficial del Cosmos Pacífico Hotel.',
      comements:['Excelente Hotel']
    },
    {
      id:'5',
      title: 'HOTEL CAPILLAS DEL SOL',
      imageURL:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/132382502.jpg?k=582eb55ab593f8b0899f9fab55800d99413b856cf26333f038682dc5573f7e39&o=&hp=1',
      descrip:'El Capilla Del Sol se encuentra en Buenaventura y ofrece bar, salón compartido y terraza. Cuenta con restaurante, recepción 24 horas, servicio de habitaciones y WiFi gratuita. El hotel ofrece habitaciones familiares.',
      comements:['Excelente Hotel']
    },{
      id:'6',
      title: 'HOTEL BAHIA BUENAVENTURA',
      imageURL:'https://img.cdnpth.com/media/j4JhytlewSqqe-N8T2lqJAbgvAs=/720x480/02/09/81/02098104.jpg',
      descrip:'El Ayenda Yubarta está situado en Buenaventura. Dispone de terraza con vistas al mar, restaurante, bar y salón compartido.Todas las habitaciones cuentan con TV de pantalla plana por cable, aire acondicionado, armario, escritorio, minibar y baño privado con artículos de aseo gratuitos. Algunas tienen vistas al mar, caja fuerte y zona de estar amplia. La ropa de cama y las toallas están incluidas.',
      comements:['Excelente Hotel']
    }
  ]

  constructor() { }

  getHoteles() { 
    return [...this.hoteles]
  }

  getHotel({ hotelId }: { hotelId: string; }) { 
    return{
          ...this.hoteles.find(hotel =>{
            return hotel.id === hotelId
          })
        }
  } 

  addHoteles(title: string, imageURL: string, descrip: string ) { 
      this.hoteles.push({
         title,
         imageURL,
         descrip,
         comements: [],
         id: this.hoteles.length + 1 + ""

        });
    }

  deleteHoteles(hotelId: string) { 
      this.hoteles = this.hoteles.filter( hotel => {
       return hotel.id !== hotelId
     })
  }

  
}
