
    let xhr = new XMLHttpRequest;

    xhr.open('GET','https://thatsthespir.it/api',true)

    xhr.onload = function(){
        if(this.status === 200){
            let result = (JSON.parse(this.responseText));
            let saying = result.quote;
            let writer = result.author;
            let picture = result.photo;
            
            document.getElementById("quote").innerHTML = saying;
            document.getElementById("author").innerHTML = writer;
            document.getElementById("photo").src= picture;
        }
        else{
            alert("ERROR : no results found ");
        }
    }
    xhr.send();
