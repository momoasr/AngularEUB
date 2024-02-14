import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  @Input() indicators = true;
  @Input() controls = true;

  selectedIndex = 0;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}
