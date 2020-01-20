---
layout: null
---
/* tags @xtai */

// DOM elements
var allPostsDOM = document.getElementById('all-covers');
var activePostsDOM = document.getElementById('selected-covers');
var tagsDOM = document.getElementById('tags');

// tags in this page
var tagSet = new Set();
// posts in this page
var postSet = new Set();
// active tags in this page
var activeTag = 'cover-item';
// ignore tag - front page covers
var frontPageTag = 'tag-frontpage';

// predefined vars by jekyll
// tag: [post] obj
var tagPostMap = { {% for tag in site.tags %}
  'tag-{{ tag[0] | downcase | url_encode | replace: "+", "_" | replace: "%2F", "" | replace: "%", "" }}': [{% for post in tag[1] %}
    '{{ post.url | replace: '/', '' | replace: '%', '' }}'{% unless forloop.last %},{% endunless %}{% endfor %}
  ]{% unless forloop.last %},{% endunless %}{% endfor %}
};
var tagPostNumber = [];
// tag: full name obj
var tagName = { {% for tag in site.tags %}
  'tag-{{ tag[0] | downcase | url_encode | replace: "+", "_" | replace: "%2F", "" | replace: "%", "" }}': '{{ tag[0] }}',{% endfor %}
  'cover-item': 'All'
};

getData();
initTagDOM();
// showTag('cover-item');

function getData() {
  // get tag class from current page
  allPostsDOM.childNodes.forEach(function (item){
    if (typeof item.className !== 'undefined' && typeof item.id !== 'undefined') {
      item.className.split(' ').forEach(function (tag){ tagSet.add(tag); });
      postSet.add(item.id);
    }
  });
  // Clear predefined data tagPostMap, tagName
  var tag;
  for (tag in tagPostMap) {
    if (tagPostMap.hasOwnProperty(tag) && !tagSet.has(tag)) {
      delete tagPostMap[tag];
    }
  }
  for (tag in tagName) {
    if (tagName.hasOwnProperty(tag) && !tagSet.has(tag)) {
      delete tagName[tag];
    }
  }
  for (tag in tagPostMap) {
    if (tagPostMap.hasOwnProperty(tag)) {
      tagPostNumber.push([tag, tagPostMap[tag].length]);
    }
  }
  tagPostNumber.sort(function(a, b) { return b[1] - a[1] });
}

function initTagDOM() {
  tagsDOM.appendChild(createTagLiDOM('tag active', 'cover-item', '-1', 'showTag(\'cover-item\');', 'All Projects'));
  for (var i = 0; i < tagPostNumber.length; i++) {
    var tag = tagPostNumber[i][0];
    var text = tagName[tagPostNumber[i][0]];
    // var number = tagPostNumber[i][1];
    if (tag !== frontPageTag) {
      tagsDOM.appendChild(createTagLiDOM('tag', tag, '0', 'showTag(\'' + tag + '\');', text));
    }
  }
}

function createTagLiDOM(className, idName, tabindex, onClick, text) {
  var li = document.createElement('li');
  var span = document.createElement('span');
  li.setAttribute('class', className);
  li.setAttribute('id', idName);
  span.setAttribute('tabindex', tabindex);
  span.setAttribute('onclick', onClick);
  span.appendChild(document.createTextNode(text));
  li.appendChild(span);
  return li;
}

function showTag(tag) {
  // reseetTagDOM();
  if (activeTag === tag) {
    return null;
  }
  $('#selected-covers').velocity({ opacity: 0 }, { duration: 200 });
  $('#all-covers').velocity({ opacity: 0 }, 200, function(){
    $('#' + activeTag).first().attr('tabindex', '0');
    $('#' + activeTag).removeClass('active');
    $('#' + tag).first().attr('tabindex', '-1');
    $('#' + tag).addClass('active');
    activeTag = tag;
    if (!tagSet.has(tag)) {
      return null;
    }
    while (activePostsDOM.firstChild) {
      activePostsDOM.removeChild(activePostsDOM.firstChild);
    }
    if (tag === 'cover-item'){
      allPostsDOM.style.display = 'block';
      activePostsDOM.style.display = 'none';
      $('#all-covers').velocity({ opacity: 1 }, { delay: 200, duration: 200 });
    }else{
      allPostsDOM.style.display = 'none';
      activePostsDOM.style.display = 'block';
      tagPostMap[tag].forEach(function (postId){
        if (postSet.has(postId)) {
          activePostsDOM.appendChild(document.getElementById(postId).cloneNode(true));
        }
      });
      $('#selected-covers').velocity({ opacity: 1 }, { delay: 200, duration: 200 });
    }
  });
}
