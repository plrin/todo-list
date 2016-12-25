$(function() {
    
    new TodoApp(
        {
            input : $(".input-field"),
            list : $(".list-container__list"),
            closeButton : $(".icon-close"),
            close : ".icon-close"
        }
    );
    
});