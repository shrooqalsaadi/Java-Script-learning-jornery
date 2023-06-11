let text = document.getElementById("txt")
let messge = 'Hi I am the POEWR of SHINING' ; 
let words = messge.split("")
let index = 0;
let interval = setInterval(function()
{
    text.innerHTML+=words[index]+""
    index++
    if(index==words.length)
    {
        clearInterval(interval);
    }
},500)
