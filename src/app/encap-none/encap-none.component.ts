import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encap-none',
  templateUrl: './encap-none.component.html',
  styleUrls: ['./encap-none.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EncapNoneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
