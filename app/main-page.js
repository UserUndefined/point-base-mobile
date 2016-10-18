"use strict";
require('reflect-metadata');
var core_1 = require('@angular/core');
var store_1 = require('./services/store');
var data_service_1 = require('./data.service');
var MainPage = (function () {
    function MainPage(_dataService) {
        this._dataService = _dataService;
        this.todoStore = new store_1.TodoStore();
        this.todoStore.add("item 1", true);
        this.todoStore.add("item 2", false);
        this.status = '';
    }
    MainPage.prototype.addNew = function (eventData) {
        //this.todoStore.add("new task", false);
        console.log('button addNew clickety clicked');
        this.status = 'Started';
        this.sendLocation();
    };
    MainPage.prototype.toggleSelected = function (todo) {
        //console.log('Selecting: ' + todo.title);
        //this.todoStore.select(todo, !todo.selected);
        console.log('button toggleSelected clicked');
        this.status = 'Started';
    };
    MainPage.prototype.toggleCompletion = function (todo) {
        //console.log('toggleCompletion: ' + todo.completed);
        //this.todoStore.toggleCompletion(todo);
        console.log('button toggleCompletion clicked');
        this.status = 'Started';
    };
    MainPage.prototype.delete = function (todo) {
        //this.todoStore.remove(todo);
        console.log('button delete clicked');
        this.status = 'Started';
    };
    MainPage.prototype.edit = function (todo) {
        //this.todoStore.startEditing(todo);
        console.log('button edit clicked');
        this.status = 'Started';
    };
    MainPage.prototype.finishEditing = function (todo, newTitle) {
        //this.todoStore.finishEditing(todo, newTitle);
        console.log('button finishEditing clicked');
        this.status = 'Started';
    };
    MainPage.prototype.sendLocation = function () {
        //this._dataService
        //    .GetHealthcheck()
        //.subscribe((data:LocationItem[]) => this.myItems = data,
        //    error => console.log(error),
        //    () => console.log('Get all Items complete'));
        //    .subscribe((data:any) => this.status = data,
        //        error => {console.log(error);, this.status = error;},
        //        () => console.log('Get all Items complete'));
        var self = this;
        this._dataService.GetHealthcheck(function (err, result) {
            console.log(result);
            console.log(err);
            if (result) {
                self.status = JSON.stringify(result);
            }
            else {
                self.status = 'no result';
            }
        });
    };
    MainPage = __decorate([
        core_1.Component({
            selector: 'main',
            providers: [store_1.TodoStore, data_service_1.DataService],
            template: "\n<StackLayout class='card'>\n    <Button class=\"add-button\" text='Start' (tap)='addNew($event)'></Button>\n    <StackLayout orientation='vertical'>\n        <StackLayout\n            *ngFor=\"let todo of todoStore.todos\"\n            class=\"todo-item\"\n            (doubleTap)=\"edit(todo)\">\n        </StackLayout>\n        <StackLayout>\n            <Label text=\"{{ status }}\"></Label>\n        </StackLayout>\n    </StackLayout>\n</StackLayout>\n",
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], MainPage);
    return MainPage;
}());
exports.MainPage = MainPage;
//# sourceMappingURL=main-page.js.map