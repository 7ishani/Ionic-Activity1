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
  
  //constructor(private secureStorage: SecureStorage){}

  constructor(private router: Router, private dataService: DataService) { }

  public createSecureStorage() {
      console.log("storage function : "+this.username);

      /*this.secureStorage.create('mystore')
       .then((storage: SecureStorageObject) => {

          //console.log("storage object function : "+this.username);
         
          storage.set('key', 'value')
            .then(
              
               data => console.log(data),
                error => console.log(error)
            );

       });*/

  }
  
  submit()
  {
    console.log("submit button : "+this.username);

    this.createSecureStorage();

    console.log("msg : "+this.username);
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.username 
      }
    };

    this.router.navigate(['details'], navigationExtras);
   
  }
   
    
  
}
