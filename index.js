function Curl(url){
        $.ajax({
            url: "../sc.php?sc="+url,
            cache: false,
            success: function(html){
                $(".sc").html(html);
            }
            
        });
    }     
    console.log(url)

        

//random
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    }
          