var selectors = ["form[action^='/cart']:not(form[action='/cart/add']) input[name='checkout'][type='submit']:not(.carthook_checkout, [name='update'], [name='add']), form[action^='/cart']:not(form[action='/cart/add']) input[type='submit']:not(.carthook_checkout, [name='update'], [name='add']), form[action^='/cart']:not(form[action='/cart/add']) #recharge_button:not(.carthook_checkout, [name='update'], [name='add']), form[action^='/checkout'] input[name='checkout'][type='submit']:not(.carthook_checkout, [name='update'], [name='add']), form[action^='/checkout'] input[type='submit']:not(.carthook_checkout, [name='update'], [name='add']), form[action^='/checkout'] #recharge_button:not(.carthook_checkout, [name='update'], [name='add'])", "form[action^='/cart']:not(form[action='/cart/add']) button[name='checkout'][type='submit']:not(.carthook_checkout), form[action^='/cart']:not(form[action='/cart/add']) button[type='button'].checkout:not(.carthook_checkout), form[action^='/checkout'] button[name='checkout'][type='submit']:not(.carthook_checkout), form[action^='/checkout'] button[type='button'].checkout:not(.carthook_checkout)", "form[action^='/cart']:not(form[action='/cart/add']) a[name='checkout']:not(a[href='/cart']):not(.carthook_checkout), form[action^='/checkout'] a[name='checkout']:not(a[href='/cart']):not(.carthook_checkout)"]

function chAddClass() {
    $(selectors).each(function (idx, elem) { 
        $(elem).addClass('carthook_checkout elm_pos_0 ab_test_no_carthook');
    });
}

$(document).ready(function () {
    if (Math.floor(Math.random() * 1)) {
      console.log('disabling carthook for AB');
      chAddClass();
    } else {
      console.log('enabling carthook for AB');
    }
});