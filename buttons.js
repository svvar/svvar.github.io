console.log('111111111');

document.querySelectorAll('category-button1111').forEach(function(e) {
    console.log(e);
    e.addEventListener('click', function() {
      this.style.backgroundColor = "red";
    })
});

function submitButtonStyle(_this) {
    _this.style.backgroundColor = "red";
}