import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username = 'amrayoub';
    private client_id = '07817c1c02b9456ddbe2';
    private client_secret='c4375d2f8ff0e72eea7ae343c28474b32485e613';

    constructor(private _http:Http){
        console.log('Github Service Init...');
    }

    getUser(){
        return this._http.get('https://api.github.com/users/'+this.username)
            .map(res => res.json());
    }

    getRepos(){
        return this._http.get('https://api.github.com/users/'+this.username+'/repos')
            .map(res => res.json());
    }

    updateUsername(username:string){
        this.username = username;
    }
}
