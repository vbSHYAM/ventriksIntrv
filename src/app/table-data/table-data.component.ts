import { Component, OnInit  } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit {
  data: any[] = [];
  searchTerm: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getTableData().subscribe((data: any) => {
      this.data = data;
    });
  }
}
