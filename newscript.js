let data =[
    {
      "id": "1",
      "name": "Lura Senger",
      "email": "Xander_Collier@yahoo.com"
    },
    {
      "id": "2",
      "name": "Wilburn Weber",
      "email": "Bennett_Kreiger11@yahoo.com"
    },
    {
      "id": "3",
      "name": "Tyrique Hahn",
      "email": "Juston.Altenwerth@yahoo.com"
    },
    {
      "id": "4",
      "name": "Lenny Bailey",
      "email": "Guiseppe_Hegmann@yahoo.com"
    },
    {
      "id": "5",
      "name": "Vladimir Keeling",
      "email": "Louisa_Walsh18@hotmail.com"
    },
    {
      "id": "6",
      "name": "Kellie Crona",
      "email": "Chandler_Abernathy@yahoo.com"
    },
    {
      "id": "7",
      "name": "Carolina White",
      "email": "Royal50@hotmail.com"
    },
    {
      "id": "8",
      "name": "Alfredo Conn",
      "email": "Clarabelle34@hotmail.com"
    },
    {
      "id": "9",
      "name": "Stan Shanahan",
      "email": "Lamar.McClure@hotmail.com"
    },
    {
      "id": "10",
      "name": "Marvin Fay",
      "email": "Osbaldo58@hotmail.com"
    },
    {
        "id": "11",
        "name": "Torrance Rau",
        "email": "Orin45@gmail.com"
    },
    {
        "id": "12",
        "name": "Harold Gutmann MD",
        "email": "Alyce.Stracke37@yahoo.com"
    },
    {
        "id": "13",
        "name": "Taryn Torphy",
        "email": "Dean_Breitenberg71@hotmail.com"
    },
    {
        "id": "14",
        "name": "Bryana Lang",
        "email": "Tatum.Ullrich@yahoo.com"
    },
    {
        "id": "15",
        "name": "Nyasia Green DDS",
        "email": "Dino83@gmail.com"
    },
    {
        "id": "16",
        "name": "Nasir Gerhold",
        "email": "Lilian_Bashirian8@hotmail.com"
    },
    {
        "id": "17",
        "name": "Raymundo Ritchie PhD",
        "email": "Antwan.Schoen15@yahoo.com"
    },
    {
        "id": "18",
        "name": "Delmer Marvin",
        "email": "Kiera62@yahoo.com"
    },
    {
        "id": "19",
        "name": "Rachel Wilkinson",
        "email": "Foster_Conroy@gmail.com"
    },
    {
        "id": "20",
        "name": "Gladys Howell",
        "email": "Constance.Labadie10@yahoo.com"
    }
    
  ]

  window.onload=()=>{
    // page=1
    console.log("this is the load page")
    for ( let i=0 ; i<data.length; i++){
        let newtr = document.createElement("tr");
            newtr.style.border = "solid 1px black"
            newtr.innerHTML = ` <td>  ${data[i].id} </td>
                                <td> ${data[i].name} </td>                            
                                <td>${data[i].email}</td>  `
        // let newtb = document.querySelector("#table");
        tbody.appendChild(newtr);
    }
}

   // 1.create div element

  var div1 = document.createElement("div")
  div1.setAttribute("id","div1");

  // create table

  var table = document.createElement("table");
//   table.setAttribute("id","table")
  table.id = "table"
  table.style.width ="60%"
  table.style.border="solid 1px black"
  table.style.marginLeft ="auto"
  table.style.marginRight= "auto"
  table.style.marginBottom="10px"
  table.style.marginTop="50px"


  //  create table body
    var tbody = document.createElement("tbody");
    tbody.id = "tbody";

    table.appendChild(tbody)
    div1.appendChild(table)
    document.body.appendChild(div1)


//  CREATE A TABLE HEAD AND APPEND

let thead = document.createElement("thead")

thead.innerHTML = ` <tr> <td> ID  </td>
                         <td> Name </td>                            
                         <td> Email</td> 
                    </tr>`

table.appendChild(thead)


var  div2 = document.createElement("div");
// div2.setAttribute("id", "div2");
div2.id = "div2"
div2.style.textAlign ="center"


div2.innerHTML= ` <button id="first">${"first"}</button>
                  <button id="prev">${"Previous"}</button>
                  <button id="btn1">${"1"}</button>
                  <button id="btn2">${"2"}</button>
                  <button id="btn3">${"3"}</button>
                  <button id="next">${"Next"}</button>
                  <button id="Last">${"Last"}</button>`

// apped div2 element which has all button to body
document.body.appendChild(div2);

const rows = 2
let page = 0;
console.log(page)
// rounds to upper value
let totalbutton = Math.ceil(data.length/rows)
// btn==page
console.log(totalbutton)

// for first btn
let first =document.querySelector("#first")
first.addEventListener("click",()=>{
  if (page==1){
      alert("this is the first page")
  }else{
      page=1
      btn1.innerText=page
      btn2.innerText=page+1
      btn3.innerText=page+2
  }



    page=1
    tbody.innerHTML="";
    console.log(page)
      for ( let i=page*rows-rows ; i<page*rows; i++){
        let newtr = document.createElement("tr");
            newtr.style.border = "solid 1px black"
            newtr.innerHTML = ` <td>  ${data[i].id} </td>
                                <td> ${data[i].name} </td>                            
                                <td>${data[i].email}</td>  `
        // let newtb = document.querySelector("#table");
        tbody.appendChild(newtr);
  }
  btn1.focus()
})

// for btn1
let btn1 =document.querySelector("#btn1")
btn1.addEventListener("click",()=>{
  if (page==1){
      alert("this is the first page")
  }
    page=1
    tbody.innerHTML="";
    console.log(page)
      for ( let i=page*rows-rows ; i<page*rows; i++){
        let newtr = document.createElement("tr");
            newtr.style.border = "solid 1px black"
            newtr.innerHTML = ` <td>  ${data[i].id} </td>
                                <td> ${data[i].name} </td>                            
                                <td>${data[i].email}</td>  `
        // let newtb = document.querySelector("#table");
        tbody.appendChild(newtr);
  }
})

// for btn2
let btn2 =document.querySelector("#btn2")
btn2.addEventListener("click",()=>{
  if (page==2){
      alert("this is the second page")
  }
    page=2
    tbody.innerHTML="";
    console.log(page)
    for ( let i=page*rows-rows ; i<page*rows; i++){
        let newtr = document.createElement("tr");
            newtr.style.border = "solid 1px black"
            newtr.innerHTML = ` <td>  ${data[i].id} </td>
                                <td> ${data[i].name} </td>                            
                                <td>${data[i].email}</td>  `
        // let newtb = document.querySelector("#table");
        tbody.appendChild(newtr);
    }
})
// for btn3
let btn3 =document.querySelector("#btn3")
btn3.addEventListener("click",()=>{
  if (page==3){
      alert("this is the 3rd page")
  }
    page=3;
    tbody.innerHTML="";
    console.log(page)
    for ( let i=page*rows-rows ; i<page*rows; i++){
        let newtr = document.createElement("tr");
            newtr.style.border = "solid 1px black"
            newtr.innerHTML = ` <td>  ${data[i].id} </td>
                                <td> ${data[i].name} </td>                            
                                <td>${data[i].email}</td>  `
        // let newtb = document.querySelector("#table");
        tbody.appendChild(newtr);
    }
})
// last

let Last =document.querySelector("#Last")

Last.addEventListener("click",()=>{
    if(page==totalbutton){
        alert("this is the last page")
    }else{
        page=totalbutton;
        btn1.innerText=page-2
        btn2.innerText=page-1
        btn3.innerText=page;
    }
    page=totalbutton
    tbody.innerHTML="";
    console.log(page)
    for ( let i=page*rows-rows ; i<page*rows; i++){
        let newtr = document.createElement("tr");
            newtr.style.border = "solid 1px black"
            newtr.innerHTML = ` <td>  ${data[i].id} </td>
                                <td> ${data[i].name} </td>                            
                                <td>${data[i].email}</td>  `
        // let newtb = document.querySelector("#table");
        tbody.appendChild(newtr);
    }
    btn3.focus()
})

// prev btn

let prev =document.querySelector("#prev")
prev.addEventListener("click",()=>{
    if(btn1.innerText==1 && page!==1){
        page=page-1
        // console.log(page)
    }else if(btn1.innerText!==1 && page!==1){
        btn1.innerText= parseInt(btn1.innerText)-1;
        btn2.innerText= parseInt(btn2.innerText)-1;
        btn3.innerText= parseInt(btn3.innerText)-1;
        page=page-1;
    }else{
        alert("this is the first page")
    }
    

    if(page>0){
        // page=page-1;
        tbody.innerHTML="";
        console.log(page)
        for ( let i=page*rows-rows ; i<page*rows; i++){
            let newtr = document.createElement("tr");
                newtr.style.border = "solid 1px black"
                newtr.innerHTML = ` <td>  ${data[i].id} </td>
                                    <td> ${data[i].name} </td>                            
                                    <td>${data[i].email}</td>  `
            // let newtb = document.querySelector("#table");
            tbody.appendChild(newtr);
        }
    }
    if(btn1.innerText==page){
        btn1.focus()
    }else if(btn2.innerText==page){
        btn2.focus()
    }else if(btn3.innerText==page){
        btn3.focus()
    }
})
let next =document.querySelector("#next")
next.addEventListener("click",()=>{
    if(page==totalbutton && btn3.innerText==totalbutton){
        alert("this is the last page")
    }else if(btn3.innerText==totalbutton && page!==totalbutton){
        page=page+1;
    }else if( btn3.innerText!==totalbutton && page!==totalbutton){
        btn1.innerText= parseInt(btn1.innerText)+1;
        btn2.innerText= parseInt(btn2.innerText)+1;
        btn3.innerText= parseInt(btn3.innerText)+1;
        page=page+1;
    }
    
    
        
        tbody.innerHTML="";
        console.log(page)
        for ( let i=page*rows-rows ; i<page*rows; i++){
            let newtr = document.createElement("tr");
                newtr.style.border = "solid 1px black"
                newtr.innerHTML = ` <td>  ${data[i].id} </td>
                                    <td> ${data[i].name} </td>                            
                                    <td>${data[i].email}</td>  `
            // let newtb = document.querySelector("#table");
            tbody.appendChild(newtr);
        }
    if(btn1.innerText==page){
        btn1.focus()
    }else if(btn2.innerText==page){
        btn2.focus()
    }else if(btn3.innerText==page){
        btn3.focus()
    }
})
