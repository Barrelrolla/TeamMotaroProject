// Casino start point

import "jquery";
import "jqueryUI";
import "bootstrap";
import * as validate from "validator";
import * as dataService from "users-authentication";
import * as slotMachine from "slotMachine";
import * as blackjack from "blackjack";
import * as roulette from "roulette";
import * as models from "models";

var user = new models.User('Pesho');
showMenu();

export function getUserMoney() {
    return user.money;
}

export function setUserMoney(value) {
    user.money = value;
}

export function showMenu() {
    if ($("#gameField").find("#menu").length === 0) {
        $("#gameField")
            .append("<div id='menu'></div>");

        $("#menu")
            .append("<h1>Casino MOTARO</h1>")
            .append("<img src='./img/motaro.png' />")
            .append("<link rel='stylesheet' href='style/menu.css'>");
    }

    if (!dataService.isLoggedIn()) {
        showLoginForm();
    }
    let p = $("#menu");
        p.append(`<ul>
                    <li id="menu-item-one">
                        <a href="#"></a>
                        Blackjack
                    </li>
                    <li id="menu-item-two">
                        <a href="#"></a>
                        Roulette
                    </li>
                    <li id="menu-item-three">
                        <a href="#"></a>
                        Slot Machine
                    </li>
                </ul>`);

    $("#menu-item-one").on("click", function() {
        if (!validate.isUserLogged()) {
            let targetId = "#" + $(this).attr("id");
            showErrorMessage(targetId, validate.constants().USER_NOT_LOGGED_MESSAGE);
        } else {
            blackjack.loadGame();
        }

    });

    $("#menu-item-two").on("click", function() {
        if (!validate.isUserLogged()) {
            let targetId = "#" + $(this).attr("id");
            showErrorMessage(targetId, validate.constants().USER_NOT_LOGGED_MESSAGE);
        }else{
            roulette.loadGame();
        }

    });

    $("#menu-item-three").on("click", function() {
        if (!validate.isUserLogged()) {
            let targetId = "#" + $(this).attr("id");
            showErrorMessage(targetId, validate.constants().USER_NOT_LOGGED_MESSAGE);
        } else {
            slotMachine.loadGame();
        }
    });
}

function showLoginForm() {
    $("#menu").append(`<form class="loginForm col-md-12">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Username" id="tb-username">
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Password" id="tb-password">
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-6">
                                    <button class="btn btn-warning btn-block" id="btn-signin">Sign In</button>
                                </div>
                                <div class="col-md-6">
                                    <button class="btn btn-warning btn-block" id="btn-register">Register</button>
                                    <!--<span class="pull-right"><a href="#">New Registration</a></span>-->
                                </div>
                            </div>
                        </div>
                    </form>`);
    $("#btn-login").on("click", (ev) => {
        let user = {
            username: $("#tb-username").val(),
            passHash: $("#tb-password").val()
        };
        dataService.login(user)
            .then($('#loginForm').hide());
    });
    $("#btn-register").on("click", (ev) => {
        let user = {
            username: $("#tb-username").val(),
            passHash: $("#tb-password").val()
        };
        dataService.register(user)
            .then(() => {
                console.log($('#menu').find('.loginForm'));
                $('#menu').find('.loginForm').remove();
            })
    });
}

function showErrorMessage(targetId, message) {
    $(targetId)
        .attr("data-toggle", "modal")
        .attr("data-target", "#errorMessage");

    let p = $("#menu").find("#errorMessage");
    if (!p.length) {
        $("#menu")
            .append(`<div class="modal fade" id="errorMessage" role="dialog">
                        <div class="modal-dialog modal-sm">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    <h4 class="modal-title">Error</h4>
                                </div>
                                <div class="modal-body">
                                    <p>${message}</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>`);
    } else {
        $("#menu .modal-body p").html(message);
    }
}