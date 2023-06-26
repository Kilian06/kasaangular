import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() dataHebergement: any;

  constructor(private router: Router){}
  goToDetail(maison:any){
    console.log("ici")
    this.router.navigate(['/detail',maison.id])
  }}
