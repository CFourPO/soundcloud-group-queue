/**
 * Created by Home on 11/20/16.
 */
import {Component, OnInit} from '@angular/core';
import '../public/stylesheets/styles.css';
import {MyHttpService} from "./services/http.service";
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    userId: string = '417384';

    constructor(private _httpService: MyHttpService)  {  }

    onSubmit() {
        if (this.userId !== null)
            this._httpService.getUser(this.userId);
        else
            alert('Must fill in the form');
    }
}