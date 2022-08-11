import { Component, Injector, Output, OnInit, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from '@shared/base/base.component';

@Component({
  selector: 'signature-pad-popup',
  templateUrl: './signature-pad-popup.component.html',
  styleUrls: ['./signature-pad-popup.component.scss']
})
export class AddSignatureComponent extends BaseComponent implements OnInit {

  signatureImage: any;
  @Output() onSaveSend = new EventEmitter();

  constructor(public override injector: Injector,
    public modalService: NgbActiveModal) {
    super(injector);
  }

  ngOnInit(): void {
  }

  saveSignature(data: any) {
    // console.log(data);
    // data = data.replace("data:image/png;base64,", '');
    // console.log(data);
    // var newData = atob(data.replace("data:image/png;base64,", '')), asArray = new Uint8Array(newData.length);

    // for(var i = 0, len = newData.length; i < len; i++){
    //   asArray[i] = newData.charCodeAt(i);
    // }
    // console.log(asArray);
    // console.log(newData);
    this.signatureImage = data;
    this.onSaveSend.emit(this.signatureImage);
    this.modalService.close();
  }


}
