import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sequence',
  templateUrl: './sequence.component.html',
  styleUrls: ['./sequence.component.scss']
})
export class SequenceComponent implements OnInit {
  @Input() value!: number;
  @Input() limit!: number;
  sequence: number = Math.floor(Math.random() * 5);
  sequenceValuate: number = 0;
  range: Array<number> = [];

  constructor() { }

  generateRange(): void {
    let value = this.value;
    this.sequenceValuate = Math.floor(Math.random() * (this.limit - 1));
    for (let i=0; i < this.limit; i++) {
      value += this.sequence;
      this.range.push(value);
    }
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.generateRange();    
  }
}
