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

  $.getJSON(risherryData, function(external) {
    var getTemplate = $('#external-template').html(),
        template    = Handlebars.compile(getTemplate),
        result      = template(external);
    $('.external').html(result);
  });

  $.getJSON(risherryData, function(about) {
    var getTemplate = $('#about-template').html(),
        template    = Handlebars.compile(getTemplate),
        result      = template(about);
    $('.about-container').html(result);
  });

  $.getJSON(risherryData, function(work) {
    var getTemplate = $('#work-template').html(),
        template    = Handlebars.compile(getTemplate),
        result      = template(work);
    $('.work-container').html(result);
  });

  $.getJSON(risherryData, function(talks) {
    var getTemplate = $('#talks-template').html(),
        template    = Handlebars.compile(getTemplate),
        result      = template(talks);
    $('.talks-container').html(result);
  });

  $.getJSON(risherryData, function(license) {
    var getTemplate = $('#license-template').html(),
        template    = Handlebars.compile(getTemplate),
        result      = template(license);
    $('.license-container').html(result);
  });
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

(function() {
  var risherryData = "src/data/themes.json";

  $.getJSON(risherryData, function(stylesheets) {
    var getTemplate = $('#stylesheet-template').html(),
        template    = Handlebars.compile(getTemplate),
        result      = template(stylesheets);
    $('#stylesheet-template').remove();
    $('head title').before(result);
  });

  $.getJSON(risherryData, function(themes) {
    var getTemplate = $('#themes-template').html(),
        template    = Handlebars.compile(getTemplate),
        result      = template(themes);
    $('.themes-container').html(result);
  });

})();