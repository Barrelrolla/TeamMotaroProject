// Casino start point

(function showMenu() {
    $("#gameField")
        .append("<div id='menu'></div>");

    $("#menu")
        .append("<h1>Casino MOTARO</h1>")
        .append("<img src='./img/motaro.png' />");

    if (!isUserLogged()) {
        showLoginForm();
    }

    $("#menu")
        .append(`<ul>
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
                </ul>`)
        .append("<link rel='stylesheet' href='style/menu.css'>");

    $("#menu-item-one").on("click", function() {
        if (!isUserLogged()) {
            showErrorMessage(this, "You must login to play in our casino!");
        }

    });

    $("#menu-item-two").on("click", function() {
        if (!isUserLogged()) {
            showErrorMessage(this, "You must login to play in our casino!");
        }

    });

    $("#menu-item-three").on("click", function() {
        if (!isUserLogged()) {
            showErrorMessage(this, "You must login to play in our casino!");
        }

    });
}());

function showLoginForm() {
    $("#menu")
        .append(`<form class="col-md-12">
                        <div class="form-group">
                            <input type="text" class="form-control input-medium" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control input-medium" placeholder="Password">
                        </div>
                        <div class="form-group">
                            <button class="btn btn-warning btn-medium btn-block">Sign In</button>
                            <span class="pull-right"><a href="#">New Registration</a></span>
                        </div>
                    </form>`);
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
    }
}

function isUserLogged() {

    // TODO: Implement check user login status 

    return false;
}