   $(".shopcar").click(function () {
      $(".asideMenu").toggleClass("active");
    });


  $(".search").click(function(){
    var locationVal =$('#location').val();
    if(locationVal=='locationno'){
      alert('請選擇一項展覽！');
    }else{
    $(".black").show();
    $(".top").show(5);

    var data=$("#show option:selected")
    $(".modal-header").html(data.val());
    for(var  i = 0; i < newAdd.length; i++){
      if (newAdd[i].title==data.val()){
        $(".intro-con").html(newAdd[i].descriptionFilterHtml)
        $(".data-con").html(newAdd[i].startDate+"-"+newAdd[i].endDate)
        $(".place-con").html(newAdd[i].showInfo[0].locationName)
        $(".price-con").html(newAdd[i].showInfo[0].price)
      }
    }
  
  }
  })





  $(".black").click(function(){
    $(".black").hide();
    $(".top").hide(5);
  })

  $('.count-btn').click(function(){
    var btnType = $(this).attr('data');
    var inputVal = $('#addResult').val();
    if(btnType=='add'&&inputVal<99){
        $('#addResult').val(parseInt(inputVal)+1);
    }else if(btnType=='minus'&&inputVal>1){
        $('#addResult').val(parseInt(inputVal)-1);
    }
  })
  
  $('#buy').click(function(){
    var locationVal=$('#location').val();
    var showVal=$('#show').val();
    var buyVal=$('#addResult').val();
    var temp='<div class="ticout"><img class="tic" src="/img/ticket.png"><div class="ticket"><p class="showval">'+showVal+'</p><p class="buyval">'+buyVal+'    票</p><span class="material-symbols-outlined" >delete</span></div></div>';
    $('.appendArea').append(temp);
    $(".black").hide();
    $(".top").hide(5);
  })

  $(document).on('click','.material-symbols-outlined',function(){
    $(this).parents('.ticout').html('');
})

$(document).on('click','.deleteall',function(){
  $('.appendArea').remove();
})
