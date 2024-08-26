import { Component,Input } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent {

  @Input() widget: any;
  @Input()
  categoryName!: string;

  constructor(private dashboardService: DashboardService) {}

  removeWidget() {
    this.dashboardService.removeWidget(this.categoryName, this.widget.name);
  }

}
