import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NameCardComponent implements OnInit {
  @Input() cardName: string ='Phan Thanh Toàn';
  @Input() email: string ='toan@gmail.com';
  @Input() phone: string ='+84 399885400';

  constructor() {
  }

  ngOnInit() {
  }

}
