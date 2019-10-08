let inputField = document.querySelector('input');
let bodyCss = document.body.style;
let listWrapper = document.createElement('ul');
let wrapper = document.querySelector(".wrapper");
let cssColors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];

wrapper.appendChild(listWrapper);
let errorMsg = document.createElement('textarea');
errorMsg.innerText = "Invalid color!";

inputField.addEventListener('change',function(event){
    if(document.querySelector('textarea')) {
        document.querySelector('textarea').remove();
    }
    let lowerCol = []
    lowerCol = cssColors.map(function(x){ return x.toLowerCase()})
    if(lowerCol.includes(inputField.value.toLowerCase())){
        bodyCss.backgroundColor = inputField.value;
    }else{
        wrapper.appendChild(errorMsg);
    }
})

inputField.addEventListener('keyup',function(event){
    listWrapper.innerHTML = ""
    let suggestionList = [];
    let searchTerm = inputField.value;
    suggestionList = cssColors.filter(color => color.toLowerCase().startsWith(searchTerm.toLowerCase()));
    for(i = 0; i < suggestionList.length; i++){
        let listElement = document.createElement('li')
        listElement.innerText = suggestionList[i];
        listWrapper.appendChild(listElement);
    }
})

listWrapper.addEventListener('click',function(event){
    bodyCss.backgroundColor = event.target.innerText;
})