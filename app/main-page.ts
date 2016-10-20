import 'reflect-metadata';
import {TextView} from 'ui/text-view';
import {topmost} from 'ui/frame';
import {Inject, Component} from '@angular/core';
import {TodoStore, Todo} from './services/store';
import {Checkbox} from './checkbox';
import LabelModule = require("ui/label");
import { DataService } from './data.service';
import { LocationItem } from './location.item';
import geolocation = require("nativescript-geolocation");
import timer = require("timer");

@Component({
    selector: 'main',
    providers: [TodoStore, DataService],
    template: `
<StackLayout class='card'>
    <StackLayout orientation='vertical'>
        <StackLayout>
            <Button id="start-button" text='Start' (tap)='startInterval($event)' [isEnabled]="startButtonEnabled"></Button>
        </StackLayout>
        <StackLayout>
            <Button id="stop-button" text='Stop' (tap)='stopInterval($event)' [isEnabled]="!startButtonEnabled"></Button>
        </StackLayout>
        <StackLayout>
            <Label text="{{ message }}"></Label>
        </StackLayout>
        <StackLayout>
            <Label text="{{ status }}"></Label>
        </StackLayout>
        <StackLayout>
            <Label text="{{ location }}"></Label>
        </StackLayout>
        <StackLayout>
            <Button text="enable Location" (tap)="enableLocationTap()"  [isEnabled]="startButtonEnabled"></Button>
        </StackLayout>
    </StackLayout>
</StackLayout>
`,
})
export class MainPage {
    private  todoStore: TodoStore;
    private  status: string;
    private  location: string;
    private myItems: any;
    private responseString: any;
    private message: string;
    private startButtonEnabled = true;
    private timerIntervals: any;

    constructor(private _dataService: DataService) {
        this.todoStore = new TodoStore();
        this.todoStore.add("item 1", true);
        this.todoStore.add("item 2", false);
        this.status = '';
        this.message = '';
        if (!geolocation.isEnabled()) {
            this.message = 'Location is switched off';
            this.startButtonEnabled = false;
        } else {
            this.startButtonEnabled = true;
        }
    }

    enableLocationTap() {
        if (!geolocation.isEnabled()) {
            geolocation.enableLocationRequest();
        }
    }

    startInterval(eventData) {
        console.log('button start clickety clicked');
        this.status = 'Started';
        var self = this;
        self.startButtonEnabled = false;
        this.timerIntervals = timer.setInterval(function(){ self.sendLocation(); }, 900000);
    }

    stopInterval(eventData) {
        console.log('button stopInterval clickety clicked');
        this.status = 'Stopped';
        var self = this;
        self.startButtonEnabled = true;
        timer.clearInterval(this.timerIntervals);
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
        var self = this;
        this.getLocation(function(err, location){
            if (err){
                self.status = err;
                return;
            }
            location.user = 'Test01';
            location.dateTime = '20 Oct 2016';
            self._dataService.PostLocation(location, function(err, result){
                console.log(result);
                console.log(err);
                if (result) {
                    self.status = JSON.stringify(result);
                } else {
                    self.status = 'no result';
                }
                return;
            });
        });
    }

    getLocation(callback){
        var self = this;
        var location = geolocation.getCurrentLocation({timeout: 20000}).then(
            (loc) => {
                if (loc && loc.latitude && loc.longitude) {
                    console.log(loc.latitude);
                    self.location = JSON.stringify(loc);
                    return callback(null, loc);
                } else {
                    self.location = 'Location not found. Timed out?';
                    return callback('Location not found');
                    //return callback(null, {latitude: 50.0000, longitude: 1.00000});
                }
            },
            (e) => {
                console.log(JSON.stringify(e));
                self.location = JSON.stringify(e.message);
                return callback(e.message);
                //return callback(null, {latitude: 50.0000, longitude: 1.00000});
            }
        );
    }
}
