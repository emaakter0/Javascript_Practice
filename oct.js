function process(){


    var person = document.getElementById("nameBox").value;
    var totalmarks = parseInt(document.getElementById("courseBox").value);

    if(totalmarks>=90){
        document.getElementById("content").innerHTML= `
      
      <h4>Hello ${person}, your Grade A</h4>`;
      }
      else if(totalmarks>=80){
        document.getElementById("content").innerHTML= `
      
      <h4>Hello ${person}, your Grade B</h4>`;
      }
      else if(totalmarks>=70){
        document.getElementById("content").innerHTML= `
      
      <h4>Hello ${person}, your Grade C</h4>`;
      }
      else{
        document.getElementById("content").innerHTML= `
      
        <h4>Hello ${person}, your Grade F</h4>`;
    }
}