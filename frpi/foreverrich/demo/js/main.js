'use strict';$(function(){$(".loader-container").svenPreloaders({});$(".sven-container").svenPlugin({autoStart:!0,fullDuration:"default",preloadMethod:"tag",preloadFiles:[],fileTimeout:8E3,audioTimeout:8E3,colors:["#E7464F","#CDAA20","#80993B","#07BABA","#9B2C9D"],showAnimationSummary:!1,freezeOnBlur:!0,onTeaserReady:function(){$(".loader-container").hide();$(".controls-nav").css({visibility:"visible"})}});var f=$(".speed-label span"),d=[1,.5,.25,1,1.5,2],b=1,g=d.length;$(".speed-label").on("click",
function(a){a=d[b];var c=isFloat(a)?a:a.toFixed(1);f.html(c+"x");b=b<g-1?b+1:0;$(".sven-container").svenPlugin.changeSpeed(a)});$(".skip-button").on("click",function(a){$(".sven-container").svenPlugin.skipToLast()});$(".movie-button").on("click",function(a){$(".sven-container").svenPlugin.togglePlay()});$(document).on("keydown",function(a){32===a.keyCode&&$(".sven-container").svenPlugin.togglePlay()});$(".sound_button").on("click",function(a){$(".sven-container").svenPlugin.toggleSound()});var c=
$(".movie-button i"),e=$(".sound_button i");$(".sven-container").on("STPlay",function(){c.removeClass("fa-play").removeClass("fa-repeat").addClass("fa-pause")});$(".sven-container").on("STPause",function(){c.removeClass("fa-pause").removeClass("fa-repeat").addClass("fa-play")});$(".sven-container").on("STEnd",function(){c.removeClass("fa-pause").removeClass("fa-play").addClass("fa-repeat")});$(".sven-container").on("STMuted",function(){e.removeClass("fa-volume-up").addClass("fa-volume-off")});$(".sven-container").on("STUnMuted",
function(){e.removeClass("fa-volume-off").addClass("fa-volume-up")});$("#subscription input[type='submit']").on("click submit",function(a){var c=$("#subscription").serialize(),b=$("input",this);b.prop("disabled",!0);$(".subscribe-label").css("visibility","hidden");$(".subscribe-label").css("visibility","visible").html('<i class="fa fa-hourglass-start"></i>adding your email...');$.ajax({type:"POST",url:"php/subscribe.php",data:c,dataType:"json",success:function(a){a.error?($(".subscribe-label").css("visibility",
"hidden"),$(".subscribe-label").css("visibility","visible").html('<i class="fa fa-times"></i>'+a.message),b.prop("disabled",!1)):($(".subscribe-label").css("visibility","hidden"),$(".subscribe-label").css("visibility","visible").html('<i class="fa fa-check"></i>'+a.message))},error:function(){$(".subscribe-label").css("visibility","hidden");$(".subscribe-label").css("visibility","visible").html('<i class="fa fa-times"></i>Problem connecting to server. Please try again');b.prop("disabled",!1)}});a.preventDefault()})});