//IIFE
(function () {

    //Create a module
    var MyApp = angular.module("MyApp", []);


    //Create a function
    /*
    {
        name: "",
        clearForm: function() {
            this.name = "";
         }

    }
    */

    var MyCtrl = function () {
        var myCtrl = this;

        //Define a model in the controller
        myCtrl.name = "";
        myCtrl.clearForm = function () {
            console.log("value of name: %s", myCtrl.name);
            console.log("in clearForm function");
            myCtrl.name = "";
        }

        myCtrl.processForm() = function () {
            console.log("Processing form: %s", myCtrl.name);
        };

        MyCtrl.hide = function () {
            var stars = "********************";
            if (hideString) {
                myCtrl.name = hideString;
                hideString = null;
                return
            }


            hideSting = nyCtrl.name;
            myCtrl.name = stars.substring(0, myCtrl.name.length);
        }
    }
};



//Use the function as a controller
MyApp.controller("MyCtrl", MyCtrl);



})();