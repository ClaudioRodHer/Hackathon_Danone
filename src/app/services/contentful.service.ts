import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  datos: any = {};
  constructor(private http: HttpClient) { }

  getInfo(){
    const url = 'https://cdn.contentful.com/spaces/rw27kv74pjb2/environments/master/entries?access_token=kmCAMhqbuWIHtBXfzkvWn0-fav47NtGL_4oN0gt0XnM';
    return this.http.get(url);
  }
}
