function CouchDB() {
    
    var jsonSrc = 'http://localhost:5984/todo-list/_design/view2/_view/new-view?limit=20&reduce=false';
    
    $.getJSON(jsonSrc)
        .done(function(data) {
            console.log( "second success" );
            var newData = data.rows;
            for (i = 0; i < newData.length; i++) {
                // console.log(i+1 + ": " + " " + JSON.stringify(newData[i].value));
                console.log(i+1 + ": " + " " + newData[i].value.item + " (" + newData[i].value.state + ")");
                addItemFromDb(newData[i].value.item);
            }
        })
        .fail(function() {
            console.log( "error" );
        })
        .always(function() {
            console.log( "complete" );
        });
    
    
    function addItemFromDb(item) {
        var html = '<li class="list-container__list-item">' +
                '<span class="icon-done"></span>' +
                '<span class="list-container__item-text">' + item +'</span>' +
                '<span class="icon-close"></span>' +
                '</li>';
    
        $(".list-container__normal").append(html);
    }
    
}

function create() {
    var o = {"name":"Bond"};
    $.ajax({
        type: "POST",
        url: 'http://localhost:5984/todo-list/_design/view2/_view/new-view?limit=20&reduce=false',
        contentType: "application/json",
        data: JSON.stringify(o),
        dataType: "json",
        success: function(data) {
            console.log(data.id + " created !");
        }
    });
}