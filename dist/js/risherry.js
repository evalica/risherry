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
      var contentData = config.data.user;
      renderTemplate(contentData, '#external-template');
      renderTemplate(contentData, '#about-template');
      renderTemplate(contentData, '#talks-template');
      renderTemplate(contentData, '#license-template');
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
    Handlebars.registerPartial('videoTemplate', $('#video-template').html());

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