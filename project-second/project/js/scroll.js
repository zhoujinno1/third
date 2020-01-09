$(function() {
	var scrtime;
	var $ul = $("#con ul");
	var liFirstHeight = $ul.find("li:first").height();
	$ul.css({
		top: "-" + liFirstHeight - 20 + "px"
	});
	$("#con").hover(function() {
		$ul.pause();
		clearInterval(scrtime);
	}, function() {
		$ul.resume();
		scrtime = setInterval(function scrolllist() {
			$ul.animate({
				top: 0 + "px"
			}, 1500, function() {
				$ul.find("li:last").prependTo($ul);
				liFirstHeight = $ul.find("li:first").height();
				$ul.css({
					top: "-" + liFirstHeight - 20 + "px"
				});
			});
		}, 3300);
	}).trigger("mouseleave");
});

console.log('=============================================')


(function() {
	var e = jQuery,
		f = "jQuery.pause",
		d = 1,
		b = e.fn.animate,
		a = {};

	function c() {
		return new Date().getTime()
	}
	e.fn.animate = function(k, h, j, i) {
		var g = e.speed(h, j, i);
		g.complete = g.old;
		return this.each(function() {
			if (!this[f]) {
				this[f] = d++
			}
			var l = e.extend({}, g);
			b.apply(e(this), [k, e.extend({}, l)]);
			a[this[f]] = {
				run: true,
				prop: k,
				opt: l,
				start: c(),
				done: 0
			}
		})
	};
	e.fn.pause = function() {
		return this.each(function() {
			if (!this[f]) {
				this[f] = d++
			}
			var g = a[this[f]];
			if (g && g.run) {
				g.done += c() - g.start;
				if (g.done > g.opt.duration) {
					delete a[this[f]]
				} else {
					e(this).stop();
					g.run = false
				}
			}
		})
	};
	e.fn.resume = function() {
		return this.each(function() {
			if (!this[f]) {
				this[f] = d++
			}
			var g = a[this[f]];
			if (g && !g.run) {
				g.opt.duration -= g.done;
				g.done = 0;
				g.run = true;
				g.start = c();
				b.apply(e(this), [g.prop, e.extend({}, g.opt)])
			}
		})
	}
})();


<
a href = "#" >
	<
	img src = "images/tx.jpg"
title = "Jarvis_风" > < /a> <
	/div> <
	div class = "div_right" >
	<
	a href = "#" > Jarvis_风 < /a>：唉，总是在越忙的时候事情越多。。。我的神曲你在哪里呀~~~亲耐滴·你再不出来你就木有人疼了！！#248# <
	div class = "twit_item_time" > 3 分钟前 < /div> <
	/div> <
	/li><li> <
	div class = "div_left" >
	<
	a href = "#" >
	<
	img src = "images/tx.jpg"
title = "Jarvis_风" > < /a> <
	/div> <
	div class = "div_right" >
	<
	a href = "#" > Jarvis_风 < /a>：唉，总是在越忙的时候事情越多。。。我的神曲你在哪里呀~~~亲耐滴·你再不出来你就木有人疼了！！#248# <
	div class = "twit_item_time" > 3 分钟前 < /div> <
	/div> <
	/li><li> <
	div class = "div_left" >
	<
	a href = "#" >
	<
	img src = "images/tx.jpg"
title = "Jarvis_风" > < /a> <
	/div> <
	div class = "div_right" >
	<
	a href = "#" > Jarvis_风 < /a>：唉，总是在越忙的时候事情越多。。。我的神曲你在哪里呀~~~亲耐滴·你再不出来你就木有人疼了！！#248# <
	div class = "twit_item_time" > 3 分钟前 < /div> <
	/div> <
	/li><li> <
	div class = "div_left" >
	<
	a href = "#" >
	<
	img src = "images/tx.jpg"
title = "Jarvis_风" > < /a> <
	/div> <
	div class = "div_right" >
	<
	a href = "#" > Jarvis_风 < /a>：唉，总是在越忙的时候事情越多。。。我的神曲你在哪里呀~~~亲耐滴·你再不出来你就木有人疼了！！#248# <
	div class = "twit_item_time" > 3 分钟前 < /div> <
	/div> <
	/li><li> <
	div class = "div_left" >
	<
	a href = "#" >
	<
	img src = "images/tx.jpg"
title = "Jarvis_风" > < /a> <
	/div> <
	div class = "div_right" >
	<
	a href = "#" > Jarvis_风 < /a>：唉，总是在越忙的时候事情越多。。。我的神曲你在哪里呀~~~亲耐滴·你再不出来你就木有人疼了！！#248# <
	div class = "twit_item_time" > 3 分钟前 < /div> <
	/div> <
	/li><li> <
	div class = "div_left" >
	<
	a href = "#" >
	<
	img src = "images/tx.jpg"
title = "Jarvis_风" > < /a> <
	/div> <
	div class = "div_right" >
	<
	a href = "#" > Jarvis_风 < /a>：唉，总是在越忙的时候事情越多。。。我的神曲你在哪里呀~~~亲耐滴·你再不出来你就木有人疼了！！#248# <
	div class = "twit_item_time" > 3 分钟前 < /div> <
	/div> <
	/li>







	<
	/ul> <
	/div>



	<
	/body>
$(function() {
	var $allCheckbox = $('input[type="checkbox"]'),
		$wholeChexbox = $('.whole_check'),
		$cartBox = $('.cartBox'),
		$shopCheckbox = $('.shopChoice'),
		$sonCheckBox = $('.son_check');
	$allCheckbox.click(function() {
		if ($(this).is(':checked')) {
			$(this).next('label').addClass('mark');
		} else {
			$(this).next('label').removeClass('mark')
		}
	});
	$wholeChexbox.click(function() {
		var $checkboxs = $cartBox.find('input[type="checkbox"]');
		if ($(this).is(':checked')) {
			$checkboxs.prop("checked", true);
			$checkboxs.next('label').addClass('mark');
		} else {
			$checkboxs.prop("checked", false);
			$checkboxs.next('label').removeClass('mark');
		}
		totalMoney();
	});
	$sonCheckBox.each(function() {
		$(this).click(function() {
			if ($(this).is(':checked')) {
				var len = $sonCheckBox.length;
				var num = 0;
				$sonCheckBox.each(function() {
					if ($(this).is(':checked')) {
						num++;
					}
				});
				if (num == len) {
					$wholeChexbox.prop("checked", true);
					$wholeChexbox.next('label').addClass('mark');
				}
			} else {
				$wholeChexbox.prop("checked", false);
				$wholeChexbox.next('label').removeClass('mark');
			}
		})
	})
	$shopCheckbox.each(function() {
		$(this).click(function() {
			if ($(this).is(':checked')) {
				var len = $shopCheckbox.length;
				var num = 0;
				$shopCheckbox.each(function() {
					if ($(this).is(':checked')) {
						num++;
					}
				});
				if (num == len) {
					$wholeChexbox.prop("checked", true);
					$wholeChexbox.next('label').addClass('mark');
				}
				$(this).parents('.cartBox').find('.son_check').prop("checked", true);
				$(this).parents('.cartBox').find('.son_check').next('label').addClass('mark');
			} else {
				$wholeChexbox.prop("checked", false);
				$wholeChexbox.next('label').removeClass('mark');
				$(this).parents('.cartBox').find('.son_check').prop("checked", false);
				$(this).parents('.cartBox').find('.son_check').next('label').removeClass('mark');
			}
			totalMoney();
		});
	});
	$cartBox.each(function() {
		var $this = $(this);
		var $sonChecks = $this.find('.son_check');
		$sonChecks.each(function() {
			$(this).click(function() {
				if ($(this).is(':checked')) {
					var len = $sonChecks.length;
					var num = 0;
					$sonChecks.each(function() {
						if ($(this).is(':checked')) {
							num++;
						}
					});
					if (num == len) {
						$(this).parents('.cartBox').find('.shopChoice').prop("checked", true);
						$(this).parents('.cartBox').find('.shopChoice').next('label').addClass('mark');
					}
				} else {
					$(this).parents('.cartBox').find('.shopChoice').prop("checked", false);
					$(this).parents('.cartBox').find('.shopChoice').next('label').removeClass('mark');
				}
				totalMoney();
			});
		});
	});
	var $plus = $('.plus'),
		$reduce = $('.reduce'),
		$all_sum = $('.sum');
	$plus.click(function() {
		var $inputVal = $(this).prev('input'),
			$count = parseInt($inputVal.val()) + 1,
			$obj = $(this).parents('.amount_box').find('.reduce'),
			$priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
			$price = $(this).parents('.order_lists').find('.price').html(),
			$priceTotal = $count * parseInt($price.substring(1));
		$inputVal.val($count);
		$priceTotalObj.html('锟�' + $priceTotal);
		if ($inputVal.val() > 1 && $obj.hasClass('reSty')) {
			$obj.removeClass('reSty');
		}
		totalMoney();
	});
	$reduce.click(function() {
		var $inputVal = $(this).next('input'),
			$count = parseInt($inputVal.val()) - 1,
			$priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
			$price = $(this).parents('.order_lists').find('.price').html(),
			$priceTotal = $count * parseInt($price.substring(1));
		if ($inputVal.val() > 1) {
			$inputVal.val($count);
			$priceTotalObj.html('锟�' + $priceTotal);
		}
		if ($inputVal.val() == 1 && !$(this).hasClass('reSty')) {
			$(this).addClass('reSty');
		}
		totalMoney();
	});
	$all_sum.keyup(function() {
		var $count = 0,
			$priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
			$price = $(this).parents('.order_lists').find('.price').html(),
			$priceTotal = 0;
		if ($(this).val() == '') {
			$(this).val('1');
		}
		$(this).val($(this).val().replace(/\D|^0/g, ''));
		$count = $(this).val();
		$priceTotal = $count * parseInt($price.substring(1));
		$(this).attr('value', $count);
		$priceTotalObj.html('锟�' + $priceTotal);
		totalMoney();
	})
	var $order_lists = null;
	var $order_content = '';
	$('.delBtn').click(function() {
		$order_lists = $(this).parents('.order_lists');
		$order_content = $order_lists.parents('.order_content');
		$('.model_bg').fadeIn(300);
		$('.my_model').fadeIn(300);
	});
	$('.closeModel').click(function() {
		closeM();
	});
	$('.dialog-close').click(function() {
		closeM();
	});

	function closeM() {
		$('.model_bg').fadeOut(300);
		$('.my_model').fadeOut(300);
	}
	$('.dialog-sure').click(function() {
		$order_lists.remove();
		if ($order_content.html().trim() == null || $order_content.html().trim().length == 0) {
			$order_content.parents('.cartBox').remove();
		}
		closeM();
		$sonCheckBox = $('.son_check');
		totalMoney();
	})

	function totalMoney() {
		var total_money = 0;
		var total_count = 0;
		var calBtn = $('.calBtn a');
		$sonCheckBox.each(function() {
			if ($(this).is(':checked')) {
				var goods = parseInt($(this).parents('.order_lists').find('.sum_price').html().substring(1));
				var num = parseInt($(this).parents('.order_lists').find('.sum').val());
				total_money += goods;
				total_count += num;
			}
		});
		$('.total_text').html('锟�' + total_money);
		$('.piece_num').html(total_count);
		if (total_money != 0 && total_count != 0) {
			if (!calBtn.hasClass('btn_sty')) {
				calBtn.addClass('btn_sty');
			}
		} else {
			if (calBtn.hasClass('btn_sty')) {
				calBtn.removeClass('btn_sty');
			}
		}
	}
});
