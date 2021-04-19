import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-page-sequence',
  templateUrl: './page-sequence.component.html',
  styleUrls: ['./page-sequence.component.scss']
})
export class PageSequenceComponent implements OnInit {
  @Input() limitRange: number = 0;
  @Input() numberSequence: number = 0;
  range: Array<number> = Array.from({length: 2}, () => Math.floor(Math.random() * 10))

  constructor() { }

  ngOnInit(): void {
  }
}
