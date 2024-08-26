import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  categories: any[] = [
    {
      name: 'CSPM Executive Dashboard',
      widgets: [
        { name: 'Cloud Accounts', text: 'Sample widget text' },
        { name: 'Cloud Account Risk Assessment', text: 'Sample widget text' }
      ]
    },
    {
      name: 'CWPP Dashboard',
      widgets: [
        { name: 'Top 5', text: 'Sample widget text' },
        { name: 'Top 10', text: 'Sample widget text' }
      ]
    },
    {
      name: 'Registry Scan',
      widgets: [
        { name: 'Image Risk Assessment', text: 'Sample widget text' },
        { name: 'Image Security Issues', text: 'Sample widget text' }
      ]
    }
  ];

  getCategories() {
    return this.categories;
  }

  addWidget(categoryName: string, widget: any) {
    const category = this.categories.find(cat => cat.name === categoryName);
    if (category) {
      category.widgets.push(widget);
    }
  }

  removeWidget(categoryName: string, widgetName: string) {
    const category = this.categories.find(cat => cat.name === categoryName);
    if (category) {
      category.widgets = category.widgets.filter((widget: { name: string; }) => widget.name !== widgetName);
    }
  }

  removeWidgets(widgetsToKeep: { name: string; text: string }[]): void {
    this.categories.forEach(category => {

      category.widgets = category.widgets.filter((widget: { name: string; }) =>
        widgetsToKeep.some(w => w.name === widget.name)
      );
    });
  }
}
