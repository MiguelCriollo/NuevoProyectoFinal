let doc = document.getElementById("form_imagen1");
let sacar= 'https://drive.google.com/file/d/1Lr4Vm_tVBCgyLhFlUbPo5HloktZBxxrn/view?usp=sharing';
let contador=0;
let url="";
for(let i=0;i<sacar.length;i++){
    if(sacar[i]=="/"){
        contador++;
    }
    if(contador==5){
        url+=sacar[i];
    }
}
url=url.replace("/","");
doc.src=`https://drive.google.com/uc?export=view&id=${url}`;