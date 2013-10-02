function loadXMLDoc(dname)
{
	if (window.XMLHttpRequest)
    {
      xhttp=new XMLHttpRequest();
    }
    
    xhttp.open("GET",dname,false);
	  xhttp.send();
	  return xhttp.responseXML;
}

		
function GetXML(qry){
	
	var xmlDoc=loadXMLDoc("fusion_glossary.xml");
  var title=xmlDoc.getElementsByTagName('title');
 	var def=xmlDoc.getElementsByTagName('meaning');
  var text =  '<dl>';
  var j = 0;
  
  qry = qry.toLowerCase();
 	
 	for (i=0;i<title.length;i++){
 	    var val = title[i].childNodes[0].nodeValue.toLowerCase()
      if (val.match(qry)){
        text = text + 
   	  	"<dt>" + title[i].childNodes[0].nodeValue + "</dt>"
   	  	+ "<dd>" + def[i].childNodes[0].nodeValue + "</dd>";
        j++;  
      } 
       
  }
  
  if (qry.length<1){
    text = "<p>You searched for all terms." 
           + " " + j + " terms returned.</p>" + text + "</dl>";}
  else{
    text = "<p>You searched for <b>" + qry + ".</b>" 
           + " " + j + " term(s) returned.</p>" + text + "</dl>";
  }

 	return text;
 
 }

 