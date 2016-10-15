import 'reflect-metadata';
import {TextView} from 'ui/text-view';
import {topmost} from 'ui/frame';
import {Inject, Component} from '@angular/core';
import {TodoStore, Todo} from './services/store';
import {Checkbox} from './checkbox';

@Component({
    selector: 'main',
    providers: [TodoStore],
    template: `
<StackLayout class='card'>
    <Button class="add-button" text='Start' (tap)='addNew($event)'></Button>
    <StackLayout orientation='vertical'>
        <StackLayout
            *ngFor="let todo of todoStore.todos"
            class="todo-item"
            (doubleTap)="edit(todo)">
        </StackLayout>
    </StackLayout>
</StackLayout>
`,
})
export class MainPage {
    private  todoStore: TodoStore;

    constructor() {
        this.todoStore = new TodoStore();
        this.todoStore.add("item 1", true);
        this.todoStore.add("item 2", false);
    }

    addNew(eventData) {
        this.todoStore.add("new task", false);
    }

    toggleSelected(todo: Todo) {
        console.log('Selecting: ' + todo.title);
        this.todoStore.select(todo, !todo.selected);
    }

    toggleCompletion(todo: Todo) {
        console.log('toggleCompletion: ' + todo.completed);
        this.todoStore.toggleCompletion(todo);
    }

    delete(todo: Todo) {
        this.todoStore.remove(todo);
    }

    edit(todo: Todo) {
        this.todoStore.startEditing(todo);
    }

    finishEditing(todo: Todo, newTitle: string) {
        this.todoStore.finishEditing(todo, newTitle);
    }
}
