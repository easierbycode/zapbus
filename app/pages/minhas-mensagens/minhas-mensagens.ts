import {Page, NavController} from 'ionic-angular';
import {DetalhesMensagemPage} from '../detalhes-mensagem/detalhes-mensagem';

/*
  Generated class for the MinhasMensagensPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/minhas-mensagens/minhas-mensagens.html',
})
export class MinhasMensagensPage {
  constructor( public nav: NavController) {

  }

  openDetalhesMensagemPage(){
    this.nav.push(DetalhesMensagemPage, {});
  }

}