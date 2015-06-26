$(document).foundation();

(function() {
  var Modal = {
    id: function(modalId) {
      return '#' + modalId;
    },
    position: function(modalId) {
      // Get left position for modal
      var mWidth = $(Modal.id(modalId)).outerWidth(),
         vpWidth = $(window).width();
      return vpWidth / 2 - mWidth / 2;
    },
    overlay: function() {
      // Show overlay
      $('.modal-overlay').fadeIn(300).css({
        'position' : 'fixed',
        'left' : 0,
        'right' : 0,
        'top' : 0,
        'bottom' : 0
      });
    },
    show: function(modalId) {
      // Show modal
      $(Modal.id(modalId)).addClass('displayed').fadeIn(500).css({
        'position' : 'fixed',
        'left' : Modal.position(modalId) + 'px',
        'top' : '139px',
        'opacity' : 1,
        'z-index' : 9999
      });
    },
    updatePosition: function() {
      // Update the modal's left position
      var vpWidth = $(window).width(),
             lPos = $(window).width() / 2 - $('.modal.displayed').outerWidth() / 2;
      $('.modal.displayed').css('left', lPos + 'px');
    },
    close: function() {
      // Close modal
      $('.modal, .modal-overlay').fadeOut(300);
      $('.modal.displayed').removeClass('displayed');
    }
  };
  window.Modal = Modal;
})();

$('a[data-modal]').click(function() {
  var dataModalValue = $(this).attr('data-modal');
  Modal.show(dataModalValue);
  Modal.overlay();
});
$('.modal a.close').click(Modal.close);
$(window).resize(Modal.updatePosition);


(function(){
  var rates = {
    "count":5,
    "records":[{
      "name":"Big Guy Financial",
      "apy":"0.75",
      "earnings":"376.41"
    },{
      "name":"URBank",
      "apy":"0.87",
      "earnings":"436.89"
    },{
      "name":"Dewey, Cheatam & Howe",
      "apy":"0.01",
      "earnings":"5.00"
    },{
      "name":"First Onion",
      "apy":"0.01",
      "earnings":"5.00"
    },{
      "name":"Bank of Everywhere",
      "apy":"0.01",
      "earnings":"5.00"
    }]
  }
  // 1. Grab data
  function() {
    var i;
    
  };
  
  // 2. migrate each record to a row
  $('#urbank-rates tbody').append(function(){
    ('<tr>');
  });
})();