import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit {
  title = 'welcome to tech quotes';
  quotes: Quote[] = [
    new Quote(
      1,
      'It has become appallingly obvious that our technology has exceeded our humanity.',

      'Ben',
      'Albert Einstein',
      new Date(2021, 7, 19)
    ),
    new Quote(
      2,
      'I dont fear computers.I fear lack of them.',

      'Smith',
      'Isaac Assimov',
      new Date(2021, 7, 19)
    ),
    new Quote(
      3,
      'Everything is designed.Few things are designed well.',

      'Mikey',
      'Brian Reed',
      new Date(2021, 7, 19)
    ),
    new Quote(
      4,
      'Simplicity is about subtracting the obvious and adding the meaningful.',

      'Victorine',
      'John Maeda',
      new Date(2021, 7, 19)
    ),
    new Quote(
      5,
      'In information technology,money is not the issue.Willingness to implement and execute is the issue.',

      'Chelsea',
      'Chanrababu Naidu',
      new Date(2021, 7, 19)
    ),
    new Quote(
      6,
      'Its fine to celebrate success but it is more important to heed the lessons of failure.',

      'Alfred',
      'Alice Kahn',
      new Date(2021, 7, 19)
    ),
  ];
  preNum!: number;
  lastNum!: number;
  counter!: number;
  upvote(i: number) {
    this.quotes[i].upvotes += 1;
  }
  downvote(i: number) {
    this.quotes[i].downvotes += 1;
  }
  toWritten(i: number) {
    this.quotes.splice(i, 1);
  }
  highestUpvote() {
    this.preNum = 0;
    this.lastNum = 0;
    for (this.counter = 0; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if (this.lastNum > this.preNum) {
        this.preNum = this.lastNum;
      }
    }
    return this.preNum;
  }
  color = '';
  toggleDetails(index: any) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  addNewQuote(quote: any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }
  constructor() {}

  ngOnInit(): void {}
}
