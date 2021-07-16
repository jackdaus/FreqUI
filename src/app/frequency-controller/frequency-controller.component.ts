import { Component, Input, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-frequency-controller',
  templateUrl: './frequency-controller.component.html',
  styleUrls: ['./frequency-controller.component.scss']
})
export class FrequencyControllerComponent implements OnInit {

  @Input() leftWord: string = '';
  @Input() rightWord: string = '';
  @Input() showSlider: boolean = true;
  @Input() spinnerAngle: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onSliderChange(e: MatSliderChange) {
    console.log(e)
  }

}
