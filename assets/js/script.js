

let showForm = document.getElementById('showForm');
showForm.addEventListener('click', function(){
    showListForm();
});

function showListForm(){
    let showForms = document.getElementById('add-new');
    showForms.classList.toggle('d-none');
}

let submits = document.getElementById('myForm');
submits.addEventListener('submit', function(e){
        e.preventDefault();
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        let address = document.getElementById('address').value;
        let allLocal = JSON.parse(localStorage.getItem('allLocal')) || [];
        let data = {
            name: name,
            email: email,
            phone: phone,
            address: address
        };
        allLocal.push(data);
        let dataStr = JSON.stringify(allLocal);

        localStorage.setItem('allLocal', dataStr);
        showListForm();
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('address').value = '';
        document.getElementById('msg').innerHTML = 'Successfully Added';
        displayRecord();
    }
);

function displayRecord(){
    let allLocal = JSON.parse(localStorage.getItem('allLocal')) || [];
    let html = '';
    allLocal.forEach(function(item, index){
        html += `<tr>
                    <td>${item.name}</td>
                    <td>${item.email}</td>
                    <td>${item.phone}</td>
                    <td>${item.address}</td>
                    <td><button class="btn btn-success btn-sm" onclick="editRecord(${index})">Edit</button> <button class="btn btn-danger btn-sm" onclick="deleteRecord(${index})">Delete</button></td>
                </tr>`;
    }
    );
    document.getElementById('tbody').innerHTML = html;
}
displayRecord();
function deleteRecord(id){
    let allLocal = JSON.parse(localStorage.getItem('allLocal')) || [];
    
    allLocal.forEach(function(item, index){
        if(index === id){ 
           allLocal.splice(index, 1);
        }
    }); 
    let dataStr = JSON.stringify(allLocal);
    localStorage.setItem('allLocal', dataStr);
    displayRecord();
}
function editRecord(id){
    let allLocal = JSON.parse(localStorage.getItem('allLocal')) || [];
    allLocal.forEach(function(item, index){
        if(index === id){
           let name = document.querySelector('#editRecords');
                name.classList.remove('d-none');
              //  name[id].innerHTML = '' 
            document.getElementById('idUp').value = id;
            document.getElementById('nameUp').value = item.name;
            document.getElementById('emailUp').value = item.email;
            document.getElementById('phoneUp').value = item.phone;
            document.getElementById('addressUp').value = item.address;
           // document.getElementById('msg').innerHTML = 'Edit Successfully';
        }
    }
    );
}


let editRecordForm = document.getElementById('editRecordForm');
editRecordForm.addEventListener('submit', function(e){
    e.preventDefault();
    let id = parseInt(document.getElementById('idUp').value);
    let name = document.getElementById('nameUp').value;
    let email = document.getElementById('emailUp').value;
    let phone = document.getElementById('phoneUp').value;
    let address = document.getElementById('addressUp').value;
   
    let allLocal = JSON.parse(localStorage.getItem('allLocal')) || [];
    allLocal.forEach(function(item, index){
        if(index == id){ 
            // remove old data with new data
            item.name = name;
            item.email = email;
            item.phone = phone;
            item.address = address;
        }
    }
    );
    let dataStr = JSON.stringify(allLocal);
    localStorage.setItem('allLocal', dataStr);
    displayRecord();
        name = '';
        email = '';
        phone = '';
        address = '';
    document.getElementById('msg').innerHTML = 'Edit Successfully';
    // hide the edit record Row
    document.querySelector('#editRecords').classList.add('d-none');
}
);
    
    
    
     
 
 


/* Function To Change Mode */
let modeSwitch = document.getElementById('modeSwitch');
modeSwitch.addEventListener('click', function(){
    let darkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
    let modeSwitchButton = document.getElementById('modeSwitch');
    if(darkMode == true){   
        localStorage.setItem('darkMode', false);
        checkMode();
    }else{ 
        localStorage.setItem('darkMode', true);
        checkMode()
    }
});

 function checkMode(){
    let darkModes = JSON.parse(localStorage.getItem('darkMode')) || false;
    let modeSwitchButton = document.getElementById('modeSwitch');
    if(darkModes == true){
        modeSwitchButton.setAttribute('checked', 'checked'); 
        document.body.classList.add('dark-mode');
    }else{
        modeSwitchButton.removeAttribute('checked');
        document.body.classList.remove('dark-mode');
    }
}
checkMode(); 

 /* END Function To Change Mode */