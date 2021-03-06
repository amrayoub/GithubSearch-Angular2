import { Component, OnInit } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
    selector: 'github',
    templateUrl: 'github.component.html',
    providers: [GithubService]
  })
export class GithubComponent implements OnInit {
    user:any;
    repos:any;
    username:string;

    constructor(private _githubService:GithubService){
        console.log('Github Component Init...');
    }

    search(){
        this._githubService.updateUsername(this.username);

        this._githubService.getUser().subscribe(user => {
            //console.log(user);
            this.user = user;
        });

        this._githubService.getRepos().subscribe(repos => {
            this.repos = repos;
        });
    }
ngOnInit(){
this.username="amrayoub";
}
}
