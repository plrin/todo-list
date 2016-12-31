function TodoApp($el) {
    var _self       = this,
        $input      = $el.input,
        $lsNormal      = $el.listNormal,
        $lsFinished  = $el.listFinished,
        $lsDel      = $el.listDeleted,
        close       = $el.close,
        done        = $el.done,
        $btnAll      = $el.btnAll,
        $btnFinished  = $el.btnFinished,
        $btnDelete  = $el.btnDelete;
    
    init();
    
    
    // FUNCTIONS
    function init() {
    }
    
    function addItem() {
        var value = $input.val(),
            html = '<li class="list-container__list-item">' +
                '<span class="icon-done"></span>' +
                '<span class="list-container__item-text">' + value +'</span>' +
                '<span class="icon-close"></span>' +
                '</li>';
        
        if (value.trim().length > 0)
            $lsNormal.append(html);
        
        $input.val("");
    }
    
    function removeItem(item) {
        item.parent().remove();
    }
    
    function markedAsDone(item) {
        if (item.hasClass("done"))
            item.removeClass("done");
        else
            item.addClass("done");
    }
    
    function showList(button) {
        var attr = button.data("list"),
            cssClass = ".list-container__" + attr;
        $lsNormal.removeClass("show");
        $lsFinished.removeClass("show");
        $lsDel.removeClass("show");
        
        console.log(cssClass);
        
        $(".list-container__" + attr).addClass("show");
    }
    
    // region EVENT LISTENER
    $input.on("keydown", function (e) {
        if(e.which == 13) {
            addItem();
        }
    });
    
    $(document).on("click", close, function() {
        removeItem($(this));
    });
    
    $(document).on("click", done, function() {
        markedAsDone($(this));
    });

    $btnAll.on("click", function() {
        showList($(this));
    });

    $btnFinished.on("click", function() {
        showList($(this));
    });

    $btnDelete.on("click", function() {
        showList($(this));
    });
    // endregion
    
}