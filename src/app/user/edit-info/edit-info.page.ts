import { Component, OnInit } from '@angular/core';
import { AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.page.html',
  styleUrls: ['./edit-info.page.scss'],
})
export class EditInfoPage implements OnInit {

  files = [];
  uploadProgress = 0;

  constructor(
    private storage: AngularFireStorage, private file: File
  ) { }

  ngOnInit() {
  }
/*
  async uploadFile(f: FileEntry){
    const path = f.nativeURL.substring(0, f.nativeURL.lastIndexOf('/') +1);
    const buffer = await this.file.readAsArrayBuffer(path, f.name);
    const fileBlob = new Blob([buffer], {type: 'image/jpg'});

    const randomId = Math.random().toString(36).substring(2,8);

    const uploadTask = this.storage.upload(`user/${new Date().getTime()}_${randomId}`, fileBlob);

    uploadTask.percentageChanges().subscribe( changes => {
    this.uploadProgress = changes;
    })

    uploadTask.then(async res => {
      console.log('Imagen Cargada');
    })
  }
*/
}
