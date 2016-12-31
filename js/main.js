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
    
});

function maxMultiple(divisor, bound) {
    
    var result;
    
    for(i = bound; i > 0; i--) {
        var tmp = i % divisor;
        if (tmp == 0) {
            result = i;
            break
        }
        console.log(i + " : " + tmp);
    }
    
    return result;
    
}
