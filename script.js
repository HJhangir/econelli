var time = 150;
$('div').each(function() {
  var i = 1,
    num = $(this).data('num1'),
    step = 53 * time / num,
    that = $(this),
    int = setInterval(function() {
      if (i <= num) {
        that.html(i+' +');
      } else {
        clearInterval(int);
      }
      i++;
    }, step);
});
var time = 150;
$('div').each(function() {
  var i = 1,
    num = $(this).data('num2'),
    step = 41 * time / num,
    that = $(this),
    int = setInterval(function() {
      if (i <= num) {
        that.html(i+' +');
      } else {
        clearInterval(int);
      }
      i++;
    }, step);
});