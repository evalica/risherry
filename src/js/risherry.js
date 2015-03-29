var apiKey = '83ALWlFcfphzIjCYB9q0lNx8ARptcRn9';
var userID = 'risherry';
(function() {
  var perPage = 10;
  var behanceProjectAPI = 'http://www.behance.net/v2/users/' + userID + '/projects?callback=?&api_key=' + apiKey + '&per_page=' + perPage;

  function setPortfolioTemplate() {
    var projectData = JSON.parse(sessionStorage.getItem('behanceProject')),
      getTemplate = $('#portfolio-template').html(),
      template    = Handlebars.compile(getTemplate),
      result      = template(projectData);
    $('.portfolio').html(result);
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

  renderTemplate(risherryData, '#external-template', '.external');
  renderTemplate(risherryData, '#about-template', '.about-container');
  renderTemplate(risherryData, '#work-template', '.work-container');
  renderTemplate(risherryData, '#talks-template', '.talks-container');
  renderTemplate(risherryData, '#license-template', '.license-container');

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

function renderTemplate(dataLocation, templateId, containerId) {
  $.getJSON(dataLocation, function(data) {
    var templateString = $(templateId).html(),
        template    = Handlebars.compile(templateString),
        result      = template(data);
    $(containerId).html(result);
  });
};

(function() {
  var themesData = "src/data/themes.json";

  $.getJSON(themesData, function(stylesheets) {
    var getTemplate = $('#stylesheet-template').html(),
        template    = Handlebars.compile(getTemplate),
        result      = template(stylesheets);
    $('#stylesheet-template').remove();
    $('head title').before(result);
  });

  renderTemplate(themesData, '#themes-template', '.themes-container');
})();