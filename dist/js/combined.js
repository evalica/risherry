(function() {

    var width, height, canvas, ctx, circles, target, animateHeader = true;

    // Main
    initHeader();
    addListeners();

    function initHeader() {
        width = self.innerWidth -15;
        height = self.innerHeight;
        target = {x: 0, y: height};

        canvas = document.getElementById('animation');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create particles
        circles = [];
        for(var x = 0; x < width*0.5; x++) {
            var c = new Circle();
            circles.push(c);
        }
        animate();
    }

    // Event handling
    function addListeners() {
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = self.innerWidth -15;
        height = self.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in circles) {
                circles[i].draw();
            }
        }
        requestAnimationFrame(animate);
    }

    // Canvas manipulation
    function Circle() {
        var _this = this;

        // constructor
        (function() {
            _this.pos = {};
            init();
            console.log(_this);
        })();

        function init() {
            _this.pos.x = Math.random()*width;
            _this.pos.y = height+Math.random()*100;
            _this.alpha = 0.1+Math.random()*0.3;
            _this.scale = 0.1+Math.random()*0.3;
            _this.velocity = Math.random();
        }

        this.draw = function() {
            if(_this.alpha <= 0) {
                init();
            }
            _this.pos.y -= _this.velocity;
            _this.alpha -= 0.0005;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(255,255,255,'+ _this.alpha+')';
            ctx.fill();
        };
    }

})();
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
 
// MIT license
 
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());
function setActiveStyleSheet(title) {  var i, a, main;  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {      a.disabled = true;      if(a.getAttribute("title") == title) a.disabled = false;    }  }}function getActiveStyleSheet() {  var i, a;  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");  }  return null;}function getPreferredStyleSheet() {  var i, a;  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {    if(a.getAttribute("rel").indexOf("style") != -1       && a.getAttribute("rel").indexOf("alt") == -1       && a.getAttribute("title")       ) return a.getAttribute("title");  }  return null;}function createCookie(name,value,days) {  if (days) {    var date = new Date();    date.setTime(date.getTime()+(days*24*60*60*1000));    var expires = "; expires="+date.toGMTString();  }  else expires = "";  document.cookie = name+"="+value+expires+"; path=/";}function readCookie(name) {  var nameEQ = name + "=";  var ca = document.cookie.split(';');  for(var i=0;i < ca.length;i++) {    var c = ca[i];    while (c.charAt(0)==' ') c = c.substring(1,c.length);    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);  }  return null;}window.onload = function(e) {  var cookie = readCookie("style");  var title = cookie ? cookie : getPreferredStyleSheet();  setActiveStyleSheet(title);}window.onunload = function(e) {  var title = getActiveStyleSheet();  createCookie("style", title, 365);}var cookie = readCookie("style");var title = cookie ? cookie : getPreferredStyleSheet();setActiveStyleSheet(title);
(function() {

  var configData = 'src/data/config.json';

  $.getJSON(configData, function(config) {
    createStructure(config);
  });

  function createStructure(config) {
    (function() {
      var behanceProjectAPI = 'http://www.behance.net/v2/users/' + config.behanceAPI.userID + '/projects?callback=?&api_key=' + config.behanceAPI.apiKey + '&per_page=' + config.behanceAPI.perPage;

      function setPortfolioTemplate() {
        var projectData = JSON.parse(sessionStorage.getItem('behanceProject'));
        renderTemplateFromData(projectData, '#portfolio-template');
      };

      if(sessionStorage.getItem('behanceProject')) {
        setPortfolioTemplate();
      } else {
        $.getJSON(behanceProjectAPI, function(project) {
          var data = JSON.stringify(project);
          sessionStorage.setItem('behanceProject', data);
          setPortfolioTemplate();
        });
      };
      renderTemplate(configData, '#head-template');
      renderTemplate(configData, '#heading-template');
      renderTemplate(configData, '#analytics-template');
    })();

    (function() {
      var risherryData = config.data.user;
      renderTemplate(risherryData, '#external-template');
      renderTemplate(risherryData, '#about-template');
      renderTemplate(risherryData, '#work-template');
      renderTemplate(risherryData, '#talks-template');
      renderTemplate(risherryData, '#license-template');
    })();

    (function() {
      var themesData = config.data.themes;
      renderTemplate(themesData, '#stylesheet-template');
      renderTemplate(themesData, '#themes-template');
    })();

    Handlebars.registerHelper('idFallback', function(object, property) {
      var value = object[property];
      if (value === undefined) {
        /* Fallback on name */
        value = object.name;
        value = value.toLowerCase();
      }
      return value;
    });

    Handlebars.registerHelper('ifCond',function(v1,operator,v2,options) {
      switch (operator)
      {
        case '==':
          return (v1==v2)?options.fn(this):options.inverse(this);
        case '!=':
          return (v1!=v2)?options.fn(this):options.inverse(this);
        case '===':
          return (v1===v2)?options.fn(this):options.inverse(this);
        case '!==':
          return (v1!==v2)?options.fn(this):options.inverse(this);
        case '&&':
          return (v1&&v2)?options.fn(this):options.inverse(this);
        case '||':
          return (v1||v2)?options.fn(this):options.inverse(this);
        case '<':
          return (v1<v2)?options.fn(this):options.inverse(this);
        case '<=':
          return (v1<=v2)?options.fn(this):options.inverse(this);
        case '>':
          return (v1>v2)?options.fn(this):options.inverse(this);
        case '>=':
         return (v1>=v2)?options.fn(this):options.inverse(this);
        default:
          return eval(''+v1+operator+v2)?options.fn(this):options.inverse(this);
      }
    });

    Handlebars.registerPartial('talkTemplate', $('#talk-template').html());

    function renderTemplateFromData(data, templateId) {
      var templateString = $(templateId).html(),
          template    = Handlebars.compile(templateString),
          result      = template(data);
      $(templateId).replaceWith(result);
    };

    function renderTemplate(dataLocation, templateId) {
      $.getJSON(dataLocation, function(data) {
        renderTemplateFromData(data, templateId);
      });
    };
  };
})();