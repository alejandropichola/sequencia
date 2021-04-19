import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sequence',
  templateUrl: './sequence.component.html',
  styleUrls: ['./sequence.component.scss']
})
export class SequenceComponent implements OnInit {
  @Input() limitRange: number = 0;
  @Input() timer!:number;
  @Input() numberSequence: number = 0;
  @Input() numberOptionSequence: number = 0;

  initRange: number = 0;
  range: Array<number> = [];
  total: Array<boolean> = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.generateRangeSequence();
  }

  nextOption():void {
    if (this.initRange < (this.limitRange)) {
      this.initRange++;
    }
  }

  setResponse(value: boolean):void {
    this.total.push(value);
  }

  generateRangeSequence(): void {
    this.range = Array.from(
      { length: this.limitRange },
      () => Math.floor(Math.random() * this.numberSequence)
    );
  }

  resetSequence(e: boolean):void {
    this.generateRangeSequence();
    this.initRange = 0;
  }
}
