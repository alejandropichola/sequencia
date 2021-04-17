import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  constructor() { }

  @Input() title!: number;
  @Input() hiddenArrow!: boolean;
  @Input() valuate!: boolean;
  rigthOption: number = 0;
  leftOption: number = 0;
  options: Array<number> = Array.from({length: 3}, () => Math.floor(Math.random() * 10));
  optionSuccess: number = Math.floor(Math.random() * (2));
  selectedOption!: number;

  ngOnInit(): void {
  }

  handlerOption(selectedOption: number):void {
    this.selectedOption = selectedOption;
  }
}
