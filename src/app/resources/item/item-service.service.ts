import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Item } from '../../entities/item/item';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemService {

    private itemsUrl = 'http://localhost:8000/items';

    constructor(private http: Http) { }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

    private handleError (error: any) {
        return Observable.throw(error.json().error || 'Server error');
    }

    getAllItems() : Observable<Item[]> {
        return this.http.get(this.itemsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    addItem(item: Item): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.itemsUrl, item, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    updateItem(item: Item): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(this.itemsUrl + '/' + item['_id'], item, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    deleteItemById(id: number): Observable<any> {
        return this.http.delete(this.itemsUrl + '/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    }
}
