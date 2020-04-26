import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-alerts',
  templateUrl: './card-alerts.component.html',
  styleUrls: ['./card-alerts.component.scss']
})
export class CardAlertsComponent implements OnInit {

  @Input() message: string;
  @Input() icon: string;
  @Input() styleAlert: string;
  constructor() { }

  ngOnInit() {
  }

}
