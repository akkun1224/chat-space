$(function(){
  function buildHTML(message){
    image = ( message.image ) ? `<img class= "lower-message__image" src=${message.image} > </img>` : "";
      var html = 
        `<div class="main--space">
          <div class="main--space__box">
            <div class="main--space__box__user">
              ${message.user_name}
            </div>
            <div class="main--space__box__time">
              ${message.date}
            </div>
          </div>
          <div class="main--space__box__message">
            <p class="lower-message__content">
              ${message.content}
            </p>
          </div>
        ${image}
     </div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main--spaces').append(html);
      $('.input--erea__box__comment').val('')
      $('.main--spaces').animate({ scrollTop: $('.main--spaces')[0].scrollHeight})
    })
    .fail(function(){
      alert('error');
    });
    $('submit').prop('disabled', true);
  });
})