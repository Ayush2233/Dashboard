import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatDialog } from '@angular/material/dialog';
import { WidgetlistComponent } from '../widgetlist/widgetlist.component';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  categories: any[];

  @Input() category: any;
  categorie:any
  allwidgets:any
  

  constructor(private dashboardService: DashboardService,public dialog: MatDialog) {
    this.categories = this.dashboardService.getCategories();
  }

  ngOnInit(): void {
    this.categorie= this.dashboardService.categories;
    this.allwidgets = this.categorie.flatMap((category: { widgets: any; }) => category.widgets);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(WidgetlistComponent, {
      width: '60%',
      data: {
        categories: this.categorie,
        allWidgets: this.allwidgets
      }
    });

    dialogRef.afterClosed().subscribe(removedWidgets => {
      console.log(removedWidgets)
      if (removedWidgets) {
        removedWidgets.forEach((widget: any) => {
          this.dashboardService.removeWidgets(removedWidgets);
        });
      }
    });
  }

  searchTerm: string = '';

filteredCategories() {
  if (!this.searchTerm) {
    return this.categories;
  }
  return this.categories.map(category => ({
    ...category,
    widgets: category.widgets.filter((widget: { name: string; }) => widget.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
  }));
}

}
