const viewRecords = [ 
    { 
      id: 1, 
      name: "山田", 
      age: 23,
      postcode: "0620055",
      address:"北海道札幌市",
      averageScore:81.1, 
    }, 
    { 
        id: 1, 
        name: "田中", 
        age: 18,
        postcode: "0590465",
        address:"北海道登別市",
        averageScore:71,
    },  
] 

  /** 
   * ウィンドウ読み込み時の処理 
   */ 
  window.onload = () => {
    const sample3Body = document.getElementById("9-8-1");
    sample3Body.innerHTML = "";
    for (const record of viewRecords) {
        const tr = document.createElement("tr");
        sample3Body.appendChild(tr);

        const idTd = document.createElement("td");
        idTd.appendChild(document.createTextNode(record.id));
        tr.appendChild(idTd);

        const nameTd = document.createElement("td");
        nameTd.appendChild(document.createTextNode(record.name));
        tr.appendChild(nameTd);

        const ageTd = document.createElement("td");
        ageTd.appendChild(document.createTextNode(record.age));
        tr.appendChild(ageTd);

        const postcodeTd = document.createElement("td");
        postcodeTd.appendChild(document.createTextNode(record.postcode));
        tr.appendChild(postcodeTd);

        const addressTd = document.createElement("td");
        addressTd.appendChild(document.createTextNode(record.address));
        tr.appendChild(addressTd);

        const averageScoreTd = document.createElement("td");
        averageScoreTd.appendChild(document.createTextNode(record.averageScore));
        tr.appendChild(averageScoreTd);
    } 
} 