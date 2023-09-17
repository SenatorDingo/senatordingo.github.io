import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() imageLink: string | undefined;
  @Input() title: string = 'Project';
  @Input() languages: string = '';
  @Input() skills: string = '';
  @Input() description: string = 'Description';

}
