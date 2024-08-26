import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service'; 
import { DialogueformComponent } from '../dialogueform/dialogueform.component';
import { MatDialog } from '@angular/material/dialog';
import { WidgetlistComponent } from '../widgetlist/widgetlist.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  @Input() category: any;
  categories:any
  allwidgets:any

  constructor(private dashboardService: DashboardService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.categories= this.dashboardService.categories;
    this.allwidgets = this.categories.flatMap((category: { widgets: any; }) => category.widgets);
  } 
  

  openAddWidgetDialog(): void {
    const dialogRef = this.dialog.open(DialogueformComponent, {
      width: '250px',
      data: { name: '', text: '' }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.dashboardService.addWidget(this.category.name, result);
      }
    });
  }


}
