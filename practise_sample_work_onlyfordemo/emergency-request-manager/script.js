let emergencyRequests=JSON.parse(localStorage.getItem('emergencyRequests'))||[];

function saveData(){
localStorage.setItem('emergencyRequests',JSON.stringify(emergencyRequests));
}

function displayRequests(){
const list=document.getElementById('requestList');
list.innerHTML='';
emergencyRequests.forEach((r,i)=>{
list.innerHTML+=`
<div class="card">
<b>Request ID:</b> ${r.requestId}<br>
<b>Patient Name:</b> ${r.patientName}<br>
<b>Age:</b> ${r.age}<br>
<b>Blood Group:</b> ${r.bloodGroup}<br>
<b>Contact:</b> ${r.contactNumber}<br>
<b>Emergency Type:</b> ${r.emergencyType}<br>
<b>Priority:</b> ${r.priority}<br>
<b>Pickup Location:</b> ${r.pickupLocation}<br>
<b>Assigned Ambulance:</b> ${r.assignedAmbulance}<br>
<b>Assigned Hospital:</b> ${r.assignedHospital}<br>
<b>Status:</b> <span class="${r.status==='Completed'?'completed':''}">${r.status}</span><br><br>
<button onclick="completeRequest(${i})">Complete</button>
<button onclick="deleteRequest(${i})">Delete</button>
</div>`;
});
}

function addRequest(){
const patientName=document.getElementById('patientName').value.trim();
const age=document.getElementById('age').value;
const bloodGroup=document.getElementById('bloodGroup').value.trim();
const contactNumber=document.getElementById('contactNumber').value.trim();
const emergencyType=document.getElementById('emergencyType').value;
const priority=document.getElementById('priority').value;
const pickupLocation=document.getElementById('pickupLocation').value.trim();
const assignedAmbulance=document.getElementById('assignedAmbulance').value;
const assignedHospital=document.getElementById('assignedHospital').value;

if(!patientName||!age||!bloodGroup||!contactNumber||!pickupLocation){
alert('Please fill all required fields.');
return;
}

emergencyRequests.push({
requestId:Date.now(),
patientName,
age:Number(age),
bloodGroup,
contactNumber,
emergencyType,
priority,
pickupLocation,
assignedAmbulance,
assignedHospital,
status:'Pending'
});

saveData();
displayRequests();
document.querySelectorAll('input').forEach(e=>e.value='');
document.getElementById('emergencyType').selectedIndex=0;
document.getElementById('priority').selectedIndex=0;
document.getElementById('assignedAmbulance').selectedIndex=0;
document.getElementById('assignedHospital').selectedIndex=0;
}

function completeRequest(i){
emergencyRequests[i].status='Completed';
saveData();
displayRequests();
}

function deleteRequest(i){
emergencyRequests.splice(i,1);
saveData();
displayRequests();
}

displayRequests();
