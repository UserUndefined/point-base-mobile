"use strict";
var core_1 = require('@angular/core');
var store = new Map();
var todoId = 0;
var Todo = (function () {
    function Todo(title, completed) {
        if (completed === void 0) { completed = false; }
        this.selected = false;
        this.completed = false;
        this.editing = false;
        this.uid = "todo " + (++todoId);
        this.title = title.trim();
        this.completed = completed;
    }
    Todo.prototype.setTitle = function (title) {
        this.title = title.trim();
    };
    return Todo;
}());
exports.Todo = Todo;
var TodoStore = (function () {
    function TodoStore() {
        this.todos = store.get('angular2-todos') || [];
    }
    TodoStore.prototype._updateStore = function () {
        store.set('angular2-todos', this.todos);
    };
    TodoStore.prototype.get = function (state) {
        return this.todos.filter(function (todo) { return todo.completed === state.completed; });
    };
    TodoStore.prototype.resetAll = function () {
        this.todos.forEach(function (t) {
            t.selected = false;
            t.editing = false;
        });
    };
    TodoStore.prototype.select = function (todo, selected) {
        this.resetAll();
        todo.selected = selected;
        this._updateStore();
    };
    TodoStore.prototype.toggleCompletion = function (todo) {
        todo.completed = !todo.completed;
        this._updateStore();
    };
    TodoStore.prototype.remove = function (todo) {
        this.resetAll();
        this.todos.splice(this.todos.indexOf(todo), 1);
        this._updateStore();
    };
    TodoStore.prototype.startEditing = function (todo) {
        this.resetAll();
        todo.editing = true;
    };
    TodoStore.prototype.finishEditing = function (todo, newTitle) {
        this.resetAll();
        todo.title = newTitle;
        todo.editing = false;
    };
    TodoStore.prototype.add = function (title, completed) {
        if (completed === void 0) { completed = false; }
        this.resetAll();
        this.todos.push(new Todo(title, completed));
        this._updateStore();
    };
    TodoStore = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TodoStore);
    return TodoStore;
}());
exports.TodoStore = TodoStore;
//# sourceMappingURL=store.js.map