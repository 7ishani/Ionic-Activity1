import { Component} from '@angular/core';
import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage/ngx';
import { NavigationExtras, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  private username:string;

  //constructor(private router: Router, private dataService: DataService,private secureStorage: SecureStorage){}
  
  constructor(private router: Router, private dataService: DataService,private secureStorage: SecureStorage) { }
 
 /* private setkey(storage: SecureStorageObject):void{
    console.log("set called");

    storage.set('key', this.username)
            .then(  
              data => console.log(data),
              error => console.log(error)
            );

  }
  private getkey(storage: SecureStorageObject):void{
    console.log("get called");

    storage.get('key')
            .then(
              data => console.log(data),
              error => console.log(error)

            );
  }
  public createSecureStorage():void {
    
                console.log("create secure storage ");
      
      this.secureStorage.create('mystore1')
     this.setkey(this.object);
     this.getkey(this.object);

      
  }*/
  
  public createSecureStorage():void{

    console.log("create function ");
    
    this.secureStorage.create('my_store_name')
      .then((storage: SecureStorageObject) => {

          console.log("set key");

     storage.set('key', 'value')
       .then(
        data => console.log(data),
         error => console.log(error)
     );

    
  });
  }

  submit()
  {
   
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.username 
      }
    };

    this.router.navigate(['details'], navigationExtras);

    this.createSecureStorage();
  }
  
}
