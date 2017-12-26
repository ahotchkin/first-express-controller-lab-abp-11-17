const SiteController = {}

SiteController.Index = function(req, resp){
  const welcomeText = "This is a home page"
  resp.render{
    welcomeText: welcomeText
  }
}

module.exports = SiteController
