// This is what changes body from hidden
(function($) {

  $(document.body).fadeIn(1250);

})(jQuery);
$(document).ready(function() {
   
    $('a[href=#top]').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });

    $.getJSON( "assets/js/elements.json", function( data ) {
        
        var t1 = new Timeline($('#timeline'), data["experience"]);
        t1.setOptions({
            animation:   true,
            lightbox:    true,
            showYear:    true,
            allowDelete: false,
            columnMode:  'right',
            order:       'desc',
            max:         null
        });
        t1.display();
        
        var projects = data["projects"];
        var t2 = new Timeline($('#timeline-projects'), projects);
        
        t2.setOptions({
            animation:   true,
            lightbox:    true,
            showYear:    true,
            allowDelete: false,
            columnMode:  'left',
            order:       'desc',
            max:         null
        });
        
        t2.display();
        
        for (var i=0; i<projects.length; i++) {
            var tags = new Array();
            if ("tags" in projects[i]) {
                for(var j=0; j<projects[i]["tags"].length; j++){
                    tags.push('<li><span class="tag">'+projects[i]["tags"][j]+'</span></li>');
                }
                $( "#proj"+ projects[i]["id"]).append(tags.join("\n"));
            }
        }
    });

});