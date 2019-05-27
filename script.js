var namesArray = ["Elber", "Adrien", "Frederick", "Bernard", "Quirien"]; 
var entries = [];
var entriesOutput = [];

for (x=0; x<namesArray.length; x++){
    entries.push("<li>"+namesArray[x]+"</li>");
    console.log(entries);
    document.getElementsByClassName("entryList")[0].innerHTML = entries;
}

function sortFunction(){                            

    namesArray.sort();                            // function to sort entries               
    console.log(namesArray);

    for (y=0; y<namesArray.length; y++){
        entriesOutput.push("<li>"+namesArray[y]+"</li>")
        console.log(entriesOutput);
        document.getElementsByClassName("outputList")[0].innerHTML = entriesOutput;
    }
}
