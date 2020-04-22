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
  private getusername;

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
  
  
  submit()
  {
   
    console.log("1.create_function ");
    
    this.secureStorage.create('my_store_name')
      .then((storage: SecureStorageObject) => {

          console.log("2.set_key");

     storage.set('key2', this.username)
       .then(
        data => console.log(data),
         error => console.log(error)
     );

     console.log("3.get_key");

     storage.get('key2')
     .then(
       data => console.log(this.getusername=data),
       error => console.log(error)
   );
     
  });

    let navigationExtras: NavigationExtras = {
      state: {
        user: this.getusername 
      }
    };

    this.router.navigate(['details'], navigationExtras);

    
  }
  
}
