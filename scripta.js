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
    }
    
  ]


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



//  To Iterate the data index

for ( let i=0 ; i<data.length; i++){



    let newtr = document.createElement("tr");
        newtr.style.border = "solid 1px black"
        newtr.innerHTML = ` <td>  ${data[i].id} </td>
                            <td> ${data[i].name} </td>                            
                            <td>${data[i].email}</td>  `

    // let newtb = document.querySelector("#table");

    table.appendChild(newtr);


}




// div1.appendChild(newtb);

// / second div element

var  div2 = document.createElement("div");
// div2.setAttribute("id", "div2");
div2.id = "div2"
div2.style.textAlign ="center"


div2.innerHTML= ` <button id="first">${"first"}</button>
                  <button>${"Previous"}</button>
                  <button id="page1">${"1"}</button>
                  <button id="page2">${"2"}</button>
                  <button id="page3">${"3"}</button>
                  <button id="page4">${"4"}</button>
                  <button id="page5">${"5"}</button>
                  <button>${"Next"}</button>
                  <button id="Last">${"Last"}</button>`

// apped div2 element which has all button to body
document.body.appendChild(div2);


//   how to set attribute inside template literals 
//   write logic to buttons and


//  keep JS ONLY FOR LOGIC ---> TAKE FROM SHYAM
//  Use css for stying and not in js helps to keep the logic part clean


// let total_rows = 2
// let page = 0;

// let totalbutton = Math.ceil(data.length/total_rows)

// console.log(totalbutton)




let first =document.querySelector("#first")

first.addEventListener("click",()=>{
  alert("you are in first page")
})




let Last =document.querySelector("#Last")

Last.addEventListener("click",()=>{
  
  alert("you are in Last page")
})





let page1 =document.querySelector("#page1")

page1.addEventListener("click",()=>{
  


})

// let totalpages = Math.ceil(data.length/)
