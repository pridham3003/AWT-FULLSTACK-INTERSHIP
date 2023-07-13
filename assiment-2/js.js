$("#formvalidation").validate({
    rules:{
        name:{
            minlength: 2,
        },
        email:{
            email:true,
        },
        phone:{
            Number:true,
            minlength:10,
            maxlenght:10
        }
    },
    review: {
        
        name:{
            
             required: "Enter Your Name",
                minlength: jQuery.validator.format("Please, at least {0} characters are necessary")
            }
      },
      email:"Please Enter Your E-Mail",
      Phone:"Please Enter Your Phone",
      suject:"Please Enter Your suject",
      Review:"Please Enter Your Review",

   submitHandler: function(form) {
      form.submit();
    }
   });