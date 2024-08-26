import { Component, Inject, ViewChild } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatListModule, MatSelectionList } from '@angular/material/list';

interface Widget {
  checked: boolean;
  name: string;
  text: string;
}

interface Category {
  name: string;
  widgets: Widget[];
}
@Component({
  selector: 'app-widgetlist',
  templateUrl: './widgetlist.component.html',
  styleUrls: ['./widgetlist.component.css']
})
export class WidgetlistComponent {

  // selectedWidgets: string[];

  // constructor(
  //   public dialogRef: MatDialogRef<WidgetlistComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: any
  // ) {
  //   this.selectedWidgets = data.widgets.map((widget: any) => widget.name);
  // }

  // onCancel(): void {
  //   this.dialogRef.close();
  // }

  // onSave(): void {
  //   const removedWidgets = this.data.widgets.filter(
  //     (widget: any) => !this.selectedWidgets.includes(widget.name)
  //   );
  //   this.dialogRef.close(removedWidgets);
  // }

  categories: Category[] = [];
  allWidgets: Widget[] = [];
  selectedCategory: Category | null = null;
  selectedWidgets!: string[];
  

  @ViewChild('widgetsList') widgetsList: MatSelectionList | undefined;
  constructor(
    public dialogRef: MatDialogRef<WidgetlistComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { categories: Category[], allWidgets: Widget[] }
  ) {
    this.categories = data.categories;
    this.allWidgets = data.allWidgets;
    this.selectedWidgets = data.allWidgets?.map((widget: Widget) => widget.name);

    // this.categories.forEach(category => {
    // category.widgets.forEach(widget => widget.checked = true);
     

     
    // });
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }

  isWidgetInCategory(widget: Widget): boolean {
    return this.selectedCategory ? this.selectedCategory.widgets.some(w => w.name === widget.name) : false;
  }

  toggleWidgetInCategory(event: MatCheckboxChange, widget: Widget) {
    if (this.selectedCategory) {
      if (event.checked) {
        if (!this.isWidgetInCategory(widget)) {
          this.selectedCategory.widgets.push(widget);
        }
      } else {
        this.selectedCategory.widgets = this.selectedCategory.widgets.filter(w => w.name !== widget.name);
      }
    }
  }

  
  onSave(): void {

      const removedWidgets = this.data.allWidgets.filter(
        (widget: any) => !this.selectedWidgets.includes(widget.name)
      );
      this.dialogRef.close(removedWidgets);
    }

  close(): void {
    this.dialogRef.close();
  }
}
