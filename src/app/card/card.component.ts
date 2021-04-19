import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Output() setValue = new EventEmitter<number>();

  rigthOption: number = 0;
  leftOption: number = 0;
  options: Array<number> = Array.from({length: 3}, () => Math.floor(Math.random() * 10));
  optionSuccess: number = Math.floor(Math.random() * (2));
  selectedOption!: number;
  showOptions = true;
  statusResponse: number = 0;

  ngOnInit(): void {
  }

  handlerOption(selectedOption: number):void {
    this.selectedOption = selectedOption;
    this.statusResponse = this.selectedOption === this.title ? 1 : 2;
    this.showOptions = false;
    this.setValue.emit(this.statusResponse);
  }
}
