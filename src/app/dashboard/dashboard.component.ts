import { Component, OnInit, NgModule } from '@angular/core';
import { Item } from '../entities/item/item'
import { ItemService } from '../resources/item/item-service.service'

@Component({
    selector: 'app-dashboard',
    providers: [ItemService],
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    items: Item[];
    newItem: Item;
    isViewMode: boolean;
    errorMessage: string;

    constructor(private itemService: ItemService) {
        this.isViewMode = true;
        this.newItem = new Item();
        this.items = [];
    }

    ngOnInit() {
        this.itemService.getAllItems()
            .subscribe(
                items =>  this.items = items,
                error =>  this.errorMessage = <any>error);
    }

    addItem() {
        if(this.newItem['_id']) {
            this.itemService.updateItem(this.newItem)
                .subscribe(
                    item =>  {
                        this.items.forEach((element, index) => {
                            if(element['_id'] === this.newItem['_id']) {
                                element.title = item.title;
                                element.status = item.status;
                            };
                        });
                        this.newItem = new Item();
                        this.isViewMode = true;
                    },
                    error =>  this.errorMessage = <any>error);
        } else {
            this.itemService.addItem(this.newItem)
                .subscribe(
                    item =>  {
                        this.items.push(item);
                        this.newItem = new Item();
                        this.isViewMode = true;
                    },
                    error =>  this.errorMessage = <any>error);
        }
    }

    editItem(item) {
        Object.assign(this.newItem, item);
        this.isViewMode = false;
    }

    deleteItem(item) {
        this.itemService.deleteItemById(item._id)
            .subscribe(
                res =>  {
                    let i = this.items.indexOf(item);
                    if(i != -1) {
                        this.items.splice(i, 1);
                    }
                },
                error =>  {
                    return this.errorMessage = <any>error;
                });
    }

    toggleMode() {
        this.isViewMode = !this.isViewMode;
    }
}
