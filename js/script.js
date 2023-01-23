var importantIcon = "fa-solid fa-thumbs-up important";
var nonImportantIcon = "fa-solid fa-thumbs-down";
var isImportant = false;


// the Thumbs up and down icon
function toggleImportant() {
	// console.log('Ive been Clicked');

	if (isImportant) {
		$("#iImportant").removeClass(importantIcon).addClass(nonImportantIcon);
		isImportant = true;

	}
	else { //change importance
		$("#iImportant").removeClass(nonImportantIcon).addClass(importantIcon);
		isImportant = true;

	}

}

function toggleForm() {
	console.log('Ive been toggled');

	$(".input-container").toggle();
}

function saveData() {
	// get values from the form
	console.log('Ive been Saved');
	let title = $("#txtTaskTitle").val();
	let taskdue = $("#txtTaskDue").val();
	let tasktype = $("#txtTaskType").val();
	let contact = $("#txtContact").val();
	let status = $("#txtStatus").val();
	let area = $("#txtArea").val();

	let taskInput = new Task(title, taskdue, tasktype, contact, status, area, isImportant);
	displayTask(taskInput);
}

// append to the html element
function displayTask(taskInput) {

	let syntax = `<div class="task">

	  <div class="row1"><h3>${taskInput.title}</h3>	
	<p>${taskInput.taskdue}</p></div>

		<div class="row2"><p>${taskInput.tasktype}</p>
	<p>${taskInput.contact}</p></div>

		<div class="row3"><p>${taskInput.status}</p>
	<p>${taskInput.area}</p></div>

		<div class="row4" ><label>${taskInput.contact}</label>
	<label>${taskInput.status}</label></div>

	</div>`;

	$(".list-container").append(syntax);

}


// nav bar toggle at break point
$(".navi-toggle-btn").click(function () {
	$(this).toggleClass("fa-times");
	$(".navi-menu").toggleClass("active");
});
// navi bar stuff


function init() {

	$("#iImportant").click(toggleImportant);
	$("#btnHideForm").click(toggleForm);
	$("#btnSave").click(saveData);


}













window.onload = init;













/* <i class="fa-solid fa-thumbs-up"></i>

<i class="fa-solid fa-thumbs-down"></i> */

