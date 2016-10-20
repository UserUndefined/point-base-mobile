"use strict";
require('reflect-metadata');
var core_1 = require('@angular/core');
var store_1 = require('./services/store');
var data_service_1 = require('./data.service');
var geolocation = require("nativescript-geolocation");
var timer = require("timer");
var MainPage = (function () {
    function MainPage(_dataService) {
        this._dataService = _dataService;
        this.startButtonEnabled = true;
        this.todoStore = new store_1.TodoStore();
        this.todoStore.add("item 1", true);
        this.todoStore.add("item 2", false);
        this.status = '';
        this.message = '';
        if (!geolocation.isEnabled()) {
            this.message = 'Location is switched off';
            this.startButtonEnabled = false;
        }
        else {
            this.startButtonEnabled = true;
        }
    }
    MainPage.prototype.enableLocationTap = function () {
        if (!geolocation.isEnabled()) {
            geolocation.enableLocationRequest();
        }
    };
    MainPage.prototype.startInterval = function (eventData) {
        console.log('button start clickety clicked');
        this.status = 'Started';
        var self = this;
        self.startButtonEnabled = false;
        this.timerIntervals = timer.setInterval(function () { self.sendLocation(); }, 900000);
    };
    MainPage.prototype.stopInterval = function (eventData) {
        console.log('button stopInterval clickety clicked');
        this.status = 'Stopped';
        var self = this;
        self.startButtonEnabled = true;
        timer.clearInterval(this.timerIntervals);
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
        var self = this;
        this.getLocation(function (err, location) {
            if (err) {
                self.status = err;
                return;
            }
            location.user = 'Test01';
            location.dateTime = '20 Oct 2016';
            self._dataService.PostLocation(location, function (err, result) {
                console.log(result);
                console.log(err);
                if (result) {
                    self.status = JSON.stringify(result);
                }
                else {
                    self.status = 'no result';
                }
                return;
            });
        });
    };
    MainPage.prototype.getLocation = function (callback) {
        var self = this;
        var location = geolocation.getCurrentLocation({ timeout: 20000 }).then(function (loc) {
            if (loc && loc.latitude && loc.longitude) {
                console.log(loc.latitude);
                self.location = JSON.stringify(loc);
                return callback(null, loc);
            }
            else {
                self.location = 'Location not found. Timed out?';
                return callback('Location not found');
            }
        }, function (e) {
            console.log(JSON.stringify(e));
            self.location = JSON.stringify(e.message);
            return callback(e.message);
            //return callback(null, {latitude: 50.0000, longitude: 1.00000});
        });
    };
    MainPage = __decorate([
        core_1.Component({
            selector: 'main',
            providers: [store_1.TodoStore, data_service_1.DataService],
            template: "\n<StackLayout class='card'>\n    <StackLayout orientation='vertical'>\n        <StackLayout>\n            <Button id=\"start-button\" text='Start' (tap)='startInterval($event)' [isEnabled]=\"startButtonEnabled\"></Button>\n        </StackLayout>\n        <StackLayout>\n            <Button id=\"stop-button\" text='Stop' (tap)='stopInterval($event)' [isEnabled]=\"!startButtonEnabled\"></Button>\n        </StackLayout>\n        <StackLayout>\n            <Label text=\"{{ message }}\"></Label>\n        </StackLayout>\n        <StackLayout>\n            <Label text=\"{{ status }}\"></Label>\n        </StackLayout>\n        <StackLayout>\n            <Label text=\"{{ location }}\"></Label>\n        </StackLayout>\n        <StackLayout>\n            <Button text=\"enable Location\" (tap)=\"enableLocationTap()\"  [isEnabled]=\"startButtonEnabled\"></Button>\n        </StackLayout>\n    </StackLayout>\n</StackLayout>\n",
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], MainPage);
    return MainPage;
}());
exports.MainPage = MainPage;
//# sourceMappingURL=main-page.js.map