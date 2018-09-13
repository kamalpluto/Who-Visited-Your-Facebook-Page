var pageSource = document.getElementsByTagName('html')[0].innerHTML.toString();
var ind1 = pageSource.indexOf("list:[\"");
ind1=ind1+7;
var q = pageSource.substring(ind1);
var ind2 = q.indexOf("]");
var list1 = q.substring(0,ind2);
list1 = list1.split("\",\"");
var list = list1.map(x => x.substring(0,x.length-2)); 
var xhttpq = new XMLHttpRequest();
var names = [];
xhttpq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var str = this.responseText.toString(); 
      var index = str.indexOf(":\"Person\",\"name\":"); 
      if(index==-1) return;
      index = index+18; str = str.substring(index); 
      var lastest = str.indexOf("\""); 
      str = str.substring(0,lastest);
      console.log(str); 
      names.push(str);
      var string = list.shift(); 
      if(string){
      string = string +"/about/"; 
      xhttpq.open("GET", string, true); 
      xhttpq.send();
      }
   }
};
 
var string = list.shift(); 
string = string +"/about/"; 
xhttpq.open("GET", string, true); 
xhttpq.send();