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

        //Define name  model in the controller
        myCtrl.name = "";
        myCtrl.clearForm = function () {
            console.log("value of name: %s", myCtrl.name);
            console.log("in clearForm function");
            myCtrl.name = "";
        }

         //Define email  model in the controller
        myCtrl.email = "";
        myCtrl.clearForm = function () {
            console.log("value of email: %s", myCtrl.email);
            console.log("in clearForm function");
            myCtrl.email = "";
        }

         //Define phone  model in the controller
        myCtrl.phone = "";
        myCtrl.clearForm = function () {
            console.log("value of phone: %s", myCtrl.phone);
            console.log("in clearForm function");
            myCtrl.phone = "";
        }


        //Define comment model in the controller
        myCtrl.comment = "";
        myCtrl.clearForm = function () {
            console.log("value of comment: %s", myCtrl.comment);
            console.log("in clearForm function");
            myCtrl.comment = "";
        }

        myCtrl.processForm = function () {
            console.log("Processing name form: %s", myCtrl.name);
            console.log("Processing email form: %s", myCtrl.email);
            console.log("Processing phone form: %s", myCtrl.phone);
            console.log("Processing comment form: %s", myCtrl.comment);
            console.log("Processing radio form: %s", myCtrl.exp);
        };

        myCtrl.clearForm = function () {
            myCtrl.name = "";
            myCtrl.email = "";
            myCtrl.phone = "";
            myCtrl.comment = "";
            myCtrl.exp = "";
        };


    }


//Use the function as a controller
MyApp.controller("MyCtrl", MyCtrl);



})();