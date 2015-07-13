/*
Template.register.events({
   'focus input[name=rut]': function(){
       $("input[name=rut]").attr('placeholder', '11111111-1');
   },
    'focusout input[name=rut]': function(){
        $("input[name=rut]").attr('placeholder', null);
    },
    'keyup input[name=rePassword]': function(){
        if($("input[name=rePassword]").val() != $("input[name=password]").val()){
            $("input[name=rePassword]").removeClass('valid');
            $("input[name=rePassword]").addClass('invalid');
        } else {
            $("input[name=rePassword]").removeClass('invalid');
            $("input[name=rePassword]").addClass('valid');
        }
    },
    'focusout input[name=password]' : function(){
        if($("input[name=rePassword]").val() == $("input[name=password]").val() && $("input[name=rePassword]").val() != ""){
            $("input[name=rePassword]").removeClass('invalid');
            $("input[name=rePassword]").addClass('valid');
        } else if($("input[name=rePassword]").val() != $("input[name=password]").val() && $("input[name=rePassword]").val() != ""){
            $("input[name=rePassword]").removeClass('valid');
            $("input[name=rePassword]").addClass('invalid');
        }
    },
    'focusout input[name=rePassword]' : function(){
        if($("input[name=rePassword]").val() == ""){
            $("input[name=rePassword]").removeClass('valid');
            $("input[name=rePassword]").removeClass('invalid');
        }
    },
    'submit .register-form': function(){
        event.preventDefault();
        if ($("input[name=rePassword]").val() != $("input[name=password]").val()){
            return false;
        }
        var data = {};
        $('input').each(function(){
            data[$(this).attr('name')] = $(this).val();
        });

        var userData = {};
        //userData.username = data.username;
        userData.email = data.email;
        userData.password = data.password;
        userData.profile = {
            name: data.name,
            phone: data.phone,
            rut: data.rut,
            registrationType: "user"
        };

        Accounts.createUser(userData, function(error, result){
            alert(error);
            alert(result);
        });

        /!*Meteor.call('createUserLol', userData, function(error){
            /!*if(error){
             Materialize.toast(error, 4000)
             } else {*!/
            Router.go('/ulogin')
            //}
        });*!/
    }
});

Template.register.rendered = function(){
    $("input[name=rut]").Rut({
        format_on: 'keyup',
        on_error: function(){
            $("input[name=rut]").addClass('invalid');
        }
    });
}*/
