import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-sequence',
  templateUrl: './list-sequence.component.html',
  styleUrls: ['./list-sequence.component.scss']
})
export class ListSequenceComponent implements OnInit {
  @Input() value!: number;
  @Input() limit!: number;
  @Input() timer: number = 0;

  @Output() nextSequence = new EventEmitter();
  @Output() setValue = new EventEmitter<boolean>();

  sequence: number = Math.floor(Math.random() * 5);
  sequenceValuate: number = 0;
  range: Array<number> = [];
  time: number = 1;
  statusSequence: boolean = false;

  constructor() { }

  generateRange(): void {
    let value = this.value;
    this.sequenceValuate = Math.floor(Math.random() * (this.limit - 1));
    for (let i=0; i < this.limit; i++) {
      value += this.sequence;
      this.range.push(value);
    }
  }

  responseCard(value: number):void {
    this.statusSequence = value === 1
  }

  timerSequence() {
    let time: number = 1;
    const limitTime = this.timer;
    const timer = setInterval(() => {
      time++;
      this.time = time;
      if (time > (limitTime/100)) {
        this.nextOption();
        clearInterval(timer)
      }
    }, limitTime);
  }

  ngOnInit(): void {
  }

  nextOption() {
    this.setValue.emit(this.statusSequence);
    this.nextSequence.emit();
  }

  loadingStyles(value: number): Object {
    const time = value / 100;
    return { animation: `ease-in-out loading ${time}s infinite` } ;
  }

  ngAfterContentInit(): void {
    this.generateRange();
    this.timerSequence();
  }
}
