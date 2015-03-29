(function() {
  var apiKey = '83ALWlFcfphzIjCYB9q0lNx8ARptcRn9';
  var userID = 'risherry';
  (function() {
    var perPage = 10;
    var behanceProjectAPI = 'http://www.behance.net/v2/users/' + userID + '/projects?callback=?&api_key=' + apiKey + '&per_page=' + perPage;

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
  })();

  (function() {
    var risherryData = "src/data/risherry.json";
    renderTemplate(risherryData, '#external-template');
    renderTemplate(risherryData, '#about-template');
    renderTemplate(risherryData, '#work-template');
    renderTemplate(risherryData, '#talks-template');
    renderTemplate(risherryData, '#license-template');
  })();

  (function() {
    var themesData = "src/data/themes.json";
    renderTemplate(themesData, '#stylesheet-template');
    renderTemplate(themesData, '#themes-template');
  })();

  Handlebars.registerHelper('idFallback', function(object, property) {
    var value = object[property];
    if (value == undefined) {
      /* Fallback on name */
      value = object.name;
      value = value.toLowerCase();
    }
    return value;
  });

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
})();