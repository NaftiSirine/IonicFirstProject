import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  selectedSegment: string = 'default';
  gridBackground: string = 'red'; // 

  selectedButtonIndex: number = -1; 

  changeGridBackground(index: number) {
    if (this.selectedButtonIndex === index) {
      this.selectedButtonIndex = -1; // Deselect the button if it's already selected
    } else {
      this.selectedButtonIndex = index; // Select the button with the specified index
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
