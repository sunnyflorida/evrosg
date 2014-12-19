 $(document).ready(function(){ 
    $(".building_hover").hide();
    $(".metal_hover").hide();
    $(".iron_hover").hide();

    $('.strojka').on('mouseover',function(){
    $('.building_hover').show();
    });
    $('.strojka').on('mouseout',function(){
      $('.building_hover').hide();
    });
    $('.building_hover').on('mouseover',function(){
      $('.building_hover').show();
      $('.strojka').addClass('active');
    });
    $('.building_hover').on('mouseout',function(){
      $('.building_hover').hide();
      $('.strojka').removeClass('active');
    });
    $('.strojka').on('click',function(){
      $('.building_hover').toggle()
    });


     $('.metal').on('mouseover',function(){
    $('.metal_hover').show();
    });
    $('.metal').on('mouseout',function(){
      $('.metal_hover').hide();
    });
    $('.metal_hover').on('mouseover',function(){
      $('.metal_hover').show();
      $('.metal').addClass('active');
    });
    $('.metal_hover').on('mouseout',function(){
      $('.metal_hover').hide();
      $('.metal').removeClass('active');
    });
    $('.metal').on('click',function(){
      $('.metal_hover').toggle()
    });


     $('.iron').on('mouseover',function(){
    $('.iron_hover').show();
    });
    $('.iron').on('mouseout',function(){
      $('.iron_hover').hide();
    });
    $('.iron_hover').on('mouseover',function(){
      $('.iron_hover').show();
      $('.iron').addClass('active');
    });
    $('.iron_hover').on('mouseout',function(){
      $('.iron_hover').hide();
      $('.iron').removeClass('active');
    });
    $('.iron').on('click',function(){
      $('.iron_hover').toggle()
    });

});
