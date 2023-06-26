import { Component } from '@angular/core';
import {dataFetch} from "../data"
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  dataExtract = dataFetch

}
