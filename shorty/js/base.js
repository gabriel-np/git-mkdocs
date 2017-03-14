/* Highlight */
$( document ).ready(function() {
    hljs.initHighlightingOnLoad();
    $('table').addClass('table table-striped table-hover');
});

/* Prevent disabled links from causing a page reload */
$("li.disabled a").click(function() {
    event.preventDefault();
});

/* w3-css */
$( document ).ready(function() {
  $('code').addClass('w3-code');
  $('img').addClass('w3-image');
  $('table').addClass('w3-table');
  $('ul').addClass('w3-ul');
  $('ol').addClass('w3-ol');
  $('form').addClass('w3-form');
  $('input').addClass('w3-input');
});