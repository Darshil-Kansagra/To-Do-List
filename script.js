var btn = document.getElementsByTagName("button");
var itemjsonarray = [];
update();
btn[0].addEventListener("click", () => {
  var title = document.getElementById("title").value;
  var des = document.getElementById("Description").value;
  if (localStorage.getItem("itemjson") == null) {
    itemjsonarray.push([title, des]);
    localStorage.setItem("itemjson", JSON.stringify(itemjsonarray));
  } else {
    itemjsonarraystr = localStorage.getItem("itemjson");
    itemjsonarray = JSON.parse(itemjsonarraystr);
    itemjsonarray.push([title, des]);
    localStorage.setItem("itemjson", JSON.stringify(itemjsonarray));
  }
  document.getElementById("title").value = "";
  document.getElementById("Description").value = "";
  update();
});

function update() {
  var tablebody = document.getElementById("tablebody");
  var str = "";
  itemjsonarraystr = localStorage.getItem("itemjson");
  itemjsonarray = JSON.parse(itemjsonarraystr);

  if (itemjsonarray != null) {
    itemjsonarray.forEach((element, index) => {
      str += `
          <tr>
          <td>${index + 1}</td>
          <td>${element[0]}</td>
          <td>${element[1]}</td>
          <td><button type="button" class="btn btn-danger" onclick="deleted(${index})">Delete</button></td>
          </tr>
          `;
    });
  }
  tablebody.innerHTML = str;
}

function deleted(item) {
  itemjsonarraystr = localStorage.getItem("itemjson");
  itemjsonarray = JSON.parse(itemjsonarraystr);
  itemjsonarray.splice(item, 1);
  localStorage.setItem("itemjson", JSON.stringify(itemjsonarray));
  update();
}
