import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  userData: any = {};
  editedUserData: any = {};
  selectedUserDetail: any = {};
  userImage : any = {}
  imageData: any;
  loading = false;
  typeSelected: any;

  constructor(private auth : AuthService , private _router : Router) { }


  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('user') || '{}');

    this.editedUserData.firstName = this.userData.firstName;
    this.editedUserData.lastName = this.userData.lastName;
    this.editedUserData.email = this.userData.email;
    this.editedUserData.position = this.userData.position;
    this.editedUserData.department = this.userData.department;
    this.editedUserData.supervisorName = this.userData.supervisorName;
    this.editedUserData.mobile = this.userData.mobile;
    this.editedUserData.image = this.userData.image;


    this.auth.getUserImageById(this.userData._id).subscribe((res: any)=> {
      this.userImage=res,
      console.log("hello",res.data.image)
    })
  }
  form = new FormGroup({
    image: new FormControl(null),
  });

  updateUser() {
    let updateUser = this.editedUserData;
    updateUser._id = this.userData._id;


    this.auth.updateUserDetails(updateUser)
    .subscribe(
      res=> {
        updateUser.push=res;
        this.selectedUserDetail=res;
        window.alert("successfully edited");
        this._router.navigate(['/login']);
        console.log(res)
      },
      (err) => console.log(err)
    );
  }

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

 

  uploadImage() {

      this.auth.uploadImage(this.userData._id, this.form.value.image)
    this.form.reset();
    this.imageData = null;
    window.alert('successfully uploaded');
    window.location.reload();
    
  
    
  }


  

}

