$(document).ready(function() {
    // and "scrape new article" buttons
    var articleContainer = $(".article-container");
    $(document).on("click", ".btn.save", handleArticleSave);
    $(document).on("click", ".scrape-new", handleArticleScrape);
  
    //initPage function 
    initPage();
  
    function initPage() {
      // Empty the article container
      articleContainer.empty();
      $.get("/api/headlines?saved=false")
        .then(function(data) {
          // render headlines to the page
          if (data && data.length) {
            renderArticles(data);
          }
          else {
            
            renderEmpty();
          }
        });
    }
  
    function renderArticles(articles) {
      
      var articlePanels = [];
      
      // panel for article data 
      for (var i = 0; i < articles.length; i++) {
        articlePanels.push(createPanel(articles[i]));
      }
      // append articlePanels 
      articleContainer.append(articlePanels);
    }
  
    function createPanel(article) {
    
      var panel =
        $(["<div class='panel panel-default'>",
          "<div class='panel-heading'>",
          "<h3>",
          article.headline,
          "<a class='btn btn-default save'>",
          "Save Article",
          "</a>",
          "</h3>",
          "</div>",
          "<div class='panel-body'>",
          article.summary,
          "</div>",
          "</div>"
        ].join(""));
      
      panel.data("_id", article._id);
      
      return panel;
    }
  
    function renderEmpty() {
      
      var emptyAlert =
        $(["<div class='alert alert-warning text-center'>",
          "<h4>Uh Oh. Looks like we don't have any new articles.</h4>",
          "</div>",
          "<div class='panel panel-default'>",
          "<div class='panel-heading text-center'>",
          "<h3>What Would You Like To Do?</h3>",
          "</div>",
          "<div class='panel-body text-center'>",
          "<h4><a class='scrape-new'>Try Scraping New Articles</a></h4>",
          "<h4><a href='/saved'>Go to Saved Articles</a></h4>",
          "</div>",
          "</div>"
        ].join(""));
      // Appending data to the page
      articleContainer.append(emptyAlert);
    }
  
    function handleArticleSave() {

      var articleToSave = $(this).parents(".panel").data();
      articleToSave.saved = true;

      $.ajax({
        method: "PATCH",
        url: "/api/headlines",
        data: articleToSave
      })
      .then(function(data) {
       
        if (data.ok) {
          initPage();
        }
      });
    }
  
    function handleArticleScrape() {
      $.get("/api/fetch")
        .then(function(data) {
          initPage();
          bootbox.alert("<h3 class='text-center m-top-80'>" + data.message + "<h3>");
        });
    }
  });