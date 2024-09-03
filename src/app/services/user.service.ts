import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../shared/modals/user';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN_URL, USER_REGISTER_URL } from '../shared/constants/urs';
import { IUserLogin } from '../shared/INTERFACES/IUserLogin';
import { IUserRegister } from '../shared/INTERFACES/IUserregister';


const USER_KEY='User'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject =
  new BehaviorSubject<User>(this.getusertolocalstorage());
  public userObservable:Observable<User> 


  constructor(private http:HttpClient) {
    this.userObservable = this.userSubject.asObservable();
   }
   public get currentUser():User{
    return this.userSubject.value;
  }

   login(userLogin:IUserLogin):Observable<User>{
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) =>{
          this.setusertolocalstorage(user)
        
          this.userSubject.next(user);
          console.log("finally")
          // this.toastrService.success(
          //   `Welcome to Foodmine ${user.name}!`,
          //   'Login Successful'
          // )
        },
        error: (errorResponse) => {
          console.log("final")
          // this.toastrService.error(errorResponse.error, 'Login Failed');
        }
      })
    );
  }
 
  register(userRegister: IUserRegister): Observable<User> {
    return this.http.post<User>(USER_REGISTER_URL, userRegister).pipe(
      tap({
        next: (user) => {
          this.setusertolocalstorage(user);
          this.userSubject.next(user);
          console.log(`Welcome to the Foodmine ${user.name}`);
          // If you still want to alert the user about the success
          alert(`Welcome to the Foodmine ${user.name}`);
        },
        error: (errorResponse) => {
          console.error('Register Failed:', errorResponse.error);
          // If you still want to alert the user about the failure
          alert('Register Failed: ' + errorResponse.error);
        }
      })
    );
  }
  
  // }
  logout() {
    console.log("User logged out");
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }
  private setusertolocalstorage(user:User){
    localStorage.setItem(USER_KEY,JSON.stringify(user))

  }

  private getusertolocalstorage():User{
    const userJson=localStorage.getItem(USER_KEY)
    if(userJson) return JSON.parse(userJson) as User;
    return new User()


  }
}
