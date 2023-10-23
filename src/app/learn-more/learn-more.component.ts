import { Component } from '@angular/core';

@Component({
  selector: 'app-learn-more',
  templateUrl: './learn-more.component.html',
  styleUrls: ['./learn-more.component.css']
})
export class LearnMoreComponent {
  messageBox = true;
  cancelMessage(){
    this.messageBox = false;
  }
}