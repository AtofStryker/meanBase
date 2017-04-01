import { Injectable } from '@angular/core';
import { User } from './users-model';
import { Subject} from 'rxjs/Subject';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
 private _usersObservable = new Subject<User>();
 private _usersUrl = 'http://localhost:3000/api/users/'; //in future, would like to use configuration service
 private _activeuser = new User();
 //create an observer for the user observable (above) also public
 _usersObservable$ = this._usersObservable.asObservable();

 constructor(private http: Http) {}

  saveUser(newUser : User) { 
  	this.http.post(this._usersUrl + "save", newUser).catch((e) => {
	  //catch the error and fetch the latest user regardless
	   this.getUser();
	   return null;

	}).subscribe((res:Response) =>{
		//fetch the latest user. makes sense to return with this request but for demo purposes we will refetch to reflect get/post
  	   this.getUser();
  	});
  }

  getUser(){
  	this.http.get(this._usersUrl + "user" ).catch((e) => {
	  //catch the error and publish the cached version
	   this._usersObservable.next(this._activeuser);
	   return null;
	}).subscribe((res:Response) =>{
	  	 //first, map the object to the USer object via the serializable class
	  	 this._activeuser.fillFromJSON(res.json());
	  	 //publish the updated changes to our subscribers on this activity
	  	 this._usersObservable.next(this._activeuser);
	});
  }
}