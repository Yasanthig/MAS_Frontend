import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-vehicle-upload',
  templateUrl: './vehicle-upload.component.html',
  styleUrls: ['./vehicle-upload.component.css'],
})
export class VehicleUploadComponent implements OnInit {
  constructor(private vehicle: VehicleService) {}
  imageData: any;
  ngOnInit(): void {}

  form = new FormGroup({
   
    type: new FormControl(''),
    number: new FormControl(''),
    image: new FormControl(null),
    ads:new FormControl(),
  });

  onFileSelect(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    this.form.patchValue({ image: file });
    const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.vehicle.addVehicle( this.form.value.type, this.form.value.number,this.form.value.image,);
    console.log(this.form.value);
    this.form.reset();
    this.imageData = null;
    window.alert('successfully uploaded');
    window.location.reload();
  }
}
