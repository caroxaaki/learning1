import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-metting',
  templateUrl: './metting.component.html',
  styleUrls: ['./metting.component.scss']
})
export class MettingComponent implements OnInit {
  mettingForm!: FormGroup<any>;
  data: any;
  ngOnInit(): void {
    this.mettingForm = new FormGroup(
      { name: new FormControl(['']), gender: new FormControl(['']), date: new FormControl(['']) }
    )

  }
  onSubmit() {
    this.data = this.mettingForm.value
  }
}