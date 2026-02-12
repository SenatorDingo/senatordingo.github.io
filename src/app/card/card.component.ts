import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title: string = 'Project';
  @Input() description: string = '';
  @Input() tech: string[] = [];
  @Input() githubLink: string = '';
  @Input() externalLink: string = '';
}
