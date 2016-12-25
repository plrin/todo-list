function TodoApp($el) {
    var _self = this,
        $input = $el.input,
        $list = $el.list,
        $close = $el.closeButton,
        close = $el.close;
    
    init();
    
    
    // FUNCTIONS
    function init() {
    }
    
    function addItem() {
        var value = $input.val(),
            html = '<li class="list-container__list-item">' +
                '<span class="icon-done"><input type="checkbox" class="icon-done__checkbox"></span>' +
                '<span class="list-container__item-text">' + value +'</span>' +
                '<span class="icon-close"></span>' +
                '</li>';
    
        $list.append(html);
        $input.val("");
    }
    
    function removeItem(item) {
        item.parent().remove();
    }
    
    // EVENT LISTENER
    $input.on("keydown", function (e) {
        if(e.which == 13) {
            addItem();
        }
    });
    
    $(document).on("click", ".icon-close", function () {
        removeItem($(this));
    });
    
    
}