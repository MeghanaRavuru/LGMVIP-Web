var i =0;
$("h2").hide();
function fun() {
    var s = $("#task").val();
    i = i+1;
    if(i===1){
        $("h2").show();
    }
    var k='<div class="t t'+`${i}`+'"><div class="o te ts'+{i}+'"><span class="sp'+`${i}`+'">'+`${i}`+' '+`${s}`+'</span></div><div class="o do y" id="d'+`${i}`+'">Done</div><div class="o r y" id="r'+`${i}`+'">Remove</div></div>';
    console.log(k);
    $(".tasks").append(k);

    $(".r").click(function(){
        var d = $(this).attr('id');
        $(".t"+d[1]).hide();
       
    })

    $(".do").click(function () {
        var d = $(this).attr('id');
        $(".sp"+d[1]).css('text-decoration','line-through');
    })
    $("#f").trigger('reset');
}
