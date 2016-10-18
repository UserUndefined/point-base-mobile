import 'reflect-metadata';
import {TextView} from 'ui/text-view';
import {topmost} from 'ui/frame';
import {Inject, Component} from '@angular/core';
import {TodoStore, Todo} from './services/store';
import {Checkbox} from './checkbox';
import { DataService } from './data.service';
import { LocationItem } from './location.item ';

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
            <TextView text="{{ status }}" />
        </StackLayout>
    </StackLayout>
</StackLayout>
`,
})
export class MainPage {
    private  todoStore: TodoStore;
    private  status: string;
    private myItems: any;

    constructor(private _dataService: DataService) {
        this.todoStore = new TodoStore();
        this.todoStore.add("item 1", true);
        this.todoStore.add("item 2", false);
        this.status = '';
    }

    addNew(eventData) {
        //this.todoStore.add("new task", false);
        console.log('button clicked now');
        this.status = 'Started';
    }

    toggleSelected(todo: Todo) {
        //console.log('Selecting: ' + todo.title);
        //this.todoStore.select(todo, !todo.selected);
        console.log('button clicked now');
        this.status = 'Started';
    }

    toggleCompletion(todo: Todo) {
        //console.log('toggleCompletion: ' + todo.completed);
        //this.todoStore.toggleCompletion(todo);
        console.log('button clicked now');
        this.status = 'Started';
    }

    delete(todo: Todo) {
        //this.todoStore.remove(todo);
        console.log('button clicked now');
        this.status = 'Started';
    }

    edit(todo: Todo) {
        //this.todoStore.startEditing(todo);
        console.log('button clicked now');
        this.status = 'Started';
    }

    finishEditing(todo: Todo, newTitle: string) {
        //this.todoStore.finishEditing(todo, newTitle);
        console.log('button clicked now');
        this.status = 'Started';
    }

    sendLocation() {
        this._dataService
            .GetHealthcheck()
            .subscribe((data:LocationItem[]) => this.myItems = data,
                error => console.log(error),
                () => console.log('Get all Items complete'));
    }
}
