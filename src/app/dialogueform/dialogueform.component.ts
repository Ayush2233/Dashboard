import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogueform',
  templateUrl: './dialogueform.component.html',
  styleUrls: ['./dialogueform.component.css']
})
export class DialogueformComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogueformComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onAdd(): void {
    this.dialogRef.close(this.data);
  }

}
