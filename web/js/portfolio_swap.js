$("#works-menu").click(function(){
            $("#design-work").toggle();
            $("#writing-work").toggle();
                if ( $('#design-work').css('display') == 'block' ) { 
                    $("#show_Design").css("background-color","#e9625b").css("color", "white");
                    $("#show_Writing").css("background-color","white").css("color", "#e9625b");
                }       
                else {
                    $("#show_Writing").css("background-color","#e9625b").css("color", "white");
                    $("#show_Design").css("background-color","white").css("color", "#e9625b");
                }
        });