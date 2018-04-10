
var data={"list":[{"name":"张三","age":20},{"name":"李四","age":21}]};  
var options={  
    url:'listperson.ejs'  
}

var html=new EJS(options).render(data);  
document.getElementById("test").innerHTML=html; 

  <!-- <h1><%= title %></h1>   -->
  <!-- <ul>  
     <%items.forEach(function(item){%>  
       <li><%=item.name%></li>  
       <%})%>  
  </ul> --> 