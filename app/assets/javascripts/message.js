$(function(){
  function buildHTML(message){
    if ( message.image ) {
    var html = 
      `<div class="main--space" data-message-id=${message.id}>
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
      <asset_path src=${message.image} >
     </div>`
    return html;
  } else {
    var html =
    `<div class="main--space" data-message-id=${message.id}>
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
     </div>`
   return html;
 };
}
  $('.new_message').on('submit', function(){
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
    $('.messages').append(html)
    $('.input--erea__box__comment').val('')
    $('.main--spaces').animate({ scrollTop: $('.main--spaces')[0].scrollHeight},'fast');
    $('form')[0].reset();
    // location.href = url + position;
  })
  .fail(function(){
    alert('error');
  });
    return false;
  });
})