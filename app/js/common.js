$(document).ready(function () {
    $('.burger').click(function () {
        $('.burger span').toggleClass('active');
        $('.burger').toggleClass('active');
        $('body').toggleClass('open');
        $('.sidebar').toggleClass('open');
        // $('.menu').toggleClass('act');
    });

    $('.mob-bg-close').click(function () {
        $('body').removeClass('open');
        $('.sidebar').removeClass('open');
        $('.burger span').removeClass('active');
        $('.burger').removeClass('active');
    });

    $('#user_phone').mask("+7(999)999-99-99");
    $('#callback_user_phone').mask("+7(999)999-99-99");

    let fakeAPI = 'https://jsonplaceholder.typicode.com/posts';
    let dataRequiredMessage = $('#contentForm').attr('data-required');
    $('#contentForm').validate({
        rules: {
            user_name: {
                required: true,
            },
            user_phone: {
                required: true
            }
        },
        messages: {
            user_name: {
                required: dataRequiredMessage
            },
            user_phone: {
                required: dataRequiredMessage
            }
        },
        submitHandler: function (form) {
            let formData = new FormData($(form)[0]);
            $.ajax({
                type: 'POST',
                url: fakeAPI,
                contentType: false,
                processData: false,
                data: formData
            })
                .done(function (response) {
                    $('#contentForm').trigger('reset');
                    console.log('send')
                    alert('Заявка отправлена! Наши менеджеры свяжутся с Вами в ближайшее время.')
                })
                .fail(function (response) {
                    alert('Server is not responding. Try again later');
                });
            return false;
        },
        // add error from parents block
        highlight: function (element, errorClass, validClass) {
            $(element).parent().addClass('error').removeClass('valid');
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).parent().addClass('valid').removeClass('error');
        }
    });

    $('.menu li').click(function () {
        $('.menu li').removeClass('active');
        $(this).addClass('active');
    });

    $('.sidebar-callback a, .main-btn a').click(function () {
        $('.hidden').fadeIn(100);
        $('body').toggleClass('open');
        $('.sidebar').removeClass('open');
        $('.burger').removeClass('active');
        $('.burger span').removeClass('active');
    });

    $('.popup-bg').click(function () {
        $('.hidden').fadeOut(100);
        $('body').removeClass('open');
        $('.callbackForm-input').removeClass('error');
        $('.callbackForm-input label').hide()
    });

    $('.popup-close').click(function () {
        $('.hidden').fadeOut(100);
        $('body').removeClass('open');
        $('.callbackForm-input').removeClass('error');
        $('.callbackForm-input label').hide()
    });

    let dataRequiredCallback = $('#callbackForm').attr('data-required');
    $('#callbackForm').validate({
        rules: {
            callback_user_name: {
                required: true,
            },
            callback_user_phone: {
                required: true
            }
        },
        messages: {
            callback_user_name: {
                required: dataRequiredCallback
            },
            callback_user_phone: {
                required: dataRequiredCallback
            }
        },
        submitHandler: function (form) {
            let formData = new FormData($(form)[0]);
            $.ajax({
                type: 'POST',
                url: fakeAPI,
                contentType: false,
                processData: false,
                data: formData
            })
                .done(function (response) {
                    $('#callbackForm').trigger('reset');
                    console.log('send')
                    $('.hidden').fadeOut(100);
                    $('body').removeClass('open');
                    $('.callbackForm-input').removeClass('error');
                    $('.callbackForm-input label').hide();
                    alert('Заявка отправлена! Наши менеджеры свяжутся с Вами в ближайшее время.')
                })
                .fail(function (response) {
                    alert('Server is not responding. Try again later');
                });
            return false;
        },
        // add error from parents block
        highlight: function (element, errorClass, validClass) {
            $(element).parent().addClass('error').removeClass('valid');
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).parent().addClass('valid').removeClass('error');
        }
    });
});

