  var elem = document.querySelector('.modal');
  var instance = M.Modal.init(elem, options);

  // Or with jQuery

  $(document).ready(function(){
    $('.modal').modal();
    instance.open();
    instance.close();
    instance.destroy();
  });
