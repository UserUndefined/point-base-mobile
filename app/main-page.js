"use strict";
require('reflect-metadata');
var core_1 = require('@angular/core');
var store_1 = require('./services/store');
var MainPage = (function () {
    function MainPage() {
        this.todoStore = new store_1.TodoStore();
        this.todoStore.add("item 1", true);
        this.todoStore.add("item 2", false);
    }
    MainPage.prototype.addNew = function (eventData) {
        this.todoStore.add("new task", false);
    };
    MainPage.prototype.toggleSelected = function (todo) {
        console.log('Selecting: ' + todo.title);
        this.todoStore.select(todo, !todo.selected);
    };
    MainPage.prototype.toggleCompletion = function (todo) {
        console.log('toggleCompletion: ' + todo.completed);
        this.todoStore.toggleCompletion(todo);
    };
    MainPage.prototype.delete = function (todo) {
        this.todoStore.remove(todo);
    };
    MainPage.prototype.edit = function (todo) {
        this.todoStore.startEditing(todo);
    };
    MainPage.prototype.finishEditing = function (todo, newTitle) {
        this.todoStore.finishEditing(todo, newTitle);
    };
    MainPage = __decorate([
        core_1.Component({
            selector: 'main',
            providers: [store_1.TodoStore],
            template: "\n<StackLayout class='card'>\n    <Button class=\"add-button\" text='Start' (tap)='addNew($event)'></Button>\n    <StackLayout orientation='vertical'>\n        <StackLayout\n            *ngFor=\"let todo of todoStore.todos\"\n            class=\"todo-item\"\n            (doubleTap)=\"edit(todo)\">\n        </StackLayout>\n    </StackLayout>\n</StackLayout>\n",
        }), 
        __metadata('design:paramtypes', [])
    ], MainPage);
    return MainPage;
}());
exports.MainPage = MainPage;
//# sourceMappingURL=main-page.js.map