import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//angular Material
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';






@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule
    ],
    exports: [
        MatDialogModule,
        MatButtonModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule
    ]
})
export class MaterialModule { }
