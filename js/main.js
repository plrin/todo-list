$(function() {
    
    new TodoApp(
        {
            input       : $(".input-field"),
            listNormal  : $(".list-container__normal"),
            listFinished: $(".list-container__finished"),
            listDeleted : $(".list-container__deleted"),
            close       : ".icon-close",
            done        : ".icon-done",
            btnAll      : $(".button-all"),
            btnFinished : $(".button-finished"),
            btnDelete   : $(".button-deleted")
        }
    );
    
    new CouchDB();
    
});

