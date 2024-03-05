function progressBar(per){
    if(per > 55){
        $(".progressPer").css("color", "Yellow");
    }
    per = per.toFixed(1);
    $(".progressPer").text(per+" %");
    $(".progressNow").css("width", "calc(" + per + "% - 20px)");
}

