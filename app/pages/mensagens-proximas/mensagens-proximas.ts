import {Page, NavController} from 'ionic-angular';
import {DetalhesMensagemPage} from '../detalhes-mensagem/detalhes-mensagem';
import {MessageService} from '../../providers/message-service/message-service';
import {UserService} from '../../providers/user-service/user-service';
import {CriarMensagemPage} from '../criar-mensagem/criar-mensagem';
import {Message} from '../../models/message/message';
import {TimeToString} from '../../pipes/time-to-string';
import {DistanceToString} from '../../pipes/distance-to-string';

/*
  Generated class for the MensagensProximasPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/mensagens-proximas/mensagens-proximas.html',
  pipes: [TimeToString, DistanceToString]
})
export class MensagensProximasPage {

  messages: Array<Message>;
  lastLatitude: any;
  lastLongitude: any;

  constructor( public nav: NavController, public msgService: MessageService, public userService: UserService) {

  }

  onPageWillEnter() {
    this.userService.getUserLocation().then( (result) => {
      this.carregarMensagens(result.latitude, result.longitude);
    })

  }

  carregarMensagens(newLatitude, newLongitude) {
    if( this.lastLatitude == newLatitude &&
        this.lastLongitude == newLongitude &&
        this.messages.length > 0 )
      return;

    this.messages = new Array<Message>();
    this.lastLatitude = newLatitude;
    this.lastLongitude = newLongitude;
    this.msgService.syncMensagensProximas(this.messages, newLatitude, newLongitude);
  }

  openCriarMensagemPage(){
    this.nav.push(CriarMensagemPage, {messageList: this.messages});
  }

  openDetalhesMensagemPage(currentMessage){
    this.nav.push(DetalhesMensagemPage, {message: currentMessage});
  }

}
