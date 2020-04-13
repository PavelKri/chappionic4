import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.page.html',
  styleUrls: ['./conversation.page.scss'],
})
export class ConversationPage implements OnInit {

  public contactInfo: any = {
    name: 'JOHN DOE',
    status: 'ONLINE'
  }
  public showOptions: boolean = false;
  public messages: Array<any> = [
    { text: "Hey what's up?", type: 'received', created: '14:02' },
    { text: "Nothing", type: 'send', created: '14:05' },
    { text: "Want to go to the movies?", type: 'send', created: '14:05' },
    { text: "I'm sorry, I can't", type: 'received', created: '14:15' },
    { text: "but can we go tomorrow?", type: 'received', created: '14:16' },
    { text: "Nothing", type: 'send', created: '14:05' },
    { text: "Nothing", type: 'send', created: '14:05' },
    { text: "Nothing", type: 'send', created: '14:05' },
    { text: "Nothing", type: 'send', created: '14:05' },
    { text: "I'm sorry, I can't", type: 'received', created: '14:15' },
    { text: "but can we go tomorrow?", type: 'received', created: '14:16' },
  ];


  constructor() { }

  ngOnInit() {
  }

  showOptionsToggle(value?: boolean) {
    if (value !== undefined) {
      this.showOptions = value;
      return;
    }
    this.showOptions = !this.showOptions;
  }
  showContactProfile() {
    return "contact profile"
  }

}
