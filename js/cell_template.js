var name = document.getElementById("L3_title").innerHTML;
document.getElementById("Symbol").innerHTML=name
$.ajax({
    type: "Get",
    url: "../data/cells.json",
    dataType: "json",
    success: function(data) {
        var array=data["data"];
        for(var i=0; i<array.length; i++){
            if(array[i]["symbol"] == name){
                document.getElementById("Cell_Count").innerHTML=array[i]["cellcount"]
                document.getElementById("Peaks").innerHTML=array[i]["peaks"]
            } 
        }
    },
    error: function(){
        alert("json not found");
    }
});