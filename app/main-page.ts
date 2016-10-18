import 'reflect-metadata';
import {TextView} from 'ui/text-view';
import {topmost} from 'ui/frame';
import {Inject, Component} from '@angular/core';
import {TodoStore, Todo} from './services/store';
import {Checkbox} from './checkbox';
import LabelModule = require("ui/label");
import { DataService } from './data.service';
import { LocationItem } from './location.item';

@Component({
    selector: 'main',
    providers: [TodoStore, DataService],
    template: `
<StackLayout class='card'>
    <Button class="add-button" text='Start' (tap)='addNew($event)'></Button>
    <StackLayout orientation='vertical'>
        <StackLayout
            *ngFor="let todo of todoStore.todos"
            class="todo-item"
            (doubleTap)="edit(todo)">
        </StackLayout>
        <StackLayout>
            <Label text="{{ status }}"></Label>
        </StackLayout>
    </StackLayout>
</StackLayout>
`,
})
export class MainPage {
    private  todoStore: TodoStore;
    private  status: string;
    private myItems: any;
    private responseString: any;

    constructor(private _dataService: DataService) {
        this.todoStore = new TodoStore();
        this.todoStore.add("item 1", true);
        this.todoStore.add("item 2", false);
        this.status = '';
    }

    addNew(eventData) {
        //this.todoStore.add("new task", false);
        console.log('button addNew clickety clicked');
        this.status = 'Started';
        this.sendLocation();
    }

    toggleSelected(todo: Todo) {
        //console.log('Selecting: ' + todo.title);
        //this.todoStore.select(todo, !todo.selected);
        console.log('button toggleSelected clicked');
        this.status = 'Started';
    }

    toggleCompletion(todo: Todo) {
        //console.log('toggleCompletion: ' + todo.completed);
        //this.todoStore.toggleCompletion(todo);
        console.log('button toggleCompletion clicked');
        this.status = 'Started';
    }

    delete(todo: Todo) {
        //this.todoStore.remove(todo);
        console.log('button delete clicked');
        this.status = 'Started';
    }

    edit(todo: Todo) {
        //this.todoStore.startEditing(todo);
        console.log('button edit clicked');
        this.status = 'Started';
    }

    finishEditing(todo: Todo, newTitle: string) {
        //this.todoStore.finishEditing(todo, newTitle);
        console.log('button finishEditing clicked');
        this.status = 'Started';
    }

    sendLocation() {
        //this._dataService
        //    .GetHealthcheck()
            //.subscribe((data:LocationItem[]) => this.myItems = data,
            //    error => console.log(error),
            //    () => console.log('Get all Items complete'));
        //    .subscribe((data:any) => this.status = data,
        //        error => {console.log(error);, this.status = error;},
        //        () => console.log('Get all Items complete'));
        var self = this;
        this._dataService.GetHealthcheck(function(err, result){
            console.log(result);
            console.log(err);
            if (result) {
                self.status = JSON.stringify(result);
            } else {
                self.status = 'no result';
            }
        });
    }
}
