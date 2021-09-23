
// Get modal element
const modal = document.querySelectorAll("[id=simpleModal]");
// Get open modal button
const modalBtn = document.querySelectorAll("[id=modalBtn]");
// Get close button
const closeBtn = document.getElementsByClassName("closeBtn");

// Listen for open click
modalBtn.forEach((ele, idx) => {
	ele.addEventListener("click", function () {
		openModal(modal[idx]);
	});
});

[...closeBtn].forEach((ele, idx) => {
	ele.addEventListener("click", function () {
		closeModal(modal[idx]);
	});
});

window.addEventListener("click", outsideClick);

// Open modal
function openModal(ele) {
	ele.style.display = "block";
}

// Close modal
function closeModal(ele) {
	ele.style.display = "none";
}

// Click outside and close
function outsideClick(e) {
	modal.forEach((ele, idx) => {
		if (e.target == ele) {
			ele.style.display = "none";
		}
	});
}
