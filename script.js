function sortFunction(){                            // function to push entries in html field to string
    var toSortString = [];
    var x = document.getElementsByClassName("entryfield")[0].innerHTML;
    // console.log(x);
    toSortString.push(x);
    console.log(toSortString);


    toSortString.sort();                            // function to sort entries               
    console.log(toSortString);


    var y = toSortString;                           // function to move sorted entries into output field
    document.getElementsByClassName("outputfield")[0].innerHTML = y;
}
