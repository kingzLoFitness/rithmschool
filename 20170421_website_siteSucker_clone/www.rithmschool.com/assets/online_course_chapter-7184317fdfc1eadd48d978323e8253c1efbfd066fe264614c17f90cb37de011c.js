$(function(){if($(".error").each(function(e,i){var n=$(i);"`"===n.text()&&n.removeClass("error")}),$("#course-content").data("locked-chapter")){emailSignupVerified()||viewSignupModal();var e=$("#mailing-list-link");e&&e.on("click",function(e){e.preventDefault(),emailSignupVerified()||viewSignupModal()})}});