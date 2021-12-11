
$(document).ready(function() {
    $("#search-form").submit(function(e) {
        e.preventDefault();

        let keyword = $("#search-keyword").val();

        k.post('ImageSearch', {'keyword':keyword}, null, [], function(r) {
            r.data.forEach(function(row) {
                $("#search-result").append('<img class="p-2" src="'+row+'" />');
            });
        }, function(r) {
            if (r.responseJSON) {
                alert(r.responseJSON.error);
            } else {
                alert(r);
            }
        });
    });
});