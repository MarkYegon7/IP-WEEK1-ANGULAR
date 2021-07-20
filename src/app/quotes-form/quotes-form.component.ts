import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.scss'],
})
export class QuotesComponent implements OnInit {
  title = 'welcome to tech quotes';
  quotes: Quote[] = [
    new Quote(
      1,
      'Ben',
      'Technology',
      'It has become appallingly obvious that our technology has exceeded our humanity.',
      'Albert Einstein',
      new Date(2021, 7, 19),
      0,
      0
    ),
    new Quote(
      2,
      'Smith',
      'Technology…',
      'I dont fear computers.I fear lack of them.',
      'Isaac Assimov',
      new Date(2021, 7, 19),
      0,
      0
    ),
    new Quote(
      3,
      'Mikey',
      'Life',
      'Everything is designed.Few things are designed well.',
      'Brian Reed',
      new Date(2021, 7, 19),
      0,
      0
    ),
    new Quote(
      4,
      'Victorine',
      'People',
      'Simplicity is about subtracting the obvious and adding the meaningful.',
      'John Maeda',
      new Date(2021, 7, 19),
      0,
      0
    ),
    new Quote(
      5,
      'Chelsea',
      'Money',
      'In information technology,money is not the issue.Willingness to implement and execute is the issue.',
      'Chanrababu Naidu',
      new Date(2021, 7, 19),
      0,
      0
    ),
    new Quote(
      6,
      'Alfred',
      'Success',
      'Its fine to celebrate success but it is more important to heed the lessons of failure.',
      'Alice Kahn',
      new Date(2021, 7, 19),
      0,
      0
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
