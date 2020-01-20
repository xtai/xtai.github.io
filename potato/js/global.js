/* global @xtai */

/* Sean says hi @xtai */
var css = 'text-shadow:';
for (var i = 0; i <= 240; i++) {
  css = css.concat((i * 2 - 1).toFixed(0).toString(), 'px ')
           .concat((0.005 * (i - 70) * (i - 70) - 24.5).toFixed(2).toString(), 'px ')
           .concat('hsl(', (i * 2.5).toFixed(1).toString(), ',100%,85%),');
}
css = css.slice(0, -1).concat(';font-size:40px;');
console.log('\n\n%cWoohoo!', css);
console.log('\nYou have JavaScript superpower.');
console.log('\nSean says hi!');
console.log('\nLearn more at https://github.com/xtai/xtai.github.io');

/* mailto @xtai */
function mailto() {
  var mailtos = document.getElementsByClassName('mailto');
  var href = "znvygb:kgnv.jbex@tznvy.pbz?Fhowrpg=Uv".replace(/[a-zA-Z]/g, function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
  for (var i = 0; i < mailtos.length; i++) {
    mailtos[i].setAttribute('href', href);
  }
}

/* sticky @xtai */
var space = false;
var deltaTop = 54;
var deltaBottom = 200;
var lastYOffsetTop = 0;
var lastYOffsetBottom = deltaBottom;
var nav, navPosition, navPositionTop, navPositionBottom, placeholder;
/* sticky - sticky() */
function sticky() {
  nav = document.querySelector('nav');
  if (window.innerWidth > 1000 && nav.className !== 'sticky') {
    if (!document.getElementById('placeholder')){
      placeholder = document.createElement('div');
      placeholder.setAttribute('id', 'placeholder');
      navPosition = nav.getBoundingClientRect();
      navPositionTop = navPosition.top + window.pageYOffset;
      navPositionBottom = navPosition.bottom + window.pageYOffset;
      placeholder.style.width = navPosition.width + 'px';
      placeholder.style.height = navPosition.height + 'px';
      placeholder.style.clear = 'both';
    } else {
      placeholder = document.getElementById('placeholder');
    }
    window.removeEventListener('scroll', stickyListener);
    window.addEventListener('scroll', stickyListener);
    window.addEventListener('scroll', stickyHideListener);
  }
}
/* sticky - stickyListener() */
function stickyListener() {
  if (window.pageYOffset >= navPositionBottom && !space) {
    nav.classList.add('sticky');
    nav.classList.add('hide');
    nav.parentNode.insertBefore(placeholder, nav);
    space = true;
  } else if (!nav.classList.contains('hide') && window.pageYOffset < navPositionTop && space) {
    nav.classList.remove('sticky');
    nav.parentNode.removeChild(placeholder);
    space = false;
  } else if (nav.classList.contains('hide') && window.pageYOffset < navPositionBottom && space) {
    nav.classList.remove('sticky');
    nav.classList.remove('hide');
    nav.parentNode.removeChild(placeholder);
    space = false;
  }
}
/* sticky hide - stickyHideListener() */
function stickyHideListener() {
  if (window.pageYOffset > lastYOffsetBottom) {
    // scroll down
    nav.classList.add('hide');
    lastYOffsetBottom = window.pageYOffset;
    lastYOffsetTop = lastYOffsetBottom - deltaBottom;
  } else if (window.pageYOffset < lastYOffsetTop) {
    // scroll up
    nav.classList.remove('hide');
    lastYOffsetTop = window.pageYOffset;
    lastYOffsetBottom = lastYOffsetTop + deltaTop;
  }
}

/* animation @xtai */
$(function() {
  'use strict';
  // prepare intro animation
  $('main').css('opacity', '0');
  $('header').children().css('opacity', '0');
  $('#header-placeholder').height(0);
  $('#header-placeholder').css('background-color', $('header').css('background-color'));
  // inject header content to #header-placeholder
  $('#header-placeholder').attr('class', $('#potato').children('div').attr('class'));
  $('#header-placeholder').append($('#potato').children('div').children('header').clone());
  $('#potato').children('div').children('header').remove();
  // tigger intro animation
  setTimeout(function(){
    $('body').velocity({'opacity': '1'}, 400);
    $('#header-placeholder').velocity({'height': $('header').get(0).scrollHeight}, 400, function(){
      $('header').children().velocity({'opacity': '1'}, 400);
      $('main').velocity({'opacity': '1'}, 400);
      $(this).css('height', 'auto');
      mailto();
      sticky();
      stickyListener(); // in case window.pageYOffset > 0 
    });
  }, 300);
  // smoothState
  var options = {
    prefetch: true,
    prefetchOn: 'mousedown',
    blacklist: '.no-smoothState',
    cacheLength: 0,
    repeatDelay: 200,
    scroll: false,
    onStart: {
      duration: 400,
      render: function ($container) {
        // exit animation
        $('main').velocity({'opacity': '0'}, 400);
        $('header').children().velocity({'opacity': '0'}, 400);
      }
    },
    onReady: {
      duration: 0,
      render: function ($container, $newContent) {
        // reposition page
        $('#header-placeholder').height($('#header-placeholder').get(0).scrollHeight - window.pageYOffset);
        $(window).scrollTop(0);
        // prepare color
        var oldHeaderColor = $('header').css('background-color');
        var oldNavColor = $('nav').css('background-color');
        // #header-placehoder new content
        $('#header-placeholder').attr('class', $newContent.attr('class'));
        $('#header-placeholder').html('<a href=\"#content\" class=\"accessible-skip\">Skip to content</a>');
        $('#header-placeholder').append($newContent.children('header').clone());
        $newContent.children('header').remove();
        // #potato new content
        $container.html($newContent);
        // enter animation
        enterAnimation(oldHeaderColor, oldNavColor);
        // retrigger page tracking with google and piwik
        if (typeof (window.ga) !== 'undefined') {
          window.ga('set', 'page', window.location.pathname || smoothState.href);
          window.ga('send', 'pageview');
        }
        if (typeof window._paq !== 'undefined') {
          window._paq.push(['setCustomUrl', smoothState.href]);
          window._paq.push(['setDocumentTitle', document.title]);
          window._paq.push(['trackPageView']);
        }
      }
    }
  },
  smoothState = $('#potato').smoothState(options).data('smoothState');
});
/* animation - enterAnimation() */
function enterAnimation(oldHeaderColor, oldNavColor) {
  $('main').css('opacity', '0');
  $('header').children().css('opacity', '0');
  // color animation
  var newHeaderColor = hexc($('header').css('background-color'));
  var newNavColor = hexc($('nav').css('background-color'));
  if (newHeaderColor !== null) {
    if (newNavColor === null) newNavColor = newHeaderColor; // fallback
    $('#header-placeholder').css('background-color', oldHeaderColor);
    $('header').css('background-color', oldHeaderColor);
    $('nav').css('background-color', oldNavColor);
    $('#header-placeholder').velocity({'backgroundColor': newHeaderColor}, 200);
    $('header').velocity({'backgroundColor': newHeaderColor}, 200);
    $('nav').velocity({'backgroundColor': newNavColor}, 200);
  }
  // header animation
  $('#header-placeholder').velocity({'height': $('header').get(0).scrollHeight}, 400, function(){
    $('header').children().velocity({'opacity': '1'}, 400);
    $('main').velocity({'opacity': '1'}, 400);
    $(this).css('height', 'auto');
    sticky();
    mailto();
  });
}
/* animation - hexc() */
function hexc(colorval) {
  var parts;
  parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/); // match rgb
  if (parts === null) {
    parts = colorval.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(0?\.\d)\)$/); // match rgba
  }
  if (parts === null) return null; // browser fallback -> cancel color animation
  delete(parts[0]);
  if (parts[4] !== null) delete(parts[4]); // delete alpha layer
  for (var i = 1; i <= 3; i++) {
    parts[i] = parseInt(parts[i]).toString(16);
    if (parts[i].length == 1) parts[i] = '0' + parts[i];
  }
  return '#' + parts.join('');
}
