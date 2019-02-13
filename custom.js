jQuery(document).ready(function ($) {
    $("#start_chat_button").click(function () {
        parent.LC_API.open_chat_window({source: 'minimized'});
        $('#live_chat_custom_photo').css('display', 'none');
        return false
    });
    $('#live_chat_custom_photo').click(function () {
            parent.LC_API.open_chat_window({source: 'minimized'});
            $(this).css('display', 'none');
            return false
        }
    );
    var flag;
    $(".plugin").addClass("Hello");

    $('.invitation_message').on("click", function () {
        $("#live_chat_custom_photo").addClass('disp_none');
    });
    $(".menu-item").children("a").addClass('for_sub_menu');
    $("a[href]").removeClass("for_sub_menu");

    $('a.for_sub_menu').on('click', function () {
        li = $(this).parent();
        li_id = li.attr('id');
        $('.menu-item-has-children').each(function () {
            if ($(this).attr('id') == li_id) {
                sub_menu = $(this).children('.sub-menu');
                sub_menu.toggle(200);
                sub_menu.toggleClass('visible-sub');
                $('.side-menu-holder').height();
                document_heigth = $("body").innerHeight();
                sub_menu_heigth = (sub_menu.children().length + 1) * 21;
                top_value = (document_heigth - (684 + sub_menu_heigth)) / 2;
                top_value = (top_value / 4) + 50;
                if ($('.visible-sub').css('display') == 'block') {
                    $('.side-menu-holder').animate({top: top_value});
                } else {
                    $('.side-menu-holder').animate({top: 15 + '%'});
                }
            } else {
                $(this).children('.sub-menu').hide(200);
                $(this).children('.sub-menu').removeClass('visible-sub');
            }
        });
    });

    function explode() {
        $('.fixed-menu').css('visibility', 'visible');
        $('.side-menu-holder').css('visibility', 'visible');
        $('.sidebar-holder').css('visibility', 'visible');
        $('.top-bar').css('visibility', 'visible');
    }

    setTimeout(explode, 4000);
    $('#goto-step1').click(function () {
        event.preventDefault();
        $('.stepline-steps-payment').css('top', '0');
    });
    $('#goto-step2').click(function () {
        event.preventDefault();
        if ($(window).width() < 650) {
            $('.stepline-steps-payment').css('top', '-1045px');
        }
        if ($(window).width() < 500) {
            $('.stepline-steps-payment').css('top', '-955px');
        }
        else {
            $('.stepline-steps-payment').css('top', '-960px');
        }
    });
    $('#invite-friend-btn').click(function (event) {
        $('.invitation-form').toggleClass('show');
    });
    $('#skype-selector').text(cookie.get('user_skype'));
    $('select').niceSelect();
    $('#choose-contact').click(function (event) {
        if (getCookie('user_skype') != "" && !$('#change_skype').hasClass('change_my')) {
            $('#extra-mail-li').remove();
            $('#mailboxes').prepend('<input id="change_skype" class="change_my" value="' + getCookie('user_skype') + '">');
        }
        $('#change_skype').focus();
    });
    $('.choose-mailbox').click(function () {
        var new_skype = $('#change_skype').val();
        var myThemePath = getHomeUrl() + '/wp-content/themes/My_theme';
        $.ajax({
            type: "POST",
            url: myThemePath + "/part/update_user_meta.php",
            data: {
                "user_skype": new_skype,
                "user_mail": getCookie('user_mail')
            },
            success: function () {
                cookie.set('user_skype', new_skype, {path: '/'});
                $('#skype-selector').text(new_skype);
                $('#skype-selector').focus();
            }
        });
    });
    $('.step4-btn').click(function () {
        $('#place_order').click();
    });

    function getHomeUrl() {
        var href = window.location.href;
        var index = href.indexOf('/wp-admin');
        var homeUrl = href.substring(0, index);
        return homeUrl;
    }

    var myThemePath = getHomeUrl() + '/wp-content/themes/My_theme';
    $('#goto-step31').click(function () {
        $('.stepline-steps-payment').css('top', '-2000px');
    });
    $('#goto-step4').click(function () {
        $('.stepline-steps-payment').css('top', '-3000px');
    });
    $('.pay-card').click(function () {
        $('.slogan-step3').toggleClass("invisible");
        $('#card-pay').removeClass("invisible");
        $('.text-front-card').removeClass("invisible");
        $('.text-back-card').addClass("invisible");
        $('#payment_method_stripe').click();
        $('#payment_method_stripe').click();
        $('#customer_details').css('display', '');
        if (getCookie('name_user')) {
            $('#billing_first_name').val(getCookie('name_user'));
        }
        if (getCookie('billing_email')) {
            $('#billing_email').val(getCookie('billing_email'));
        }
        if (getCookie('last_name_user')) {
            $('#billing_last_name').val(getCookie('last_name_user'));
        }
    });
    $('.pay-paypal').click(function () {
        send_notification();
        if (getCookie('billing_email')) {
            $('#billing_email').val(getCookie('billing_email'));
        }
        $('#payment_method_paypal').click();
        $('#payment_method_paypal').click();
        if (getCookie('name_user')) {
            $('#billing_first_name').val(getCookie('name_user'));
        }
        if (getCookie('billing_email')) {
            $('#billing_email').val(getCookie('billing_email'));
        }
        if (getCookie('last_name_user')) {
            $('#billing_last_name').val(getCookie('last_name_user'));
        }
        $('#place_order').click();
    });
    $('.pay-coins').click(function () {
        $('.slogan-step3').toggleClass("invisible");
        $('#lepricoins-pay').toggleClass("invisible");
        $('#payment_method_cod').click();
        $('#payment_method_cod').click();
        if (getCookie('name_user')) {
            $('#billing_first_name').val(getCookie('name_user'));
        }
        if (getCookie('billing_email')) {
            $('#billing_email').val(getCookie('billing_email'));
        }
        if (getCookie('last_name_user')) {
            $('#billing_last_name').val(getCookie('last_name_user'));
        }
    });
    $('.pay-coins-card').click(function () {
        $('#payment_method_cod').click();
        $('#payment_method_cod').click();
    });
    $('#coins-block').click(function () {
        $('#card-pay').addClass("invisible");
        $('.slogan-step3').addClass("invisible");
        $('#lepricoins-pay').removeClass("invisible");
    });
    $('.select-btn').click(function () {
        $('.answer-block').toggleClass("invisible");
    });
    $('.bot-step2 .select-btn').click(function () {
        $('.bot-step2').toggleClass("active");
    });
    $('.bot-step3 .select-btn').click(function () {
        $('.bot-step3').toggleClass("active");
    });
    $('.bot-step4 .select-btn').click(function () {
        $('.bot-step4').toggleClass("active");
    });
    $('.bot-step5 .select-btn').click(function () {
        $('.bot-step5').toggleClass("active");
    });
    $('.bot-step6 .select-btn').click(function () {
        $('.bot-step6').toggleClass("active");
    });
    $('#step5-invite-friend').click(function () {
        $(this).toggleClass("inactive");
        $('#step5-info').toggleClass("invisible");
    });
    $('#bonus-btn').click(function () {
        $('#bonus-page').toggleClass("invisible");
    });

    function getCookie(name) {
        function escape(s) {
            return s.replace(/([.*+?\^${}()|\[\]\/\\])/g, '\\$1');
        }

        var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
        return match ? match[1] : null;
    }

    $("#skype-block").click(function (event) {
        $('.step1-btn').attr('disabled', "");
        $("#discord").val("");
        $("#whats-app").val("");
        $('.step1-btn').addClass('inactive');
    });
    $('#skype-block').click(function () {
        $(this).addClass("active");
        $('#discord-block').removeClass("active");
        $('#whats-app-block').removeClass("active");
        $('#step1-pay-skype').removeClass("invisible");
        $('#step1-pay-discord').addClass("invisible");
        $('#step1-pay-whats-app').addClass("invisible");
    });
    $('#skypename').on('input', function () {
        if ($(this).val().length > 3) {
            if ($("#mail").val()) {
                $('.step1-btn').removeClass('inactive');
                $('.step1-btn').removeAttr('disabled');
            }
            flag = true;
        }
        else {
            // console.log("Try again");
            $('.step1-btn').attr('disabled', "");
            $('.step1-btn').addClass('inactive');
        }
    });
    $("#discord-block").click(function (event) {
        $('.step1-btn').attr('disabled', "");
        $("#skypename").val("");
        $("#whats-app").val("");
        $('.step1-btn').addClass('inactive');

    });
    $('#discord-block').click(function () {
        $(this).addClass("active");
        $('#skype-block').removeClass("active");
        $('#whats-app-block').removeClass("active");
        $('#step1-pay-discord').removeClass("invisible");
        $('#step1-pay-skype').addClass("invisible");
        $('#step1-pay-whats-app').addClass("invisible");
    });
    $('#discord').on('input', function () {
        if ($(this).val().length > 3) {
            cookie.set('discord', this.value, {path: '/'});
            if ($("#mail").val()) {
                $('.step1-btn').removeClass('inactive');
                $('.step1-btn').removeAttr('disabled');
            }
            flag = true;
        }
        else {
            $('.step1-btn').attr('disabled', "");
            $('.step1-btn').addClass('inactive');
        }
    });
    $("#whats-app-block").click(function (event) {
        $('.step1-btn').attr('disabled', "");
        $("#skypename").val("");
        $("#discord").val("");
        $('.step1-btn').addClass('inactive');
    });
    $('#whats-app-block').click(function () {
        $(this).addClass("active");
        $('#skype-block').removeClass("active");
        $('#discord-block').removeClass("active");
        $('#step1-pay-whats-app').removeClass("invisible");
        $('#step1-pay-skype').addClass("invisible");
        $('#step1-pay-discord').addClass("invisible");
    });
    $('#whats-app').on('input', function () {
        if ($(this).val().length > 3) {
            cookie.set('whats-app', this.value, {path: '/'});
            if ($("#mail").val()) {
                $('.step1-btn').removeClass('inactive');
                $('.step1-btn').removeAttr('disabled');
            }
            flag = true;
        }
        else {
            $('.step1-btn').attr('disabled', "");
            $('.step1-btn').addClass('inactive');
        }
    });
    $('#step1-pay-mail').on('input', function () {
        var timerId = setInterval(function () {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if (pattern.test($("#mail").val()) && flag == true) {
                $("#billing_email").val($("#mail").val());
                cookie.set('billing_email', $("#mail").val(), {path: '/'});
                $('.step1-btn').removeClass('inactive');
                clearInterval(timerId);
                $('.step1-btn').removeAttr('disabled');
            }
            else {
                $('.step1-btn').attr('disabled', "");
                $('.step1-btn').addClass('inactive');
            }
        }, 500);
    });
    if ($('#mail').val() && $('#skypename').val()) {
        $('.step1-btn').removeAttr('disabled');
        $('.step1-btn').removeClass('inactive');
    }
    $('.step1-btn').click(function () {
        var first_step_skype = $("#skypename").val();
        var first_step_mail = $("#mail").val();
        var first_step_discord = $('#discord').val();
        var first_step_whats_app = $('#whats-app').val();
        if ($(window).width() < 650) {
            $('.stepline-steps-payment').css('top', '-1045px');
        }
        if ($(window).width() < 350) {
            $('.stepline-steps-payment').css('top', '-555px');
        } else {
            $('.stepline-steps-payment').css('top', '-960px');
        }
        cookie.set('user_skype', first_step_skype, {path: '/'});
        cookie.set('user_mail', first_step_mail, {path: '/'});
        cookie.set('user_discord', first_step_discord, {path: '/'});
        cookie.set('user_whats_app', first_step_whats_app, {path: '/'});
        var myThemePath = getHomeUrl() + '/wp-content/themes/My_theme';
        $.ajax({
            type: "POST",
            url: myThemePath + "/part/checkout_user_ajax_registration.php",
            data: {
                "user_skype": first_step_skype,
                "user_mail": first_step_mail,
                "user_discord": first_step_discord,
                "user_whats_app": first_step_whats_app,
            },
            success: function (data) {
                // console.log(data);
            }
        });
    });
    $('#nickname').on('input', function () {
        if ($("#nickname").val().length > 2) {
            cookie.set('user_nickname', $("#nickname").val(), {path: '/'});
        }
    });
    $('#battleTag').on('input', function () {
        if ($(this).val().length > 2) {
            cookie.set('battle_tag', $(this).val(), {path: '/'});
        }
    });
    $("input[name=faction]").on("change", function () {
        cookie.set('user_faction', this.value, {path: '/'});
    });
    $(document).on('click touchstart', '.option_server', function () {
        cookie.set('user_server', $.trim($('.select-server-btn > .current').text()), {path: '/'});
    });
    $('.step2-btn').click(function () {
        var first_step_skype = $("#skypename").val();
        var first_step_mail = $("#mail").val();
        var first_step_discord = $('#discord').val();
        var first_step_whats_app = $('#whats-app').val();
        var second_step_server = $('.step2-pay span.current').text();
        var second_step_nickname = $("#nickname").val();
        var second_step_battletag = $('#battleTag').val();
        var second_step_faction = $("input[name=faction]").val();
        var products_in_cart = $("input[name=products_in_cart]").val();
        if ($(window).width() < 650) {
            $('.stepline-steps-payment').css('top', '-2185px');
        }
        if ($(window).width() < 500) {
            $('.stepline-steps-payment').css('top', '-2015px');
        }
        if ($(window).width() < 350) {
            $('.stepline-steps-payment').css('top', '-1415px');
        }
        else {
            $('.stepline-steps-payment').css('top', '-2000px');
        }
        var myThemePath = getHomeUrl() + '/wp-content/themes/My_theme';
        $.ajax({
            type: "POST",
            url: myThemePath + "/part/update_user_meta.php",
            data: {
                "user_skype": first_step_skype,
                "user_mail": first_step_mail,
                "user_discord": first_step_discord,
                "user_whats_app": first_step_whats_app,
                "server": second_step_server,
                "user_nickname": second_step_nickname,
                "user_battletag": second_step_battletag,
                "user_faction": second_step_faction,
                "products_in_cart": products_in_cart,
            },
            success: function (data) {
                // console.log(data);
            }
        });
    });
    $('#card-MM').keyup(function () {
        if ($(this).val().length == 2) {
            if ($(this).val() <= 12 && $(this).val() >= 1) {
                $(this).removeClass('error-input');
                $(this).addClass('filled');
                let val = $(this).val();
                $("#wc_gateway_bluesnap_cc_exp_month :contains(" + val + ")").attr("selected", true);

                $('#card-YY').focus();
            }
            else {
                $(this).addClass('error-input');
            }
        }
        else {
            $(this).removeClass('filled');
        }
    });
    $('#card-YY').keyup(function () {
        if ($(this).val().length == 2) {
            if ($(this).val() >= 19 && $(this).val() <= 38) {
                $(this).removeClass('error-input');
                $(this).addClass('filled');
                let val = 20 + $(this).val();
                $("#wc_gateway_bluesnap_cc_exp_year :contains(" + val + ")").attr("selected", true);
                $("#back-card").removeClass('invisible');
                $("#front-side").parent().addClass('invisible');
                $('#csv').focus();
            }
            else {
                $(this).addClass('error-input');
            }
        }
        else {
            $(this).removeClass('filled');
        }
    });

    function revertCart() {
        if ($('#card-YY').val() && $('#card-MM').val() && $('#name_user').val() && $('#last_name_user').val()
            && $('#billing_state').val() && $('#creditCard').val()) {
        }
    }

    if ($('#name_user').val()) {
        $('#name_user').addClass('filled');
    }
    if ($('#last_name_user').val()) {
        $('#last_name_user').addClass('filled');
    }
    if ($('#billing_state').val()) {
        $('#billing_state').addClass('filled');
    }
    else if ($('.state_select > .current').text() != "Select a state…") {
        $('.state_select').addClass('filled');
        $('#billing_state').removeClass('filled');
    }
    if ($('#billing_state').length > 0 && $('#billing_country').hasClass('filled')) {
        $('#billing_country').removeClass('filled');
    }

    function chekFill() {
        var poins = 0;
        $(".creditCard").each(function (index, el) {
            if ($(this).hasClass('filled')) {
                poins = poins + 1;
            }
            if (poins == 4 && $("#check-card").prop("checked")) {
                $('.step3-btn').removeClass('inactive');
                $('.step3-btn').removeAttr('disabled');
            }
        });
    }

    $(".card-accept").click(function (event) {
        var checkBox = $("#check-card");
        if (checkBox.prop("checked")) {
            checkBox.removeAttr('checked');
        }
        else {
            checkBox.attr('checked', "checked");
        }
        chekFill();
    });
    $('#csv').keyup(function () {
        $(this).attr('maxlength', '4');
        if ($(this).val().length <= 4) {
            $(this).addClass('filled');
            $('#cvv').val($(this).val());
            chekFill();
        }
        else {
            $(this).addClass('error-input');
            $('.step3-btn').addClass('inactive');
            $('.step3-btn').attr('disabled', "disabled");
            $(this).removeClass('filled');
        }
    });
    $("#card-number-1").keyup(function (event) {

        var first_letter = $(this).val().substr(0, 1);
        if (first_letter == 5) {
            $('.card-type').addClass('mastercard');
            $('.card-type').removeClass('visa');
        }
        else if (first_letter == 4) {
            $('.card-type').removeClass('mastercard');
            $('.card-type').addClass('visa');
        }
        else {
            $('.card-type').removeClass('visa');
            $('.card-type').removeClass('mastercard');
        }
    });
    $("#card-number-1 , #card-number-2, #card-number-3 ").keyup(function (event) {
        if ($(this).val().length == 4) {
            result_val_cart();
        }
    });
    $("#card-number-4").keyup(function (event) {
        if ($(this).val().length >= 3) {
            result_val_cart();
        }
    });

    function result_val_cart() {
        var res_val_cart = $("#card-number-1").val() + $("#card-number-2").val()
            + $("#card-number-3").val() + $("#card-number-4").val();
        $('#creditCard').val(res_val_cart);
    }

    $('#place_order').click(function () {
        send_notification()
    });

    function send_notification() {
        var myThemePath = getHomeUrl() + '/wp-content/themes/My_theme';
        $.ajax({
            type: "POST",
            url: myThemePath + "/part/send_notification_for_new_user.php",
            data: {
                "user_mail": getCookie('user_mail')
            },
            success: function () {
            }
        });
    }

    $('.form-step4 input').change(function (event) {
        $('.ready-btn').removeClass('inactive');
        $('.ready-btn').removeAttr('disabled');
    });
    $('#front-side .creditcard').keyup(function (e) {
        if (e.which != 8) {
            if ($(this).val().length == 4 || $('#card-number-4').val().length >= 3) {
                $(this).addClass('filled');
                if ($("#front-side .creditcard")[$(this).index() + 1]) {
                    $("#front-side .creditcard")[$(this).index() + 1].focus();
                }
            }
            else {
                $(this).removeClass('filled');
            }
        }
        else {
            $(this).removeClass('filled');
        }
    });

    function checkCurr(d) {
        if (window.event) {
            if (event.keyCode == 37 || event.keyCode == 39) return;
        }
        d.value = d.value.replace(/\D/g, '');
    }

    $(".creditcard, .card-MM, .card-YY").keyup(function (event) {
        chekFill();
        checkCurr(this)
    });
    $(".arr-block").click(function (event) {
        $("#front-side").parent().removeClass('invisible');
        $("#back-card").addClass('invisible');
        $(".arr-block-2").css('display', '');
    });
    $(".arr-block-2").click(function (event) {
        $("#front-side").parent().addClass('invisible');
        $("#back-card").removeClass('invisible');
    });
    $('#name_user').on('input', function () {
        if ($(this).val().length > 1) {
            cookie.set('name_user', $(this).val(), {path: '/'});
            $('#billing_first_name').val($(this).val());
            $(this).addClass('filled');
        } else {
            $(this).removeClass('filled');
        }
        chekFill();
    });
    $('#last_name_user').on('input', function () {
        if ($(this).val().length > 1) {
            cookie.set('last_name_user', $(this).val(), {path: '/'});
            $('#billing_last_name').val($(this).val());
            $(this).addClass('filled');
        } else {
            $(this).removeClass('filled');
        }
        chekFill();
    });
    if (window.location.pathname == '/') {
        $('#fullpage').fullpage({
            verticalCentered: true,
            anchors: ['main', 'guarantee', 'live-stream', 'payment', 'specialists', 'team', 'authorisation', 'catalog'],
            menu: '#menu',
            afterResponsive: false,
            scrollBar: true,
            'afterLoad': function (anchorLink, index) {
                $('.fixed-menu ul > li:nth-child(' + index + ')').addClass('selected');
                if (index == 12) {
                    $('.sidebar-holder').addClass('sidebar-holder-left');
                    $('.side-menu-holder').addClass('side-menu-holder-left');
                }
            },
            'onLeave': function (index, nextIndex, direction) {
                $('.fixed-menu ul > li:nth-child(' + index + ')').removeClass('selected');
                if (index == 12) {
                    $('.sidebar-holder').removeClass('sidebar-holder-left');
                    $('.side-menu-holder').removeClass('side-menu-holder-left');
                }
            }
        });
    }
    $('#remember_pas').click(function () {
        console.log($('form#login #username').val());
        var myThemePath = getHomeUrl() + '/wp-content/themes/My_theme';
        $.ajax({
            type: "POST",
            url: myThemePath + "/part/reset_password.php",
            data: {
                "user_mail": $('form#login #username').val()
            },
            success: function (data) {
                // console.log(data);
                $('#forgot_pas_text').text(data);
            }
        });
    });
});
jQuery(function ($) {
    $(".quantity").append('<p id="lepre_quantity_plus" class="lepre_quntity input-text"></p><p id="lepre_quantity_minus" class="lepre_quntity input-text"></p>');
    var $quantityNum = $(".input-text");
    $('.quantity').on('click', '#lepre_quantity_plus', function () {
        $quantityNum.val(+$quantityNum.val() + 1);
        final_total_count($quantityNum.val());
    });
    $('.quantity').on('click', '#lepre_quantity_minus', function () {
        if ($quantityNum.val() > 1) {
            $quantityNum.val(+$quantityNum.val() - 1);
        }
        final_total_count($quantityNum.val());
    });

    function final_total_count(quantity = true) {
        var final = 0;
        if ($(".tmcp-field-wrap").hasClass('tc-active')) {
            option_totals = $(".tc-active").children(".tc-price").children(".amount").text();
            option_totals = option_totals.split('$');
            for (counter = 1; counter < option_totals.length; counter++) {
                final = final + (+option_totals[counter]);
            }
        }
        price_amount = $('.woocommerce-variation-price').children('.price').children(".amount").text();
        if (price_amount == '') {
            price_amount = $('.price').children(".amount").text();
        }
        price_amount = price_amount.split('$');
        qnt = quantity;
        final_total = (final + (+price_amount[1])) * qnt;
        final_total = Math.round(final_total);
        final_total = final_total.toFixed(2);
        $('.tm-final-totals').children('.final').text("$" + final_total);
    }

    $(".tc-label").on("click", function () {
        var price = '',
            first_price = '',
            leprecoins = 0;
        price = $('.tm-final-totals').children('.amount').text();
        first_price = price.split('$');
        quantity_value = $(".qty").val();
        if (price != '') {
            tc_price = $(this).parent().next().find(".amount").text();
            option_price = tc_price.split('$');
            if ($(this).parent().hasClass('olleh')) {
                $(this).parent().removeClass('olleh');
                leprecoins = Math.ceil(((+first_price[1]) - (+option_price[1]) * quantity_value));
            } else {
                leprecoins = Math.ceil(((+first_price[1]) + (+option_price[1]) * quantity_value));
                $(this).parent().addClass('olleh');
            }
            $('#leprecoins').text("+" + leprecoins);
        }
    });
    $(document).on('click touchstart', '.option', function () {
        var price = '',
            first_price = '',
            leprecoins = 0;
        price = $('.tm-final-totals').children('.amount').text();
        first_price = price.replace(/[^0-9]+/g, '');
        if (price != '') {
            leprecoins = first_price / 100;
            leprecoins = Math.ceil(leprecoins);
            $('#leprecoins').text('+' + leprecoins);
        }
    });
    $(".tm-range-picker").on("mouseup", function () {
        countPrice();
    });
    $('.quantity, .selected').on('click', function () {
        countPrice();
    });

    function countPrice() {
        var price = '',
            first_price = '',
            leprecoins = 0;
        if ($('*').is('.tm-final-totals')) {
            price = $('.tm-final-totals').children('.amount').text();
            first_price = price.replace(/[^0-9]+/g, '');
            leprecoins = first_price / 100;
        }
        else {
            quantity_value = $(".input-text").val();
            p = $('.price').children(".amount").text();
            p_s = p.split('$');
            price = p_s[1];
            first_price = price * quantity_value;
            leprecoins = first_price;
        }
        if (price != '') {
            leprecoins = Math.ceil(leprecoins);
            $('#leprecoins').text('+' + leprecoins);
        }
    }

    setTimeout(function () {
        $('.pages[data-anchor="scrin-1"]').addClass('fly-ilidan')
    }, 3000);
});
jQuery(document).ready(function ($) {
    $(".togle").on("click", function () {
        var side_menu = $(".side-menu-holder");
        if (!side_menu.hasClass("show")) {
            side_menu.animate({
                left: "+=24.5em"
            }, 1000);
            side_menu.addClass('show');
        } else {
            side_menu.animate({
                left: "-=24.5em"
            }, 1000);
            side_menu.removeClass('show');
        }
    });
    $('#user-history').click(function () {
        $('#about-coins').addClass("invisible");
        $('#user-friends-table').addClass("invisible");
        $('#user-history-table').removeClass("invisible");
    });
    $('#user-friends').click(function () {
        $('#about-coins').addClass("invisible");
        $('#user-history-table').addClass("invisible");
        $('#user-friends-table').removeClass("invisible");
    });
    $('.user-action').hover(function () {
        var max_avaliable = $(".privat-coins-holder .count-coins").data("max_avaliable");
        var curr_avaliable = $(".privat-coins-holder .count-coins").data("curr_avaliable");
        var bonus = $(this).data("bonus");
        var coins_count = $('.privat-coins-holder .counter-coins .counter');
        var coins = Math.ceil(bonus / max_avaliable * 17);
        var empty_coins = $(".privat-coins-holder .emty-coin-half");
        for (var i = 0; i < coins; i++) {
            $(coins_count).text(curr_avaliable + bonus);
            $(empty_coins[empty_coins.length - i]).addClass("blinker");
            if (max_avaliable < bonus + curr_avaliable) {
                $('.privat-coins-holder .count-coins .coin-half:first-child').addClass("blinker");
            }
        }
        var numb_start = curr_avaliable;
        $({numberValue: numb_start}).animate({numberValue: numb_start + bonus}, {
            duration: 300,
            easing: "linear",
            step: function (val) {
                $(coins_count).text(Math.ceil(val));
            }
        });
    }, function () {
        var curr_avaliable = $(".privat-coins-holder .count-coins").data("curr_avaliable");
        var coins_count = $('.privat-coins-holder .counter-coins .counter');
        var bonus = $(this).data("bonus");
        var empty_coins = $(".emty-coin-half");
        empty_coins.removeClass('blinker');
        $('.privat-coins-holder .count-coins .coin-half:first-child').removeClass('blinker');
        var numb_start = curr_avaliable + bonus;
        $({numberValue: numb_start}).animate({numberValue: numb_start - bonus}, {
            duration: 300,
            easing: "linear",
            step: function (val) {
                $(coins_count).text(Math.ceil(val));
            }
        });
    });
    var pagi = $('.woocommerce-pagination li:last-child');
    if (pagi.length !== 0) {
        $('.woocommerce-pagination li:last-child').addClass('show-more');
    }
});
jQuery(function ($) {
    $('.options-btn li a').click(function (event) {
        $('.options-btn li a').removeClass('active');
        $(this).addClass('active');
        if ($(this).data('catid')) {
            $('.catalog-item.catalog-goods').addClass('disapear');
            $('.catalog-item.catalog-goods[data-cat=' + $(this).data('catid') + ']').removeClass('disapear');
        }
        else {
            $('.catalog-item.catalog-goods').removeClass('disapear');
        }
    });
    $('.catalog-item.catalog-goods').click(function (event) {
        $('.side-menu-holder').addClass('back');
        $('.sidebar-holder').addClass('back');
        $('.top-bar').addClass('back');
        $('[name = tovar]').val($(this).data('title'));
        $('#product-name').text($(this).data('title'));
        $('[name = cost]').val($(this).data('price'));
        $('#product-description').html($(this).data('description'));
        $('#product-price').text($(this).data('price'));
        $('[name = user]').val($('[name = this_user]').val());
        var photo_gal = $(this).data('images');
        var photos = photo_gal.split(' ');
        $('.gallery-photos .swiper-wrapper').html('');
        $('.main-image-holder').html('<img src="' + $(this).data('main-photo') + '">');
        $('.gallery-photos .swiper-wrapper').append('<div class="swiper-slide"><img src="' + $(this).data('main-photo') + '"></div>');
        $(photos).each(function (index, el) {
            $('.gallery-photos .swiper-wrapper').append('<div class="swiper-slide"><img src="' + el + '"></div>')
        });
        jQuery('.gallery-photos img').click(function (event) {
            var photo_url = jQuery(this).attr('src');
            jQuery('.main-image-holder img').attr('src', photo_url);
        });
        var swiper_lepr_buy = new Swiper('.gallery-photos .swiper-container', {
                slidesPerView: 3,
                spaceBetween: 0
            }
        );
    });
    $('#lepre-change').click(function (event) {
        $('[name = oplata]').val('Оплачено леприкоинами');
        var templateUrl = object_name.templateUrl;
        $.ajax({
            type: "POST",
            url: templateUrl + "/lepre-buy.php",
            data: "minus=" + $('[name = cost]').val(),
            success: function (msg) {
                alert(msg);
                $('.choose-block').html('<div class="thanks-mes">Спасибо. Ваш заказ находится в обработке. Наш менеджер свяжется с вами в ближайшее время</div>')
            }
        });
    });
    $('#cash-change').click(function (event) {
        $('[name = oplata]').val('Предпочитают оплатить наличными');
        $('.choose-block').html('<div class="thanks-mes">Спасибо. Ваш заказ находится в обработке. Наш менеджер свяжется с вами в ближайшее время</div>')
    });
    $('#lepre-change').hover(function () {
        var max_avaliable = $(".privat-coins-holder .count-coins").data("max_avaliable");
        var curr_avaliable = $(".privat-coins-holder .count-coins").data("curr_avaliable");
        var bonus = $('#product-price').text();
        var coins_count = $('.privat-coins-holder .counter-coins .counter');
        var coins = Math.ceil(bonus / max_avaliable * 17);
        var empty_coins = $(".coin-puck .gold-coin-hald");
        for (var i = 0; i < coins; i++) {
            $(empty_coins[i]).addClass("blinker");
            if (max_avaliable < bonus + curr_avaliable) {
                $('.privat-coins-holder .count-coins .coin-half:first-child').addClass("blinker");
            }
        }
    }, function () {
        $(".coin-puck .gold-coin-hald").removeClass('blinker');
    });
    $('a.update').click(function (event) {
        var value = $(this).data('coin-val');
        var var_array = $('b[data-value = "' + value + '"]');
        var random_number = Math.floor((Math.random() * var_array.length - 1) + 1);
        var my_element = $(this).parents('.description').find('.color-text a');
        my_element.text($(var_array[random_number]).data('title'));
        my_element.attr("href", $(var_array[random_number]).data('href'));

    });
});