import {Page, NavController, Modal} from 'ionic-angular';
import {ModalPage} from '../modal/modal'
@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(
    public nav: NavController
  ) {

  }

  showModal(){
    let testModal = Modal.create(ModalPage);
    this.nav.present(testModal)
  }
}
