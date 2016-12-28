import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostsService{
    constructor(private http: Http){
    }

    // getPostById(id){
    //     return this.http.get('https://jsonplaceholder.typicode.com/posts')
    //         .map((id: string, res: Response) => {
    //             console.log(id);
    //             return res.json()
    //     })
    //         .catch(this.handleError);
    // }


    getPosts(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map((res: Response) => {return res.json() || { }})
            .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
