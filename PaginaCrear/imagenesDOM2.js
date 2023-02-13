doc = document.getElementById("form_imagen2");
sacar= "https://drive.google.com/file/d/1OL_OwpoNeE0J_UHjYVxEjXI134dAM6Ap/view?usp=sharing";
contador=0;
url="";
for(let i=0;i<sacar.length;i++){
    if(sacar[i]=="/"){
        contador++;
    }
    if(contador==5){
        url+=sacar[i];
    }
}
url=url.replace("/","");
console.log(url);
doc.src=`https://drive.google.com/uc?export=view&id=${url}`;
