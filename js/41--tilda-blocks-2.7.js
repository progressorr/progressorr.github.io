function t228__init(recid){var el=$('#rec'+recid);var mobile=el.find('.t228__mobile');var fixedBlock=mobile.css('position')==='fixed'&&mobile.css('display')==='block';setTimeout(function(){el.find('.t-menu__link-item:not(.t-menusub__target-link):not(.tooltipstered):not(.t794__tm-link)').on('click',function(){if($(this).is(".t-menu__link-item.tooltipstered, .t-menu__link-item.t-menusub__target-link, .t-menu__link-item.t794__tm-link, .t-menu__link-item.t966__tm-link")){return}
if(fixedBlock){mobile.trigger('click')}});el.find('.t-menusub__link-item').on('click',function(){if(fixedBlock){mobile.trigger('click')}});el.find('.t228__right_buttons_but .t-btn').on('click',function(){if(fixedBlock){mobile.trigger('click')}})},500);el.find(".t228__centerside").removeClass("t228__centerside_hidden")}
function t228_highlight(){var url=window.location.href;var pathname=window.location.pathname;if(url.substr(url.length-1)=="/"){url=url.slice(0,-1)}
if(pathname.substr(pathname.length-1)=="/"){pathname=pathname.slice(0,-1)}
if(pathname.charAt(0)=="/"){pathname=pathname.slice(1)}
if(pathname==""){pathname="/"}
$(".t228__list_item a[href='"+url+"']").addClass("t-active");$(".t228__list_item a[href='"+url+"/']").addClass("t-active");$(".t228__list_item a[href='"+pathname+"']").addClass("t-active");$(".t228__list_item a[href='/"+pathname+"']").addClass("t-active");$(".t228__list_item a[href='"+pathname+"/']").addClass("t-active");$(".t228__list_item a[href='/"+pathname+"/']").addClass("t-active")}
function t228_checkAnchorLinks(recid){var el=$('#rec'+recid);if($(window).width()>980){var t228_navLinks=el.find(".t228__list_item a:not(.tooltipstered)[href*='#']");if(t228_navLinks.length>0){setTimeout(function(){t228_catchScroll(t228_navLinks)},500)}}}
function t228_catchScroll(t228_navLinks){var t228_clickedSectionId=null,t228_sections=[],t228_sectionIdTonavigationLink=[],t228_interval=100,t228_lastCall,t228_timeoutId;t228_navLinks=$(t228_navLinks.get().reverse());t228_navLinks.each(function(){var t228_cursection=t228_getSectionByHref($(this));if(typeof t228_cursection.attr("id")!="undefined"){t228_sections.push(t228_cursection)}
t228_sectionIdTonavigationLink[t228_cursection.attr("id")]=$(this)});t228_sections.sort(function(a,b){return b.offset().top-a.offset().top});t228_highlightNavLinks(t228_navLinks,t228_sections,t228_sectionIdTonavigationLink,t228_clickedSectionId);t228_navLinks.click(function(){var clickedSection=t228_getSectionByHref($(this));if(!$(this).hasClass("tooltipstered")&&typeof clickedSection.attr("id")!="undefined"){t228_navLinks.removeClass('t-active');$(this).addClass('t-active');t228_clickedSectionId=t228_getSectionByHref($(this)).attr("id")}});$(window).scroll(function(){var t228_now=new Date().getTime();if(t228_lastCall&&t228_now<(t228_lastCall+t228_interval)){clearTimeout(t228_timeoutId);t228_timeoutId=setTimeout(function(){t228_lastCall=t228_now;t228_clickedSectionId=t228_highlightNavLinks(t228_navLinks,t228_sections,t228_sectionIdTonavigationLink,t228_clickedSectionId)},t228_interval-(t228_now-t228_lastCall))}else{t228_lastCall=t228_now;t228_clickedSectionId=t228_highlightNavLinks(t228_navLinks,t228_sections,t228_sectionIdTonavigationLink,t228_clickedSectionId)}})}
function t228_getSectionByHref(curlink){var curLinkValue=curlink.attr('href').replace(/\s+/g,'').replace(/.*#/,'');if(curlink.is('[href*="#rec"]')){return $(".r[id='"+curLinkValue+"']")}else{return $(".r[data-record-type='215']").has("a[name='"+curLinkValue+"']")}}
function t228_highlightNavLinks(t228_navLinks,t228_sections,t228_sectionIdTonavigationLink,t228_clickedSectionId){var t228_scrollPosition=$(window).scrollTop();var t228_valueToReturn=t228_clickedSectionId;if(t228_sections.length!==0&&t228_clickedSectionId===null&&t228_sections[t228_sections.length-1].offset().top>(t228_scrollPosition+300)){t228_navLinks.removeClass('t-active');return null}
$(t228_sections).each(function(e){var t228_curSection=$(this),t228_id=t228_curSection.attr('id'),t228_sectionTop=t228_curSection.offset().top,t228_navLink=t228_sectionIdTonavigationLink[t228_id];if(((t228_scrollPosition+300)>=t228_sectionTop)||(t228_sections[0].attr("id")==t228_id&&t228_scrollPosition>=$(document).height()-$(window).height())){if(t228_clickedSectionId==null&&!t228_navLink.hasClass('t-active')){t228_navLinks.removeClass('t-active');t228_navLink.addClass('t-active');t228_valueToReturn=null}else{if(t228_clickedSectionId!=null&&t228_id==t228_clickedSectionId){t228_valueToReturn=null}}
return!1}});return t228_valueToReturn}
function t228_setWidth(recid){var el=$('#rec'+recid);if($(window).width()>980){el.find(".t228").each(function(){var el=$(this);var left_exist=el.find('.t228__leftcontainer').length;var left_w=el.find('.t228__leftcontainer').outerWidth(!0);var max_w=left_w;var right_exist=el.find('.t228__rightcontainer').length;var right_w=el.find('.t228__rightcontainer').outerWidth(!0);var items_align=el.attr('data-menu-items-align');if(left_w<right_w)max_w=right_w;max_w=Math.ceil(max_w);var center_w=0;el.find('.t228__centercontainer').find('li').each(function(){center_w+=$(this).outerWidth(!0)});var padd_w=40;var maincontainer_width=el.find(".t228__maincontainer").outerWidth();if(maincontainer_width-max_w*2-padd_w*2>center_w+20){if(items_align=="center"||typeof items_align==="undefined"){el.find(".t228__leftside").css("min-width",max_w+"px");el.find(".t228__rightside").css("min-width",max_w+"px");el.find(".t228__list").removeClass("t228__list_hidden")}}else{el.find(".t228__leftside").css("min-width","");el.find(".t228__rightside").css("min-width","")}})}
el.find(".t228__centerside").removeClass("t228__centerside_hidden")}
function t228_setBg(recid){var el=$('#rec'+recid);if($(window).width()>980){el.find(".t228").each(function(){var el=$(this);if(el.attr('data-bgcolor-setbyscript')=="yes"){var bgcolor=el.attr("data-bgcolor-rgba");el.css("background-color",bgcolor)}})}else{el.find(".t228").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-hex");el.css("background-color",bgcolor);el.attr("data-bgcolor-setbyscript","yes")})}}
function t228_appearMenu(recid){var el=$('#rec'+recid);if($(window).width()>980){el.find(".t228").each(function(){var el=$(this);var appearoffset=el.attr("data-appearoffset");if(appearoffset!=""){if(appearoffset.indexOf('vh')>-1){appearoffset=Math.floor((window.innerHeight*(parseInt(appearoffset)/100)))}
appearoffset=parseInt(appearoffset,10);if($(window).scrollTop()>=appearoffset){if(el.css('visibility')=='hidden'){el.finish();el.css("top","-50px");el.css("visibility","visible");var topoffset=el.data('top-offset');if(topoffset&&parseInt(topoffset)>0){el.animate({"opacity":"1","top":topoffset+"px"},200,function(){})}else{el.animate({"opacity":"1","top":"0px"},200,function(){})}}}else{el.stop();el.css("visibility","hidden");el.css("opacity","0")}}})}}
function t228_changebgopacitymenu(recid){var el=$('#rec'+recid);if($(window).width()>980){el.find(".t228").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-rgba");var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");var bgopacityone=el.attr("data-bgopacity");var bgopacitytwo=el.attr("data-bgopacity-two");var menushadow=el.attr("data-menushadow");if(menushadow=='100'){var menushadowvalue=menushadow}else{var menushadowvalue='0.'+menushadow}
if($(window).scrollTop()>20){el.css("background-color",bgcolor_afterscroll);if(bgopacitytwo=='0'||(typeof menushadow=="undefined"&&menushadow==!1)){el.css("box-shadow","none")}else{el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+menushadowvalue+")")}}else{el.css("background-color",bgcolor);if(bgopacityone=='0.0'||(typeof menushadow=="undefined"&&menushadow==!1)){el.css("box-shadow","none")}else{el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+menushadowvalue+")")}}})}}
function t228_createMobileMenu(recid){var el=$("#rec"+recid);var menu=el.find(".t228");var burger=el.find(".t228__mobile");burger.on('click',function(e){menu.fadeToggle(300);burger.toggleClass("t228_opened")});$(window).bind('resize',t_throttle(function(){if($(window).width()>980){menu.fadeIn(0)}}))}
t422_setHeight=function(recid){if($(window).width()>960){t422_checkEqualHeight(recid)}else{$('#rec'+recid+' .t422__img-mobile').height(200);$('#rec'+recid+' .t422__text').height('auto')}};t422_checkEqualHeight=function(recid){var t422__txtel=$('#rec'+recid+' .t422__text');var t422__imgel=$('#rec'+recid+' .t422__img');var t422__textwrapperel=$('#rec'+recid+' .t422__textwrapper');var t422__borderwidth=0;if(t422__txtel.css("border-top-width")&&t422__txtel.css("border-top-width")[1]!='p'){t422__borderwidth=+(t422__txtel.css("border-top-width")[0]+t422__txtel.css('border-top-width')[1])}else{if(t422__txtel.css("border-top-width"))
t422__borderwidth=+(t422__txtel.css("border-top-width")[0])}
if(t422__imgel.height()<(t422__textwrapperel.outerHeight()+t422__borderwidth*2)){t422__imgel.height(t422__textwrapperel.outerHeight()+t422__borderwidth*2)}else{if((t422__imgel.height()-t422__borderwidth*2)>t422__textwrapperel.outerHeight()){t422__textwrapperel.outerHeight(t422__imgel.height()-t422__borderwidth*2)}}};function t498_unifyHeights(recid){$('#rec'+recid+' .t498 .t-container').each(function(){var t498__highestBox=0;$('.t498__col',this).each(function(){var t498__curcol=$(this);var t498__curcolchild=t498__curcol.find('.t498__col-wrapper');if(t498__curcol.height()<t498__curcolchild.height())t498__curcol.height(t498__curcolchild.height());if(t498__curcol.height()>t498__highestBox)t498__highestBox=t498__curcol.height()});if($(window).width()>=960){$('.t498__col',this).css('height',t498__highestBox)}else{$('.t498__col',this).css('height',"auto")}})};function t772_init(recid){$('.t772__container_mobile-flex').bind('touchstart',function(){$('.t772__col').bind('touchmove',function(){if(typeof $(".t-records").attr('data-tilda-mode')=='undefined'){if(window.lazy==='y'||$('#allrecords').attr('data-tilda-lazy')==='yes'){t_onFuncLoad('t_lazyload_update',function(){t_lazyload_update()})}}})}).mouseup(function(){$('.t772__col').unbind('touchend')})}
function t796_init(recid){var el=$("#rec"+recid);var winWidth=$(window).width();var screenMin=el.attr("data-screen-min");var screenMax=el.attr("data-screen-max");if(typeof screenMin!=='undefined'){if(winWidth<parseInt(screenMin,10)){return!1}}
if(typeof screenMax!=='undefined'){if(winWidth>parseInt(screenMax,10)){return!1}}
var shapeEl=el.find(".t796__shape-border");var recs=el.find(".t796").attr("data-shape-rec-ids");if(typeof recs!="undefined"){recs=recs.split(",");recs.forEach(function(rec_id,i,arr){var curRec=$("#rec"+rec_id);var curShapeEl=shapeEl.clone();t796_setColor(el,curShapeEl);t796_addDivider(curRec,curShapeEl)})}else{var excludesBlocks=[215,316,390,651,702,706,708,750,756,766,825,862,868,];var excludes='';excludesBlocks.forEach(function(el){excludes+='[data-record-type=\''+el+'\'],'});if(excludes.slice(-1)===','){excludes=excludes.slice(0,-1)}
var curRec;if(shapeEl.hasClass('t796__shape-border_top')||shapeEl.hasClass('t796__shape-border_top-flip')){curRec=el.nextAll(".r:not("+excludes+")").eq(0)}
if(shapeEl.hasClass('t796__shape-border_bottom')||shapeEl.hasClass('t796__shape-border_bottom-flip')){curRec=el.prevAll(".r:not("+excludes+")").eq(0)}
if(curRec.length!==0){var curShapeEl=shapeEl.clone();t796_setColor(el,curShapeEl);t796_addDivider(curRec,curShapeEl)}}}
function t796_addDivider(curRec,curShapeEl){curRec.attr("data-animationappear","off").removeClass('r_hidden');var coverWrapper=curRec.find(".t-cover");var zeroWrapper=curRec.find(".t396");if(coverWrapper.find('.t557__snow-layer').length>0){curShapeEl.css('z-index',1)}
if(coverWrapper.length>0||zeroWrapper.length>0){if(coverWrapper.length>0){coverWrapper.find(".t-cover__filter").after(curShapeEl)}
if(zeroWrapper.length>0){zeroWrapper.after(curShapeEl);curRec.css("position","relative")}
if(zeroWrapper.find('.t396__filter').length>0){curShapeEl.css('z-index',1)}
curShapeEl.css("display","block")}else{var wrapper=curRec;var curRecType=Number.parseInt(curRec.attr("data-record-type"));if(wrapper.length===0){return!0}
wrapper.append(curShapeEl);wrapper.css("position","relative");var excludesBlocks=[125,554,746,754,776,778,786,858,915,951,];if(excludesBlocks.indexOf(curRecType)===-1){wrapper.children("div").first().css({"position":"relative","z-index":"1"}).addClass("t796_cont-near-shape-divider")}
var blocks=[195,279,675,694,734,938,];if(blocks.indexOf(curRecType)!==-1){curShapeEl.css("z-index",1)}
curShapeEl.css("display","block")}}
function t796_setColor(el,curShapeEl){if(typeof curShapeEl.attr("data-fill-color")!="undefined"){return}
var nearestBlock;if(curShapeEl.hasClass("t796__shape-border_bottom")||curShapeEl.hasClass("t796__shape-border_bottom-flip")){nearestBlock=el.next(".r")}else{nearestBlock=el.prev(".r")}
if(nearestBlock.length===0){return}
var fillColor=nearestBlock.attr("data-bg-color");if(typeof fillColor=="undefined"){return}
curShapeEl.find(".t796__svg").css("fill",fillColor)}
function t815_init(recid){var rec=$('#rec'+recid);var el=rec.find('.t815');var isFixed=(el.css('position')=='fixed');var redactorMode=el.hasClass('t815_redactor-mode');if(!redactorMode){el.removeClass('t815__beforeready');if(isFixed&&el.attr('data-bgopacity-two')){t815_changebgopacitymenu(recid);$(window).bind('scroll',t_throttle(function(){t815_changebgopacitymenu(recid)},200))}
if(isFixed&&el.attr('data-appearoffset')){el.removeClass('t815__beforeready');t815_appearMenu(recid);$(window).bind('scroll',t_throttle(function(){t815_appearMenu(recid)},200))}}
t815_setBg(recid);$(window).bind('resize',t_throttle(function(){t815_setBg(recid)},200))}
function t815_setBg(recid){var window_width=$(window).width();if(window_width>980){$(".t815").each(function(){var el=$(this);if(el.attr('data-bgcolor-setbyscript')=="yes"){var bgcolor=el.attr("data-bgcolor-rgba");el.css("background-color",bgcolor)}})}else{$(".t815").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-hex");el.css("background-color",bgcolor);el.attr("data-bgcolor-setbyscript","yes")})}}
function t815_appearMenu(recid){var window_width=$(window).width();if(window_width>980){$(".t815").each(function(){var el=$(this);var appearoffset=el.attr("data-appearoffset");if(appearoffset!=""){if(appearoffset.indexOf('vh')>-1){appearoffset=Math.floor((window.innerHeight*(parseInt(appearoffset)/100)))}
appearoffset=parseInt(appearoffset,10);if($(window).scrollTop()>=appearoffset){if(el.css('visibility')=='hidden'){el.finish();el.css("top","-50px");el.css("visibility","visible");el.animate({"opacity":"1","top":"0px"},200,function(){})}}else{el.stop();el.css("visibility","hidden")}}})}}
function t815_changebgopacitymenu(recid){var window_width=$(window).width();if(window_width>980){$(".t815").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-rgba");var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");var bgopacityone=el.attr("data-bgopacity");var bgopacitytwo=el.attr("data-bgopacity-two");var menushadow=el.attr("data-menushadow");if(menushadow=='100'){var menushadowvalue=menushadow}else{var menushadowvalue='0.'+menushadow}
if($(window).scrollTop()>20){el.css("background-color",bgcolor_afterscroll);if(bgopacitytwo=='0'||menushadow==' '){el.css("box-shadow","none")}else{el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+menushadowvalue+")")}}else{el.css("background-color",bgcolor);if(bgopacityone=='0.0'||menushadow==' '){el.css("box-shadow","none")}else{el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+menushadowvalue+")")}}})}}
function t899_init(recid){var el=$('#rec'+recid);t899_setMinHeight(recid);$(window).bind('resize',t_throttle(function(){if(typeof window.noAdaptive!=='undefined'&&window.noAdaptive===!0&&$isMobile){return}
t899_setMinHeight(recid)}));el.find('.t899').bind('displayChanged',function(){t899_setMinHeight(recid)});if($isMobile){$(window).on('orientationchange',function(){t899_setMinHeight(recid)})}}
function t899_setMinHeight(recid){var el=$('#rec'+recid);var wrappers=el.find('.t899__wrapper');wrappers.each(function(i,wrapper){var wrapperHeight=$(wrapper).outerHeight();var symbol=$(wrapper).find('.t899__symbol');var symbolHeight=symbol.outerHeight();if(symbolHeight>wrapperHeight){$(wrapper).css('min-height',symbolHeight+'px')}})}