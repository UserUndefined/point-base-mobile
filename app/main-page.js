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
            template: "\n<StackLayout class='card'>\n    <Button class=\"add-button\" text='Add' (tap)='addNew($event)'></Button>\n    <StackLayout orientation='vertical'>\n        <StackLayout\n            *ngFor=\"let todo of todoStore.todos\"\n            class=\"todo-item\"\n            (doubleTap)=\"edit(todo)\">\n                <DockLayout *ngIf=\"!todo.editing\" stretchLastChild=\"true\">\n                    <Checkbox [checked]=\"todo.completed\" (tap)=\"toggleCompletion(todo)\"></Checkbox>\n                    <Label\n                        (tap)=\"toggleSelected(todo)\"\n                        [class.complete]=\"todo.completed\"\n                        [class.incomplete]=\"!todo.completed\"\n                        class=\"todo-text\"\n                        verticalAlignment=\"center\"\n                        [style.minWidth]=\"200\"\n                        [text]=\"todo.title\"\n                        *ngIf=\"!todo.editing\"\n                        dock=\"right\"></Label>\n                </DockLayout>\n                <DockLayout *ngIf=\"todo.editing\" stretchLastChild=\"true\">\n                    <TextField\n                        #title\n                        class=\"todo-input\"\n                        verticalAlignment=\"center\"\n                        minWidth=\"200\"\n                        [text]=\"todo.title\"\n                        dock=\"left\"></TextField>\n                    <Button text=\"Done\"\n                        (tap)=\"finishEditing(todo, title.text)\"\n                        dock=\"right\"></Button>\n                </DockLayout>\n                <StackLayout orientation=\"horizontal\" *ngIf=\"todo.selected && !todo.editing\">\n                    <Button [text]=\"!todo.completed ? 'Complete!' : 'Undo complete'\" (tap)=\"toggleCompletion(todo)\"></Button>\n                    <Button text=\"Edit\" (tap)=\"edit(todo)\"></Button>\n                    <Button text=\"Delete\" (tap)=\"delete(todo)\"></Button>\n                </StackLayout>\n        </StackLayout>\n    </StackLayout>\n</StackLayout>\n",
        }), 
        __metadata('design:paramtypes', [])
    ], MainPage);
    return MainPage;
}());
exports.MainPage = MainPage;
//# sourceMappingURL=main-page.js.map