import { Component, OnInit } from '@angular/core';
import { IClass } from '../interfaces/class.interface';
import { ClassService } from '../../../services/class.service';

@Component({
  selector: 'app-my-class',
  templateUrl: './my-class.component.html',
  styleUrls: ['./my-class.component.css'],
})
export class MyClassComponent implements OnInit {
  isLoaded = false;
  classData!: IClass;
  constructor(private classService: ClassService) {}

  ngOnInit() {
    this.classService
      .getClassData()
      .pipe()
      .subscribe(data => {
        this.classData = data;
        this.isLoaded = true;
      });
  }
}
