$(document).ready(function () {
	
	'use strict';
	
	$('.sidebar__item__head').on('click', function(){
		
		var this_ = $(this),
        parent = this_.parents('.sidebar__item'),
        blockThis = parent.find('.sidebar_list'),
        accord = $('.sidebar__item'),
        block = accord.find('.sidebar_list');

        if (!parent.hasClass('is-active')) {
            accord.stop(true, true).removeClass('is-active');
            block.stop(true, true).slideUp(400);
            parent.stop(true, true).addClass('is-active');
            blockThis.stop(true, true).slideDown(400);
        } else {
            parent.stop(true, true).removeClass('is-active');
            blockThis.stop(true, true).slideUp(400);
        }
        return false;
	});
	
	
	$('.not_available').on('click', function(e){
		e.preventDefault();
	});
	
	// quantity

	(function(){
		
		$('.quantity').on('click','button',function(){
			var data = $(this).data('direction'),
				i = $(this).parent().children('input[type="text"]'),
				val = i.val();
			if(data == "up"){
				val++;
				i.val(val);
			}else if(data == "down"){
				if(val == 1) return;
				val--;
				i.val(val);
			}
		});

	})();

	//tabs

	$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
		$(this).addClass('active').siblings().removeClass('active').closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});
	
	
});


(function(){
var a = document.querySelector('#js-fixblock'), b = null, P = 0;  // если ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента. Может быть отрицательным числом
window.addEventListener('scroll', Ascroll, false);
document.body.addEventListener('scroll', Ascroll, false);
function Ascroll() {
  if (b == null) {
    var Sa = getComputedStyle(a, ''), s = '';
    for (var i = 0; i < Sa.length; i++) {
      if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
        s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
      }
    }
    b = document.createElement('div');
    b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
    a.insertBefore(b, a.firstChild);
    var l = a.childNodes.length;
    for (var i = 1; i < l; i++) {
      b.appendChild(a.childNodes[1]);
    }
    a.style.height = b.getBoundingClientRect().height + 'px';
    a.style.padding = '0';
    a.style.border = '0';
  }
  var Ra = a.getBoundingClientRect(),
      R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('.footer_nav').getBoundingClientRect().top + 0);  // селектор блока, при достижении верхнего края которого нужно открепить прилипающий элемент;  Math.round() только для IE; если ноль заменить на число, то блок будет прилипать до того, как нижний край элемента дойдёт до футера
  if ((Ra.top - P) <= 0) {
    if ((Ra.top - P) <= R) {
      b.className = 'stop';
      b.style.top = - R +'px';
    } else {
      b.className = 'sticky';
      b.style.top = P + 'px';
    }
  } else {
    b.className = '';
    b.style.top = '';
  }
  window.addEventListener('resize', function() {
    a.children[0].style.width = getComputedStyle(a, '').width
  }, false);
}
})()