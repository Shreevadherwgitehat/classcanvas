NOTS = [];
function submit()
{
    var name_1 = document.getElementById("NOTS1").value;
    var name_2 = document.getElementById("NOTS2").value;
    var name_3 = document.getElementById("NOTS3").value;
    var name_4 = document.getElementById("NOTS4").value;

    NOTS.push(name_1);
    NOTS.push(name_2);
    NOTS.push(name_3);
    NOTS.push(name_4);

    document.getElementById("display_name").innerHTML=NOTS;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting()
{
    NOTS.sort();
    console.log(NOTS);
    document.getElementById("display_name").innerHTML=NOTS;
}
