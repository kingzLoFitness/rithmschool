$(function(){$(".course-unit.locked").click(function(){mixpanel.track("Clicked on locked section: "+$(this).text().trim().split("\n")[0]),addLatestEvent()}),$(".course-unit:not('.locked')").click(function(){mixpanel.track("Clicked on unlocked section: "+$(this).text().trim().split("\n")[0]),addLatestEvent()}),emailSignupVerified()&&($(".course-unit.locked .fa-lock").addClass("fa-angle-right"),$(".course-unit").removeClass("locked")),4===$("#course-content").data("chapter")&&$("#next-link, p .apply-now").on("click",function(i){emailSignupVerified()||(i.preventDefault(),viewSignupModal())}),$firstCourseUnit=$(".course-unit").first(),$remainingCourseUnits=$(".course-unit").slice(1),$courseUnit=$(".course-unit"),$courseUnit.on("click","li",function(){$(this).children("a").get(0).click()}),$firstCourseUnit.on("click","h4",function(){var i=$(this);i.siblings("ul").eq(0).slideToggle(300),i.toggleClass("open"),i.find(".fa-2x").toggleClass("fa-angle-right").toggleClass("fa-angle-down")}),$remainingCourseUnits.on("click","h4",function(){if(emailSignupVerified()){var i=$(this);i.siblings("ul").eq(0).slideToggle(300),i.toggleClass("open"),i.find(".fa-2x").toggleClass("fa-angle-right").toggleClass("fa-angle-down")}else viewSignupModal()})});