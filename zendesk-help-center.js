var host = "domain" // <host>.zendesk.com
var email = "email"
var password = "zendeskpassword"
var auth = window.btoa(email + ':' + password)

var Zendesk = {
     categories: function() {
         var defer = $.Deferred();
         $.ajax({
           url: "https://"+host+".zendesk.com/api/v2/help_center/us-en/categories.json?include=translations",
           type: "GET",
           headers: {
              'Content-Type': 'application/json; charset=utf-8',
              'Authorization': 'Basic ' + auth
            },
           dataType: 'json',
             success: defer.resolve,
             error: defer.reject
         });
         return defer.promise();
     }
   }

JSLitmus.test('categories', function(count) {
  while (count--) {
    Zendesk.categories().done(function(guide) {
    });
  }
});
