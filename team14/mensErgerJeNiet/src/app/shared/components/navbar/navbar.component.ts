import { Component, OnInit } from '@angular/core';
import {ModalService} from "../../../service/modal.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
/*providers: [ModalService]*/
})
export class NavbarComponent implements OnInit {

constructor(public modalService: ModalService) {}

ngOnInit(): void {}

}
