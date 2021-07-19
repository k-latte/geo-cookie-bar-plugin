(function($) {

$(window).load(function() {
    
//    display: none/block conflicted with the plugin's CSS
//    $("#cookie-law-info-bar").css("display", "none");
    
    var geoData;
    var start_time = new Date().getTime();
    $.ajax({

        url : document.location.hostname + '/wp-admin/admin-ajax.php?action=geoip_detect2_get_info_from_current_ip',
        type : 'GET',
        data: { get_param: 'value' },
        dataType:'json',
        success : function(data) {
//            console.log(data);
            geoData = data;
//            var request_time = new Date().getTime() - start_time;
            if (geoData.continent.code == 'EU') {
//                $("#cookie-law-info-bar").css("display", "block");
                $("#cookie-law-info-bar").css("visibility", "visible");
//                console.log(request_time + ' milliseconds');
            }
        },
        error : function(request,error)
        {
//            console.log("Request: "+JSON.stringify(request));
        }
    });

});

})( jQuery );
