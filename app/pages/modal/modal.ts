import {Page, ViewController} from 'ionic-angular';

/*
  Generated class for the ModalPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/modal/modal.html',
})
export class ModalPage {
  constructor(public view: ViewController) {}
  hideModal(){
    this.view.dismiss()
  }
}
