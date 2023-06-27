import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import {dataFetch} from "../data"


@Component({
  selector: 'app-detail-content',
  templateUrl: './detail-content.component.html',
  styleUrls: ['./detail-content.component.scss']
})
export class DetailContentComponent {
  dataDetail:any;
  slideValue:number = 0

  startSVG:any ="assets/starfill.svg"


  constructor(private route: ActivatedRoute){}
  ngOnInit(){
    const hebergementId: any = this.route.snapshot.paramMap.get('id')
    this.dataDetail = dataFetch.find(data => data.id == hebergementId)
    console.log(this.dataDetail)
  }

  nextSlide(){
    if(this.slideValue === this.dataDetail.pictures.length -1){
      this.slideValue = 0
    }else{
      this.slideValue ++
    }
  }

  prevSlide(){
    if(this.slideValue === 0){
      this.slideValue = this.dataDetail.pictures.length - 1
    }else{
      this.slideValue --
    }
    
  }

}
