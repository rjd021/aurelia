define('app',["require", "exports", "./todo"], function (require, exports, todo_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.heading = 'My Tasks';
            this.newTodo = '';
            this.todos = [];
        }
        App.prototype.addTodo = function () {
            if (this.newTodo) {
                this.todos.push(new todo_1.Todo(this.newTodo));
                this.newTodo = '';
            }
        };
        App.prototype.removeTodo = function (todo) {
            var index = this.todos.indexOf(todo);
            if (index != -1) {
                this.todos.splice(index, 1);
            }
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFLQTtRQUFBO1lBR0UsWUFBTyxHQUFHLFVBQVUsQ0FBQztZQUdyQixZQUFPLEdBQUcsRUFBRSxDQUFDO1lBR2IsVUFBSyxHQUFZLEVBQUUsQ0FBQztRQW1CdEIsQ0FBQztRQWhCQyxxQkFBTyxHQUFQO1lBR0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLENBQUM7UUFDSCxDQUFDO1FBR0Qsd0JBQVUsR0FBVixVQUFXLElBQUk7WUFDYixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixDQUFDO1FBQ0gsQ0FBQztRQUNILFVBQUM7SUFBRCxDQTVCQSxBQTRCQyxJQUFBO0lBNUJZLGtCQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0aW5nIGNsYXNzIGZyb20gdG9kby50cyBmaWxlXG5pbXBvcnR7VG9kb30gZnJvbSAnLi90b2RvJztcblxuXG5cbmV4cG9ydCBjbGFzcyBBcHAge1xuIFxuLy9IZWFkaW5nIFxuICBoZWFkaW5nID0gJ015IFRhc2tzJztcblxuLy9OZXcgdGFzaywgaW5pdGlhbGx5IHNldCB0byBudWxsIHVudGlsIHVwZGF0ZWQgYnkgdXNlclxuICBuZXdUb2RvID0gJyc7XG5cbi8vQXJyYXkgdGhhdCB3aGVyZSB0YXNrcyB3aWxsIGJlIHN0b3JlZFxuICB0b2RvcyA6IFRvZG9bXSA9IFtdO1xuXG4vL01ldGhvZCBmb3IgYWRkaW5nIGEgdGFza1xuICBhZGRUb2RvKCl7XG5cbi8vaWYgaXQgaXMgdGhlIGZpcnN0IHRhc2ssIGNyZWF0ZSBuZXcgYXJyYXkgJiBwdXNoIHRhc2sgICAgIFxuICAgIGlmKHRoaXMubmV3VG9kbyl7XG4gICAgICB0aGlzLnRvZG9zLnB1c2gobmV3IFRvZG8odGhpcy5uZXdUb2RvKSk7XG4gICAgICB0aGlzLm5ld1RvZG8gPSAnJztcbiAgICB9XG4gIH1cblxuLy9pZiBhcnJheSBpcyBub3QgZW1wdHksIHNwbGljZSBieSAxXG4gIHJlbW92ZVRvZG8odG9kbyl7XG4gICAgbGV0IGluZGV4ID0gdGhpcy50b2Rvcy5pbmRleE9mKHRvZG8pO1xuICAgIGlmIChpbmRleCAhPSAtMSl7XG4gICAgICB0aGlzLnRvZG9zLnNwbGljZShpbmRleCwxKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('todo',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Todo = (function () {
        function Todo(description) {
            this.description = description;
            this.edit = false;
            this.done = false;
        }
        return Todo;
    }());
    exports.Todo = Todo;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQ0E7UUFRQSxjQUFtQixXQUFvQjtZQUFwQixnQkFBVyxHQUFYLFdBQVcsQ0FBUztZQUxuQyxTQUFJLEdBQUcsS0FBSyxDQUFDO1lBQ2IsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUtiLENBQUM7UUFDTCxXQUFDO0lBQUQsQ0FWQSxBQVVDLElBQUE7SUFWWSxvQkFBSSIsImZpbGUiOiJ0b2RvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBjbGFzcyBUb2Rve1xyXG5cclxuLy9pbml0aWFsIGNvbmRpdGlvbnNcclxuICAgIGVkaXQgPSBmYWxzZTtcclxuICAgIGRvbmUgPSBmYWxzZTsgXHJcblxyXG5cclxuLy9jb25zdHJ1Y3RvciB0byBob2xkIHN0cmluZyB2YWx1ZSBvZiB0YXNrXHJcbmNvbnN0cnVjdG9yKHB1YmxpYyBkZXNjcmlwdGlvbiA6IHN0cmluZyl7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template><h1>${heading}</h1><style>.button{border-radius:10px;background-color:rgba(20,10,100,.5);border:none;color:#fff;text-align:center;font-size:18px;padding:3px;width:150px;transition:all .5s;cursor:pointer;margin:5px}</style><form submit.trigger=\"addTodo()\"><input type=\"text\" value.bind=\"newTodo\"> <button class=\"button\" type=\"submit\">Add Task</button></form><table><tr><th>Completed &emsp;</th><th>Task Description &emsp;</th><th>Operations &emsp;</th></tr><tr repeat.for=\"todo of todos\"><td><input type=\"checkbox\" checked.bind=\"todo.done\"></td><td><span show.bind=\"!todo.edit\" css=\"text-decoration:${todo.done ? 'line-through' : 'none'}\">${todo.description} </span><input show.bind=\"todo.edit\" type=\"text\" value.bind=\"todo.description\"></td><td><button class=\"button\" click.trigger=\"todo.edit=!todo.edit\">${ !todo.edit ? 'Edit' : 'Done'}</button> <button class=\"button\" click.trigger=\"removeTodo(todo)\">Delete</button></td></tr></table></template>"; });
//# sourceMappingURL=app-bundle.js.map