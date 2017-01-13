function TodoApp($el) {
    var _       = this,
        $input      = $el.input,
        $lsNormal      = $el.listNormal,
        $lsFinished  = $el.listFinished,
        $lsDel      = $el.listDeleted,
        close       = $el.close,
        done        = $el.done,
        $btnAll      = $el.btnAll,
        $btnFinished  = $el.btnFinished,
        $btnDelete  = $el.btnDelete;
    
    _.$input      = $el.input;
    _.$lsNormal      = $el.listNormal;
    _.$lsFinished  = $el.listFinished;
    _.$lsDel      = $el.listDeleted;
    
    // region EVENT LISTENER
    $input.on("keydown", function (e) {
        if(e.which == 13) {
            _.addItem();
        }
    });
    
    $(document).on("click", close, function() {
        _.removeItem($(this));
    });
    
    $(document).on("click", done, function() {
        _.markedAsDone($(this));
    });

    $btnAll.on("click", function() {
        _.showList($(this));
    });

    $btnFinished.on("click", function() {
        _.showList($(this));
    });

    $btnDelete.on("click", function() {
        _.showList($(this));
    });
    // endregion
    
}

// FUNCTIONS
TodoApp.prototype.init = function() {
    
};

TodoApp.prototype.addItem = function() {
    var value = this.$input.val(),
        html = '<li class="list-container__list-item">' +
            '<span class="icon-done"></span>' +
            '<span class="list-container__item-text">' + value +'</span>' +
            '<span class="icon-close"></span>' +
            '</li>';
    
    if (value.trim().length > 0)
        this.$lsNormal.append(html);
    
    this.$input.val("");
};

TodoApp.prototype.removeItem = function(item) {
    item.parent().remove();
};

TodoApp.prototype.markedAsDone = function(item) {
    if (item.hasClass("done"))
        item.removeClass("done");
    else
        item.addClass("done");
};

TodoApp.prototype.showList = function(button) {
    var attr = button.data("list"),
        cssClass = ".list-container__" + attr;
    this.$lsNormal.removeClass("show");
    this.$lsFinished.removeClass("show");
    this.$lsDel.removeClass("show");
    
    console.log(cssClass);
    
    $(".list-container__" + attr).addClass("show");
};