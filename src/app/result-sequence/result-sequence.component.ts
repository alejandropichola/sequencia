import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-result-sequence',
  templateUrl: './result-sequence.component.html',
  styleUrls: ['./result-sequence.component.scss']
})
export class ResultSequenceComponent implements OnInit {
  @Input() totalResponse!: Array<boolean>;

  @Output() resetSequence = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  calculateResponse(values: Array<boolean>): number {
    const responseSuccess = values.filter(item => item === true).length;
    const calculate: number = (responseSuccess * 100) / values.length;
    return (calculate);
  }

  continueSequence() {
    this.resetSequence.emit(true);
  }
}
