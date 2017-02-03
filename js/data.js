function CouchDB() {
    
    var jsonSrc = 'http://localhost:5984/todo-list/_design/view2/_view/new-view?limit=20&reduce=false';
    
    $.getJSON(jsonSrc)
        .done(function(data) {
            console.log( "second success" );
            var newData = data.rows;
            for (i = 0; i < newData.length; i++) {
                // console.log(i+1 + ": " + " " + JSON.stringify(newData[i].value));
                console.log(i+1 + ": " + " " + newData[i].value.item + " (" + newData[i].value.state + ")");
                addItemFromDb(newData[i].id, newData[i].value.item, newData[i].value.state);
            }
        })
        .fail(function() {
            console.log( "error" );
        })
        .always(function() {
            console.log( "complete" );
        });
    
    function printListItem(id, item, hasDone) {
        return '<li class="list-container__list-item ' + hasDone + '" data-id="' + id + '">' +
            '<span class="icon-done"></span>' +
            '<span class="list-container__item-text">' + item +'</span>' +
            '<span class="icon-close"></span>' +
            '</li>'
    }
    
    function addItemFromDb(id, item, status) {
        
        if(status == "open") {
            
            $(".list-container__normal").append(printListItem(id, item, ""));
        }
        else if(status == "finished") {
            $(".list-container__finished").append(printListItem(id, item, "done"));
        }
        else
            $(".list-container__normal").append(printListItem(id, item, ""));
    }
    
}
/*
* POUCH stuff
* */

var couchURL = "http://localhost:5984/todo-list";
var pouchURL = "to-dos";
var pouch = new PouchDB(couchURL);

// PouchDB.debug.enabled("*");

pouch.info().then(function (info) {
    console.log("ASD: " + JSON.stringify(info) );
});