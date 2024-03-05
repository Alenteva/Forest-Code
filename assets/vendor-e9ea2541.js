var De=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Mi(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Di={};/*!
	By André Rinas, www.andrerinas.de
	Documentation, www.simplelightbox.com
	Available for use under the MIT License
	Version 2.14.2
*/(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;function e(v){"@babel/helpers - typeof";return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(w){return typeof w}:function(w){return w&&typeof Symbol=="function"&&w.constructor===Symbol&&w!==Symbol.prototype?"symbol":typeof w},e(v)}function n(v,w){var o=typeof Symbol<"u"&&v[Symbol.iterator]||v["@@iterator"];if(!o){if(Array.isArray(v)||(o=r(v))||w&&v&&typeof v.length=="number"){o&&(v=o);var d=0,g=function(){};return{s:g,n:function(){return d>=v.length?{done:!0}:{done:!1,value:v[d++]}},e:function(u){throw u},f:g}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var I=!0,O=!1,S;return{s:function(){o=o.call(v)},n:function(){var u=o.next();return I=u.done,u},e:function(u){O=!0,S=u},f:function(){try{!I&&o.return!=null&&o.return()}finally{if(O)throw S}}}}function i(v){return l(v)||a(v)||r(v)||s()}function s(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(v,w){if(v){if(typeof v=="string")return c(v,w);var o=Object.prototype.toString.call(v).slice(8,-1);if(o==="Object"&&v.constructor&&(o=v.constructor.name),o==="Map"||o==="Set")return Array.from(v);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return c(v,w)}}function a(v){if(typeof Symbol<"u"&&v[Symbol.iterator]!=null||v["@@iterator"]!=null)return Array.from(v)}function l(v){if(Array.isArray(v))return c(v)}function c(v,w){(w==null||w>v.length)&&(w=v.length);for(var o=0,d=new Array(w);o<w;o++)d[o]=v[o];return d}function f(v,w){if(!(v instanceof w))throw new TypeError("Cannot call a class as a function")}function p(v,w){for(var o=0;o<w.length;o++){var d=w[o];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(v,d.key,d)}}function m(v,w,o){return w&&p(v.prototype,w),o&&p(v,o),Object.defineProperty(v,"prototype",{writable:!1}),v}function y(v,w,o){return w in v?Object.defineProperty(v,w,{value:o,enumerable:!0,configurable:!0,writable:!0}):v[w]=o,v}var T=function(){function v(w,o){var d=this;if(f(this,v),y(this,"defaultOptions",{sourceAttr:"href",overlay:!0,overlayOpacity:.7,spinner:!0,nav:!0,navText:["&lsaquo;","&rsaquo;"],captions:!0,captionDelay:0,captionSelector:"img",captionType:"attr",captionsData:"title",captionPosition:"bottom",captionClass:"",captionHTML:!0,close:!0,closeText:"&times;",swipeClose:!0,showCounter:!0,fileExt:"png|jpg|jpeg|gif|webp",animationSlide:!0,animationSpeed:250,preloading:!0,enableKeyboard:!0,loop:!0,rel:!1,docClose:!0,swipeTolerance:50,className:"simple-lightbox",widthRatio:.8,heightRatio:.9,scaleImageToRatio:!1,disableRightClick:!1,disableScroll:!0,alertError:!0,alertErrorMessage:"Image not found, next image will be loaded",additionalHtml:!1,history:!0,throttleInterval:0,doubleTapZoom:2,maxZoom:10,htmlClass:"has-lightbox",rtl:!1,fixedClass:"sl-fixed",fadeSpeed:300,uniqueImages:!0,focus:!0,scrollZoom:!0,scrollZoomFactor:.5,download:!1}),y(this,"transitionPrefix",void 0),y(this,"isPassiveEventsSupported",void 0),y(this,"transitionCapable",!1),y(this,"isTouchDevice","ontouchstart"in window),y(this,"isAppleDevice",/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)),y(this,"initialLocationHash",void 0),y(this,"pushStateSupport","pushState"in history),y(this,"isOpen",!1),y(this,"isAnimating",!1),y(this,"isClosing",!1),y(this,"isFadeIn",!1),y(this,"urlChangedOnce",!1),y(this,"hashReseted",!1),y(this,"historyHasChanges",!1),y(this,"historyUpdateTimeout",null),y(this,"currentImage",void 0),y(this,"eventNamespace","simplelightbox"),y(this,"domNodes",{}),y(this,"loadedImages",[]),y(this,"initialImageIndex",0),y(this,"currentImageIndex",0),y(this,"initialSelector",null),y(this,"globalScrollbarWidth",0),y(this,"controlCoordinates",{swipeDiff:0,swipeYDiff:0,swipeStart:0,swipeEnd:0,swipeYStart:0,swipeYEnd:0,mousedown:!1,imageLeft:0,zoomed:!1,containerHeight:0,containerWidth:0,containerOffsetX:0,containerOffsetY:0,imgHeight:0,imgWidth:0,capture:!1,initialOffsetX:0,initialOffsetY:0,initialPointerOffsetX:0,initialPointerOffsetY:0,initialPointerOffsetX2:0,initialPointerOffsetY2:0,initialScale:1,initialPinchDistance:0,pointerOffsetX:0,pointerOffsetY:0,pointerOffsetX2:0,pointerOffsetY2:0,targetOffsetX:0,targetOffsetY:0,targetScale:0,pinchOffsetX:0,pinchOffsetY:0,limitOffsetX:0,limitOffsetY:0,scaleDifference:0,targetPinchDistance:0,touchCount:0,doubleTapped:!1,touchmoveCount:0}),this.options=Object.assign(this.defaultOptions,o),this.isPassiveEventsSupported=this.checkPassiveEventsSupport(),typeof w=="string"?(this.initialSelector=w,this.elements=Array.from(document.querySelectorAll(w))):this.elements=typeof w.length<"u"&&w.length>0?Array.from(w):[w],this.relatedElements=[],this.transitionPrefix=this.calculateTransitionPrefix(),this.transitionCapable=this.transitionPrefix!==!1,this.initialLocationHash=this.hash,this.options.rel&&(this.elements=this.getRelated(this.options.rel)),this.options.uniqueImages){var g=[];this.elements=Array.from(this.elements).filter(function(I){var O=I.getAttribute(d.options.sourceAttr);return g.indexOf(O)===-1?(g.push(O),!0):!1})}this.createDomNodes(),this.options.close&&this.domNodes.wrapper.appendChild(this.domNodes.closeButton),this.options.nav&&this.domNodes.wrapper.appendChild(this.domNodes.navigation),this.options.spinner&&this.domNodes.wrapper.appendChild(this.domNodes.spinner),this.addEventListener(this.elements,"click."+this.eventNamespace,function(I){if(d.isValidLink(I.currentTarget)){if(I.preventDefault(),d.isAnimating)return!1;d.initialImageIndex=d.elements.indexOf(I.currentTarget),d.openImage(I.currentTarget)}}),this.options.docClose&&this.addEventListener(this.domNodes.wrapper,["click."+this.eventNamespace,"touchstart."+this.eventNamespace],function(I){d.isOpen&&I.target===I.currentTarget&&d.close()}),this.options.disableRightClick&&this.addEventListener(document.body,"contextmenu."+this.eventNamespace,function(I){I.target.parentElement.classList.contains("sl-image")&&I.preventDefault()}),this.options.enableKeyboard&&this.addEventListener(document.body,"keyup."+this.eventNamespace,this.throttle(function(I){if(d.controlCoordinates.swipeDiff=0,d.isAnimating&&I.key==="Escape"){d.currentImage.setAttribute("src",""),d.isAnimating=!1,d.close();return}d.isOpen&&(I.preventDefault(),I.key==="Escape"&&d.close(),!d.isAnimating&&["ArrowLeft","ArrowRight"].indexOf(I.key)>-1&&d.loadImage(I.key==="ArrowRight"?1:-1))},this.options.throttleInterval)),this.addEvents()}return m(v,[{key:"checkPassiveEventsSupport",value:function(){var o=!1;try{var d=Object.defineProperty({},"passive",{get:function(){o=!0}});window.addEventListener("testPassive",null,d),window.removeEventListener("testPassive",null,d)}catch{}return o}},{key:"getCaptionElement",value:function(o){if(this.options.captionSelector.startsWith("+")){var d=this.options.captionSelector.replace(/^\+/,"").trimStart(),g=o.nextElementSibling;return g&&g.matches(d)?g:!1}else if(this.options.captionSelector.startsWith(">")){var I=this.options.captionSelector.replace(/^>/,"").trimStart();return o.querySelector(I)}else return o.querySelector(this.options.captionSelector)}},{key:"generateQuerySelector",value:function(o){var d=o.tagName,g=o.id,I=o.className,O=o.parentNode;if(d==="HTML")return"HTML";var S=d;if(S+=g!==""?"#".concat(g):"",I)for(var b=I.trim().split(/\s/),u=0;u<b.length;u++)S+=".".concat(b[u]);for(var h=1,E=o;E.previousElementSibling;E=E.previousElementSibling)h+=1;return S+=":nth-child(".concat(h,")"),"".concat(this.generateQuerySelector(O)," > ").concat(S)}},{key:"createDomNodes",value:function(){if(this.domNodes.overlay=document.createElement("div"),this.domNodes.overlay.classList.add("sl-overlay"),this.domNodes.overlay.dataset.opacityTarget=this.options.overlayOpacity,this.domNodes.closeButton=document.createElement("button"),this.domNodes.closeButton.classList.add("sl-close"),this.domNodes.closeButton.innerHTML=this.options.closeText,this.domNodes.spinner=document.createElement("div"),this.domNodes.spinner.classList.add("sl-spinner"),this.domNodes.spinner.innerHTML="<div></div>",this.domNodes.navigation=document.createElement("div"),this.domNodes.navigation.classList.add("sl-navigation"),this.domNodes.navigation.innerHTML='<button class="sl-prev">'.concat(this.options.navText[0],'</button><button class="sl-next">').concat(this.options.navText[1],"</button>"),this.domNodes.counter=document.createElement("div"),this.domNodes.counter.classList.add("sl-counter"),this.domNodes.counter.innerHTML='<span class="sl-current"></span>/<span class="sl-total"></span>',this.domNodes.download=document.createElement("div"),this.domNodes.download.classList.add("sl-download"),this.domNodes.downloadLink=document.createElement("a"),this.domNodes.downloadLink.setAttribute("download",""),this.domNodes.downloadLink.textContent=this.options.download,this.domNodes.download.appendChild(this.domNodes.downloadLink),this.domNodes.caption=document.createElement("div"),this.domNodes.caption.classList.add("sl-caption","pos-"+this.options.captionPosition),this.options.captionClass){var o,d=this.options.captionClass.split(/[\s,]+/);(o=this.domNodes.caption.classList).add.apply(o,i(d))}this.domNodes.image=document.createElement("div"),this.domNodes.image.classList.add("sl-image"),this.domNodes.wrapper=document.createElement("div"),this.domNodes.wrapper.classList.add("sl-wrapper"),this.domNodes.wrapper.setAttribute("tabindex",-1),this.domNodes.wrapper.setAttribute("role","dialog"),this.domNodes.wrapper.setAttribute("aria-hidden",!1),this.options.className&&this.domNodes.wrapper.classList.add(this.options.className),this.options.rtl&&this.domNodes.wrapper.classList.add("sl-dir-rtl")}},{key:"throttle",value:function(o,d){var g;return function(){g||(o.apply(this,arguments),g=!0,setTimeout(function(){return g=!1},d))}}},{key:"isValidLink",value:function(o){return!this.options.fileExt||o.getAttribute(this.options.sourceAttr)&&new RegExp("("+this.options.fileExt+")($|\\?.*$)","i").test(o.getAttribute(this.options.sourceAttr))}},{key:"calculateTransitionPrefix",value:function(){var o=(document.body||document.documentElement).style;return"transition"in o?"":"WebkitTransition"in o?"-webkit-":"MozTransition"in o?"-moz-":"OTransition"in o?"-o":!1}},{key:"getScrollbarWidth",value:function(){var o=0,d=document.createElement("div");return d.classList.add("sl-scrollbar-measure"),document.body.appendChild(d),o=d.offsetWidth-d.clientWidth,document.body.removeChild(d),o}},{key:"toggleScrollbar",value:function(o){var d=0,g=[].slice.call(document.querySelectorAll("."+this.options.fixedClass));if(o==="hide"){var I=window.innerWidth;if(!I){var O=document.documentElement.getBoundingClientRect();I=O.right-Math.abs(O.left)}if(document.body.clientWidth<I||this.isAppleDevice){var S=parseInt(window.getComputedStyle(document.body).paddingRight||0,10);d=this.getScrollbarWidth(),document.body.dataset.originalPaddingRight=S,(d>0||d==0&&this.isAppleDevice)&&(document.body.classList.add("hidden-scroll"),document.body.style.paddingRight=S+d+"px",g.forEach(function(b){var u=b.style.paddingRight,h=window.getComputedStyle(b)["padding-right"];b.dataset.originalPaddingRight=u,b.style.paddingRight="".concat(parseFloat(h)+d,"px")}))}}else document.body.classList.remove("hidden-scroll"),document.body.style.paddingRight=document.body.dataset.originalPaddingRight+"px",g.forEach(function(b){var u=b.dataset.originalPaddingRight;typeof u<"u"&&(b.style.paddingRight=u)});return d}},{key:"close",value:function(){var o=this;if(!this.isOpen||this.isAnimating||this.isClosing)return!1;this.isClosing=!0;var d=this.relatedElements[this.currentImageIndex];d.dispatchEvent(new Event("close.simplelightbox")),this.options.history&&(this.historyHasChanges=!1,this.hashReseted||this.resetHash()),this.removeEventListener(document,"focusin."+this.eventNamespace),this.fadeOut(this.domNodes.overlay,this.options.fadeSpeed),this.fadeOut(document.querySelectorAll(".sl-image img,  .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter"),this.options.fadeSpeed,function(){o.options.disableScroll&&o.toggleScrollbar("show"),o.options.htmlClass&&o.options.htmlClass!==""&&document.querySelector("html").classList.remove(o.options.htmlClass),document.body.removeChild(o.domNodes.wrapper),o.options.overlay&&document.body.removeChild(o.domNodes.overlay),o.domNodes.additionalHtml=null,o.domNodes.download=null,d.dispatchEvent(new Event("closed.simplelightbox")),o.isClosing=!1}),this.currentImage=null,this.isOpen=!1,this.isAnimating=!1;for(var g in this.controlCoordinates)this.controlCoordinates[g]=0;this.controlCoordinates.mousedown=!1,this.controlCoordinates.zoomed=!1,this.controlCoordinates.capture=!1,this.controlCoordinates.initialScale=this.minMax(1,1,this.options.maxZoom),this.controlCoordinates.doubleTapped=!1}},{key:"hash",get:function(){return window.location.hash.substring(1)}},{key:"preload",value:function(){var o=this,d=this.currentImageIndex,g=this.relatedElements.length,I=d+1<0?g-1:d+1>=g-1?0:d+1,O=d-1<0?g-1:d-1>=g-1?0:d-1,S=new Image,b=new Image;S.addEventListener("load",function(u){var h=u.target.getAttribute("src");o.loadedImages.indexOf(h)===-1&&o.loadedImages.push(h),o.relatedElements[d].dispatchEvent(new Event("nextImageLoaded."+o.eventNamespace))}),S.setAttribute("src",this.relatedElements[I].getAttribute(this.options.sourceAttr)),b.addEventListener("load",function(u){var h=u.target.getAttribute("src");o.loadedImages.indexOf(h)===-1&&o.loadedImages.push(h),o.relatedElements[d].dispatchEvent(new Event("prevImageLoaded."+o.eventNamespace))}),b.setAttribute("src",this.relatedElements[O].getAttribute(this.options.sourceAttr))}},{key:"loadImage",value:function(o){var d=this,g=o;this.options.rtl&&(o=-o),this.relatedElements[this.currentImageIndex].dispatchEvent(new Event("change."+this.eventNamespace)),this.relatedElements[this.currentImageIndex].dispatchEvent(new Event((o===1?"next":"prev")+"."+this.eventNamespace));var I=this.currentImageIndex+o;if(this.isAnimating||(I<0||I>=this.relatedElements.length)&&this.options.loop===!1)return!1;this.currentImageIndex=I<0?this.relatedElements.length-1:I>this.relatedElements.length-1?0:I,this.domNodes.counter.querySelector(".sl-current").innerHTML=this.currentImageIndex+1,this.options.animationSlide&&this.slide(this.options.animationSpeed/1e3,-100*g-this.controlCoordinates.swipeDiff+"px"),this.fadeOut(this.domNodes.image,this.options.fadeSpeed,function(){d.isAnimating=!0,d.isClosing?d.isAnimating=!1:setTimeout(function(){var O=d.relatedElements[d.currentImageIndex];d.currentImage&&(d.currentImage.setAttribute("src",O.getAttribute(d.options.sourceAttr)),d.loadedImages.indexOf(O.getAttribute(d.options.sourceAttr))===-1&&d.show(d.domNodes.spinner),d.domNodes.image.contains(d.domNodes.caption)&&d.domNodes.image.removeChild(d.domNodes.caption),d.adjustImage(g),d.options.preloading&&d.preload())},100)})}},{key:"adjustImage",value:function(o){var d=this;if(!this.currentImage)return!1;var g=new Image,I=window.innerWidth*this.options.widthRatio,O=window.innerHeight*this.options.heightRatio;g.setAttribute("src",this.currentImage.getAttribute("src")),this.currentImage.dataset.scale=1,this.currentImage.dataset.translateX=0,this.currentImage.dataset.translateY=0,this.zoomPanElement(0,0,1),g.addEventListener("error",function(S){d.relatedElements[d.currentImageIndex].dispatchEvent(new Event("error."+d.eventNamespace)),d.isAnimating=!1,d.isOpen=!0,d.domNodes.spinner.style.display="none";var b=o===1||o===-1;if(d.initialImageIndex===d.currentImageIndex&&b)return d.close();d.options.alertError&&alert(d.options.alertErrorMessage),d.loadImage(b?o:1)}),g.addEventListener("load",function(S){typeof o<"u"&&(d.relatedElements[d.currentImageIndex].dispatchEvent(new Event("changed."+d.eventNamespace)),d.relatedElements[d.currentImageIndex].dispatchEvent(new Event((o===1?"nextDone":"prevDone")+"."+d.eventNamespace))),d.options.history&&d.updateURL(),d.loadedImages.indexOf(d.currentImage.getAttribute("src"))===-1&&d.loadedImages.push(d.currentImage.getAttribute("src"));var b=S.target.width,u=S.target.height;if(d.options.scaleImageToRatio||b>I||u>O){var h=b/u>I/O?b/I:u/O;b/=h,u/=h}d.domNodes.image.style.top=(window.innerHeight-u)/2+"px",d.domNodes.image.style.left=(window.innerWidth-b-d.globalScrollbarWidth)/2+"px",d.domNodes.image.style.width=b+"px",d.domNodes.image.style.height=u+"px",d.domNodes.spinner.style.display="none",d.options.focus&&d.forceFocus(),d.fadeIn(d.currentImage,d.options.fadeSpeed,function(){d.options.focus&&d.domNodes.wrapper.focus()}),d.isOpen=!0;var E,P;typeof d.options.captionSelector=="string"?E=d.options.captionSelector==="self"?d.relatedElements[d.currentImageIndex]:d.getCaptionElement(d.relatedElements[d.currentImageIndex]):typeof d.options.captionSelector=="function"&&(E=d.options.captionSelector(d.relatedElements[d.currentImageIndex])),d.options.captions&&E&&(d.options.captionType==="data"?P=E.dataset[d.options.captionsData]:d.options.captionType==="text"?P=E.innerHTML:P=E.getAttribute(d.options.captionsData)),d.options.loop?d.relatedElements.length===1?d.hide(d.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")):d.show(d.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")):(d.currentImageIndex===0&&d.hide(d.domNodes.navigation.querySelector(".sl-prev")),d.currentImageIndex>=d.relatedElements.length-1&&d.hide(d.domNodes.navigation.querySelector(".sl-next")),d.currentImageIndex>0&&d.show(d.domNodes.navigation.querySelector(".sl-prev")),d.currentImageIndex<d.relatedElements.length-1&&d.show(d.domNodes.navigation.querySelector(".sl-next"))),o===1||o===-1?(d.options.animationSlide&&(d.slide(0,100*o+"px"),setTimeout(function(){d.slide(d.options.animationSpeed/1e3,"0px")},50)),d.fadeIn(d.domNodes.image,d.options.fadeSpeed,function(){d.isAnimating=!1,d.setCaption(P,b)})):(d.isAnimating=!1,d.setCaption(P,b)),d.options.additionalHtml&&!d.domNodes.additionalHtml&&(d.domNodes.additionalHtml=document.createElement("div"),d.domNodes.additionalHtml.classList.add("sl-additional-html"),d.domNodes.additionalHtml.innerHTML=d.options.additionalHtml,d.domNodes.image.appendChild(d.domNodes.additionalHtml)),d.options.download&&d.domNodes.downloadLink.setAttribute("href",d.currentImage.getAttribute("src"))})}},{key:"zoomPanElement",value:function(o,d,g){this.currentImage.style[this.transitionPrefix+"transform"]="translate("+o+","+d+") scale("+g+")"}},{key:"minMax",value:function(o,d,g){return o<d?d:o>g?g:o}},{key:"setZoomData",value:function(o,d,g){this.currentImage.dataset.scale=o,this.currentImage.dataset.translateX=d,this.currentImage.dataset.translateY=g}},{key:"hashchangeHandler",value:function(){this.isOpen&&this.hash===this.initialLocationHash&&(this.hashReseted=!0,this.close())}},{key:"addEvents",value:function(){var o=this;if(this.addEventListener(window,"resize."+this.eventNamespace,function(g){o.isOpen&&o.adjustImage()}),this.addEventListener(this.domNodes.closeButton,["click."+this.eventNamespace,"touchstart."+this.eventNamespace],this.close.bind(this)),this.options.history&&setTimeout(function(){o.addEventListener(window,"hashchange."+o.eventNamespace,function(g){o.isOpen&&o.hashchangeHandler()})},40),this.addEventListener(this.domNodes.navigation.getElementsByTagName("button"),"click."+this.eventNamespace,function(g){if(!g.currentTarget.tagName.match(/button/i))return!0;g.preventDefault(),o.controlCoordinates.swipeDiff=0,o.loadImage(g.currentTarget.classList.contains("sl-next")?1:-1)}),this.options.scrollZoom){var d=1;this.addEventListener(this.domNodes.image,["mousewheel","DOMMouseScroll"],function(g){if(o.controlCoordinates.mousedown||o.isAnimating||o.isClosing||!o.isOpen)return!0;o.controlCoordinates.containerHeight==0&&(o.controlCoordinates.containerHeight=o.getDimensions(o.domNodes.image).height,o.controlCoordinates.containerWidth=o.getDimensions(o.domNodes.image).width,o.controlCoordinates.imgHeight=o.getDimensions(o.currentImage).height,o.controlCoordinates.imgWidth=o.getDimensions(o.currentImage).width,o.controlCoordinates.containerOffsetX=o.domNodes.image.offsetLeft,o.controlCoordinates.containerOffsetY=o.domNodes.image.offsetTop,o.controlCoordinates.initialOffsetX=parseFloat(o.currentImage.dataset.translateX),o.controlCoordinates.initialOffsetY=parseFloat(o.currentImage.dataset.translateY));var I=g.delta||g.wheelDelta;I===void 0&&(I=g.detail),I=Math.max(-1,Math.min(1,I)),d+=I*o.options.scrollZoomFactor*d,d=Math.max(1,Math.min(o.options.maxZoom,d)),o.controlCoordinates.targetScale=d;var O=document.documentElement.scrollTop||document.body.scrollTop;o.controlCoordinates.pinchOffsetX=g.pageX,o.controlCoordinates.pinchOffsetY=g.pageY-O||0,o.controlCoordinates.limitOffsetX=(o.controlCoordinates.imgWidth*o.controlCoordinates.targetScale-o.controlCoordinates.containerWidth)/2,o.controlCoordinates.limitOffsetY=(o.controlCoordinates.imgHeight*o.controlCoordinates.targetScale-o.controlCoordinates.containerHeight)/2,o.controlCoordinates.scaleDifference=o.controlCoordinates.targetScale-o.controlCoordinates.initialScale,o.controlCoordinates.targetOffsetX=o.controlCoordinates.imgWidth*o.controlCoordinates.targetScale<=o.controlCoordinates.containerWidth?0:o.minMax(o.controlCoordinates.initialOffsetX-(o.controlCoordinates.pinchOffsetX-o.controlCoordinates.containerOffsetX-o.controlCoordinates.containerWidth/2-o.controlCoordinates.initialOffsetX)/(o.controlCoordinates.targetScale-o.controlCoordinates.scaleDifference)*o.controlCoordinates.scaleDifference,o.controlCoordinates.limitOffsetX*-1,o.controlCoordinates.limitOffsetX),o.controlCoordinates.targetOffsetY=o.controlCoordinates.imgHeight*o.controlCoordinates.targetScale<=o.controlCoordinates.containerHeight?0:o.minMax(o.controlCoordinates.initialOffsetY-(o.controlCoordinates.pinchOffsetY-o.controlCoordinates.containerOffsetY-o.controlCoordinates.containerHeight/2-o.controlCoordinates.initialOffsetY)/(o.controlCoordinates.targetScale-o.controlCoordinates.scaleDifference)*o.controlCoordinates.scaleDifference,o.controlCoordinates.limitOffsetY*-1,o.controlCoordinates.limitOffsetY),o.zoomPanElement(o.controlCoordinates.targetOffsetX+"px",o.controlCoordinates.targetOffsetY+"px",o.controlCoordinates.targetScale),o.controlCoordinates.targetScale>1?(o.controlCoordinates.zoomed=!0,(!o.domNodes.caption.style.opacity||o.domNodes.caption.style.opacity>0)&&o.domNodes.caption.style.display!=="none"&&o.fadeOut(o.domNodes.caption,o.options.fadeSpeed)):(o.controlCoordinates.initialScale===1&&(o.controlCoordinates.zoomed=!1,o.domNodes.caption.style.display==="none"&&o.fadeIn(o.domNodes.caption,o.options.fadeSpeed)),o.controlCoordinates.initialPinchDistance=null,o.controlCoordinates.capture=!1),o.controlCoordinates.initialPinchDistance=o.controlCoordinates.targetPinchDistance,o.controlCoordinates.initialScale=o.controlCoordinates.targetScale,o.controlCoordinates.initialOffsetX=o.controlCoordinates.targetOffsetX,o.controlCoordinates.initialOffsetY=o.controlCoordinates.targetOffsetY,o.setZoomData(o.controlCoordinates.targetScale,o.controlCoordinates.targetOffsetX,o.controlCoordinates.targetOffsetY),o.zoomPanElement(o.controlCoordinates.targetOffsetX+"px",o.controlCoordinates.targetOffsetY+"px",o.controlCoordinates.targetScale)})}this.addEventListener(this.domNodes.image,["touchstart."+this.eventNamespace,"mousedown."+this.eventNamespace],function(g){if(g.target.tagName==="A"&&g.type==="touchstart")return!0;if(g.type==="mousedown")g.preventDefault(),o.controlCoordinates.initialPointerOffsetX=g.clientX,o.controlCoordinates.initialPointerOffsetY=g.clientY,o.controlCoordinates.containerHeight=o.getDimensions(o.domNodes.image).height,o.controlCoordinates.containerWidth=o.getDimensions(o.domNodes.image).width,o.controlCoordinates.imgHeight=o.getDimensions(o.currentImage).height,o.controlCoordinates.imgWidth=o.getDimensions(o.currentImage).width,o.controlCoordinates.containerOffsetX=o.domNodes.image.offsetLeft,o.controlCoordinates.containerOffsetY=o.domNodes.image.offsetTop,o.controlCoordinates.initialOffsetX=parseFloat(o.currentImage.dataset.translateX),o.controlCoordinates.initialOffsetY=parseFloat(o.currentImage.dataset.translateY),o.controlCoordinates.capture=!0;else{if(o.controlCoordinates.touchCount=g.touches.length,o.controlCoordinates.initialPointerOffsetX=g.touches[0].clientX,o.controlCoordinates.initialPointerOffsetY=g.touches[0].clientY,o.controlCoordinates.containerHeight=o.getDimensions(o.domNodes.image).height,o.controlCoordinates.containerWidth=o.getDimensions(o.domNodes.image).width,o.controlCoordinates.imgHeight=o.getDimensions(o.currentImage).height,o.controlCoordinates.imgWidth=o.getDimensions(o.currentImage).width,o.controlCoordinates.containerOffsetX=o.domNodes.image.offsetLeft,o.controlCoordinates.containerOffsetY=o.domNodes.image.offsetTop,o.controlCoordinates.touchCount===1){if(!o.controlCoordinates.doubleTapped)o.controlCoordinates.doubleTapped=!0,setTimeout(function(){o.controlCoordinates.doubleTapped=!1},300);else return o.currentImage.classList.add("sl-transition"),o.controlCoordinates.zoomed?(o.controlCoordinates.initialScale=1,o.setZoomData(o.controlCoordinates.initialScale,0,0),o.zoomPanElement("0px","0px",o.controlCoordinates.initialScale),o.controlCoordinates.zoomed=!1):(o.controlCoordinates.initialScale=o.options.doubleTapZoom,o.setZoomData(o.controlCoordinates.initialScale,0,0),o.zoomPanElement("0px","0px",o.controlCoordinates.initialScale),(!o.domNodes.caption.style.opacity||o.domNodes.caption.style.opacity>0)&&o.domNodes.caption.style.display!=="none"&&o.fadeOut(o.domNodes.caption,o.options.fadeSpeed),o.controlCoordinates.zoomed=!0),setTimeout(function(){o.currentImage&&o.currentImage.classList.remove("sl-transition")},200),!1;o.controlCoordinates.initialOffsetX=parseFloat(o.currentImage.dataset.translateX),o.controlCoordinates.initialOffsetY=parseFloat(o.currentImage.dataset.translateY)}else o.controlCoordinates.touchCount===2&&(o.controlCoordinates.initialPointerOffsetX2=g.touches[1].clientX,o.controlCoordinates.initialPointerOffsetY2=g.touches[1].clientY,o.controlCoordinates.initialOffsetX=parseFloat(o.currentImage.dataset.translateX),o.controlCoordinates.initialOffsetY=parseFloat(o.currentImage.dataset.translateY),o.controlCoordinates.pinchOffsetX=(o.controlCoordinates.initialPointerOffsetX+o.controlCoordinates.initialPointerOffsetX2)/2,o.controlCoordinates.pinchOffsetY=(o.controlCoordinates.initialPointerOffsetY+o.controlCoordinates.initialPointerOffsetY2)/2,o.controlCoordinates.initialPinchDistance=Math.sqrt((o.controlCoordinates.initialPointerOffsetX-o.controlCoordinates.initialPointerOffsetX2)*(o.controlCoordinates.initialPointerOffsetX-o.controlCoordinates.initialPointerOffsetX2)+(o.controlCoordinates.initialPointerOffsetY-o.controlCoordinates.initialPointerOffsetY2)*(o.controlCoordinates.initialPointerOffsetY-o.controlCoordinates.initialPointerOffsetY2)));o.controlCoordinates.capture=!0}return o.controlCoordinates.mousedown?!0:(o.transitionCapable&&(o.controlCoordinates.imageLeft=parseInt(o.domNodes.image.style.left,10)),o.controlCoordinates.mousedown=!0,o.controlCoordinates.swipeDiff=0,o.controlCoordinates.swipeYDiff=0,o.controlCoordinates.swipeStart=g.pageX||g.touches[0].pageX,o.controlCoordinates.swipeYStart=g.pageY||g.touches[0].pageY,!1)}),this.addEventListener(this.domNodes.image,["touchmove."+this.eventNamespace,"mousemove."+this.eventNamespace,"MSPointerMove"],function(g){if(!o.controlCoordinates.mousedown)return!0;if(g.type==="touchmove"){if(o.controlCoordinates.capture===!1)return!1;o.controlCoordinates.pointerOffsetX=g.touches[0].clientX,o.controlCoordinates.pointerOffsetY=g.touches[0].clientY,o.controlCoordinates.touchCount=g.touches.length,o.controlCoordinates.touchmoveCount++,o.controlCoordinates.touchCount>1?(o.controlCoordinates.pointerOffsetX2=g.touches[1].clientX,o.controlCoordinates.pointerOffsetY2=g.touches[1].clientY,o.controlCoordinates.targetPinchDistance=Math.sqrt((o.controlCoordinates.pointerOffsetX-o.controlCoordinates.pointerOffsetX2)*(o.controlCoordinates.pointerOffsetX-o.controlCoordinates.pointerOffsetX2)+(o.controlCoordinates.pointerOffsetY-o.controlCoordinates.pointerOffsetY2)*(o.controlCoordinates.pointerOffsetY-o.controlCoordinates.pointerOffsetY2)),o.controlCoordinates.initialPinchDistance===null&&(o.controlCoordinates.initialPinchDistance=o.controlCoordinates.targetPinchDistance),Math.abs(o.controlCoordinates.initialPinchDistance-o.controlCoordinates.targetPinchDistance)>=1&&(o.controlCoordinates.targetScale=o.minMax(o.controlCoordinates.targetPinchDistance/o.controlCoordinates.initialPinchDistance*o.controlCoordinates.initialScale,1,o.options.maxZoom),o.controlCoordinates.limitOffsetX=(o.controlCoordinates.imgWidth*o.controlCoordinates.targetScale-o.controlCoordinates.containerWidth)/2,o.controlCoordinates.limitOffsetY=(o.controlCoordinates.imgHeight*o.controlCoordinates.targetScale-o.controlCoordinates.containerHeight)/2,o.controlCoordinates.scaleDifference=o.controlCoordinates.targetScale-o.controlCoordinates.initialScale,o.controlCoordinates.targetOffsetX=o.controlCoordinates.imgWidth*o.controlCoordinates.targetScale<=o.controlCoordinates.containerWidth?0:o.minMax(o.controlCoordinates.initialOffsetX-(o.controlCoordinates.pinchOffsetX-o.controlCoordinates.containerOffsetX-o.controlCoordinates.containerWidth/2-o.controlCoordinates.initialOffsetX)/(o.controlCoordinates.targetScale-o.controlCoordinates.scaleDifference)*o.controlCoordinates.scaleDifference,o.controlCoordinates.limitOffsetX*-1,o.controlCoordinates.limitOffsetX),o.controlCoordinates.targetOffsetY=o.controlCoordinates.imgHeight*o.controlCoordinates.targetScale<=o.controlCoordinates.containerHeight?0:o.minMax(o.controlCoordinates.initialOffsetY-(o.controlCoordinates.pinchOffsetY-o.controlCoordinates.containerOffsetY-o.controlCoordinates.containerHeight/2-o.controlCoordinates.initialOffsetY)/(o.controlCoordinates.targetScale-o.controlCoordinates.scaleDifference)*o.controlCoordinates.scaleDifference,o.controlCoordinates.limitOffsetY*-1,o.controlCoordinates.limitOffsetY),o.zoomPanElement(o.controlCoordinates.targetOffsetX+"px",o.controlCoordinates.targetOffsetY+"px",o.controlCoordinates.targetScale),o.controlCoordinates.targetScale>1&&(o.controlCoordinates.zoomed=!0,(!o.domNodes.caption.style.opacity||o.domNodes.caption.style.opacity>0)&&o.domNodes.caption.style.display!=="none"&&o.fadeOut(o.domNodes.caption,o.options.fadeSpeed)),o.controlCoordinates.initialPinchDistance=o.controlCoordinates.targetPinchDistance,o.controlCoordinates.initialScale=o.controlCoordinates.targetScale,o.controlCoordinates.initialOffsetX=o.controlCoordinates.targetOffsetX,o.controlCoordinates.initialOffsetY=o.controlCoordinates.targetOffsetY)):(o.controlCoordinates.targetScale=o.controlCoordinates.initialScale,o.controlCoordinates.limitOffsetX=(o.controlCoordinates.imgWidth*o.controlCoordinates.targetScale-o.controlCoordinates.containerWidth)/2,o.controlCoordinates.limitOffsetY=(o.controlCoordinates.imgHeight*o.controlCoordinates.targetScale-o.controlCoordinates.containerHeight)/2,o.controlCoordinates.targetOffsetX=o.controlCoordinates.imgWidth*o.controlCoordinates.targetScale<=o.controlCoordinates.containerWidth?0:o.minMax(o.controlCoordinates.pointerOffsetX-(o.controlCoordinates.initialPointerOffsetX-o.controlCoordinates.initialOffsetX),o.controlCoordinates.limitOffsetX*-1,o.controlCoordinates.limitOffsetX),o.controlCoordinates.targetOffsetY=o.controlCoordinates.imgHeight*o.controlCoordinates.targetScale<=o.controlCoordinates.containerHeight?0:o.minMax(o.controlCoordinates.pointerOffsetY-(o.controlCoordinates.initialPointerOffsetY-o.controlCoordinates.initialOffsetY),o.controlCoordinates.limitOffsetY*-1,o.controlCoordinates.limitOffsetY),Math.abs(o.controlCoordinates.targetOffsetX)===Math.abs(o.controlCoordinates.limitOffsetX)&&(o.controlCoordinates.initialOffsetX=o.controlCoordinates.targetOffsetX,o.controlCoordinates.initialPointerOffsetX=o.controlCoordinates.pointerOffsetX),Math.abs(o.controlCoordinates.targetOffsetY)===Math.abs(o.controlCoordinates.limitOffsetY)&&(o.controlCoordinates.initialOffsetY=o.controlCoordinates.targetOffsetY,o.controlCoordinates.initialPointerOffsetY=o.controlCoordinates.pointerOffsetY),o.setZoomData(o.controlCoordinates.initialScale,o.controlCoordinates.targetOffsetX,o.controlCoordinates.targetOffsetY),o.zoomPanElement(o.controlCoordinates.targetOffsetX+"px",o.controlCoordinates.targetOffsetY+"px",o.controlCoordinates.targetScale))}if(g.type==="mousemove"&&o.controlCoordinates.mousedown){if(g.type=="touchmove")return!0;if(g.preventDefault(),o.controlCoordinates.capture===!1)return!1;o.controlCoordinates.pointerOffsetX=g.clientX,o.controlCoordinates.pointerOffsetY=g.clientY,o.controlCoordinates.targetScale=o.controlCoordinates.initialScale,o.controlCoordinates.limitOffsetX=(o.controlCoordinates.imgWidth*o.controlCoordinates.targetScale-o.controlCoordinates.containerWidth)/2,o.controlCoordinates.limitOffsetY=(o.controlCoordinates.imgHeight*o.controlCoordinates.targetScale-o.controlCoordinates.containerHeight)/2,o.controlCoordinates.targetOffsetX=o.controlCoordinates.imgWidth*o.controlCoordinates.targetScale<=o.controlCoordinates.containerWidth?0:o.minMax(o.controlCoordinates.pointerOffsetX-(o.controlCoordinates.initialPointerOffsetX-o.controlCoordinates.initialOffsetX),o.controlCoordinates.limitOffsetX*-1,o.controlCoordinates.limitOffsetX),o.controlCoordinates.targetOffsetY=o.controlCoordinates.imgHeight*o.controlCoordinates.targetScale<=o.controlCoordinates.containerHeight?0:o.minMax(o.controlCoordinates.pointerOffsetY-(o.controlCoordinates.initialPointerOffsetY-o.controlCoordinates.initialOffsetY),o.controlCoordinates.limitOffsetY*-1,o.controlCoordinates.limitOffsetY),Math.abs(o.controlCoordinates.targetOffsetX)===Math.abs(o.controlCoordinates.limitOffsetX)&&(o.controlCoordinates.initialOffsetX=o.controlCoordinates.targetOffsetX,o.controlCoordinates.initialPointerOffsetX=o.controlCoordinates.pointerOffsetX),Math.abs(o.controlCoordinates.targetOffsetY)===Math.abs(o.controlCoordinates.limitOffsetY)&&(o.controlCoordinates.initialOffsetY=o.controlCoordinates.targetOffsetY,o.controlCoordinates.initialPointerOffsetY=o.controlCoordinates.pointerOffsetY),o.setZoomData(o.controlCoordinates.initialScale,o.controlCoordinates.targetOffsetX,o.controlCoordinates.targetOffsetY),o.zoomPanElement(o.controlCoordinates.targetOffsetX+"px",o.controlCoordinates.targetOffsetY+"px",o.controlCoordinates.targetScale)}o.controlCoordinates.zoomed||(o.controlCoordinates.swipeEnd=g.pageX||g.touches[0].pageX,o.controlCoordinates.swipeYEnd=g.pageY||g.touches[0].pageY,o.controlCoordinates.swipeDiff=o.controlCoordinates.swipeStart-o.controlCoordinates.swipeEnd,o.controlCoordinates.swipeYDiff=o.controlCoordinates.swipeYStart-o.controlCoordinates.swipeYEnd,o.options.animationSlide&&o.slide(0,-o.controlCoordinates.swipeDiff+"px"))}),this.addEventListener(this.domNodes.image,["touchend."+this.eventNamespace,"mouseup."+this.eventNamespace,"touchcancel."+this.eventNamespace,"mouseleave."+this.eventNamespace,"pointerup","pointercancel","MSPointerUp","MSPointerCancel"],function(g){if(o.isTouchDevice&&g.type==="touchend"&&(o.controlCoordinates.touchCount=g.touches.length,o.controlCoordinates.touchCount===0?(o.currentImage&&o.setZoomData(o.controlCoordinates.initialScale,o.controlCoordinates.targetOffsetX,o.controlCoordinates.targetOffsetY),o.controlCoordinates.initialScale===1&&(o.controlCoordinates.zoomed=!1,o.domNodes.caption.style.display==="none"&&o.fadeIn(o.domNodes.caption,o.options.fadeSpeed)),o.controlCoordinates.initialPinchDistance=null,o.controlCoordinates.capture=!1):o.controlCoordinates.touchCount===1?(o.controlCoordinates.initialPointerOffsetX=g.touches[0].clientX,o.controlCoordinates.initialPointerOffsetY=g.touches[0].clientY):o.controlCoordinates.touchCount>1&&(o.controlCoordinates.initialPinchDistance=null)),o.controlCoordinates.mousedown){o.controlCoordinates.mousedown=!1;var I=!0;o.options.loop||(o.currentImageIndex===0&&o.controlCoordinates.swipeDiff<0&&(I=!1),o.currentImageIndex>=o.relatedElements.length-1&&o.controlCoordinates.swipeDiff>0&&(I=!1)),Math.abs(o.controlCoordinates.swipeDiff)>o.options.swipeTolerance&&I?o.loadImage(o.controlCoordinates.swipeDiff>0?1:-1):o.options.animationSlide&&o.slide(o.options.animationSpeed/1e3,"0px"),o.options.swipeClose&&Math.abs(o.controlCoordinates.swipeYDiff)>50&&Math.abs(o.controlCoordinates.swipeDiff)<o.options.swipeTolerance&&o.close()}}),this.addEventListener(this.domNodes.image,["dblclick"],function(g){if(!o.isTouchDevice)return o.controlCoordinates.initialPointerOffsetX=g.clientX,o.controlCoordinates.initialPointerOffsetY=g.clientY,o.controlCoordinates.containerHeight=o.getDimensions(o.domNodes.image).height,o.controlCoordinates.containerWidth=o.getDimensions(o.domNodes.image).width,o.controlCoordinates.imgHeight=o.getDimensions(o.currentImage).height,o.controlCoordinates.imgWidth=o.getDimensions(o.currentImage).width,o.controlCoordinates.containerOffsetX=o.domNodes.image.offsetLeft,o.controlCoordinates.containerOffsetY=o.domNodes.image.offsetTop,o.currentImage.classList.add("sl-transition"),o.controlCoordinates.zoomed?(o.controlCoordinates.initialScale=1,o.setZoomData(o.controlCoordinates.initialScale,0,0),o.zoomPanElement("0px","0px",o.controlCoordinates.initialScale),o.controlCoordinates.zoomed=!1,o.domNodes.caption.style.display==="none"&&o.fadeIn(o.domNodes.caption,o.options.fadeSpeed)):(o.controlCoordinates.initialScale=o.options.doubleTapZoom,o.setZoomData(o.controlCoordinates.initialScale,0,0),o.zoomPanElement("0px","0px",o.controlCoordinates.initialScale),(!o.domNodes.caption.style.opacity||o.domNodes.caption.style.opacity>0)&&o.domNodes.caption.style.display!=="none"&&o.fadeOut(o.domNodes.caption,o.options.fadeSpeed),o.controlCoordinates.zoomed=!0),setTimeout(function(){o.currentImage&&(o.currentImage.classList.remove("sl-transition"),o.currentImage.style[o.transitionPrefix+"transform-origin"]=null)},200),o.controlCoordinates.capture=!0,!1})}},{key:"getDimensions",value:function(o){var d=window.getComputedStyle(o),g=o.offsetHeight,I=o.offsetWidth,O=parseFloat(d.borderTopWidth),S=parseFloat(d.borderBottomWidth),b=parseFloat(d.paddingTop),u=parseFloat(d.paddingBottom),h=parseFloat(d.borderLeftWidth),E=parseFloat(d.borderRightWidth),P=parseFloat(d.paddingLeft),_=parseFloat(d.paddingRight);return{height:g-S-O-b-u,width:I-h-E-P-_}}},{key:"updateHash",value:function(){var o="pid="+(this.currentImageIndex+1),d=window.location.href.split("#")[0]+"#"+o;this.hashReseted=!1,this.pushStateSupport?window.history[this.historyHasChanges?"replaceState":"pushState"]("",document.title,d):this.historyHasChanges?window.location.replace(d):window.location.hash=o,this.historyHasChanges||(this.urlChangedOnce=!0),this.historyHasChanges=!0}},{key:"resetHash",value:function(){this.hashReseted=!0,this.urlChangedOnce?history.back():this.pushStateSupport?history.pushState("",document.title,window.location.pathname+window.location.search):window.location.hash="",clearTimeout(this.historyUpdateTimeout)}},{key:"updateURL",value:function(){clearTimeout(this.historyUpdateTimeout),this.historyHasChanges?this.historyUpdateTimeout=setTimeout(this.updateHash.bind(this),800):this.updateHash()}},{key:"setCaption",value:function(o,d,g){var I=this;if(this.options.captions&&o&&o!==""&&typeof o<"u"){var O,S=!((O=g??this.options.captionHTML)!==null&&O!==void 0)||O?"innerHTML":"innerText";this.hide(this.domNodes.caption),this.domNodes.caption.style.width=d+"px",this.domNodes.caption[S]=o,this.domNodes.image.appendChild(this.domNodes.caption),setTimeout(function(){I.fadeIn(I.domNodes.caption,I.options.fadeSpeed)},this.options.captionDelay)}}},{key:"slide",value:function(o,d){if(!this.transitionCapable)return this.domNodes.image.style.left=d;this.domNodes.image.style[this.transitionPrefix+"transform"]="translateX("+d+")",this.domNodes.image.style[this.transitionPrefix+"transition"]=this.transitionPrefix+"transform "+o+"s linear"}},{key:"getRelated",value:function(o){var d;return o&&o!==!1&&o!=="nofollow"?d=Array.from(this.elements).filter(function(g){return g.getAttribute("rel")===o}):d=this.elements,d}},{key:"openImage",value:function(o){var d=this;o.dispatchEvent(new Event("show."+this.eventNamespace)),this.globalScrollbarWidth=this.getScrollbarWidth(),this.options.disableScroll&&(this.toggleScrollbar("hide"),this.globalScrollbarWidth=0),this.options.htmlClass&&this.options.htmlClass!==""&&document.querySelector("html").classList.add(this.options.htmlClass),document.body.appendChild(this.domNodes.wrapper),this.domNodes.wrapper.appendChild(this.domNodes.image),this.options.overlay&&document.body.appendChild(this.domNodes.overlay),this.relatedElements=this.getRelated(o.rel),this.options.showCounter&&(this.relatedElements.length==1&&this.domNodes.wrapper.contains(this.domNodes.counter)?this.domNodes.wrapper.removeChild(this.domNodes.counter):this.relatedElements.length>1&&!this.domNodes.wrapper.contains(this.domNodes.counter)&&this.domNodes.wrapper.appendChild(this.domNodes.counter)),this.options.download&&this.domNodes.download&&this.domNodes.wrapper.appendChild(this.domNodes.download),this.isAnimating=!0,this.currentImageIndex=this.relatedElements.indexOf(o);var g=o.getAttribute(this.options.sourceAttr);this.currentImage=document.createElement("img"),this.currentImage.style.display="none",this.currentImage.setAttribute("src",g),this.currentImage.dataset.scale=1,this.currentImage.dataset.translateX=0,this.currentImage.dataset.translateY=0,this.loadedImages.indexOf(g)===-1&&this.loadedImages.push(g),this.domNodes.image.innerHTML="",this.domNodes.image.setAttribute("style",""),this.domNodes.image.appendChild(this.currentImage),this.fadeIn(this.domNodes.overlay,this.options.fadeSpeed),this.fadeIn([this.domNodes.counter,this.domNodes.navigation,this.domNodes.closeButton,this.domNodes.download],this.options.fadeSpeed),this.show(this.domNodes.spinner),this.domNodes.counter.querySelector(".sl-current").innerHTML=this.currentImageIndex+1,this.domNodes.counter.querySelector(".sl-total").innerHTML=this.relatedElements.length,this.adjustImage(),this.options.preloading&&this.preload(),setTimeout(function(){o.dispatchEvent(new Event("shown."+d.eventNamespace))},this.options.animationSpeed)}},{key:"forceFocus",value:function(){var o=this;this.removeEventListener(document,"focusin."+this.eventNamespace),this.addEventListener(document,"focusin."+this.eventNamespace,function(d){document!==d.target&&o.domNodes.wrapper!==d.target&&!o.domNodes.wrapper.contains(d.target)&&o.domNodes.wrapper.focus()})}},{key:"addEventListener",value:function(o,d,g,I){o=this.wrap(o),d=this.wrap(d);var O=n(o),S;try{for(O.s();!(S=O.n()).done;){var b=S.value;b.namespaces||(b.namespaces={});var u=n(d),h;try{for(u.s();!(h=u.n()).done;){var E=h.value,P=I||!1,_=["touchstart","touchmove","mousewheel","DOMMouseScroll"].indexOf(E.split(".")[0])>=0;_&&this.isPassiveEventsSupported&&(e(P)==="object"?P.passive=!0:P={passive:!0}),b.namespaces[E]=g,b.addEventListener(E.split(".")[0],g,P)}}catch(x){u.e(x)}finally{u.f()}}}catch(x){O.e(x)}finally{O.f()}}},{key:"removeEventListener",value:function(o,d){o=this.wrap(o),d=this.wrap(d);var g=n(o),I;try{for(g.s();!(I=g.n()).done;){var O=I.value,S=n(d),b;try{for(S.s();!(b=S.n()).done;){var u=b.value;O.namespaces&&O.namespaces[u]&&(O.removeEventListener(u.split(".")[0],O.namespaces[u]),delete O.namespaces[u])}}catch(h){S.e(h)}finally{S.f()}}}catch(h){g.e(h)}finally{g.f()}}},{key:"fadeOut",value:function(o,d,g){var I=this;o=this.wrap(o);var O=n(o),S;try{for(O.s();!(S=O.n()).done;){var b=S.value;b.style.opacity=parseFloat(b)||window.getComputedStyle(b).getPropertyValue("opacity")}}catch(E){O.e(E)}finally{O.f()}this.isFadeIn=!1;var u=16.66666/(d||this.options.fadeSpeed),h=function E(){var P=parseFloat(o[0].style.opacity);if((P-=u)<0){var _=n(o),x;try{for(_.s();!(x=_.n()).done;){var N=x.value;N.style.display="none",N.style.opacity=1}}catch(Z){_.e(Z)}finally{_.f()}g&&g.call(I,o)}else{var R=n(o),F;try{for(R.s();!(F=R.n()).done;){var oe=F.value;oe.style.opacity=P}}catch(Z){R.e(Z)}finally{R.f()}requestAnimationFrame(E)}};h()}},{key:"fadeIn",value:function(o,d,g,I){var O=this;o=this.wrap(o);var S=n(o),b;try{for(S.s();!(b=S.n()).done;){var u=b.value;u&&(u.style.opacity=0,u.style.display=I||"block")}}catch(_){S.e(_)}finally{S.f()}this.isFadeIn=!0;var h=parseFloat(o[0].dataset.opacityTarget||1),E=16.66666*h/(d||this.options.fadeSpeed),P=function _(){var x=parseFloat(o[0].style.opacity);if((x+=E)>h){var oe=n(o),Z;try{for(oe.s();!(Z=oe.n()).done;){var ke=Z.value;ke&&(ke.style.opacity=h)}}catch(Ce){oe.e(Ce)}finally{oe.f()}g&&g.call(O,o)}else{var N=n(o),R;try{for(N.s();!(R=N.n()).done;){var F=R.value;F&&(F.style.opacity=x)}}catch(Ce){N.e(Ce)}finally{N.f()}if(!O.isFadeIn)return;requestAnimationFrame(_)}};P()}},{key:"hide",value:function(o){o=this.wrap(o);var d=n(o),g;try{for(d.s();!(g=d.n()).done;){var I=g.value;I.style.display!="none"&&(I.dataset.initialDisplay=I.style.display),I.style.display="none"}}catch(O){d.e(O)}finally{d.f()}}},{key:"show",value:function(o,d){o=this.wrap(o);var g=n(o),I;try{for(g.s();!(I=g.n()).done;){var O=I.value;O.style.display=O.dataset.initialDisplay||d||"block"}}catch(S){g.e(S)}finally{g.f()}}},{key:"wrap",value:function(o){return typeof o[Symbol.iterator]=="function"&&typeof o!="string"?o:[o]}},{key:"on",value:function(o,d){o=this.wrap(o);var g=n(this.elements),I;try{for(g.s();!(I=g.n()).done;){var O=I.value;O.fullyNamespacedEvents||(O.fullyNamespacedEvents={});var S=n(o),b;try{for(S.s();!(b=S.n()).done;){var u=b.value;O.fullyNamespacedEvents[u]=d,O.addEventListener(u,d)}}catch(h){S.e(h)}finally{S.f()}}}catch(h){g.e(h)}finally{g.f()}return this}},{key:"off",value:function(o){o=this.wrap(o);var d=n(this.elements),g;try{for(d.s();!(g=d.n()).done;){var I=g.value,O=n(o),S;try{for(O.s();!(S=O.n()).done;){var b=S.value;typeof I.fullyNamespacedEvents<"u"&&b in I.fullyNamespacedEvents&&I.removeEventListener(b,I.fullyNamespacedEvents[b])}}catch(u){O.e(u)}finally{O.f()}}}catch(u){d.e(u)}finally{d.f()}return this}},{key:"open",value:function(o){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;o=o||this.elements[0],typeof jQuery<"u"&&o instanceof jQuery&&(o=o.get(0)),d>0&&(o=this.elements[d]),this.initialImageIndex=this.elements.indexOf(o),this.initialImageIndex>-1&&this.openImage(o)}},{key:"openPosition",value:function(o){var d=this.elements[o];this.open(d,o)}},{key:"next",value:function(){this.loadImage(1)}},{key:"prev",value:function(){this.loadImage(-1)}},{key:"getLighboxData",value:function(){return{currentImageIndex:this.currentImageIndex,currentImage:this.currentImage,globalScrollbarWidth:this.globalScrollbarWidth}}},{key:"destroy",value:function(){this.off(["close."+this.eventNamespace,"closed."+this.eventNamespace,"nextImageLoaded."+this.eventNamespace,"prevImageLoaded."+this.eventNamespace,"change."+this.eventNamespace,"nextDone."+this.eventNamespace,"prevDone."+this.eventNamespace,"error."+this.eventNamespace,"changed."+this.eventNamespace,"next."+this.eventNamespace,"prev."+this.eventNamespace,"show."+this.eventNamespace,"shown."+this.eventNamespace]),this.removeEventListener(this.elements,"click."+this.eventNamespace),this.removeEventListener(document,"focusin."+this.eventNamespace),this.removeEventListener(document.body,"contextmenu."+this.eventNamespace),this.removeEventListener(document.body,"keyup."+this.eventNamespace),this.removeEventListener(this.domNodes.navigation.getElementsByTagName("button"),"click."+this.eventNamespace),this.removeEventListener(this.domNodes.closeButton,"click."+this.eventNamespace),this.removeEventListener(window,"resize."+this.eventNamespace),this.removeEventListener(window,"hashchange."+this.eventNamespace),this.close(),this.isOpen&&(document.body.removeChild(this.domNodes.wrapper),document.body.removeChild(this.domNodes.overlay)),this.elements=null}},{key:"refresh",value:function(){if(!this.initialSelector)throw"refreshing only works when you initialize using a selector!";var o=this.options,d=this.initialSelector;return this.destroy(),this.constructor(d,o),this}}]),v}(),C=T;t.default=C,De.SimpleLightbox=T})(Di);const rh=Mi(Di);var Fi={exports:{}};(function(t,e){(function(n,i){t.exports=i(n)})(typeof De<"u"?De:window||De.window||De.global,function(n){var i={},s="iziToast";document.querySelector("body");var r=!!/Mobi/.test(navigator.userAgent),a=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),l=typeof InstallTrigger<"u",c="ontouchstart"in document.documentElement,f=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],p={info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},m=568,y={};i.children={};var T={id:null,class:"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),typeof window.CustomEvent!="function"){var C=function(S,b){b=b||{bubbles:!1,cancelable:!1,detail:void 0};var u=document.createEvent("CustomEvent");return u.initCustomEvent(S,b.bubbles,b.cancelable,b.detail),u};C.prototype=window.Event.prototype,window.CustomEvent=C}var v=function(S,b,u){if(Object.prototype.toString.call(S)==="[object Object]")for(var h in S)Object.prototype.hasOwnProperty.call(S,h)&&b.call(u,S[h],h,S);else if(S)for(var E=0,P=S.length;E<P;E++)b.call(u,S[E],E,S)},w=function(S,b){var u={};return v(S,function(h,E){u[E]=S[E]}),v(b,function(h,E){u[E]=b[E]}),u},o=function(S){var b=document.createDocumentFragment(),u=document.createElement("div");for(u.innerHTML=S;u.firstChild;)b.appendChild(u.firstChild);return b},d=function(S){var b=btoa(encodeURIComponent(S));return b.replace(/=/g,"")},g=function(S){return S.substring(0,1)=="#"||S.substring(0,3)=="rgb"||S.substring(0,3)=="hsl"},I=function(S){try{return btoa(atob(S))==S}catch{return!1}},O=function(){return{move:function(S,b,u,h){var E,P=.3,_=180;h!==0&&(S.classList.add(s+"-dragged"),S.style.transform="translateX("+h+"px)",h>0?(E=(_-h)/_,E<P&&b.hide(w(u,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),S,"drag")):(E=(_+h)/_,E<P&&b.hide(w(u,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),S,"drag")),S.style.opacity=E,E<P&&((a||l)&&(S.style.left=h+"px"),S.parentNode.style.opacity=P,this.stopMoving(S,null)))},startMoving:function(S,b,u,h){h=h||window.event;var E=c?h.touches[0].clientX:h.clientX,P=S.style.transform.replace("px)","");P=P.replace("translateX(","");var _=E-P;u.transitionIn&&S.classList.remove(u.transitionIn),u.transitionInMobile&&S.classList.remove(u.transitionInMobile),S.style.transition="",c?document.ontouchmove=function(x){x.preventDefault(),x=x||window.event;var N=x.touches[0].clientX,R=N-_;O.move(S,b,u,R)}:document.onmousemove=function(x){x.preventDefault(),x=x||window.event;var N=x.clientX,R=N-_;O.move(S,b,u,R)}},stopMoving:function(S,b){c?document.ontouchmove=function(){}:document.onmousemove=function(){},S.style.opacity="",S.style.transform="",S.classList.contains(s+"-dragged")&&(S.classList.remove(s+"-dragged"),S.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout(function(){S.style.transition=""},400))}}}();return i.setSetting=function(S,b,u){i.children[S][b]=u},i.getSetting=function(S,b){return i.children[S][b]},i.destroy=function(){v(document.querySelectorAll("."+s+"-overlay"),function(S,b){S.remove()}),v(document.querySelectorAll("."+s+"-wrapper"),function(S,b){S.remove()}),v(document.querySelectorAll("."+s),function(S,b){S.remove()}),this.children={},document.removeEventListener(s+"-opened",{},!1),document.removeEventListener(s+"-opening",{},!1),document.removeEventListener(s+"-closing",{},!1),document.removeEventListener(s+"-closed",{},!1),document.removeEventListener("keyup",{},!1),y={}},i.settings=function(S){i.destroy(),y=S,T=w(T,S||{})},v(p,function(S,b){i[b]=function(u){var h=w(y,u||{});h=w(S,h||{}),this.show(h)}}),i.progress=function(S,b,u){var h=this,E=b.getAttribute("data-iziToast-ref"),P=w(this.children[E],S||{}),_=b.querySelector("."+s+"-progressbar div");return{start:function(){typeof P.time.REMAINING>"u"&&(b.classList.remove(s+"-reseted"),_!==null&&(_.style.transition="width "+P.timeout+"ms "+P.progressBarEasing,_.style.width="0%"),P.time.START=new Date().getTime(),P.time.END=P.time.START+P.timeout,P.time.TIMER=setTimeout(function(){clearTimeout(P.time.TIMER),b.classList.contains(s+"-closing")||(h.hide(P,b,"timeout"),typeof u=="function"&&u.apply(h))},P.timeout),h.setSetting(E,"time",P.time))},pause:function(){if(typeof P.time.START<"u"&&!b.classList.contains(s+"-paused")&&!b.classList.contains(s+"-reseted")){if(b.classList.add(s+"-paused"),P.time.REMAINING=P.time.END-new Date().getTime(),clearTimeout(P.time.TIMER),h.setSetting(E,"time",P.time),_!==null){var x=window.getComputedStyle(_),N=x.getPropertyValue("width");_.style.transition="none",_.style.width=N}typeof u=="function"&&setTimeout(function(){u.apply(h)},10)}},resume:function(){typeof P.time.REMAINING<"u"?(b.classList.remove(s+"-paused"),_!==null&&(_.style.transition="width "+P.time.REMAINING+"ms "+P.progressBarEasing,_.style.width="0%"),P.time.END=new Date().getTime()+P.time.REMAINING,P.time.TIMER=setTimeout(function(){clearTimeout(P.time.TIMER),b.classList.contains(s+"-closing")||(h.hide(P,b,"timeout"),typeof u=="function"&&u.apply(h))},P.time.REMAINING),h.setSetting(E,"time",P.time)):this.start()},reset:function(){clearTimeout(P.time.TIMER),delete P.time.REMAINING,h.setSetting(E,"time",P.time),b.classList.add(s+"-reseted"),b.classList.remove(s+"-paused"),_!==null&&(_.style.transition="none",_.style.width="100%"),typeof u=="function"&&setTimeout(function(){u.apply(h)},10)}}},i.hide=function(S,b,u){typeof b!="object"&&(b=document.querySelector(b));var h=this,E=w(this.children[b.getAttribute("data-iziToast-ref")],S||{});E.closedBy=u||null,delete E.time.REMAINING,b.classList.add(s+"-closing"),function(){var x=document.querySelector("."+s+"-overlay");if(x!==null){var N=x.getAttribute("data-iziToast-ref");N=N.split(",");var R=N.indexOf(String(E.ref));R!==-1&&N.splice(R,1),x.setAttribute("data-iziToast-ref",N.join()),N.length===0&&(x.classList.remove("fadeIn"),x.classList.add("fadeOut"),setTimeout(function(){x.remove()},700))}}(),E.transitionIn&&b.classList.remove(E.transitionIn),E.transitionInMobile&&b.classList.remove(E.transitionInMobile),r||window.innerWidth<=m?E.transitionOutMobile&&b.classList.add(E.transitionOutMobile):E.transitionOut&&b.classList.add(E.transitionOut);var P=b.parentNode.offsetHeight;b.parentNode.style.height=P+"px",b.style.pointerEvents="none",(!r||window.innerWidth>m)&&(b.parentNode.style.transitionDelay="0.2s");try{var _=new CustomEvent(s+"-closing",{detail:E,bubbles:!0,cancelable:!0});document.dispatchEvent(_)}catch(x){console.warn(x)}setTimeout(function(){b.parentNode.style.height="0px",b.parentNode.style.overflow="",setTimeout(function(){delete h.children[E.ref],b.parentNode.remove();try{var x=new CustomEvent(s+"-closed",{detail:E,bubbles:!0,cancelable:!0});document.dispatchEvent(x)}catch(N){console.warn(N)}typeof E.onClosed<"u"&&E.onClosed.apply(null,[E,b,u])},1e3)},200),typeof E.onClosing<"u"&&E.onClosing.apply(null,[E,b,u])},i.show=function(S){var b=this,u=w(y,S||{});if(u=w(T,u),u.time={},u.id===null&&(u.id=d(u.title+u.message+u.color)),u.displayMode===1||u.displayMode=="once")try{if(document.querySelectorAll("."+s+"#"+u.id).length>0)return!1}catch{console.warn("["+s+"] Could not find an element with this selector: #"+u.id+". Try to set an valid id.")}if(u.displayMode===2||u.displayMode=="replace")try{v(document.querySelectorAll("."+s+"#"+u.id),function(_,x){b.hide(u,_,"replaced")})}catch{console.warn("["+s+"] Could not find an element with this selector: #"+u.id+". Try to set an valid id.")}u.ref=new Date().getTime()+Math.floor(Math.random()*1e7+1),i.children[u.ref]=u;var h={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),icon:u.iconUrl?document.createElement("img"):document.createElement("i"),wrapper:null};h.toast.setAttribute("data-iziToast-ref",u.ref),h.toast.appendChild(h.toastBody),h.toastCapsule.appendChild(h.toast),function(){if(h.toast.classList.add(s),h.toast.classList.add(s+"-opening"),h.toastCapsule.classList.add(s+"-capsule"),h.toastBody.classList.add(s+"-body"),h.toastTexts.classList.add(s+"-texts"),r||window.innerWidth<=m?u.transitionInMobile&&h.toast.classList.add(u.transitionInMobile):u.transitionIn&&h.toast.classList.add(u.transitionIn),u.class){var _=u.class.split(" ");v(_,function(x,N){h.toast.classList.add(x)})}u.id&&(h.toast.id=u.id),u.rtl&&(h.toast.classList.add(s+"-rtl"),h.toast.setAttribute("dir","rtl")),u.layout>1&&h.toast.classList.add(s+"-layout"+u.layout),u.balloon&&h.toast.classList.add(s+"-balloon"),u.maxWidth&&(isNaN(u.maxWidth)?h.toast.style.maxWidth=u.maxWidth:h.toast.style.maxWidth=u.maxWidth+"px"),(u.theme!==""||u.theme!=="light")&&h.toast.classList.add(s+"-theme-"+u.theme),u.color&&(g(u.color)?h.toast.style.background=u.color:h.toast.classList.add(s+"-color-"+u.color)),u.backgroundColor&&(h.toast.style.background=u.backgroundColor,u.balloon&&(h.toast.style.borderColor=u.backgroundColor))}(),function(){u.image&&(h.cover.classList.add(s+"-cover"),h.cover.style.width=u.imageWidth+"px",I(u.image.replace(/ /g,""))?h.cover.style.backgroundImage="url(data:image/png;base64,"+u.image.replace(/ /g,"")+")":h.cover.style.backgroundImage="url("+u.image+")",u.rtl?h.toastBody.style.marginRight=u.imageWidth+10+"px":h.toastBody.style.marginLeft=u.imageWidth+10+"px",h.toast.appendChild(h.cover))}(),function(){u.close?(h.buttonClose=document.createElement("button"),h.buttonClose.type="button",h.buttonClose.classList.add(s+"-close"),h.buttonClose.addEventListener("click",function(_){_.target,b.hide(u,h.toast,"button")}),h.toast.appendChild(h.buttonClose)):u.rtl?h.toast.style.paddingLeft="18px":h.toast.style.paddingRight="18px"}(),function(){u.progressBar&&(h.progressBar=document.createElement("div"),h.progressBarDiv=document.createElement("div"),h.progressBar.classList.add(s+"-progressbar"),h.progressBarDiv.style.background=u.progressBarColor,h.progressBar.appendChild(h.progressBarDiv),h.toast.appendChild(h.progressBar)),u.timeout&&(u.pauseOnHover&&!u.resetOnHover&&(h.toast.addEventListener("mouseenter",function(_){b.progress(u,h.toast).pause()}),h.toast.addEventListener("mouseleave",function(_){b.progress(u,h.toast).resume()})),u.resetOnHover&&(h.toast.addEventListener("mouseenter",function(_){b.progress(u,h.toast).reset()}),h.toast.addEventListener("mouseleave",function(_){b.progress(u,h.toast).start()})))}(),function(){u.iconUrl?(h.icon.setAttribute("class",s+"-icon"),h.icon.setAttribute("src",u.iconUrl)):u.icon&&(h.icon.setAttribute("class",s+"-icon "+u.icon),u.iconText&&h.icon.appendChild(document.createTextNode(u.iconText)),u.iconColor&&(h.icon.style.color=u.iconColor)),(u.icon||u.iconUrl)&&(u.rtl?h.toastBody.style.paddingRight="33px":h.toastBody.style.paddingLeft="33px",h.toastBody.appendChild(h.icon))}(),function(){u.title.length>0&&(h.strong=document.createElement("strong"),h.strong.classList.add(s+"-title"),h.strong.appendChild(o(u.title)),h.toastTexts.appendChild(h.strong),u.titleColor&&(h.strong.style.color=u.titleColor),u.titleSize&&(isNaN(u.titleSize)?h.strong.style.fontSize=u.titleSize:h.strong.style.fontSize=u.titleSize+"px"),u.titleLineHeight&&(isNaN(u.titleSize)?h.strong.style.lineHeight=u.titleLineHeight:h.strong.style.lineHeight=u.titleLineHeight+"px")),u.message.length>0&&(h.p=document.createElement("p"),h.p.classList.add(s+"-message"),h.p.appendChild(o(u.message)),h.toastTexts.appendChild(h.p),u.messageColor&&(h.p.style.color=u.messageColor),u.messageSize&&(isNaN(u.titleSize)?h.p.style.fontSize=u.messageSize:h.p.style.fontSize=u.messageSize+"px"),u.messageLineHeight&&(isNaN(u.titleSize)?h.p.style.lineHeight=u.messageLineHeight:h.p.style.lineHeight=u.messageLineHeight+"px")),u.title.length>0&&u.message.length>0&&(u.rtl?h.strong.style.marginLeft="10px":u.layout!==2&&!u.rtl&&(h.strong.style.marginRight="10px"))}(),h.toastBody.appendChild(h.toastTexts);var E;(function(){u.inputs.length>0&&(h.inputs.classList.add(s+"-inputs"),v(u.inputs,function(_,x){h.inputs.appendChild(o(_[0])),E=h.inputs.childNodes,E[x].classList.add(s+"-inputs-child"),_[3]&&setTimeout(function(){E[x].focus()},300),E[x].addEventListener(_[1],function(N){var R=_[2];return R(b,h.toast,this,N)})}),h.toastBody.appendChild(h.inputs))})(),function(){u.buttons.length>0&&(h.buttons.classList.add(s+"-buttons"),v(u.buttons,function(_,x){h.buttons.appendChild(o(_[0]));var N=h.buttons.childNodes;N[x].classList.add(s+"-buttons-child"),_[2]&&setTimeout(function(){N[x].focus()},300),N[x].addEventListener("click",function(R){R.preventDefault();var F=_[1];return F(b,h.toast,this,R,E)})})),h.toastBody.appendChild(h.buttons)}(),u.message.length>0&&(u.inputs.length>0||u.buttons.length>0)&&(h.p.style.marginBottom="0"),(u.inputs.length>0||u.buttons.length>0)&&(u.rtl?h.toastTexts.style.marginLeft="10px":h.toastTexts.style.marginRight="10px",u.inputs.length>0&&u.buttons.length>0&&(u.rtl?h.inputs.style.marginLeft="8px":h.inputs.style.marginRight="8px")),function(){h.toastCapsule.style.visibility="hidden",setTimeout(function(){var _=h.toast.offsetHeight,x=h.toast.currentStyle||window.getComputedStyle(h.toast),N=x.marginTop;N=N.split("px"),N=parseInt(N[0]);var R=x.marginBottom;R=R.split("px"),R=parseInt(R[0]),h.toastCapsule.style.visibility="",h.toastCapsule.style.height=_+R+N+"px",setTimeout(function(){h.toastCapsule.style.height="auto",u.target&&(h.toastCapsule.style.overflow="visible")},500),u.timeout&&b.progress(u,h.toast).start()},100)}(),function(){var _=u.position;if(u.target)h.wrapper=document.querySelector(u.target),h.wrapper.classList.add(s+"-target"),u.targetFirst?h.wrapper.insertBefore(h.toastCapsule,h.wrapper.firstChild):h.wrapper.appendChild(h.toastCapsule);else{if(f.indexOf(u.position)==-1){console.warn("["+s+`] Incorrect position.
It can be › `+f);return}r||window.innerWidth<=m?u.position=="bottomLeft"||u.position=="bottomRight"||u.position=="bottomCenter"?_=s+"-wrapper-bottomCenter":u.position=="topLeft"||u.position=="topRight"||u.position=="topCenter"?_=s+"-wrapper-topCenter":_=s+"-wrapper-center":_=s+"-wrapper-"+_,h.wrapper=document.querySelector("."+s+"-wrapper."+_),h.wrapper||(h.wrapper=document.createElement("div"),h.wrapper.classList.add(s+"-wrapper"),h.wrapper.classList.add(_),document.body.appendChild(h.wrapper)),u.position=="topLeft"||u.position=="topCenter"||u.position=="topRight"?h.wrapper.insertBefore(h.toastCapsule,h.wrapper.firstChild):h.wrapper.appendChild(h.toastCapsule)}isNaN(u.zindex)?console.warn("["+s+"] Invalid zIndex."):h.wrapper.style.zIndex=u.zindex}(),function(){u.overlay&&(document.querySelector("."+s+"-overlay.fadeIn")!==null?(h.overlay=document.querySelector("."+s+"-overlay"),h.overlay.setAttribute("data-iziToast-ref",h.overlay.getAttribute("data-iziToast-ref")+","+u.ref),!isNaN(u.zindex)&&u.zindex!==null&&(h.overlay.style.zIndex=u.zindex-1)):(h.overlay.classList.add(s+"-overlay"),h.overlay.classList.add("fadeIn"),h.overlay.style.background=u.overlayColor,h.overlay.setAttribute("data-iziToast-ref",u.ref),!isNaN(u.zindex)&&u.zindex!==null&&(h.overlay.style.zIndex=u.zindex-1),document.querySelector("body").appendChild(h.overlay)),u.overlayClose?(h.overlay.removeEventListener("click",{}),h.overlay.addEventListener("click",function(_){b.hide(u,h.toast,"overlay")})):h.overlay.removeEventListener("click",{}))}(),function(){if(u.animateInside){h.toast.classList.add(s+"-animateInside");var _=[200,100,300];(u.transitionIn=="bounceInLeft"||u.transitionIn=="bounceInRight")&&(_=[400,200,400]),u.title.length>0&&setTimeout(function(){h.strong.classList.add("slideIn")},_[0]),u.message.length>0&&setTimeout(function(){h.p.classList.add("slideIn")},_[1]),(u.icon||u.iconUrl)&&setTimeout(function(){h.icon.classList.add("revealIn")},_[2]);var x=150;u.buttons.length>0&&h.buttons&&setTimeout(function(){v(h.buttons.childNodes,function(N,R){setTimeout(function(){N.classList.add("revealIn")},x),x=x+150})},u.inputs.length>0?150:0),u.inputs.length>0&&h.inputs&&(x=150,v(h.inputs.childNodes,function(N,R){setTimeout(function(){N.classList.add("revealIn")},x),x=x+150}))}}(),u.onOpening.apply(null,[u,h.toast]);try{var P=new CustomEvent(s+"-opening",{detail:u,bubbles:!0,cancelable:!0});document.dispatchEvent(P)}catch(_){console.warn(_)}setTimeout(function(){h.toast.classList.remove(s+"-opening"),h.toast.classList.add(s+"-opened");try{var _=new CustomEvent(s+"-opened",{detail:u,bubbles:!0,cancelable:!0});document.dispatchEvent(_)}catch(x){console.warn(x)}u.onOpened.apply(null,[u,h.toast])},1e3),u.drag&&(c?(h.toast.addEventListener("touchstart",function(_){O.startMoving(this,b,u,_)},!1),h.toast.addEventListener("touchend",function(_){O.stopMoving(this,_)},!1)):(h.toast.addEventListener("mousedown",function(_){_.preventDefault(),O.startMoving(this,b,u,_)},!1),h.toast.addEventListener("mouseup",function(_){_.preventDefault(),O.stopMoving(this,_)},!1))),u.closeOnEscape&&document.addEventListener("keyup",function(_){_=_||window.event,_.keyCode==27&&b.hide(u,h.toast,"esc")}),u.closeOnClick&&h.toast.addEventListener("click",function(_){b.hide(u,h.toast,"toast")}),b.toast=h.toast},i})})(Fi);var Ir=Fi.exports;const oh=Mi(Ir);function Bi(t,e){return function(){return t.apply(e,arguments)}}const{toString:Er}=Object.prototype,{getPrototypeOf:fn}=Object,yt=(t=>e=>{const n=Er.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),K=t=>(t=t.toLowerCase(),e=>yt(e)===t),wt=t=>e=>typeof e===t,{isArray:Ne}=Array,Ue=wt("undefined");function Cr(t){return t!==null&&!Ue(t)&&t.constructor!==null&&!Ue(t.constructor)&&V(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Ui=K("ArrayBuffer");function _r(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Ui(t.buffer),e}const Or=wt("string"),V=wt("function"),Hi=wt("number"),bt=t=>t!==null&&typeof t=="object",Ar=t=>t===!0||t===!1,Qe=t=>{if(yt(t)!=="object")return!1;const e=fn(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Pr=K("Date"),xr=K("File"),Nr=K("Blob"),Lr=K("FileList"),Rr=t=>bt(t)&&V(t.pipe),kr=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||V(t.append)&&((e=yt(t))==="formdata"||e==="object"&&V(t.toString)&&t.toString()==="[object FormData]"))},Mr=K("URLSearchParams"),Dr=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function je(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,s;if(typeof t!="object"&&(t=[t]),Ne(t))for(i=0,s=t.length;i<s;i++)e.call(null,t[i],i,t);else{const r=n?Object.getOwnPropertyNames(t):Object.keys(t),a=r.length;let l;for(i=0;i<a;i++)l=r[i],e.call(null,t[l],l,t)}}function zi(t,e){e=e.toLowerCase();const n=Object.keys(t);let i=n.length,s;for(;i-- >0;)if(s=n[i],e===s.toLowerCase())return s;return null}const Vi=t=>!Ue(t)&&t!=={};function Yt(){const{caseless:t}=Vi(this)&&this||{},e={},n=(i,s)=>{const r=t&&zi(e,s)||s;Qe(e[r])&&Qe(i)?e[r]=Yt(e[r],i):Qe(i)?e[r]=Yt({},i):Ne(i)?e[r]=i.slice():e[r]=i};for(let i=0,s=arguments.length;i<s;i++)arguments[i]&&je(arguments[i],n);return e}const Fr=(t,e,n,{allOwnKeys:i}={})=>(je(e,(s,r)=>{n&&V(s)?t[r]=Bi(s,n):t[r]=s},{allOwnKeys:i}),t),Br=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Ur=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Hr=(t,e,n,i)=>{let s,r,a;const l={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),r=s.length;r-- >0;)a=s[r],(!i||i(a,t,e))&&!l[a]&&(e[a]=t[a],l[a]=!0);t=n!==!1&&fn(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},zr=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},Vr=t=>{if(!t)return null;if(Ne(t))return t;let e=t.length;if(!Hi(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},jr=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&fn(Uint8Array)),Wr=(t,e)=>{const i=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=i.next())&&!s.done;){const r=s.value;e.call(t,r[0],r[1])}},$r=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},Gr=K("HTMLFormElement"),qr=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,s){return i.toUpperCase()+s}),Fn=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Xr=K("RegExp"),ji=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};je(n,(s,r)=>{let a;(a=e(s,r,t))!==!1&&(i[r]=a||s)}),Object.defineProperties(t,i)},Yr=t=>{ji(t,(e,n)=>{if(V(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(V(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Kr=(t,e)=>{const n={},i=s=>{s.forEach(r=>{n[r]=!0})};return Ne(t)?i(t):i(String(t).split(e)),n},Jr=()=>{},Zr=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Pt="abcdefghijklmnopqrstuvwxyz",Bn="0123456789",Wi={DIGIT:Bn,ALPHA:Pt,ALPHA_DIGIT:Pt+Pt.toUpperCase()+Bn},Qr=(t=16,e=Wi.ALPHA_DIGIT)=>{let n="";const{length:i}=e;for(;t--;)n+=e[Math.random()*i|0];return n};function eo(t){return!!(t&&V(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const to=t=>{const e=new Array(10),n=(i,s)=>{if(bt(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[s]=i;const r=Ne(i)?[]:{};return je(i,(a,l)=>{const c=n(a,s+1);!Ue(c)&&(r[l]=c)}),e[s]=void 0,r}}return i};return n(t,0)},no=K("AsyncFunction"),io=t=>t&&(bt(t)||V(t))&&V(t.then)&&V(t.catch),A={isArray:Ne,isArrayBuffer:Ui,isBuffer:Cr,isFormData:kr,isArrayBufferView:_r,isString:Or,isNumber:Hi,isBoolean:Ar,isObject:bt,isPlainObject:Qe,isUndefined:Ue,isDate:Pr,isFile:xr,isBlob:Nr,isRegExp:Xr,isFunction:V,isStream:Rr,isURLSearchParams:Mr,isTypedArray:jr,isFileList:Lr,forEach:je,merge:Yt,extend:Fr,trim:Dr,stripBOM:Br,inherits:Ur,toFlatObject:Hr,kindOf:yt,kindOfTest:K,endsWith:zr,toArray:Vr,forEachEntry:Wr,matchAll:$r,isHTMLForm:Gr,hasOwnProperty:Fn,hasOwnProp:Fn,reduceDescriptors:ji,freezeMethods:Yr,toObjectSet:Kr,toCamelCase:qr,noop:Jr,toFiniteNumber:Zr,findKey:zi,global:{},isContextDefined:Vi,ALPHABET:Wi,generateString:Qr,isSpecCompliantForm:eo,toJSONObject:to,isAsyncFn:no,isThenable:io};function k(t,e,n,i,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),s&&(this.response=s)}A.inherits(k,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:A.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const $i=k.prototype,Gi={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Gi[t]={value:t}});Object.defineProperties(k,Gi);Object.defineProperty($i,"isAxiosError",{value:!0});k.from=(t,e,n,i,s,r)=>{const a=Object.create($i);return A.toFlatObject(t,a,function(c){return c!==Error.prototype},l=>l!=="isAxiosError"),k.call(a,t.message,e,n,i,s),a.cause=t,a.name=t.name,r&&Object.assign(a,r),a};const so=null;function Kt(t){return A.isPlainObject(t)||A.isArray(t)}function qi(t){return A.endsWith(t,"[]")?t.slice(0,-2):t}function Un(t,e,n){return t?t.concat(e).map(function(s,r){return s=qi(s),!n&&r?"["+s+"]":s}).join(n?".":""):e}function ro(t){return A.isArray(t)&&!t.some(Kt)}const oo=A.toFlatObject(A,{},null,function(e){return/^is[A-Z]/.test(e)});function St(t,e,n){if(!A.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=A.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,w){return!A.isUndefined(w[v])});const i=n.metaTokens,s=n.visitor||p,r=n.dots,a=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&A.isSpecCompliantForm(e);if(!A.isFunction(s))throw new TypeError("visitor must be a function");function f(C){if(C===null)return"";if(A.isDate(C))return C.toISOString();if(!c&&A.isBlob(C))throw new k("Blob is not supported. Use a Buffer instead.");return A.isArrayBuffer(C)||A.isTypedArray(C)?c&&typeof Blob=="function"?new Blob([C]):Buffer.from(C):C}function p(C,v,w){let o=C;if(C&&!w&&typeof C=="object"){if(A.endsWith(v,"{}"))v=i?v:v.slice(0,-2),C=JSON.stringify(C);else if(A.isArray(C)&&ro(C)||(A.isFileList(C)||A.endsWith(v,"[]"))&&(o=A.toArray(C)))return v=qi(v),o.forEach(function(g,I){!(A.isUndefined(g)||g===null)&&e.append(a===!0?Un([v],I,r):a===null?v:v+"[]",f(g))}),!1}return Kt(C)?!0:(e.append(Un(w,v,r),f(C)),!1)}const m=[],y=Object.assign(oo,{defaultVisitor:p,convertValue:f,isVisitable:Kt});function T(C,v){if(!A.isUndefined(C)){if(m.indexOf(C)!==-1)throw Error("Circular reference detected in "+v.join("."));m.push(C),A.forEach(C,function(o,d){(!(A.isUndefined(o)||o===null)&&s.call(e,o,A.isString(d)?d.trim():d,v,y))===!0&&T(o,v?v.concat(d):[d])}),m.pop()}}if(!A.isObject(t))throw new TypeError("data must be an object");return T(t),e}function Hn(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function hn(t,e){this._pairs=[],t&&St(t,this,e)}const Xi=hn.prototype;Xi.append=function(e,n){this._pairs.push([e,n])};Xi.toString=function(e){const n=e?function(i){return e.call(this,i,Hn)}:Hn;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function ao(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Yi(t,e,n){if(!e)return t;const i=n&&n.encode||ao,s=n&&n.serialize;let r;if(s?r=s(e,n):r=A.isURLSearchParams(e)?e.toString():new hn(e,n).toString(i),r){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+r}return t}class lo{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){A.forEach(this.handlers,function(i){i!==null&&e(i)})}}const zn=lo,Ki={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},co=typeof URLSearchParams<"u"?URLSearchParams:hn,uo=typeof FormData<"u"?FormData:null,fo=typeof Blob<"u"?Blob:null,ho={isBrowser:!0,classes:{URLSearchParams:co,FormData:uo,Blob:fo},protocols:["http","https","file","blob","url","data"]},Ji=typeof window<"u"&&typeof document<"u",po=(t=>Ji&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),mo=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),go=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ji,hasStandardBrowserEnv:po,hasStandardBrowserWebWorkerEnv:mo},Symbol.toStringTag,{value:"Module"})),$={...go,...ho};function vo(t,e){return St(t,new $.classes.URLSearchParams,Object.assign({visitor:function(n,i,s,r){return $.isNode&&A.isBuffer(n)?(this.append(i,n.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},e))}function yo(t){return A.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function wo(t){const e={},n=Object.keys(t);let i;const s=n.length;let r;for(i=0;i<s;i++)r=n[i],e[r]=t[r];return e}function Zi(t){function e(n,i,s,r){let a=n[r++];if(a==="__proto__")return!0;const l=Number.isFinite(+a),c=r>=n.length;return a=!a&&A.isArray(s)?s.length:a,c?(A.hasOwnProp(s,a)?s[a]=[s[a],i]:s[a]=i,!l):((!s[a]||!A.isObject(s[a]))&&(s[a]=[]),e(n,i,s[a],r)&&A.isArray(s[a])&&(s[a]=wo(s[a])),!l)}if(A.isFormData(t)&&A.isFunction(t.entries)){const n={};return A.forEachEntry(t,(i,s)=>{e(yo(i),s,n,0)}),n}return null}function bo(t,e,n){if(A.isString(t))try{return(e||JSON.parse)(t),A.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const pn={transitional:Ki,adapter:["xhr","http"],transformRequest:[function(e,n){const i=n.getContentType()||"",s=i.indexOf("application/json")>-1,r=A.isObject(e);if(r&&A.isHTMLForm(e)&&(e=new FormData(e)),A.isFormData(e))return s?JSON.stringify(Zi(e)):e;if(A.isArrayBuffer(e)||A.isBuffer(e)||A.isStream(e)||A.isFile(e)||A.isBlob(e))return e;if(A.isArrayBufferView(e))return e.buffer;if(A.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(r){if(i.indexOf("application/x-www-form-urlencoded")>-1)return vo(e,this.formSerializer).toString();if((l=A.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return St(l?{"files[]":e}:e,c&&new c,this.formSerializer)}}return r||s?(n.setContentType("application/json",!1),bo(e)):e}],transformResponse:[function(e){const n=this.transitional||pn.transitional,i=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&A.isString(e)&&(i&&!this.responseType||s)){const a=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(l){if(a)throw l.name==="SyntaxError"?k.from(l,k.ERR_BAD_RESPONSE,this,null,this.response):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:$.classes.FormData,Blob:$.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};A.forEach(["delete","get","head","post","put","patch"],t=>{pn.headers[t]={}});const mn=pn,So=A.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),To=t=>{const e={};let n,i,s;return t&&t.split(`
`).forEach(function(a){s=a.indexOf(":"),n=a.substring(0,s).trim().toLowerCase(),i=a.substring(s+1).trim(),!(!n||e[n]&&So[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},Vn=Symbol("internals");function Me(t){return t&&String(t).trim().toLowerCase()}function et(t){return t===!1||t==null?t:A.isArray(t)?t.map(et):String(t)}function Io(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const Eo=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function xt(t,e,n,i,s){if(A.isFunction(i))return i.call(this,e,n);if(s&&(e=n),!!A.isString(e)){if(A.isString(i))return e.indexOf(i)!==-1;if(A.isRegExp(i))return i.test(e)}}function Co(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function _o(t,e){const n=A.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(s,r,a){return this[i].call(this,e,s,r,a)},configurable:!0})})}class Tt{constructor(e){e&&this.set(e)}set(e,n,i){const s=this;function r(l,c,f){const p=Me(c);if(!p)throw new Error("header name must be a non-empty string");const m=A.findKey(s,p);(!m||s[m]===void 0||f===!0||f===void 0&&s[m]!==!1)&&(s[m||c]=et(l))}const a=(l,c)=>A.forEach(l,(f,p)=>r(f,p,c));return A.isPlainObject(e)||e instanceof this.constructor?a(e,n):A.isString(e)&&(e=e.trim())&&!Eo(e)?a(To(e),n):e!=null&&r(n,e,i),this}get(e,n){if(e=Me(e),e){const i=A.findKey(this,e);if(i){const s=this[i];if(!n)return s;if(n===!0)return Io(s);if(A.isFunction(n))return n.call(this,s,i);if(A.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Me(e),e){const i=A.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||xt(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let s=!1;function r(a){if(a=Me(a),a){const l=A.findKey(i,a);l&&(!n||xt(i,i[l],l,n))&&(delete i[l],s=!0)}}return A.isArray(e)?e.forEach(r):r(e),s}clear(e){const n=Object.keys(this);let i=n.length,s=!1;for(;i--;){const r=n[i];(!e||xt(this,this[r],r,e,!0))&&(delete this[r],s=!0)}return s}normalize(e){const n=this,i={};return A.forEach(this,(s,r)=>{const a=A.findKey(i,r);if(a){n[a]=et(s),delete n[r];return}const l=e?Co(r):String(r).trim();l!==r&&delete n[r],n[l]=et(s),i[l]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return A.forEach(this,(i,s)=>{i!=null&&i!==!1&&(n[s]=e&&A.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(s=>i.set(s)),i}static accessor(e){const i=(this[Vn]=this[Vn]={accessors:{}}).accessors,s=this.prototype;function r(a){const l=Me(a);i[l]||(_o(s,a),i[l]=!0)}return A.isArray(e)?e.forEach(r):r(e),this}}Tt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);A.reduceDescriptors(Tt.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});A.freezeMethods(Tt);const ne=Tt;function Nt(t,e){const n=this||mn,i=e||n,s=ne.from(i.headers);let r=i.data;return A.forEach(t,function(l){r=l.call(n,r,s.normalize(),e?e.status:void 0)}),s.normalize(),r}function Qi(t){return!!(t&&t.__CANCEL__)}function We(t,e,n){k.call(this,t??"canceled",k.ERR_CANCELED,e,n),this.name="CanceledError"}A.inherits(We,k,{__CANCEL__:!0});function Oo(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new k("Request failed with status code "+n.status,[k.ERR_BAD_REQUEST,k.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Ao=$.hasStandardBrowserEnv?{write(t,e,n,i,s,r){const a=[t+"="+encodeURIComponent(e)];A.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),A.isString(i)&&a.push("path="+i),A.isString(s)&&a.push("domain="+s),r===!0&&a.push("secure"),document.cookie=a.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Po(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function xo(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function es(t,e){return t&&!Po(e)?xo(t,e):e}const No=$.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let i;function s(r){let a=r;return e&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return i=s(window.location.href),function(a){const l=A.isString(a)?s(a):a;return l.protocol===i.protocol&&l.host===i.host}}():function(){return function(){return!0}}();function Lo(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Ro(t,e){t=t||10;const n=new Array(t),i=new Array(t);let s=0,r=0,a;return e=e!==void 0?e:1e3,function(c){const f=Date.now(),p=i[r];a||(a=f),n[s]=c,i[s]=f;let m=r,y=0;for(;m!==s;)y+=n[m++],m=m%t;if(s=(s+1)%t,s===r&&(r=(r+1)%t),f-a<e)return;const T=p&&f-p;return T?Math.round(y*1e3/T):void 0}}function jn(t,e){let n=0;const i=Ro(50,250);return s=>{const r=s.loaded,a=s.lengthComputable?s.total:void 0,l=r-n,c=i(l),f=r<=a;n=r;const p={loaded:r,total:a,progress:a?r/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&f?(a-r)/c:void 0,event:s};p[e?"download":"upload"]=!0,t(p)}}const ko=typeof XMLHttpRequest<"u",Mo=ko&&function(t){return new Promise(function(n,i){let s=t.data;const r=ne.from(t.headers).normalize();let{responseType:a,withXSRFToken:l}=t,c;function f(){t.cancelToken&&t.cancelToken.unsubscribe(c),t.signal&&t.signal.removeEventListener("abort",c)}let p;if(A.isFormData(s)){if($.hasStandardBrowserEnv||$.hasStandardBrowserWebWorkerEnv)r.setContentType(!1);else if((p=r.getContentType())!==!1){const[v,...w]=p?p.split(";").map(o=>o.trim()).filter(Boolean):[];r.setContentType([v||"multipart/form-data",...w].join("; "))}}let m=new XMLHttpRequest;if(t.auth){const v=t.auth.username||"",w=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";r.set("Authorization","Basic "+btoa(v+":"+w))}const y=es(t.baseURL,t.url);m.open(t.method.toUpperCase(),Yi(y,t.params,t.paramsSerializer),!0),m.timeout=t.timeout;function T(){if(!m)return;const v=ne.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),o={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:v,config:t,request:m};Oo(function(g){n(g),f()},function(g){i(g),f()},o),m=null}if("onloadend"in m?m.onloadend=T:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(T)},m.onabort=function(){m&&(i(new k("Request aborted",k.ECONNABORTED,t,m)),m=null)},m.onerror=function(){i(new k("Network Error",k.ERR_NETWORK,t,m)),m=null},m.ontimeout=function(){let w=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const o=t.transitional||Ki;t.timeoutErrorMessage&&(w=t.timeoutErrorMessage),i(new k(w,o.clarifyTimeoutError?k.ETIMEDOUT:k.ECONNABORTED,t,m)),m=null},$.hasStandardBrowserEnv&&(l&&A.isFunction(l)&&(l=l(t)),l||l!==!1&&No(y))){const v=t.xsrfHeaderName&&t.xsrfCookieName&&Ao.read(t.xsrfCookieName);v&&r.set(t.xsrfHeaderName,v)}s===void 0&&r.setContentType(null),"setRequestHeader"in m&&A.forEach(r.toJSON(),function(w,o){m.setRequestHeader(o,w)}),A.isUndefined(t.withCredentials)||(m.withCredentials=!!t.withCredentials),a&&a!=="json"&&(m.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&m.addEventListener("progress",jn(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&m.upload&&m.upload.addEventListener("progress",jn(t.onUploadProgress)),(t.cancelToken||t.signal)&&(c=v=>{m&&(i(!v||v.type?new We(null,t,m):v),m.abort(),m=null)},t.cancelToken&&t.cancelToken.subscribe(c),t.signal&&(t.signal.aborted?c():t.signal.addEventListener("abort",c)));const C=Lo(y);if(C&&$.protocols.indexOf(C)===-1){i(new k("Unsupported protocol "+C+":",k.ERR_BAD_REQUEST,t));return}m.send(s||null)})},Jt={http:so,xhr:Mo};A.forEach(Jt,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Wn=t=>`- ${t}`,Do=t=>A.isFunction(t)||t===null||t===!1,ts={getAdapter:t=>{t=A.isArray(t)?t:[t];const{length:e}=t;let n,i;const s={};for(let r=0;r<e;r++){n=t[r];let a;if(i=n,!Do(n)&&(i=Jt[(a=String(n)).toLowerCase()],i===void 0))throw new k(`Unknown adapter '${a}'`);if(i)break;s[a||"#"+r]=i}if(!i){const r=Object.entries(s).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=e?r.length>1?`since :
`+r.map(Wn).join(`
`):" "+Wn(r[0]):"as no adapter specified";throw new k("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return i},adapters:Jt};function Lt(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new We(null,t)}function $n(t){return Lt(t),t.headers=ne.from(t.headers),t.data=Nt.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),ts.getAdapter(t.adapter||mn.adapter)(t).then(function(i){return Lt(t),i.data=Nt.call(t,t.transformResponse,i),i.headers=ne.from(i.headers),i},function(i){return Qi(i)||(Lt(t),i&&i.response&&(i.response.data=Nt.call(t,t.transformResponse,i.response),i.response.headers=ne.from(i.response.headers))),Promise.reject(i)})}const Gn=t=>t instanceof ne?t.toJSON():t;function Pe(t,e){e=e||{};const n={};function i(f,p,m){return A.isPlainObject(f)&&A.isPlainObject(p)?A.merge.call({caseless:m},f,p):A.isPlainObject(p)?A.merge({},p):A.isArray(p)?p.slice():p}function s(f,p,m){if(A.isUndefined(p)){if(!A.isUndefined(f))return i(void 0,f,m)}else return i(f,p,m)}function r(f,p){if(!A.isUndefined(p))return i(void 0,p)}function a(f,p){if(A.isUndefined(p)){if(!A.isUndefined(f))return i(void 0,f)}else return i(void 0,p)}function l(f,p,m){if(m in e)return i(f,p);if(m in t)return i(void 0,f)}const c={url:r,method:r,data:r,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(f,p)=>s(Gn(f),Gn(p),!0)};return A.forEach(Object.keys(Object.assign({},t,e)),function(p){const m=c[p]||s,y=m(t[p],e[p],p);A.isUndefined(y)&&m!==l||(n[p]=y)}),n}const ns="1.6.7",gn={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{gn[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const qn={};gn.transitional=function(e,n,i){function s(r,a){return"[Axios v"+ns+"] Transitional option '"+r+"'"+a+(i?". "+i:"")}return(r,a,l)=>{if(e===!1)throw new k(s(a," has been removed"+(n?" in "+n:"")),k.ERR_DEPRECATED);return n&&!qn[a]&&(qn[a]=!0,console.warn(s(a," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(r,a,l):!0}};function Fo(t,e,n){if(typeof t!="object")throw new k("options must be an object",k.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let s=i.length;for(;s-- >0;){const r=i[s],a=e[r];if(a){const l=t[r],c=l===void 0||a(l,r,t);if(c!==!0)throw new k("option "+r+" must be "+c,k.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new k("Unknown option "+r,k.ERR_BAD_OPTION)}}const Zt={assertOptions:Fo,validators:gn},ae=Zt.validators;class at{constructor(e){this.defaults=e,this.interceptors={request:new zn,response:new zn}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const r=s.stack?s.stack.replace(/^.+\n/,""):"";i.stack?r&&!String(i.stack).endsWith(r.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+r):i.stack=r}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Pe(this.defaults,n);const{transitional:i,paramsSerializer:s,headers:r}=n;i!==void 0&&Zt.assertOptions(i,{silentJSONParsing:ae.transitional(ae.boolean),forcedJSONParsing:ae.transitional(ae.boolean),clarifyTimeoutError:ae.transitional(ae.boolean)},!1),s!=null&&(A.isFunction(s)?n.paramsSerializer={serialize:s}:Zt.assertOptions(s,{encode:ae.function,serialize:ae.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=r&&A.merge(r.common,r[n.method]);r&&A.forEach(["delete","get","head","post","put","patch","common"],C=>{delete r[C]}),n.headers=ne.concat(a,r);const l=[];let c=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(c=c&&v.synchronous,l.unshift(v.fulfilled,v.rejected))});const f=[];this.interceptors.response.forEach(function(v){f.push(v.fulfilled,v.rejected)});let p,m=0,y;if(!c){const C=[$n.bind(this),void 0];for(C.unshift.apply(C,l),C.push.apply(C,f),y=C.length,p=Promise.resolve(n);m<y;)p=p.then(C[m++],C[m++]);return p}y=l.length;let T=n;for(m=0;m<y;){const C=l[m++],v=l[m++];try{T=C(T)}catch(w){v.call(this,w);break}}try{p=$n.call(this,T)}catch(C){return Promise.reject(C)}for(m=0,y=f.length;m<y;)p=p.then(f[m++],f[m++]);return p}getUri(e){e=Pe(this.defaults,e);const n=es(e.baseURL,e.url);return Yi(n,e.params,e.paramsSerializer)}}A.forEach(["delete","get","head","options"],function(e){at.prototype[e]=function(n,i){return this.request(Pe(i||{},{method:e,url:n,data:(i||{}).data}))}});A.forEach(["post","put","patch"],function(e){function n(i){return function(r,a,l){return this.request(Pe(l||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:r,data:a}))}}at.prototype[e]=n(),at.prototype[e+"Form"]=n(!0)});const tt=at;class vn{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(r){n=r});const i=this;this.promise.then(s=>{if(!i._listeners)return;let r=i._listeners.length;for(;r-- >0;)i._listeners[r](s);i._listeners=null}),this.promise.then=s=>{let r;const a=new Promise(l=>{i.subscribe(l),r=l}).then(s);return a.cancel=function(){i.unsubscribe(r)},a},e(function(r,a,l){i.reason||(i.reason=new We(r,a,l),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new vn(function(s){e=s}),cancel:e}}}const Bo=vn;function Uo(t){return function(n){return t.apply(null,n)}}function Ho(t){return A.isObject(t)&&t.isAxiosError===!0}const Qt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Qt).forEach(([t,e])=>{Qt[e]=t});const zo=Qt;function is(t){const e=new tt(t),n=Bi(tt.prototype.request,e);return A.extend(n,tt.prototype,e,{allOwnKeys:!0}),A.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return is(Pe(t,s))},n}const D=is(mn);D.Axios=tt;D.CanceledError=We;D.CancelToken=Bo;D.isCancel=Qi;D.VERSION=ns;D.toFormData=St;D.AxiosError=k;D.Cancel=D.CanceledError;D.all=function(e){return Promise.all(e)};D.spread=Uo;D.isAxiosError=Ho;D.mergeConfig=Pe;D.AxiosHeaders=ne;D.formToJSON=t=>Zi(A.isHTMLForm(t)?new FormData(t):t);D.getAdapter=ts.getAdapter;D.HttpStatusCode=zo;D.default=D;const ah=D;function Xn(t){return t!==null&&typeof t=="object"&&"constructor"in t&&t.constructor===Object}function yn(t,e){t===void 0&&(t={}),e===void 0&&(e={}),Object.keys(e).forEach(n=>{typeof t[n]>"u"?t[n]=e[n]:Xn(e[n])&&Xn(t[n])&&Object.keys(e[n]).length>0&&yn(t[n],e[n])})}const ss={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Le(){const t=typeof document<"u"?document:{};return yn(t,ss),t}const Vo={document:ss,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(t){return typeof setTimeout>"u"?(t(),null):setTimeout(t,0)},cancelAnimationFrame(t){typeof setTimeout>"u"||clearTimeout(t)}};function z(){const t=typeof window<"u"?window:{};return yn(t,Vo),t}function jo(t){return t===void 0&&(t=""),t.trim().split(" ").filter(e=>!!e.trim())}function Wo(t){const e=t;Object.keys(e).forEach(n=>{try{e[n]=null}catch{}try{delete e[n]}catch{}})}function en(t,e){return e===void 0&&(e=0),setTimeout(t,e)}function lt(){return Date.now()}function $o(t){const e=z();let n;return e.getComputedStyle&&(n=e.getComputedStyle(t,null)),!n&&t.currentStyle&&(n=t.currentStyle),n||(n=t.style),n}function Go(t,e){e===void 0&&(e="x");const n=z();let i,s,r;const a=$o(t);return n.WebKitCSSMatrix?(s=a.transform||a.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(l=>l.replace(",",".")).join(", ")),r=new n.WebKitCSSMatrix(s==="none"?"":s)):(r=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=r.toString().split(",")),e==="x"&&(n.WebKitCSSMatrix?s=r.m41:i.length===16?s=parseFloat(i[12]):s=parseFloat(i[4])),e==="y"&&(n.WebKitCSSMatrix?s=r.m42:i.length===16?s=parseFloat(i[13]):s=parseFloat(i[5])),s||0}function Ke(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"}function qo(t){return typeof window<"u"&&typeof window.HTMLElement<"u"?t instanceof HTMLElement:t&&(t.nodeType===1||t.nodeType===11)}function H(){const t=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const i=n<0||arguments.length<=n?void 0:arguments[n];if(i!=null&&!qo(i)){const s=Object.keys(Object(i)).filter(r=>e.indexOf(r)<0);for(let r=0,a=s.length;r<a;r+=1){const l=s[r],c=Object.getOwnPropertyDescriptor(i,l);c!==void 0&&c.enumerable&&(Ke(t[l])&&Ke(i[l])?i[l].__swiper__?t[l]=i[l]:H(t[l],i[l]):!Ke(t[l])&&Ke(i[l])?(t[l]={},i[l].__swiper__?t[l]=i[l]:H(t[l],i[l])):t[l]=i[l])}}}return t}function Je(t,e,n){t.style.setProperty(e,n)}function rs(t){let{swiper:e,targetPosition:n,side:i}=t;const s=z(),r=-e.translate;let a=null,l;const c=e.params.speed;e.wrapperEl.style.scrollSnapType="none",s.cancelAnimationFrame(e.cssModeFrameID);const f=n>r?"next":"prev",p=(y,T)=>f==="next"&&y>=T||f==="prev"&&y<=T,m=()=>{l=new Date().getTime(),a===null&&(a=l);const y=Math.max(Math.min((l-a)/c,1),0),T=.5-Math.cos(y*Math.PI)/2;let C=r+T*(n-r);if(p(C,n)&&(C=n),e.wrapperEl.scrollTo({[i]:C}),p(C,n)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[i]:C})}),s.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=s.requestAnimationFrame(m)};m()}function Q(t,e){return e===void 0&&(e=""),[...t.children].filter(n=>n.matches(e))}function ct(t){try{console.warn(t);return}catch{}}function tn(t,e){e===void 0&&(e=[]);const n=document.createElement(t);return n.classList.add(...Array.isArray(e)?e:jo(e)),n}function Xo(t,e){const n=[];for(;t.previousElementSibling;){const i=t.previousElementSibling;e?i.matches(e)&&n.push(i):n.push(i),t=i}return n}function Yo(t,e){const n=[];for(;t.nextElementSibling;){const i=t.nextElementSibling;e?i.matches(e)&&n.push(i):n.push(i),t=i}return n}function he(t,e){return z().getComputedStyle(t,null).getPropertyValue(e)}function Yn(t){let e=t,n;if(e){for(n=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(n+=1);return n}}function Ko(t,e){const n=[];let i=t.parentElement;for(;i;)e?i.matches(e)&&n.push(i):n.push(i),i=i.parentElement;return n}function Kn(t,e,n){const i=z();return n?t[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):t.offsetWidth}let Rt;function Jo(){const t=z(),e=Le();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch)}}function os(){return Rt||(Rt=Jo()),Rt}let kt;function Zo(t){let{userAgent:e}=t===void 0?{}:t;const n=os(),i=z(),s=i.navigator.platform,r=e||i.navigator.userAgent,a={ios:!1,android:!1},l=i.screen.width,c=i.screen.height,f=r.match(/(Android);?[\s\/]+([\d.]+)?/);let p=r.match(/(iPad).*OS\s([\d_]+)/);const m=r.match(/(iPod)(.*OS\s([\d_]+))?/),y=!p&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),T=s==="Win32";let C=s==="MacIntel";const v=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!p&&C&&n.touch&&v.indexOf(`${l}x${c}`)>=0&&(p=r.match(/(Version)\/([\d.]+)/),p||(p=[0,1,"13_0_0"]),C=!1),f&&!T&&(a.os="android",a.android=!0),(p||y||m)&&(a.os="ios",a.ios=!0),a}function as(t){return t===void 0&&(t={}),kt||(kt=Zo(t)),kt}let Mt;function Qo(){const t=z(),e=as();let n=!1;function i(){const l=t.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(i()){const l=String(t.navigator.userAgent);if(l.includes("Version/")){const[c,f]=l.split("Version/")[1].split(" ")[0].split(".").map(p=>Number(p));n=c<16||c===16&&f<2}}const s=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),r=i(),a=r||s&&e.ios;return{isSafari:n||r,needPerspectiveFix:n,need3dFix:a,isWebView:s}}function ea(){return Mt||(Mt=Qo()),Mt}function ta(t){let{swiper:e,on:n,emit:i}=t;const s=z();let r=null,a=null;const l=()=>{!e||e.destroyed||!e.initialized||(i("beforeResize"),i("resize"))},c=()=>{!e||e.destroyed||!e.initialized||(r=new ResizeObserver(m=>{a=s.requestAnimationFrame(()=>{const{width:y,height:T}=e;let C=y,v=T;m.forEach(w=>{let{contentBoxSize:o,contentRect:d,target:g}=w;g&&g!==e.el||(C=d?d.width:(o[0]||o).inlineSize,v=d?d.height:(o[0]||o).blockSize)}),(C!==y||v!==T)&&l()})}),r.observe(e.el))},f=()=>{a&&s.cancelAnimationFrame(a),r&&r.unobserve&&e.el&&(r.unobserve(e.el),r=null)},p=()=>{!e||e.destroyed||!e.initialized||i("orientationchange")};n("init",()=>{if(e.params.resizeObserver&&typeof s.ResizeObserver<"u"){c();return}s.addEventListener("resize",l),s.addEventListener("orientationchange",p)}),n("destroy",()=>{f(),s.removeEventListener("resize",l),s.removeEventListener("orientationchange",p)})}function na(t){let{swiper:e,extendParams:n,on:i,emit:s}=t;const r=[],a=z(),l=function(p,m){m===void 0&&(m={});const y=a.MutationObserver||a.WebkitMutationObserver,T=new y(C=>{if(e.__preventObserver__)return;if(C.length===1){s("observerUpdate",C[0]);return}const v=function(){s("observerUpdate",C[0])};a.requestAnimationFrame?a.requestAnimationFrame(v):a.setTimeout(v,0)});T.observe(p,{attributes:typeof m.attributes>"u"?!0:m.attributes,childList:typeof m.childList>"u"?!0:m.childList,characterData:typeof m.characterData>"u"?!0:m.characterData}),r.push(T)},c=()=>{if(e.params.observer){if(e.params.observeParents){const p=Ko(e.hostEl);for(let m=0;m<p.length;m+=1)l(p[m])}l(e.hostEl,{childList:e.params.observeSlideChildren}),l(e.wrapperEl,{attributes:!1})}},f=()=>{r.forEach(p=>{p.disconnect()}),r.splice(0,r.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),i("init",c),i("destroy",f)}var ia={on(t,e,n){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;const s=n?"unshift":"push";return t.split(" ").forEach(r=>{i.eventsListeners[r]||(i.eventsListeners[r]=[]),i.eventsListeners[r][s](e)}),i},once(t,e,n){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;function s(){i.off(t,s),s.__emitterProxy&&delete s.__emitterProxy;for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];e.apply(i,a)}return s.__emitterProxy=e,i.on(t,s,n)},onAny(t,e){const n=this;if(!n.eventsListeners||n.destroyed||typeof t!="function")return n;const i=e?"unshift":"push";return n.eventsAnyListeners.indexOf(t)<0&&n.eventsAnyListeners[i](t),n},offAny(t){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const n=e.eventsAnyListeners.indexOf(t);return n>=0&&e.eventsAnyListeners.splice(n,1),e},off(t,e){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||t.split(" ").forEach(i=>{typeof e>"u"?n.eventsListeners[i]=[]:n.eventsListeners[i]&&n.eventsListeners[i].forEach((s,r)=>{(s===e||s.__emitterProxy&&s.__emitterProxy===e)&&n.eventsListeners[i].splice(r,1)})}),n},emit(){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let e,n,i;for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return typeof r[0]=="string"||Array.isArray(r[0])?(e=r[0],n=r.slice(1,r.length),i=t):(e=r[0].events,n=r[0].data,i=r[0].context||t),n.unshift(i),(Array.isArray(e)?e:e.split(" ")).forEach(c=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(f=>{f.apply(i,[c,...n])}),t.eventsListeners&&t.eventsListeners[c]&&t.eventsListeners[c].forEach(f=>{f.apply(i,n)})}),t}};function sa(){const t=this;let e,n;const i=t.el;typeof t.params.width<"u"&&t.params.width!==null?e=t.params.width:e=i.clientWidth,typeof t.params.height<"u"&&t.params.height!==null?n=t.params.height:n=i.clientHeight,!(e===0&&t.isHorizontal()||n===0&&t.isVertical())&&(e=e-parseInt(he(i,"padding-left")||0,10)-parseInt(he(i,"padding-right")||0,10),n=n-parseInt(he(i,"padding-top")||0,10)-parseInt(he(i,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(n)&&(n=0),Object.assign(t,{width:e,height:n,size:t.isHorizontal()?e:n}))}function ra(){const t=this;function e(E,P){return parseFloat(E.getPropertyValue(t.getDirectionLabel(P))||0)}const n=t.params,{wrapperEl:i,slidesEl:s,size:r,rtlTranslate:a,wrongRTL:l}=t,c=t.virtual&&n.virtual.enabled,f=c?t.virtual.slides.length:t.slides.length,p=Q(s,`.${t.params.slideClass}, swiper-slide`),m=c?t.virtual.slides.length:p.length;let y=[];const T=[],C=[];let v=n.slidesOffsetBefore;typeof v=="function"&&(v=n.slidesOffsetBefore.call(t));let w=n.slidesOffsetAfter;typeof w=="function"&&(w=n.slidesOffsetAfter.call(t));const o=t.snapGrid.length,d=t.slidesGrid.length;let g=n.spaceBetween,I=-v,O=0,S=0;if(typeof r>"u")return;typeof g=="string"&&g.indexOf("%")>=0?g=parseFloat(g.replace("%",""))/100*r:typeof g=="string"&&(g=parseFloat(g)),t.virtualSize=-g,p.forEach(E=>{a?E.style.marginLeft="":E.style.marginRight="",E.style.marginBottom="",E.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(Je(i,"--swiper-centered-offset-before",""),Je(i,"--swiper-centered-offset-after",""));const b=n.grid&&n.grid.rows>1&&t.grid;b?t.grid.initSlides(p):t.grid&&t.grid.unsetSlides();let u;const h=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(E=>typeof n.breakpoints[E].slidesPerView<"u").length>0;for(let E=0;E<m;E+=1){u=0;let P;if(p[E]&&(P=p[E]),b&&t.grid.updateSlide(E,P,p),!(p[E]&&he(P,"display")==="none")){if(n.slidesPerView==="auto"){h&&(p[E].style[t.getDirectionLabel("width")]="");const _=getComputedStyle(P),x=P.style.transform,N=P.style.webkitTransform;if(x&&(P.style.transform="none"),N&&(P.style.webkitTransform="none"),n.roundLengths)u=t.isHorizontal()?Kn(P,"width",!0):Kn(P,"height",!0);else{const R=e(_,"width"),F=e(_,"padding-left"),oe=e(_,"padding-right"),Z=e(_,"margin-left"),ke=e(_,"margin-right"),Ce=_.getPropertyValue("box-sizing");if(Ce&&Ce==="border-box")u=R+Z+ke;else{const{clientWidth:Sr,offsetWidth:Tr}=P;u=R+F+oe+Z+ke+(Tr-Sr)}}x&&(P.style.transform=x),N&&(P.style.webkitTransform=N),n.roundLengths&&(u=Math.floor(u))}else u=(r-(n.slidesPerView-1)*g)/n.slidesPerView,n.roundLengths&&(u=Math.floor(u)),p[E]&&(p[E].style[t.getDirectionLabel("width")]=`${u}px`);p[E]&&(p[E].swiperSlideSize=u),C.push(u),n.centeredSlides?(I=I+u/2+O/2+g,O===0&&E!==0&&(I=I-r/2-g),E===0&&(I=I-r/2-g),Math.abs(I)<1/1e3&&(I=0),n.roundLengths&&(I=Math.floor(I)),S%n.slidesPerGroup===0&&y.push(I),T.push(I)):(n.roundLengths&&(I=Math.floor(I)),(S-Math.min(t.params.slidesPerGroupSkip,S))%t.params.slidesPerGroup===0&&y.push(I),T.push(I),I=I+u+g),t.virtualSize+=u+g,O=u,S+=1}}if(t.virtualSize=Math.max(t.virtualSize,r)+w,a&&l&&(n.effect==="slide"||n.effect==="coverflow")&&(i.style.width=`${t.virtualSize+g}px`),n.setWrapperSize&&(i.style[t.getDirectionLabel("width")]=`${t.virtualSize+g}px`),b&&t.grid.updateWrapperSize(u,y),!n.centeredSlides){const E=[];for(let P=0;P<y.length;P+=1){let _=y[P];n.roundLengths&&(_=Math.floor(_)),y[P]<=t.virtualSize-r&&E.push(_)}y=E,Math.floor(t.virtualSize-r)-Math.floor(y[y.length-1])>1&&y.push(t.virtualSize-r)}if(c&&n.loop){const E=C[0]+g;if(n.slidesPerGroup>1){const P=Math.ceil((t.virtual.slidesBefore+t.virtual.slidesAfter)/n.slidesPerGroup),_=E*n.slidesPerGroup;for(let x=0;x<P;x+=1)y.push(y[y.length-1]+_)}for(let P=0;P<t.virtual.slidesBefore+t.virtual.slidesAfter;P+=1)n.slidesPerGroup===1&&y.push(y[y.length-1]+E),T.push(T[T.length-1]+E),t.virtualSize+=E}if(y.length===0&&(y=[0]),g!==0){const E=t.isHorizontal()&&a?"marginLeft":t.getDirectionLabel("marginRight");p.filter((P,_)=>!n.cssMode||n.loop?!0:_!==p.length-1).forEach(P=>{P.style[E]=`${g}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let E=0;C.forEach(_=>{E+=_+(g||0)}),E-=g;const P=E-r;y=y.map(_=>_<=0?-v:_>P?P+w:_)}if(n.centerInsufficientSlides){let E=0;if(C.forEach(P=>{E+=P+(g||0)}),E-=g,E<r){const P=(r-E)/2;y.forEach((_,x)=>{y[x]=_-P}),T.forEach((_,x)=>{T[x]=_+P})}}if(Object.assign(t,{slides:p,snapGrid:y,slidesGrid:T,slidesSizesGrid:C}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){Je(i,"--swiper-centered-offset-before",`${-y[0]}px`),Je(i,"--swiper-centered-offset-after",`${t.size/2-C[C.length-1]/2}px`);const E=-t.snapGrid[0],P=-t.slidesGrid[0];t.snapGrid=t.snapGrid.map(_=>_+E),t.slidesGrid=t.slidesGrid.map(_=>_+P)}if(m!==f&&t.emit("slidesLengthChange"),y.length!==o&&(t.params.watchOverflow&&t.checkOverflow(),t.emit("snapGridLengthChange")),T.length!==d&&t.emit("slidesGridLengthChange"),n.watchSlidesProgress&&t.updateSlidesOffset(),t.emit("slidesUpdated"),!c&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const E=`${n.containerModifierClass}backface-hidden`,P=t.el.classList.contains(E);m<=n.maxBackfaceHiddenSlides?P||t.el.classList.add(E):P&&t.el.classList.remove(E)}}function oa(t){const e=this,n=[],i=e.virtual&&e.params.virtual.enabled;let s=0,r;typeof t=="number"?e.setTransition(t):t===!0&&e.setTransition(e.params.speed);const a=l=>i?e.slides[e.getSlideIndexByData(l)]:e.slides[l];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(l=>{n.push(l)});else for(r=0;r<Math.ceil(e.params.slidesPerView);r+=1){const l=e.activeIndex+r;if(l>e.slides.length&&!i)break;n.push(a(l))}else n.push(a(e.activeIndex));for(r=0;r<n.length;r+=1)if(typeof n[r]<"u"){const l=n[r].offsetHeight;s=l>s?l:s}(s||s===0)&&(e.wrapperEl.style.height=`${s}px`)}function aa(){const t=this,e=t.slides,n=t.isElement?t.isHorizontal()?t.wrapperEl.offsetLeft:t.wrapperEl.offsetTop:0;for(let i=0;i<e.length;i+=1)e[i].swiperSlideOffset=(t.isHorizontal()?e[i].offsetLeft:e[i].offsetTop)-n-t.cssOverflowAdjustment()}function la(t){t===void 0&&(t=this&&this.translate||0);const e=this,n=e.params,{slides:i,rtlTranslate:s,snapGrid:r}=e;if(i.length===0)return;typeof i[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let a=-t;s&&(a=t),i.forEach(c=>{c.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass)}),e.visibleSlidesIndexes=[],e.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*e.size:typeof l=="string"&&(l=parseFloat(l));for(let c=0;c<i.length;c+=1){const f=i[c];let p=f.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(p-=i[0].swiperSlideOffset);const m=(a+(n.centeredSlides?e.minTranslate():0)-p)/(f.swiperSlideSize+l),y=(a-r[0]+(n.centeredSlides?e.minTranslate():0)-p)/(f.swiperSlideSize+l),T=-(a-p),C=T+e.slidesSizesGrid[c],v=T>=0&&T<=e.size-e.slidesSizesGrid[c];(T>=0&&T<e.size-1||C>1&&C<=e.size||T<=0&&C>=e.size)&&(e.visibleSlides.push(f),e.visibleSlidesIndexes.push(c),i[c].classList.add(n.slideVisibleClass)),v&&i[c].classList.add(n.slideFullyVisibleClass),f.progress=s?-m:m,f.originalProgress=s?-y:y}}function ca(t){const e=this;if(typeof t>"u"){const p=e.rtlTranslate?-1:1;t=e&&e.translate&&e.translate*p||0}const n=e.params,i=e.maxTranslate()-e.minTranslate();let{progress:s,isBeginning:r,isEnd:a,progressLoop:l}=e;const c=r,f=a;if(i===0)s=0,r=!0,a=!0;else{s=(t-e.minTranslate())/i;const p=Math.abs(t-e.minTranslate())<1,m=Math.abs(t-e.maxTranslate())<1;r=p||s<=0,a=m||s>=1,p&&(s=0),m&&(s=1)}if(n.loop){const p=e.getSlideIndexByData(0),m=e.getSlideIndexByData(e.slides.length-1),y=e.slidesGrid[p],T=e.slidesGrid[m],C=e.slidesGrid[e.slidesGrid.length-1],v=Math.abs(t);v>=y?l=(v-y)/C:l=(v+C-T)/C,l>1&&(l-=1)}Object.assign(e,{progress:s,progressLoop:l,isBeginning:r,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&e.updateSlidesProgress(t),r&&!c&&e.emit("reachBeginning toEdge"),a&&!f&&e.emit("reachEnd toEdge"),(c&&!r||f&&!a)&&e.emit("fromEdge"),e.emit("progress",s)}function da(){const t=this,{slides:e,params:n,slidesEl:i,activeIndex:s}=t,r=t.virtual&&n.virtual.enabled,a=t.grid&&n.grid&&n.grid.rows>1,l=m=>Q(i,`.${n.slideClass}${m}, swiper-slide${m}`)[0];e.forEach(m=>{m.classList.remove(n.slideActiveClass,n.slideNextClass,n.slidePrevClass)});let c,f,p;if(r)if(n.loop){let m=s-t.virtual.slidesBefore;m<0&&(m=t.virtual.slides.length+m),m>=t.virtual.slides.length&&(m-=t.virtual.slides.length),c=l(`[data-swiper-slide-index="${m}"]`)}else c=l(`[data-swiper-slide-index="${s}"]`);else a?(c=e.filter(m=>m.column===s)[0],p=e.filter(m=>m.column===s+1)[0],f=e.filter(m=>m.column===s-1)[0]):c=e[s];c&&(c.classList.add(n.slideActiveClass),a?(p&&p.classList.add(n.slideNextClass),f&&f.classList.add(n.slidePrevClass)):(p=Yo(c,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!p&&(p=e[0]),p&&p.classList.add(n.slideNextClass),f=Xo(c,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!f===0&&(f=e[e.length-1]),f&&f.classList.add(n.slidePrevClass))),t.emitSlidesClasses()}const nt=(t,e)=>{if(!t||t.destroyed||!t.params)return;const n=()=>t.isElement?"swiper-slide":`.${t.params.slideClass}`,i=e.closest(n());if(i){let s=i.querySelector(`.${t.params.lazyPreloaderClass}`);!s&&t.isElement&&(i.shadowRoot?s=i.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(s=i.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`),s&&s.remove())})),s&&s.remove()}},Dt=(t,e)=>{if(!t.slides[e])return;const n=t.slides[e].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},nn=t=>{if(!t||t.destroyed||!t.params)return;let e=t.params.lazyPreloadPrevNext;const n=t.slides.length;if(!n||!e||e<0)return;e=Math.min(e,n);const i=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(t.params.slidesPerView),s=t.activeIndex;if(t.params.grid&&t.params.grid.rows>1){const a=s,l=[a-e];l.push(...Array.from({length:e}).map((c,f)=>a+i+f)),t.slides.forEach((c,f)=>{l.includes(c.column)&&Dt(t,f)});return}const r=s+i-1;if(t.params.rewind||t.params.loop)for(let a=s-e;a<=r+e;a+=1){const l=(a%n+n)%n;(l<s||l>r)&&Dt(t,l)}else for(let a=Math.max(s-e,0);a<=Math.min(r+e,n-1);a+=1)a!==s&&(a>r||a<s)&&Dt(t,a)};function ua(t){const{slidesGrid:e,params:n}=t,i=t.rtlTranslate?t.translate:-t.translate;let s;for(let r=0;r<e.length;r+=1)typeof e[r+1]<"u"?i>=e[r]&&i<e[r+1]-(e[r+1]-e[r])/2?s=r:i>=e[r]&&i<e[r+1]&&(s=r+1):i>=e[r]&&(s=r);return n.normalizeSlideIndex&&(s<0||typeof s>"u")&&(s=0),s}function fa(t){const e=this,n=e.rtlTranslate?e.translate:-e.translate,{snapGrid:i,params:s,activeIndex:r,realIndex:a,snapIndex:l}=e;let c=t,f;const p=T=>{let C=T-e.virtual.slidesBefore;return C<0&&(C=e.virtual.slides.length+C),C>=e.virtual.slides.length&&(C-=e.virtual.slides.length),C};if(typeof c>"u"&&(c=ua(e)),i.indexOf(n)>=0)f=i.indexOf(n);else{const T=Math.min(s.slidesPerGroupSkip,c);f=T+Math.floor((c-T)/s.slidesPerGroup)}if(f>=i.length&&(f=i.length-1),c===r&&!e.params.loop){f!==l&&(e.snapIndex=f,e.emit("snapIndexChange"));return}if(c===r&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=p(c);return}const m=e.grid&&s.grid&&s.grid.rows>1;let y;if(e.virtual&&s.virtual.enabled&&s.loop)y=p(c);else if(m){const T=e.slides.filter(v=>v.column===c)[0];let C=parseInt(T.getAttribute("data-swiper-slide-index"),10);Number.isNaN(C)&&(C=Math.max(e.slides.indexOf(T),0)),y=Math.floor(C/s.grid.rows)}else if(e.slides[c]){const T=e.slides[c].getAttribute("data-swiper-slide-index");T?y=parseInt(T,10):y=c}else y=c;Object.assign(e,{previousSnapIndex:l,snapIndex:f,previousRealIndex:a,realIndex:y,previousIndex:r,activeIndex:c}),e.initialized&&nn(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(a!==y&&e.emit("realIndexChange"),e.emit("slideChange"))}function ha(t,e){const n=this,i=n.params;let s=t.closest(`.${i.slideClass}, swiper-slide`);!s&&n.isElement&&e&&e.length>1&&e.includes(t)&&[...e.slice(e.indexOf(t)+1,e.length)].forEach(l=>{!s&&l.matches&&l.matches(`.${i.slideClass}, swiper-slide`)&&(s=l)});let r=!1,a;if(s){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===s){r=!0,a=l;break}}if(s&&r)n.clickedSlide=s,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(s.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}i.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var pa={updateSize:sa,updateSlides:ra,updateAutoHeight:oa,updateSlidesOffset:aa,updateSlidesProgress:la,updateProgress:ca,updateSlidesClasses:da,updateActiveIndex:fa,updateClickedSlide:ha};function ma(t){t===void 0&&(t=this.isHorizontal()?"x":"y");const e=this,{params:n,rtlTranslate:i,translate:s,wrapperEl:r}=e;if(n.virtualTranslate)return i?-s:s;if(n.cssMode)return s;let a=Go(r,t);return a+=e.cssOverflowAdjustment(),i&&(a=-a),a||0}function ga(t,e){const n=this,{rtlTranslate:i,params:s,wrapperEl:r,progress:a}=n;let l=0,c=0;const f=0;n.isHorizontal()?l=i?-t:t:c=t,s.roundLengths&&(l=Math.floor(l),c=Math.floor(c)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:c,s.cssMode?r[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-c:s.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():c-=n.cssOverflowAdjustment(),r.style.transform=`translate3d(${l}px, ${c}px, ${f}px)`);let p;const m=n.maxTranslate()-n.minTranslate();m===0?p=0:p=(t-n.minTranslate())/m,p!==a&&n.updateProgress(t),n.emit("setTranslate",n.translate,e)}function va(){return-this.snapGrid[0]}function ya(){return-this.snapGrid[this.snapGrid.length-1]}function wa(t,e,n,i,s){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),n===void 0&&(n=!0),i===void 0&&(i=!0);const r=this,{params:a,wrapperEl:l}=r;if(r.animating&&a.preventInteractionOnTransition)return!1;const c=r.minTranslate(),f=r.maxTranslate();let p;if(i&&t>c?p=c:i&&t<f?p=f:p=t,r.updateProgress(p),a.cssMode){const m=r.isHorizontal();if(e===0)l[m?"scrollLeft":"scrollTop"]=-p;else{if(!r.support.smoothScroll)return rs({swiper:r,targetPosition:-p,side:m?"left":"top"}),!0;l.scrollTo({[m?"left":"top"]:-p,behavior:"smooth"})}return!0}return e===0?(r.setTransition(0),r.setTranslate(p),n&&(r.emit("beforeTransitionStart",e,s),r.emit("transitionEnd"))):(r.setTransition(e),r.setTranslate(p),n&&(r.emit("beforeTransitionStart",e,s),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(y){!r||r.destroyed||y.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,n&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}var ba={getTranslate:ma,setTranslate:ga,minTranslate:va,maxTranslate:ya,translateTo:wa};function Sa(t,e){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${t}ms`,n.wrapperEl.style.transitionDelay=t===0?"0ms":""),n.emit("setTransition",t,e)}function ls(t){let{swiper:e,runCallbacks:n,direction:i,step:s}=t;const{activeIndex:r,previousIndex:a}=e;let l=i;if(l||(r>a?l="next":r<a?l="prev":l="reset"),e.emit(`transition${s}`),n&&r!==a){if(l==="reset"){e.emit(`slideResetTransition${s}`);return}e.emit(`slideChangeTransition${s}`),l==="next"?e.emit(`slideNextTransition${s}`):e.emit(`slidePrevTransition${s}`)}}function Ta(t,e){t===void 0&&(t=!0);const n=this,{params:i}=n;i.cssMode||(i.autoHeight&&n.updateAutoHeight(),ls({swiper:n,runCallbacks:t,direction:e,step:"Start"}))}function Ia(t,e){t===void 0&&(t=!0);const n=this,{params:i}=n;n.animating=!1,!i.cssMode&&(n.setTransition(0),ls({swiper:n,runCallbacks:t,direction:e,step:"End"}))}var Ea={setTransition:Sa,transitionStart:Ta,transitionEnd:Ia};function Ca(t,e,n,i,s){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),n===void 0&&(n=!0),typeof t=="string"&&(t=parseInt(t,10));const r=this;let a=t;a<0&&(a=0);const{params:l,snapGrid:c,slidesGrid:f,previousIndex:p,activeIndex:m,rtlTranslate:y,wrapperEl:T,enabled:C}=r;if(r.animating&&l.preventInteractionOnTransition||!C&&!i&&!s||r.destroyed)return!1;const v=Math.min(r.params.slidesPerGroupSkip,a);let w=v+Math.floor((a-v)/r.params.slidesPerGroup);w>=c.length&&(w=c.length-1);const o=-c[w];if(l.normalizeSlideIndex)for(let g=0;g<f.length;g+=1){const I=-Math.floor(o*100),O=Math.floor(f[g]*100),S=Math.floor(f[g+1]*100);typeof f[g+1]<"u"?I>=O&&I<S-(S-O)/2?a=g:I>=O&&I<S&&(a=g+1):I>=O&&(a=g)}if(r.initialized&&a!==m&&(!r.allowSlideNext&&(y?o>r.translate&&o>r.minTranslate():o<r.translate&&o<r.minTranslate())||!r.allowSlidePrev&&o>r.translate&&o>r.maxTranslate()&&(m||0)!==a))return!1;a!==(p||0)&&n&&r.emit("beforeSlideChangeStart"),r.updateProgress(o);let d;if(a>m?d="next":a<m?d="prev":d="reset",y&&-o===r.translate||!y&&o===r.translate)return r.updateActiveIndex(a),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),l.effect!=="slide"&&r.setTranslate(o),d!=="reset"&&(r.transitionStart(n,d),r.transitionEnd(n,d)),!1;if(l.cssMode){const g=r.isHorizontal(),I=y?o:-o;if(e===0){const O=r.virtual&&r.params.virtual.enabled;O&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),O&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{T[g?"scrollLeft":"scrollTop"]=I})):T[g?"scrollLeft":"scrollTop"]=I,O&&requestAnimationFrame(()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1})}else{if(!r.support.smoothScroll)return rs({swiper:r,targetPosition:I,side:g?"left":"top"}),!0;T.scrollTo({[g?"left":"top"]:I,behavior:"smooth"})}return!0}return r.setTransition(e),r.setTranslate(o),r.updateActiveIndex(a),r.updateSlidesClasses(),r.emit("beforeTransitionStart",e,i),r.transitionStart(n,d),e===0?r.transitionEnd(n,d):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(I){!r||r.destroyed||I.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(n,d))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0}function _a(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),n===void 0&&(n=!0),typeof t=="string"&&(t=parseInt(t,10));const s=this;if(s.destroyed)return;const r=s.grid&&s.params.grid&&s.params.grid.rows>1;let a=t;if(s.params.loop)if(s.virtual&&s.params.virtual.enabled)a=a+s.virtual.slidesBefore;else{let l;if(r){const y=a*s.params.grid.rows;l=s.slides.filter(T=>T.getAttribute("data-swiper-slide-index")*1===y)[0].column}else l=s.getSlideIndexByData(a);const c=r?Math.ceil(s.slides.length/s.params.grid.rows):s.slides.length,{centeredSlides:f}=s.params;let p=s.params.slidesPerView;p==="auto"?p=s.slidesPerViewDynamic():(p=Math.ceil(parseFloat(s.params.slidesPerView,10)),f&&p%2===0&&(p=p+1));let m=c-l<p;if(f&&(m=m||l<Math.ceil(p/2)),m){const y=f?l<s.activeIndex?"prev":"next":l-s.activeIndex-1<s.params.slidesPerView?"next":"prev";s.loopFix({direction:y,slideTo:!0,activeSlideIndex:y==="next"?l+1:l-c+1,slideRealIndex:y==="next"?s.realIndex:void 0})}if(r){const y=a*s.params.grid.rows;a=s.slides.filter(T=>T.getAttribute("data-swiper-slide-index")*1===y)[0].column}else a=s.getSlideIndexByData(a)}return requestAnimationFrame(()=>{s.slideTo(a,e,n,i)}),s}function Oa(t,e,n){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0);const i=this,{enabled:s,params:r,animating:a}=i;if(!s||i.destroyed)return i;let l=r.slidesPerGroup;r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(l=Math.max(i.slidesPerViewDynamic("current",!0),1));const c=i.activeIndex<r.slidesPerGroupSkip?1:l,f=i.virtual&&r.virtual.enabled;if(r.loop){if(a&&!f&&r.loopPreventsSliding)return!1;if(i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft,i.activeIndex===i.slides.length-1&&r.cssMode)return requestAnimationFrame(()=>{i.slideTo(i.activeIndex+c,t,e,n)}),!0}return r.rewind&&i.isEnd?i.slideTo(0,t,e,n):i.slideTo(i.activeIndex+c,t,e,n)}function Aa(t,e,n){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0);const i=this,{params:s,snapGrid:r,slidesGrid:a,rtlTranslate:l,enabled:c,animating:f}=i;if(!c||i.destroyed)return i;const p=i.virtual&&s.virtual.enabled;if(s.loop){if(f&&!p&&s.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}const m=l?i.translate:-i.translate;function y(o){return o<0?-Math.floor(Math.abs(o)):Math.floor(o)}const T=y(m),C=r.map(o=>y(o));let v=r[C.indexOf(T)-1];if(typeof v>"u"&&s.cssMode){let o;r.forEach((d,g)=>{T>=d&&(o=g)}),typeof o<"u"&&(v=r[o>0?o-1:o])}let w=0;if(typeof v<"u"&&(w=a.indexOf(v),w<0&&(w=i.activeIndex-1),s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(w=w-i.slidesPerViewDynamic("previous",!0)+1,w=Math.max(w,0))),s.rewind&&i.isBeginning){const o=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(o,t,e,n)}else if(s.loop&&i.activeIndex===0&&s.cssMode)return requestAnimationFrame(()=>{i.slideTo(w,t,e,n)}),!0;return i.slideTo(w,t,e,n)}function Pa(t,e,n){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0);const i=this;if(!i.destroyed)return i.slideTo(i.activeIndex,t,e,n)}function xa(t,e,n,i){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0),i===void 0&&(i=.5);const s=this;if(s.destroyed)return;let r=s.activeIndex;const a=Math.min(s.params.slidesPerGroupSkip,r),l=a+Math.floor((r-a)/s.params.slidesPerGroup),c=s.rtlTranslate?s.translate:-s.translate;if(c>=s.snapGrid[l]){const f=s.snapGrid[l],p=s.snapGrid[l+1];c-f>(p-f)*i&&(r+=s.params.slidesPerGroup)}else{const f=s.snapGrid[l-1],p=s.snapGrid[l];c-f<=(p-f)*i&&(r-=s.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,s.slidesGrid.length-1),s.slideTo(r,t,e,n)}function Na(){const t=this;if(t.destroyed)return;const{params:e,slidesEl:n}=t,i=e.slidesPerView==="auto"?t.slidesPerViewDynamic():e.slidesPerView;let s=t.clickedIndex,r;const a=t.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(t.animating)return;r=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?s<t.loopedSlides-i/2||s>t.slides.length-t.loopedSlides+i/2?(t.loopFix(),s=t.getSlideIndex(Q(n,`${a}[data-swiper-slide-index="${r}"]`)[0]),en(()=>{t.slideTo(s)})):t.slideTo(s):s>t.slides.length-i?(t.loopFix(),s=t.getSlideIndex(Q(n,`${a}[data-swiper-slide-index="${r}"]`)[0]),en(()=>{t.slideTo(s)})):t.slideTo(s)}else t.slideTo(s)}var La={slideTo:Ca,slideToLoop:_a,slideNext:Oa,slidePrev:Aa,slideReset:Pa,slideToClosest:xa,slideToClickedSlide:Na};function Ra(t){const e=this,{params:n,slidesEl:i}=e;if(!n.loop||e.virtual&&e.params.virtual.enabled)return;const s=()=>{Q(i,`.${n.slideClass}, swiper-slide`).forEach((m,y)=>{m.setAttribute("data-swiper-slide-index",y)})},r=e.grid&&n.grid&&n.grid.rows>1,a=n.slidesPerGroup*(r?n.grid.rows:1),l=e.slides.length%a!==0,c=r&&e.slides.length%n.grid.rows!==0,f=p=>{for(let m=0;m<p;m+=1){const y=e.isElement?tn("swiper-slide",[n.slideBlankClass]):tn("div",[n.slideClass,n.slideBlankClass]);e.slidesEl.append(y)}};if(l){if(n.loopAddBlankSlides){const p=a-e.slides.length%a;f(p),e.recalcSlides(),e.updateSlides()}else ct("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");s()}else if(c){if(n.loopAddBlankSlides){const p=n.grid.rows-e.slides.length%n.grid.rows;f(p),e.recalcSlides(),e.updateSlides()}else ct("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");s()}else s();e.loopFix({slideRealIndex:t,direction:n.centeredSlides?void 0:"next"})}function ka(t){let{slideRealIndex:e,slideTo:n=!0,direction:i,setTranslate:s,activeSlideIndex:r,byController:a,byMousewheel:l}=t===void 0?{}:t;const c=this;if(!c.params.loop)return;c.emit("beforeLoopFix");const{slides:f,allowSlidePrev:p,allowSlideNext:m,slidesEl:y,params:T}=c,{centeredSlides:C}=T;if(c.allowSlidePrev=!0,c.allowSlideNext=!0,c.virtual&&T.virtual.enabled){n&&(!T.centeredSlides&&c.snapIndex===0?c.slideTo(c.virtual.slides.length,0,!1,!0):T.centeredSlides&&c.snapIndex<T.slidesPerView?c.slideTo(c.virtual.slides.length+c.snapIndex,0,!1,!0):c.snapIndex===c.snapGrid.length-1&&c.slideTo(c.virtual.slidesBefore,0,!1,!0)),c.allowSlidePrev=p,c.allowSlideNext=m,c.emit("loopFix");return}let v=T.slidesPerView;v==="auto"?v=c.slidesPerViewDynamic():(v=Math.ceil(parseFloat(T.slidesPerView,10)),C&&v%2===0&&(v=v+1));const w=T.slidesPerGroupAuto?v:T.slidesPerGroup;let o=w;o%w!==0&&(o+=w-o%w),o+=T.loopAdditionalSlides,c.loopedSlides=o;const d=c.grid&&T.grid&&T.grid.rows>1;f.length<v+o?ct("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):d&&T.grid.fill==="row"&&ct("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const g=[],I=[];let O=c.activeIndex;typeof r>"u"?r=c.getSlideIndex(f.filter(x=>x.classList.contains(T.slideActiveClass))[0]):O=r;const S=i==="next"||!i,b=i==="prev"||!i;let u=0,h=0;const E=d?Math.ceil(f.length/T.grid.rows):f.length,_=(d?f[r].column:r)+(C&&typeof s>"u"?-v/2+.5:0);if(_<o){u=Math.max(o-_,w);for(let x=0;x<o-_;x+=1){const N=x-Math.floor(x/E)*E;if(d){const R=E-N-1;for(let F=f.length-1;F>=0;F-=1)f[F].column===R&&g.push(F)}else g.push(E-N-1)}}else if(_+v>E-o){h=Math.max(_-(E-o*2),w);for(let x=0;x<h;x+=1){const N=x-Math.floor(x/E)*E;d?f.forEach((R,F)=>{R.column===N&&I.push(F)}):I.push(N)}}if(c.__preventObserver__=!0,requestAnimationFrame(()=>{c.__preventObserver__=!1}),b&&g.forEach(x=>{f[x].swiperLoopMoveDOM=!0,y.prepend(f[x]),f[x].swiperLoopMoveDOM=!1}),S&&I.forEach(x=>{f[x].swiperLoopMoveDOM=!0,y.append(f[x]),f[x].swiperLoopMoveDOM=!1}),c.recalcSlides(),T.slidesPerView==="auto"?c.updateSlides():d&&(g.length>0&&b||I.length>0&&S)&&c.slides.forEach((x,N)=>{c.grid.updateSlide(N,x,c.slides)}),T.watchSlidesProgress&&c.updateSlidesOffset(),n){if(g.length>0&&b){if(typeof e>"u"){const x=c.slidesGrid[O],R=c.slidesGrid[O+u]-x;l?c.setTranslate(c.translate-R):(c.slideTo(O+Math.ceil(u),0,!1,!0),s&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-R,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-R))}else if(s){const x=d?g.length/T.grid.rows:g.length;c.slideTo(c.activeIndex+x,0,!1,!0),c.touchEventsData.currentTranslate=c.translate}}else if(I.length>0&&S)if(typeof e>"u"){const x=c.slidesGrid[O],R=c.slidesGrid[O-h]-x;l?c.setTranslate(c.translate-R):(c.slideTo(O-h,0,!1,!0),s&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-R,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-R))}else{const x=d?I.length/T.grid.rows:I.length;c.slideTo(c.activeIndex-x,0,!1,!0)}}if(c.allowSlidePrev=p,c.allowSlideNext=m,c.controller&&c.controller.control&&!a){const x={slideRealIndex:e,direction:i,setTranslate:s,activeSlideIndex:r,byController:!0};Array.isArray(c.controller.control)?c.controller.control.forEach(N=>{!N.destroyed&&N.params.loop&&N.loopFix({...x,slideTo:N.params.slidesPerView===T.slidesPerView?n:!1})}):c.controller.control instanceof c.constructor&&c.controller.control.params.loop&&c.controller.control.loopFix({...x,slideTo:c.controller.control.params.slidesPerView===T.slidesPerView?n:!1})}c.emit("loopFix")}function Ma(){const t=this,{params:e,slidesEl:n}=t;if(!e.loop||t.virtual&&t.params.virtual.enabled)return;t.recalcSlides();const i=[];t.slides.forEach(s=>{const r=typeof s.swiperSlideIndex>"u"?s.getAttribute("data-swiper-slide-index")*1:s.swiperSlideIndex;i[r]=s}),t.slides.forEach(s=>{s.removeAttribute("data-swiper-slide-index")}),i.forEach(s=>{n.append(s)}),t.recalcSlides(),t.slideTo(t.realIndex,0)}var Da={loopCreate:Ra,loopFix:ka,loopDestroy:Ma};function Fa(t){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const n=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=t?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function Ba(){const t=this;t.params.watchOverflow&&t.isLocked||t.params.cssMode||(t.isElement&&(t.__preventObserver__=!0),t[t.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1}))}var Ua={setGrabCursor:Fa,unsetGrabCursor:Ba};function Ha(t,e){e===void 0&&(e=this);function n(i){if(!i||i===Le()||i===z())return null;i.assignedSlot&&(i=i.assignedSlot);const s=i.closest(t);return!s&&!i.getRootNode?null:s||n(i.getRootNode().host)}return n(e)}function Jn(t,e,n){const i=z(),{params:s}=t,r=s.edgeSwipeDetection,a=s.edgeSwipeThreshold;return r&&(n<=a||n>=i.innerWidth-a)?r==="prevent"?(e.preventDefault(),!0):!1:!0}function za(t){const e=this,n=Le();let i=t;i.originalEvent&&(i=i.originalEvent);const s=e.touchEventsData;if(i.type==="pointerdown"){if(s.pointerId!==null&&s.pointerId!==i.pointerId)return;s.pointerId=i.pointerId}else i.type==="touchstart"&&i.targetTouches.length===1&&(s.touchId=i.targetTouches[0].identifier);if(i.type==="touchstart"){Jn(e,i,i.targetTouches[0].pageX);return}const{params:r,touches:a,enabled:l}=e;if(!l||!r.simulateTouch&&i.pointerType==="mouse"||e.animating&&r.preventInteractionOnTransition)return;!e.animating&&r.cssMode&&r.loop&&e.loopFix();let c=i.target;if(r.touchEventsTarget==="wrapper"&&!e.wrapperEl.contains(c)||"which"in i&&i.which===3||"button"in i&&i.button>0||s.isTouched&&s.isMoved)return;const f=!!r.noSwipingClass&&r.noSwipingClass!=="",p=i.composedPath?i.composedPath():i.path;f&&i.target&&i.target.shadowRoot&&p&&(c=p[0]);const m=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,y=!!(i.target&&i.target.shadowRoot);if(r.noSwiping&&(y?Ha(m,c):c.closest(m))){e.allowClick=!0;return}if(r.swipeHandler&&!c.closest(r.swipeHandler))return;a.currentX=i.pageX,a.currentY=i.pageY;const T=a.currentX,C=a.currentY;if(!Jn(e,i,T))return;Object.assign(s,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=T,a.startY=C,s.touchStartTime=lt(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,r.threshold>0&&(s.allowThresholdMove=!1);let v=!0;c.matches(s.focusableElements)&&(v=!1,c.nodeName==="SELECT"&&(s.isTouched=!1)),n.activeElement&&n.activeElement.matches(s.focusableElements)&&n.activeElement!==c&&n.activeElement.blur();const w=v&&e.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||w)&&!c.isContentEditable&&i.preventDefault(),r.freeMode&&r.freeMode.enabled&&e.freeMode&&e.animating&&!r.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",i)}function Va(t){const e=Le(),n=this,i=n.touchEventsData,{params:s,touches:r,rtlTranslate:a,enabled:l}=n;if(!l||!s.simulateTouch&&t.pointerType==="mouse")return;let c=t;if(c.originalEvent&&(c=c.originalEvent),c.type==="pointermove"&&(i.touchId!==null||c.pointerId!==i.pointerId))return;let f;if(c.type==="touchmove"){if(f=[...c.changedTouches].filter(S=>S.identifier===i.touchId)[0],!f||f.identifier!==i.touchId)return}else f=c;if(!i.isTouched){i.startMoving&&i.isScrolling&&n.emit("touchMoveOpposite",c);return}const p=f.pageX,m=f.pageY;if(c.preventedByNestedSwiper){r.startX=p,r.startY=m;return}if(!n.allowTouchMove){c.target.matches(i.focusableElements)||(n.allowClick=!1),i.isTouched&&(Object.assign(r,{startX:p,startY:m,currentX:p,currentY:m}),i.touchStartTime=lt());return}if(s.touchReleaseOnEdges&&!s.loop){if(n.isVertical()){if(m<r.startY&&n.translate<=n.maxTranslate()||m>r.startY&&n.translate>=n.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else if(p<r.startX&&n.translate<=n.maxTranslate()||p>r.startX&&n.translate>=n.minTranslate())return}if(e.activeElement&&c.target===e.activeElement&&c.target.matches(i.focusableElements)){i.isMoved=!0,n.allowClick=!1;return}i.allowTouchCallbacks&&n.emit("touchMove",c),r.previousX=r.currentX,r.previousY=r.currentY,r.currentX=p,r.currentY=m;const y=r.currentX-r.startX,T=r.currentY-r.startY;if(n.params.threshold&&Math.sqrt(y**2+T**2)<n.params.threshold)return;if(typeof i.isScrolling>"u"){let S;n.isHorizontal()&&r.currentY===r.startY||n.isVertical()&&r.currentX===r.startX?i.isScrolling=!1:y*y+T*T>=25&&(S=Math.atan2(Math.abs(T),Math.abs(y))*180/Math.PI,i.isScrolling=n.isHorizontal()?S>s.touchAngle:90-S>s.touchAngle)}if(i.isScrolling&&n.emit("touchMoveOpposite",c),typeof i.startMoving>"u"&&(r.currentX!==r.startX||r.currentY!==r.startY)&&(i.startMoving=!0),i.isScrolling){i.isTouched=!1;return}if(!i.startMoving)return;n.allowClick=!1,!s.cssMode&&c.cancelable&&c.preventDefault(),s.touchMoveStopPropagation&&!s.nested&&c.stopPropagation();let C=n.isHorizontal()?y:T,v=n.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;s.oneWayMovement&&(C=Math.abs(C)*(a?1:-1),v=Math.abs(v)*(a?1:-1)),r.diff=C,C*=s.touchRatio,a&&(C=-C,v=-v);const w=n.touchesDirection;n.swipeDirection=C>0?"prev":"next",n.touchesDirection=v>0?"prev":"next";const o=n.params.loop&&!s.cssMode,d=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!i.isMoved){if(o&&d&&n.loopFix({direction:n.swipeDirection}),i.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const S=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(S)}i.allowMomentumBounce=!1,s.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",c)}let g;if(new Date().getTime(),i.isMoved&&i.allowThresholdMove&&w!==n.touchesDirection&&o&&d&&Math.abs(C)>=1){Object.assign(r,{startX:p,startY:m,currentX:p,currentY:m,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,i.startTranslate=i.currentTranslate;return}n.emit("sliderMove",c),i.isMoved=!0,i.currentTranslate=C+i.startTranslate;let I=!0,O=s.resistanceRatio;if(s.touchReleaseOnEdges&&(O=0),C>0?(o&&d&&!g&&i.allowThresholdMove&&i.currentTranslate>(s.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>n.minTranslate()&&(I=!1,s.resistance&&(i.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+i.startTranslate+C)**O))):C<0&&(o&&d&&!g&&i.allowThresholdMove&&i.currentTranslate<(s.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(s.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(s.slidesPerView,10)))}),i.currentTranslate<n.maxTranslate()&&(I=!1,s.resistance&&(i.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-i.startTranslate-C)**O))),I&&(c.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(i.currentTranslate=i.startTranslate),s.threshold>0)if(Math.abs(C)>s.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,i.currentTranslate=i.startTranslate,r.diff=n.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY;return}}else{i.currentTranslate=i.startTranslate;return}!s.followFinger||s.cssMode||((s.freeMode&&s.freeMode.enabled&&n.freeMode||s.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),s.freeMode&&s.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(i.currentTranslate),n.setTranslate(i.currentTranslate))}function ja(t){const e=this,n=e.touchEventsData;let i=t;i.originalEvent&&(i=i.originalEvent);let s;if(i.type==="touchend"||i.type==="touchcancel"){if(s=[...i.changedTouches].filter(O=>O.identifier===n.touchId)[0],!s||s.identifier!==n.touchId)return}else{if(n.touchId!==null||i.pointerId!==n.pointerId)return;s=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(e.browser.isSafari||e.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:l,rtlTranslate:c,slidesGrid:f,enabled:p}=e;if(!p||!a.simulateTouch&&i.pointerType==="mouse")return;if(n.allowTouchCallbacks&&e.emit("touchEnd",i),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&e.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const m=lt(),y=m-n.touchStartTime;if(e.allowClick){const O=i.path||i.composedPath&&i.composedPath();e.updateClickedSlide(O&&O[0]||i.target,O),e.emit("tap click",i),y<300&&m-n.lastClickTime<300&&e.emit("doubleTap doubleClick",i)}if(n.lastClickTime=lt(),en(()=>{e.destroyed||(e.allowClick=!0)}),!n.isTouched||!n.isMoved||!e.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let T;if(a.followFinger?T=c?e.translate:-e.translate:T=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:T});return}const C=T>=-e.maxTranslate()&&!e.params.loop;let v=0,w=e.slidesSizesGrid[0];for(let O=0;O<f.length;O+=O<a.slidesPerGroupSkip?1:a.slidesPerGroup){const S=O<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof f[O+S]<"u"?(C||T>=f[O]&&T<f[O+S])&&(v=O,w=f[O+S]-f[O]):(C||T>=f[O])&&(v=O,w=f[f.length-1]-f[f.length-2])}let o=null,d=null;a.rewind&&(e.isBeginning?d=a.virtual&&a.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(o=0));const g=(T-f[v])/w,I=v<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(y>a.longSwipesMs){if(!a.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(g>=a.longSwipesRatio?e.slideTo(a.rewind&&e.isEnd?o:v+I):e.slideTo(v)),e.swipeDirection==="prev"&&(g>1-a.longSwipesRatio?e.slideTo(v+I):d!==null&&g<0&&Math.abs(g)>a.longSwipesRatio?e.slideTo(d):e.slideTo(v))}else{if(!a.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(i.target===e.navigation.nextEl||i.target===e.navigation.prevEl)?i.target===e.navigation.nextEl?e.slideTo(v+I):e.slideTo(v):(e.swipeDirection==="next"&&e.slideTo(o!==null?o:v+I),e.swipeDirection==="prev"&&e.slideTo(d!==null?d:v))}}function Zn(){const t=this,{params:e,el:n}=t;if(n&&n.offsetWidth===0)return;e.breakpoints&&t.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:s,snapGrid:r}=t,a=t.virtual&&t.params.virtual.enabled;t.allowSlideNext=!0,t.allowSlidePrev=!0,t.updateSize(),t.updateSlides(),t.updateSlidesClasses();const l=a&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&t.isEnd&&!t.isBeginning&&!t.params.centeredSlides&&!l?t.slideTo(t.slides.length-1,0,!1,!0):t.params.loop&&!a?t.slideToLoop(t.realIndex,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0),t.autoplay&&t.autoplay.running&&t.autoplay.paused&&(clearTimeout(t.autoplay.resizeTimeout),t.autoplay.resizeTimeout=setTimeout(()=>{t.autoplay&&t.autoplay.running&&t.autoplay.paused&&t.autoplay.resume()},500)),t.allowSlidePrev=s,t.allowSlideNext=i,t.params.watchOverflow&&r!==t.snapGrid&&t.checkOverflow()}function Wa(t){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&t.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(t.stopPropagation(),t.stopImmediatePropagation())))}function $a(){const t=this,{wrapperEl:e,rtlTranslate:n,enabled:i}=t;if(!i)return;t.previousTranslate=t.translate,t.isHorizontal()?t.translate=-e.scrollLeft:t.translate=-e.scrollTop,t.translate===0&&(t.translate=0),t.updateActiveIndex(),t.updateSlidesClasses();let s;const r=t.maxTranslate()-t.minTranslate();r===0?s=0:s=(t.translate-t.minTranslate())/r,s!==t.progress&&t.updateProgress(n?-t.translate:t.translate),t.emit("setTranslate",t.translate,!1)}function Ga(t){const e=this;nt(e,t.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function qa(){const t=this;t.documentTouchHandlerProceeded||(t.documentTouchHandlerProceeded=!0,t.params.touchReleaseOnEdges&&(t.el.style.touchAction="auto"))}const cs=(t,e)=>{const n=Le(),{params:i,el:s,wrapperEl:r,device:a}=t,l=!!i.nested,c=e==="on"?"addEventListener":"removeEventListener",f=e;n[c]("touchstart",t.onDocumentTouchStart,{passive:!1,capture:l}),s[c]("touchstart",t.onTouchStart,{passive:!1}),s[c]("pointerdown",t.onTouchStart,{passive:!1}),n[c]("touchmove",t.onTouchMove,{passive:!1,capture:l}),n[c]("pointermove",t.onTouchMove,{passive:!1,capture:l}),n[c]("touchend",t.onTouchEnd,{passive:!0}),n[c]("pointerup",t.onTouchEnd,{passive:!0}),n[c]("pointercancel",t.onTouchEnd,{passive:!0}),n[c]("touchcancel",t.onTouchEnd,{passive:!0}),n[c]("pointerout",t.onTouchEnd,{passive:!0}),n[c]("pointerleave",t.onTouchEnd,{passive:!0}),n[c]("contextmenu",t.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&s[c]("click",t.onClick,!0),i.cssMode&&r[c]("scroll",t.onScroll),i.updateOnWindowResize?t[f](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",Zn,!0):t[f]("observerUpdate",Zn,!0),s[c]("load",t.onLoad,{capture:!0})};function Xa(){const t=this,{params:e}=t;t.onTouchStart=za.bind(t),t.onTouchMove=Va.bind(t),t.onTouchEnd=ja.bind(t),t.onDocumentTouchStart=qa.bind(t),e.cssMode&&(t.onScroll=$a.bind(t)),t.onClick=Wa.bind(t),t.onLoad=Ga.bind(t),cs(t,"on")}function Ya(){cs(this,"off")}var Ka={attachEvents:Xa,detachEvents:Ya};const Qn=(t,e)=>t.grid&&e.grid&&e.grid.rows>1;function Ja(){const t=this,{realIndex:e,initialized:n,params:i,el:s}=t,r=i.breakpoints;if(!r||r&&Object.keys(r).length===0)return;const a=t.getBreakpoint(r,t.params.breakpointsBase,t.el);if(!a||t.currentBreakpoint===a)return;const c=(a in r?r[a]:void 0)||t.originalParams,f=Qn(t,i),p=Qn(t,c),m=i.enabled;f&&!p?(s.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),t.emitContainerClasses()):!f&&p&&(s.classList.add(`${i.containerModifierClass}grid`),(c.grid.fill&&c.grid.fill==="column"||!c.grid.fill&&i.grid.fill==="column")&&s.classList.add(`${i.containerModifierClass}grid-column`),t.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(o=>{if(typeof c[o]>"u")return;const d=i[o]&&i[o].enabled,g=c[o]&&c[o].enabled;d&&!g&&t[o].disable(),!d&&g&&t[o].enable()});const y=c.direction&&c.direction!==i.direction,T=i.loop&&(c.slidesPerView!==i.slidesPerView||y),C=i.loop;y&&n&&t.changeDirection(),H(t.params,c);const v=t.params.enabled,w=t.params.loop;Object.assign(t,{allowTouchMove:t.params.allowTouchMove,allowSlideNext:t.params.allowSlideNext,allowSlidePrev:t.params.allowSlidePrev}),m&&!v?t.disable():!m&&v&&t.enable(),t.currentBreakpoint=a,t.emit("_beforeBreakpoint",c),n&&(T?(t.loopDestroy(),t.loopCreate(e),t.updateSlides()):!C&&w?(t.loopCreate(e),t.updateSlides()):C&&!w&&t.loopDestroy()),t.emit("breakpoint",c)}function Za(t,e,n){if(e===void 0&&(e="window"),!t||e==="container"&&!n)return;let i=!1;const s=z(),r=e==="window"?s.innerHeight:n.clientHeight,a=Object.keys(t).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const c=parseFloat(l.substr(1));return{value:r*c,point:l}}return{value:l,point:l}});a.sort((l,c)=>parseInt(l.value,10)-parseInt(c.value,10));for(let l=0;l<a.length;l+=1){const{point:c,value:f}=a[l];e==="window"?s.matchMedia(`(min-width: ${f}px)`).matches&&(i=c):f<=n.clientWidth&&(i=c)}return i||"max"}var Qa={setBreakpoint:Ja,getBreakpoint:Za};function el(t,e){const n=[];return t.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(s=>{i[s]&&n.push(e+s)}):typeof i=="string"&&n.push(e+i)}),n}function tl(){const t=this,{classNames:e,params:n,rtl:i,el:s,device:r}=t,a=el(["initialized",n.direction,{"free-mode":t.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:i},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:r.android},{ios:r.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);e.push(...a),s.classList.add(...e),t.emitContainerClasses()}function nl(){const t=this,{el:e,classNames:n}=t;e.classList.remove(...n),t.emitContainerClasses()}var il={addClasses:tl,removeClasses:nl};function sl(){const t=this,{isLocked:e,params:n}=t,{slidesOffsetBefore:i}=n;if(i){const s=t.slides.length-1,r=t.slidesGrid[s]+t.slidesSizesGrid[s]+i*2;t.isLocked=t.size>r}else t.isLocked=t.snapGrid.length===1;n.allowSlideNext===!0&&(t.allowSlideNext=!t.isLocked),n.allowSlidePrev===!0&&(t.allowSlidePrev=!t.isLocked),e&&e!==t.isLocked&&(t.isEnd=!1),e!==t.isLocked&&t.emit(t.isLocked?"lock":"unlock")}var rl={checkOverflow:sl},ei={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function ol(t,e){return function(i){i===void 0&&(i={});const s=Object.keys(i)[0],r=i[s];if(typeof r!="object"||r===null){H(e,i);return}if(t[s]===!0&&(t[s]={enabled:!0}),s==="navigation"&&t[s]&&t[s].enabled&&!t[s].prevEl&&!t[s].nextEl&&(t[s].auto=!0),["pagination","scrollbar"].indexOf(s)>=0&&t[s]&&t[s].enabled&&!t[s].el&&(t[s].auto=!0),!(s in t&&"enabled"in r)){H(e,i);return}typeof t[s]=="object"&&!("enabled"in t[s])&&(t[s].enabled=!0),t[s]||(t[s]={enabled:!1}),H(e,i)}}const Ft={eventsEmitter:ia,update:pa,translate:ba,transition:Ea,slide:La,loop:Da,grabCursor:Ua,events:Ka,breakpoints:Qa,checkOverflow:rl,classes:il},Bt={};class W{constructor(){let e,n;for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];s.length===1&&s[0].constructor&&Object.prototype.toString.call(s[0]).slice(8,-1)==="Object"?n=s[0]:[e,n]=s,n||(n={}),n=H({},n),e&&!n.el&&(n.el=e);const a=Le();if(n.el&&typeof n.el=="string"&&a.querySelectorAll(n.el).length>1){const p=[];return a.querySelectorAll(n.el).forEach(m=>{const y=H({},n,{el:m});p.push(new W(y))}),p}const l=this;l.__swiper__=!0,l.support=os(),l.device=as({userAgent:n.userAgent}),l.browser=ea(),l.eventsListeners={},l.eventsAnyListeners=[],l.modules=[...l.__modules__],n.modules&&Array.isArray(n.modules)&&l.modules.push(...n.modules);const c={};l.modules.forEach(p=>{p({params:n,swiper:l,extendParams:ol(n,c),on:l.on.bind(l),once:l.once.bind(l),off:l.off.bind(l),emit:l.emit.bind(l)})});const f=H({},ei,c);return l.params=H({},f,Bt,n),l.originalParams=H({},l.params),l.passedParams=H({},n),l.params&&l.params.on&&Object.keys(l.params.on).forEach(p=>{l.on(p,l.params.on[p])}),l.params&&l.params.onAny&&l.onAny(l.params.onAny),Object.assign(l,{enabled:l.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return l.params.direction==="horizontal"},isVertical(){return l.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:l.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.emit("_swiper"),l.params.init&&l.init(),l}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:n,params:i}=this,s=Q(n,`.${i.slideClass}, swiper-slide`),r=Yn(s[0]);return Yn(e)-r}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:n,params:i}=e;e.slides=Q(n,`.${i.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,n){const i=this;e=Math.min(Math.max(e,0),1);const s=i.minTranslate(),a=(i.maxTranslate()-s)*e+s;i.translateTo(a,typeof n>"u"?0:n),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const n=e.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",n.join(" "))}getSlideClasses(e){const n=this;return n.destroyed?"":e.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const n=[];e.slides.forEach(i=>{const s=e.getSlideClasses(i);n.push({slideEl:i,classNames:s}),e.emit("_slideClass",i,s)}),e.emit("_slideClasses",n)}slidesPerViewDynamic(e,n){e===void 0&&(e="current"),n===void 0&&(n=!1);const i=this,{params:s,slides:r,slidesGrid:a,slidesSizesGrid:l,size:c,activeIndex:f}=i;let p=1;if(typeof s.slidesPerView=="number")return s.slidesPerView;if(s.centeredSlides){let m=r[f]?Math.ceil(r[f].swiperSlideSize):0,y;for(let T=f+1;T<r.length;T+=1)r[T]&&!y&&(m+=Math.ceil(r[T].swiperSlideSize),p+=1,m>c&&(y=!0));for(let T=f-1;T>=0;T-=1)r[T]&&!y&&(m+=r[T].swiperSlideSize,p+=1,m>c&&(y=!0))}else if(e==="current")for(let m=f+1;m<r.length;m+=1)(n?a[m]+l[m]-a[f]<c:a[m]-a[f]<c)&&(p+=1);else for(let m=f-1;m>=0;m-=1)a[f]-a[m]<c&&(p+=1);return p}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:n,params:i}=e;i.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&nt(e,a)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function s(){const a=e.rtlTranslate?e.translate*-1:e.translate,l=Math.min(Math.max(a,e.maxTranslate()),e.minTranslate());e.setTranslate(l),e.updateActiveIndex(),e.updateSlidesClasses()}let r;if(i.freeMode&&i.freeMode.enabled&&!i.cssMode)s(),i.autoHeight&&e.updateAutoHeight();else{if((i.slidesPerView==="auto"||i.slidesPerView>1)&&e.isEnd&&!i.centeredSlides){const a=e.virtual&&i.virtual.enabled?e.virtual.slides:e.slides;r=e.slideTo(a.length-1,0,!1,!0)}else r=e.slideTo(e.activeIndex,0,!1,!0);r||s()}i.watchOverflow&&n!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,n){n===void 0&&(n=!0);const i=this,s=i.params.direction;return e||(e=s==="horizontal"?"vertical":"horizontal"),e===s||e!=="horizontal"&&e!=="vertical"||(i.el.classList.remove(`${i.params.containerModifierClass}${s}`),i.el.classList.add(`${i.params.containerModifierClass}${e}`),i.emitContainerClasses(),i.params.direction=e,i.slides.forEach(r=>{e==="vertical"?r.style.width="":r.style.height=""}),i.emit("changeDirection"),n&&i.update()),i}changeLanguageDirection(e){const n=this;n.rtl&&e==="rtl"||!n.rtl&&e==="ltr"||(n.rtl=e==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(e){const n=this;if(n.mounted)return!0;let i=e||n.params.el;if(typeof i=="string"&&(i=document.querySelector(i)),!i)return!1;i.swiper=n,i.parentNode&&i.parentNode.host&&i.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const s=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>i&&i.shadowRoot&&i.shadowRoot.querySelector?i.shadowRoot.querySelector(s()):Q(i,s())[0])();return!a&&n.params.createElements&&(a=tn("div",n.params.wrapperClass),i.append(a),Q(i,`.${n.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(n,{el:i,wrapperEl:a,slidesEl:n.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:a,hostEl:n.isElement?i.parentNode.host:i,mounted:!0,rtl:i.dir.toLowerCase()==="rtl"||he(i,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(i.dir.toLowerCase()==="rtl"||he(i,"direction")==="rtl"),wrongRTL:he(a,"display")==="-webkit-box"}),!0}init(e){const n=this;if(n.initialized||n.mount(e)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const s=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&s.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),s.forEach(r=>{r.complete?nt(n,r):r.addEventListener("load",a=>{nt(n,a.target)})}),nn(n),n.initialized=!0,nn(n),n.emit("init"),n.emit("afterInit"),n}destroy(e,n){e===void 0&&(e=!0),n===void 0&&(n=!0);const i=this,{params:s,el:r,wrapperEl:a,slides:l}=i;return typeof i.params>"u"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),s.loop&&i.loopDestroy(),n&&(i.removeClasses(),r.removeAttribute("style"),a.removeAttribute("style"),l&&l.length&&l.forEach(c=>{c.classList.remove(s.slideVisibleClass,s.slideFullyVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass),c.removeAttribute("style"),c.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(c=>{i.off(c)}),e!==!1&&(i.el.swiper=null,Wo(i)),i.destroyed=!0),null}static extendDefaults(e){H(Bt,e)}static get extendedDefaults(){return Bt}static get defaults(){return ei}static installModule(e){W.prototype.__modules__||(W.prototype.__modules__=[]);const n=W.prototype.__modules__;typeof e=="function"&&n.indexOf(e)<0&&n.push(e)}static use(e){return Array.isArray(e)?(e.forEach(n=>W.installModule(n)),W):(W.installModule(e),W)}}Object.keys(Ft).forEach(t=>{Object.keys(Ft[t]).forEach(e=>{W.prototype[e]=Ft[t][e]})});W.use([ta,na]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},al=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],a=t[n++],l=t[n++],c=((s&7)<<18|(r&63)<<12|(a&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],a=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|a&63)}}return e.join("")},us={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],a=s+1<t.length,l=a?t[s+1]:0,c=s+2<t.length,f=c?t[s+2]:0,p=r>>2,m=(r&3)<<4|l>>4;let y=(l&15)<<2|f>>6,T=f&63;c||(T=64,a||(y=64)),i.push(n[p],n[m],n[y],n[T])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ds(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):al(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const f=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||l==null||f==null||m==null)throw new ll;const y=r<<2|l>>4;if(i.push(y),f!==64){const T=l<<4&240|f>>2;if(i.push(T),m!==64){const C=f<<6&192|m;i.push(C)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ll extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cl=function(t){const e=ds(t);return us.encodeByteArray(e,!0)},fs=function(t){return cl(t).replace(/\./g,"")},hs=function(t){try{return us.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=()=>dl().__FIREBASE_DEFAULTS__,fl=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hl=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hs(t[1]);return e&&JSON.parse(e)},wn=()=>{try{return ul()||fl()||hl()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pl=t=>{var e,n;return(n=(e=wn())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ps=()=>{var t;return(t=wn())===null||t===void 0?void 0:t.config},ms=t=>{var e;return(e=wn())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(B())}function gs(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yl(){const t=B();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function vs(){try{return typeof indexedDB=="object"}catch{return!1}}function ys(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function wl(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl="FirebaseError";class J extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=bl,Object.setPrototypeOf(this,J.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ie.prototype.create)}}class Ie{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],a=r?Sl(r,i):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new J(s,l,i)}}function Sl(t,e){return t.replace(Tl,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Tl=/\{\$([^}]+)}/g;function Il(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function dt(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],a=e[s];if(ti(r)&&ti(a)){if(!dt(r,a))return!1}else if(r!==a)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function ti(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function El(t,e){const n=new Cl(t,e);return n.subscribe.bind(n)}class Cl{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");_l(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Ut),s.error===void 0&&(s.error=Ut),s.complete===void 0&&(s.complete=Ut);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _l(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ut(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=1e3,Al=2,Pl=4*60*60*1e3,xl=.5;function ni(t,e=Ol,n=Al){const i=e*Math.pow(n,t),s=Math.round(xl*i*(Math.random()-.5)*2);return Math.min(Pl,i+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(t){return t&&t._delegate?t._delegate:t}class Y{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new ml;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Rl(e))try{this.getOrInitializeService({instanceIdentifier:ge})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=ge){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ge){return this.instances.has(e)}getOptions(e=ge){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&a.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const a=this.instances.get(s);return a&&e(a,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Ll(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ge){return this.component?this.component.multipleInstances?e:ge:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ll(t){return t===ge?void 0:t}function Rl(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Nl(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(M||(M={}));const Ml={debug:M.DEBUG,verbose:M.VERBOSE,info:M.INFO,warn:M.WARN,error:M.ERROR,silent:M.SILENT},Dl=M.INFO,Fl={[M.DEBUG]:"log",[M.VERBOSE]:"log",[M.INFO]:"info",[M.WARN]:"warn",[M.ERROR]:"error"},Bl=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Fl[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bn{constructor(e){this.name=e,this._logLevel=Dl,this._logHandler=Bl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in M))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ml[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,M.DEBUG,...e),this._logHandler(this,M.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,M.VERBOSE,...e),this._logHandler(this,M.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,M.INFO,...e),this._logHandler(this,M.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,M.WARN,...e),this._logHandler(this,M.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,M.ERROR,...e),this._logHandler(this,M.ERROR,...e)}}const Ul=(t,e)=>e.some(n=>t instanceof n);let ii,si;function Hl(){return ii||(ii=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zl(){return si||(si=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ws=new WeakMap,sn=new WeakMap,bs=new WeakMap,Ht=new WeakMap,Sn=new WeakMap;function Vl(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",a)},r=()=>{n(pe(t.result)),s()},a=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&ws.set(n,t)}).catch(()=>{}),Sn.set(e,t),e}function jl(t){if(sn.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",a),t.removeEventListener("abort",a)},r=()=>{n(),s()},a=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",a),t.addEventListener("abort",a)});sn.set(t,e)}let rn={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sn.get(t);if(e==="objectStoreNames")return t.objectStoreNames||bs.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Wl(t){rn=t(rn)}function $l(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(zt(this),e,...n);return bs.set(i,e.sort?e.sort():[e]),pe(i)}:zl().includes(t)?function(...e){return t.apply(zt(this),e),pe(ws.get(this))}:function(...e){return pe(t.apply(zt(this),e))}}function Gl(t){return typeof t=="function"?$l(t):(t instanceof IDBTransaction&&jl(t),Ul(t,Hl())?new Proxy(t,rn):t)}function pe(t){if(t instanceof IDBRequest)return Vl(t);if(Ht.has(t))return Ht.get(t);const e=Gl(t);return e!==t&&(Ht.set(t,e),Sn.set(e,t)),e}const zt=t=>Sn.get(t);function Ss(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const a=indexedDB.open(t,e),l=pe(a);return i&&a.addEventListener("upgradeneeded",c=>{i(pe(a.result),c.oldVersion,c.newVersion,pe(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const ql=["get","getKey","getAll","getAllKeys","count"],Xl=["put","add","delete","clear"],Vt=new Map;function ri(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vt.get(e))return Vt.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Xl.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||ql.includes(n)))return;const r=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let f=c.store;return i&&(f=f.index(l.shift())),(await Promise.all([f[n](...l),s&&c.done]))[0]};return Vt.set(e,r),r}Wl(t=>({...t,get:(e,n,i)=>ri(e,n)||t.get(e,n,i),has:(e,n)=>!!ri(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kl(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Kl(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const on="@firebase/app",oi="0.9.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we=new bn("@firebase/app"),Jl="@firebase/app-compat",Zl="@firebase/analytics-compat",Ql="@firebase/analytics",ec="@firebase/app-check-compat",tc="@firebase/app-check",nc="@firebase/auth",ic="@firebase/auth-compat",sc="@firebase/database",rc="@firebase/database-compat",oc="@firebase/functions",ac="@firebase/functions-compat",lc="@firebase/installations",cc="@firebase/installations-compat",dc="@firebase/messaging",uc="@firebase/messaging-compat",fc="@firebase/performance",hc="@firebase/performance-compat",pc="@firebase/remote-config",mc="@firebase/remote-config-compat",gc="@firebase/storage",vc="@firebase/storage-compat",yc="@firebase/firestore",wc="@firebase/firestore-compat",bc="firebase",Sc="10.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="[DEFAULT]",Tc={[on]:"fire-core",[Jl]:"fire-core-compat",[Ql]:"fire-analytics",[Zl]:"fire-analytics-compat",[tc]:"fire-app-check",[ec]:"fire-app-check-compat",[nc]:"fire-auth",[ic]:"fire-auth-compat",[sc]:"fire-rtdb",[rc]:"fire-rtdb-compat",[oc]:"fire-fn",[ac]:"fire-fn-compat",[lc]:"fire-iid",[cc]:"fire-iid-compat",[dc]:"fire-fcm",[uc]:"fire-fcm-compat",[fc]:"fire-perf",[hc]:"fire-perf-compat",[pc]:"fire-rc",[mc]:"fire-rc-compat",[gc]:"fire-gcs",[vc]:"fire-gcs-compat",[yc]:"fire-fst",[wc]:"fire-fst-compat","fire-js":"fire-js",[bc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut=new Map,ln=new Map;function Ic(t,e){try{t.container.addComponent(e)}catch(n){we.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ie(t){const e=t.name;if(ln.has(e))return we.debug(`There were multiple attempts to register component ${e}.`),!1;ln.set(e,t);for(const n of ut.values())Ic(n,t);return!0}function It(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},me=new Ie("app","Firebase",Ec);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Y("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw me.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge=Sc;function _c(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:an,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw me.create("bad-app-name",{appName:String(s)});if(n||(n=ps()),!n)throw me.create("no-options");const r=ut.get(s);if(r){if(dt(n,r.options)&&dt(i,r.config))return r;throw me.create("duplicate-app",{appName:s})}const a=new kl(s);for(const c of ln.values())a.addComponent(c);const l=new Cc(n,i,a);return ut.set(s,l),l}function Oc(t=an){const e=ut.get(t);if(!e&&t===an&&ps())return _c();if(!e)throw me.create("no-app",{appName:t});return e}function G(t,e,n){var i;let s=(i=Tc[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),a=e.match(/\s|\//);if(r||a){const l=[`Unable to register library "${s}" with version "${e}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),we.warn(l.join(" "));return}ie(new Y(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="firebase-heartbeat-database",Pc=1,He="firebase-heartbeat-store";let jt=null;function Ts(){return jt||(jt=Ss(Ac,Pc,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(He)}catch(n){console.warn(n)}}}}).catch(t=>{throw me.create("idb-open",{originalErrorMessage:t.message})})),jt}async function xc(t){try{const n=(await Ts()).transaction(He),i=await n.objectStore(He).get(Is(t));return await n.done,i}catch(e){if(e instanceof J)we.warn(e.message);else{const n=me.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});we.warn(n.message)}}}async function ai(t,e){try{const i=(await Ts()).transaction(He,"readwrite");await i.objectStore(He).put(e,Is(t)),await i.done}catch(n){if(n instanceof J)we.warn(n.message);else{const i=me.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});we.warn(i.message)}}}function Is(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc=1024,Lc=30*24*60*60*1e3;class Rc{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Mc(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=li();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(a=>a.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Lc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=li(),{heartbeatsToSend:i,unsentEntries:s}=kc(this._heartbeatsCache.heartbeats),r=fs(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function li(){return new Date().toISOString().substring(0,10)}function kc(t,e=Nc){const n=[];let i=t.slice();for(const s of t){const r=n.find(a=>a.agent===s.agent);if(r){if(r.dates.push(s.date),ci(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ci(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Mc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vs()?ys().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xc(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ai(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ai(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ci(t){return fs(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(t){ie(new Y("platform-logger",e=>new Yl(e),"PRIVATE")),ie(new Y("heartbeat",e=>new Rc(e),"PRIVATE")),G(on,oi,t),G(on,oi,"esm2017"),G("fire-js","")}Dc("");var Fc="firebase",Bc="10.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */G(Fc,Bc,"app");const Es="@firebase/installations",Tn="0.6.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=1e4,_s=`w:${Tn}`,Os="FIS_v2",Uc="https://firebaseinstallations.googleapis.com/v1",Hc=60*60*1e3,zc="installations",Vc="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},be=new Ie(zc,Vc,jc);function As(t){return t instanceof J&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps({projectId:t}){return`${Uc}/projects/${t}/installations`}function xs(t){return{token:t.token,requestStatus:2,expiresIn:$c(t.expiresIn),creationTime:Date.now()}}async function Ns(t,e){const i=(await e.json()).error;return be.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Ls({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Wc(t,{refreshToken:e}){const n=Ls(t);return n.append("Authorization",Gc(e)),n}async function Rs(t){const e=await t();return e.status>=500&&e.status<600?t():e}function $c(t){return Number(t.replace("s","000"))}function Gc(t){return`${Os} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qc({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=Ps(t),s=Ls(t),r=e.getImmediate({optional:!0});if(r){const f=await r.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const a={fid:n,authVersion:Os,appId:t.appId,sdkVersion:_s},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await Rs(()=>fetch(i,l));if(c.ok){const f=await c.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:xs(f.authToken)}}else throw await Ns("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc=/^[cdef][\w-]{21}$/,cn="";function Kc(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Jc(t);return Yc.test(n)?n:cn}catch{return cn}}function Jc(t){return Xc(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms=new Map;function Ds(t,e){const n=Et(t);Fs(n,e),Zc(n,e)}function Fs(t,e){const n=Ms.get(t);if(n)for(const i of n)i(e)}function Zc(t,e){const n=Qc();n&&n.postMessage({key:t,fid:e}),ed()}let ve=null;function Qc(){return!ve&&"BroadcastChannel"in self&&(ve=new BroadcastChannel("[Firebase] FID Change"),ve.onmessage=t=>{Fs(t.data.key,t.data.fid)}),ve}function ed(){Ms.size===0&&ve&&(ve.close(),ve=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td="firebase-installations-database",nd=1,Se="firebase-installations-store";let Wt=null;function In(){return Wt||(Wt=Ss(td,nd,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Se)}}})),Wt}async function ft(t,e){const n=Et(t),s=(await In()).transaction(Se,"readwrite"),r=s.objectStore(Se),a=await r.get(n);return await r.put(e,n),await s.done,(!a||a.fid!==e.fid)&&Ds(t,e.fid),e}async function Bs(t){const e=Et(t),i=(await In()).transaction(Se,"readwrite");await i.objectStore(Se).delete(e),await i.done}async function Ct(t,e){const n=Et(t),s=(await In()).transaction(Se,"readwrite"),r=s.objectStore(Se),a=await r.get(n),l=e(a);return l===void 0?await r.delete(n):await r.put(l,n),await s.done,l&&(!a||a.fid!==l.fid)&&Ds(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function En(t){let e;const n=await Ct(t.appConfig,i=>{const s=id(i),r=sd(t,s);return e=r.registrationPromise,r.installationEntry});return n.fid===cn?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function id(t){const e=t||{fid:Kc(),registrationStatus:0};return Us(e)}function sd(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(be.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=rd(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:od(t)}:{installationEntry:e}}async function rd(t,e){try{const n=await qc(t,e);return ft(t.appConfig,n)}catch(n){throw As(n)&&n.customData.serverCode===409?await Bs(t.appConfig):await ft(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function od(t){let e=await di(t.appConfig);for(;e.registrationStatus===1;)await ks(100),e=await di(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await En(t);return i||n}return e}function di(t){return Ct(t,e=>{if(!e)throw be.create("installation-not-found");return Us(e)})}function Us(t){return ad(t)?{fid:t.fid,registrationStatus:0}:t}function ad(t){return t.registrationStatus===1&&t.registrationTime+Cs<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ld({appConfig:t,heartbeatServiceProvider:e},n){const i=cd(t,n),s=Wc(t,n),r=e.getImmediate({optional:!0});if(r){const f=await r.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const a={installation:{sdkVersion:_s,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await Rs(()=>fetch(i,l));if(c.ok){const f=await c.json();return xs(f)}else throw await Ns("Generate Auth Token",c)}function cd(t,{fid:e}){return`${Ps(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cn(t,e=!1){let n;const i=await Ct(t.appConfig,r=>{if(!Hs(r))throw be.create("not-registered");const a=r.authToken;if(!e&&fd(a))return r;if(a.requestStatus===1)return n=dd(t,e),r;{if(!navigator.onLine)throw be.create("app-offline");const l=pd(r);return n=ud(t,l),l}});return n?await n:i.authToken}async function dd(t,e){let n=await ui(t.appConfig);for(;n.authToken.requestStatus===1;)await ks(100),n=await ui(t.appConfig);const i=n.authToken;return i.requestStatus===0?Cn(t,e):i}function ui(t){return Ct(t,e=>{if(!Hs(e))throw be.create("not-registered");const n=e.authToken;return md(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ud(t,e){try{const n=await ld(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await ft(t.appConfig,i),n}catch(n){if(As(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Bs(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ft(t.appConfig,i)}throw n}}function Hs(t){return t!==void 0&&t.registrationStatus===2}function fd(t){return t.requestStatus===2&&!hd(t)}function hd(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Hc}function pd(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function md(t){return t.requestStatus===1&&t.requestTime+Cs<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gd(t){const e=t,{installationEntry:n,registrationPromise:i}=await En(e);return i?i.catch(console.error):Cn(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vd(t,e=!1){const n=t;return await yd(n),(await Cn(n,e)).token}async function yd(t){const{registrationPromise:e}=await En(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(t){if(!t||!t.options)throw $t("App Configuration");if(!t.name)throw $t("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw $t(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function $t(t){return be.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs="installations",bd="installations-internal",Sd=t=>{const e=t.getProvider("app").getImmediate(),n=wd(e),i=It(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Td=t=>{const e=t.getProvider("app").getImmediate(),n=It(e,zs).getImmediate();return{getId:()=>gd(n),getToken:s=>vd(n,s)}};function Id(){ie(new Y(zs,Sd,"PUBLIC")),ie(new Y(bd,Td,"PRIVATE"))}Id();G(Es,Tn);G(Es,Tn,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi="analytics",Ed="firebase_id",Cd="origin",_d=60*1e3,Od="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",_n="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U=new bn("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},j=new Ie("analytics","Analytics",Ad);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(t){if(!t.startsWith(_n)){const e=j.create("invalid-gtag-resource",{gtagURL:t});return U.warn(e.message),""}return t}function Vs(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function xd(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Nd(t,e){const n=xd("firebase-js-sdk-policy",{createScriptURL:Pd}),i=document.createElement("script"),s=`${_n}?l=${t}&id=${e}`;i.src=n?n==null?void 0:n.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function Ld(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Rd(t,e,n,i,s,r){const a=i[s];try{if(a)await e[a];else{const c=(await Vs(n)).find(f=>f.measurementId===s);c&&await e[c.appId]}}catch(l){U.error(l)}t("config",s,r)}async function kd(t,e,n,i,s){try{let r=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await Vs(n);for(const c of a){const f=l.find(m=>m.measurementId===c),p=f&&e[f.appId];if(p)r.push(p);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(r){U.error(r)}}function Md(t,e,n,i){async function s(r,...a){try{if(r==="event"){const[l,c]=a;await kd(t,e,n,l,c)}else if(r==="config"){const[l,c]=a;await Rd(t,e,n,i,l,c)}else if(r==="consent"){const[l]=a;t("consent","update",l)}else if(r==="get"){const[l,c,f]=a;t("get",l,c,f)}else if(r==="set"){const[l]=a;t("set",l)}else t(r,...a)}catch(l){U.error(l)}}return s}function Dd(t,e,n,i,s){let r=function(...a){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=Md(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}function Fd(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(_n)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=30,Ud=1e3;class Hd{constructor(e={},n=Ud){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const js=new Hd;function zd(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Vd(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:zd(i)},r=Od.replace("{app-id}",n),a=await fetch(r,s);if(a.status!==200&&a.status!==304){let l="";try{const c=await a.json();!((e=c.error)===null||e===void 0)&&e.message&&(l=c.error.message)}catch{}throw j.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function jd(t,e=js,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw j.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw j.create("no-api-key")}const a=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Gd;return setTimeout(async()=>{l.abort()},n!==void 0?n:_d),Ws({appId:i,apiKey:s,measurementId:r},a,l,e)}async function Ws(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=js){var r;const{appId:a,measurementId:l}=t;try{await Wd(i,e)}catch(c){if(l)return U.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:l};throw c}try{const c=await Vd(t);return s.deleteThrottleMetadata(a),c}catch(c){const f=c;if(!$d(f)){if(s.deleteThrottleMetadata(a),l)return U.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:a,measurementId:l};throw c}const p=Number((r=f==null?void 0:f.customData)===null||r===void 0?void 0:r.httpStatus)===503?ni(n,s.intervalMillis,Bd):ni(n,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+p,backoffCount:n+1};return s.setThrottleMetadata(a,m),U.debug(`Calling attemptFetch again in ${p} millis`),Ws(t,m,i,s)}}function Wd(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(r),i(j.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function $d(t){if(!(t instanceof J)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Gd{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function qd(t,e,n,i,s){if(s&&s.global){t("event",n,i);return}else{const r=await e,a=Object.assign(Object.assign({},i),{send_to:r});t("event",n,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xd(){if(vs())try{await ys()}catch(t){return U.warn(j.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return U.warn(j.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Yd(t,e,n,i,s,r,a){var l;const c=jd(t);c.then(T=>{n[T.measurementId]=T.appId,t.options.measurementId&&T.measurementId!==t.options.measurementId&&U.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>U.error(T)),e.push(c);const f=Xd().then(T=>{if(T)return i.getId()}),[p,m]=await Promise.all([c,f]);Fd(r)||Nd(r,p.measurementId),s("js",new Date);const y=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return y[Cd]="firebase",y.update=!0,m!=null&&(y[Ed]=m),s("config",p.measurementId,y),p.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e){this.app=e}_delete(){return delete Fe[this.app.options.appId],Promise.resolve()}}let Fe={},hi=[];const pi={};let Gt="dataLayer",Jd="gtag",mi,$s,gi=!1;function Zd(){const t=[];if(gs()&&t.push("This is a browser extension environment."),wl()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=j.create("invalid-analytics-context",{errorInfo:e});U.warn(n.message)}}function Qd(t,e,n){Zd();const i=t.options.appId;if(!i)throw j.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)U.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw j.create("no-api-key");if(Fe[i]!=null)throw j.create("already-exists",{id:i});if(!gi){Ld(Gt);const{wrappedGtag:r,gtagCore:a}=Dd(Fe,hi,pi,Gt,Jd);$s=r,mi=a,gi=!0}return Fe[i]=Yd(t,hi,pi,e,mi,Gt,n),new Kd(t)}function eu(t,e,n,i){t=Ee(t),qd($s,Fe[t.app.options.appId],e,n,i).catch(s=>U.error(s))}const vi="@firebase/analytics",yi="0.10.1";function tu(){ie(new Y(fi,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Qd(i,s,n)},"PUBLIC")),ie(new Y("analytics-internal",t,"PRIVATE")),G(vi,yi),G(vi,yi,"esm2017");function t(e){try{const n=e.getProvider(fi).getImmediate();return{logEvent:(i,s,r)=>eu(n,i,s,r)}}catch(n){throw j.create("interop-component-reg-failed",{reason:n})}}}tu();function On(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function Gs(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nu=Gs,qs=new Ie("auth","Firebase",Gs());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht=new bn("@firebase/auth");function iu(t,...e){ht.logLevel<=M.WARN&&ht.warn(`Auth (${Ge}): ${t}`,...e)}function it(t,...e){ht.logLevel<=M.ERROR&&ht.error(`Auth (${Ge}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(t,...e){throw An(t,...e)}function q(t,...e){return An(t,...e)}function su(t,e,n){const i=Object.assign(Object.assign({},nu()),{[e]:n});return new Ie("auth","Firebase",i).create(e,{appName:t.name})}function An(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return qs.create(t,...e)}function L(t,e,...n){if(!t)throw An(e,...n)}function ee(t){const e="INTERNAL ASSERTION FAILED: "+t;throw it(e),new Error(e)}function re(t,e){t||ee(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ru(){return wi()==="http:"||wi()==="https:"}function wi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ru()||gs()||"connection"in navigator)?navigator.onLine:!0}function au(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){this.shortDelay=e,this.longDelay=n,re(n>e,"Short delay should be less than long delay!"),this.isMobile=gl()||vl()}get(){return ou()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t,e){re(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ee("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ee("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ee("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=new qe(3e4,6e4);function xn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Re(t,e,n,i,s={}){return Ys(t,s,async()=>{let r={},a={};i&&(e==="GET"?a=i:r={body:JSON.stringify(i)});const l=$e(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Xs.fetch()(Ks(t,t.config.apiHost,n,l),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function Ys(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},lu),e);try{const s=new uu(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw Ze(t,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const l=r.ok?a.errorMessage:a.error.message,[c,f]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ze(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Ze(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw Ze(t,"user-disabled",a);const p=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw su(t,p,f);se(t,p)}}catch(s){if(s instanceof J)throw s;se(t,"network-request-failed",{message:String(s)})}}async function du(t,e,n,i,s={}){const r=await Re(t,e,n,i,s);return"mfaPendingCredential"in r&&se(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Ks(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Pn(t.config,s):`${t.config.apiScheme}://${s}`}class uu{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(q(this.auth,"network-request-failed")),cu.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ze(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=q(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fu(t,e){return Re(t,"POST","/v1/accounts:delete",e)}async function hu(t,e){return Re(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pu(t,e=!1){const n=Ee(t),i=await n.getIdToken(e),s=Nn(i);L(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,a=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Be(qt(s.auth_time)),issuedAtTime:Be(qt(s.iat)),expirationTime:Be(qt(s.exp)),signInProvider:a||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function qt(t){return Number(t)*1e3}function Nn(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return it("JWT malformed, contained fewer than 3 sections"),null;try{const s=hs(n);return s?JSON.parse(s):(it("Failed to decode base64 JWT payload"),null)}catch(s){return it("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function mu(t){const e=Nn(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ze(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof J&&gu(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function gu({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Be(this.lastLoginAt),this.creationTime=Be(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pt(t){var e;const n=t.auth,i=await t.getIdToken(),s=await ze(t,hu(n,{idToken:i}));L(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const a=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?bu(r.providerUserInfo):[],l=wu(t.providerData,a),c=t.isAnonymous,f=!(t.email&&r.passwordHash)&&!(l!=null&&l.length),p=c?f:!1,m={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new Js(r.createdAt,r.lastLoginAt),isAnonymous:p};Object.assign(t,m)}async function yu(t){const e=Ee(t);await pt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wu(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function bu(t){return t.map(e=>{var{providerId:n}=e,i=On(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Su(t,e){const n=await Ys(t,{},async()=>{const i=$e({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,a=Ks(t,s,"/v1/token",`key=${r}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Xs.fetch()(a,{method:"POST",headers:l,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Tu(t,e){return Re(t,"POST","/v2/accounts:revokeToken",xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return L(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await Su(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,a=new Ve;return i&&(L(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),s&&(L(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),r&&(L(typeof r=="number","internal-error",{appName:e}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ve,this.toJSON())}_performRefresh(){return ee("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ye{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=On(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vu(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Js(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ze(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pu(this,e)}reload(){return yu(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ye(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await pt(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ze(this,fu(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,a,l,c,f,p;const m=(i=n.displayName)!==null&&i!==void 0?i:void 0,y=(s=n.email)!==null&&s!==void 0?s:void 0,T=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,C=(a=n.photoURL)!==null&&a!==void 0?a:void 0,v=(l=n.tenantId)!==null&&l!==void 0?l:void 0,w=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,o=(f=n.createdAt)!==null&&f!==void 0?f:void 0,d=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:g,emailVerified:I,isAnonymous:O,providerData:S,stsTokenManager:b}=n;L(g&&b,e,"internal-error");const u=Ve.fromJSON(this.name,b);L(typeof g=="string",e,"internal-error"),le(m,e.name),le(y,e.name),L(typeof I=="boolean",e,"internal-error"),L(typeof O=="boolean",e,"internal-error"),le(T,e.name),le(C,e.name),le(v,e.name),le(w,e.name),le(o,e.name),le(d,e.name);const h=new ye({uid:g,auth:e,email:y,emailVerified:I,displayName:m,isAnonymous:O,photoURL:C,phoneNumber:T,tenantId:v,stsTokenManager:u,createdAt:o,lastLoginAt:d});return S&&Array.isArray(S)&&(h.providerData=S.map(E=>Object.assign({},E))),w&&(h._redirectEventId=w),h}static async _fromIdTokenResponse(e,n,i=!1){const s=new Ve;s.updateFromServerResponse(n);const r=new ye({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await pt(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=new Map;function te(t){re(t instanceof Function,"Expected a class definition");let e=bi.get(t);return e?(re(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bi.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Zs.type="NONE";const Si=Zs;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t,e,n){return`firebase:${t}:${e}:${n}`}class Oe{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=st(this.userKey,s.apiKey,r),this.fullPersistenceKey=st("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ye._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Oe(te(Si),e,i);const s=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let r=s[0]||te(Si);const a=st(i,e.config.apiKey,e.name);let l=null;for(const f of n)try{const p=await f._get(a);if(p){const m=ye._fromJSON(e,p);f!==r&&(l=m),r=f;break}}catch{}const c=s.filter(f=>f._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Oe(r,e,i):(r=c[0],l&&await r._set(a,l.toJSON()),await Promise.all(n.map(async f=>{if(f!==r)try{await f._remove(a)}catch{}})),new Oe(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qs(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ir(e))return"Blackberry";if(sr(e))return"Webos";if(Ln(e))return"Safari";if((e.includes("chrome/")||er(e))&&!e.includes("edge/"))return"Chrome";if(nr(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Qs(t=B()){return/firefox\//i.test(t)}function Ln(t=B()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function er(t=B()){return/crios\//i.test(t)}function tr(t=B()){return/iemobile/i.test(t)}function nr(t=B()){return/android/i.test(t)}function ir(t=B()){return/blackberry/i.test(t)}function sr(t=B()){return/webos/i.test(t)}function _t(t=B()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Iu(t=B()){var e;return _t(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Eu(){return yl()&&document.documentMode===10}function rr(t=B()){return _t(t)||nr(t)||sr(t)||ir(t)||/windows phone/i.test(t)||tr(t)}function Cu(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t,e=[]){let n;switch(t){case"Browser":n=Ti(B());break;case"Worker":n=`${Ti(B())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ge}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((a,l)=>{try{const c=e(r);a(c)}catch(c){l(c)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ou(t,e={}){return Re(t,"GET","/v2/passwordPolicy",xn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=6;class Pu{constructor(e){var n,i,s,r;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:Au,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,s,r,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ii(this),this.idTokenSubscription=new Ii(this),this.beforeStateQueue=new _u(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qs,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=te(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Oe.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pt(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=au()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ee(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(te(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ou(this),n=new Pu(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ie("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await Tu(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&te(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await Oe.create(this,[te(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(l,this,"internal-error"),l.then(()=>{a||r(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,i,s);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=or(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&iu(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Rn(t){return Ee(t)}class Ii{constructor(e){this.auth=e,this.observer=null,this.addObserver=El(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Nu(t){kn=t}function Lu(t){return kn.loadJS(t)}function Ru(){return kn.gapiScript}function ku(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(t,e){const n=It(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(dt(r,e??{}))return s;se(s,"already-initialized")}return n.initialize({options:e})}function Du(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(te);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Fu(t,e,n){const i=Rn(t);L(i._canInitEmulator,i,"emulator-config-failed"),L(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=ar(e),{host:a,port:l}=Bu(e),c=l===null?"":`:${l}`;i.config.emulator={url:`${r}//${a}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:a,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Uu()}function ar(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Bu(t){const e=ar(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Ei(i.substr(r.length+1))}}else{const[r,a]=i.split(":");return{host:r,port:Ei(a)}}}function Ei(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Uu(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ee("not implemented")}_getIdTokenResponse(e){return ee("not implemented")}_linkToIdToken(e,n){return ee("not implemented")}_getReauthenticationResolver(e){return ee("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ae(t,e){return du(t,"POST","/v1/accounts:signInWithIdp",xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu="http://localhost";class Te extends lr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Te(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):se("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=On(n,["providerId","signInMethod"]);if(!i||!s)return null;const a=new Te(i,s);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Ae(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Ae(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ae(e,n)}buildRequest(){const e={requestUri:Hu,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$e(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends cr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce extends Xe{constructor(){super("facebook.com")}static credential(e){return Te._fromParams({providerId:ce.PROVIDER_ID,signInMethod:ce.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ce.credentialFromTaggedObject(e)}static credentialFromError(e){return ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ce.credential(e.oauthAccessToken)}catch{return null}}}ce.FACEBOOK_SIGN_IN_METHOD="facebook.com";ce.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de extends Xe{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Te._fromParams({providerId:de.PROVIDER_ID,signInMethod:de.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return de.credentialFromTaggedObject(e)}static credentialFromError(e){return de.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return de.credential(n,i)}catch{return null}}}de.GOOGLE_SIGN_IN_METHOD="google.com";de.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue extends Xe{constructor(){super("github.com")}static credential(e){return Te._fromParams({providerId:ue.PROVIDER_ID,signInMethod:ue.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ue.credentialFromTaggedObject(e)}static credentialFromError(e){return ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ue.credential(e.oauthAccessToken)}catch{return null}}}ue.GITHUB_SIGN_IN_METHOD="github.com";ue.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends Xe{constructor(){super("twitter.com")}static credential(e,n){return Te._fromParams({providerId:fe.PROVIDER_ID,signInMethod:fe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fe.credentialFromTaggedObject(e)}static credentialFromError(e){return fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return fe.credential(n,i)}catch{return null}}}fe.TWITTER_SIGN_IN_METHOD="twitter.com";fe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await ye._fromIdTokenResponse(e,i,s),a=Ci(i);return new xe({user:r,providerId:a,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=Ci(i);return new xe({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function Ci(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends J{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,mt.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new mt(e,n,i,s)}}function dr(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?mt._fromErrorAndOperation(t,r,e,i):r})}async function zu(t,e,n=!1){const i=await ze(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xe._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vu(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await ze(t,dr(i,s,e,t),n);L(r.idToken,i,"internal-error");const a=Nn(r.idToken);L(a,i,"internal-error");const{sub:l}=a;return L(t.uid===l,i,"user-mismatch"),xe._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&se(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ju(t,e,n=!1){const i="signIn",s=await dr(t,i,e),r=await xe._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function Wu(t,e,n,i){return Ee(t).onIdTokenChanged(e,n,i)}function $u(t,e,n){return Ee(t).beforeAuthStateChanged(e,n)}const gt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gt,"1"),this.storage.removeItem(gt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(){const t=B();return Ln(t)||_t(t)}const qu=1e3,Xu=10;class fr extends ur{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Gu()&&Cu(),this.fallbackToPolling=rr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(i);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const a=this.storage.getItem(i);!n&&this.localCache[i]===a||this.notifyListeners(i,a)},r=this.storage.getItem(i);Eu()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Xu):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},qu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fr.type="LOCAL";const Yu=fr;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends ur{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}hr.type="SESSION";const pr=hr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Ot(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const l=Array.from(a).map(async f=>f(n.origin,r)),c=await Ku(l);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ot.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,a;return new Promise((l,c)=>{const f=Mn("",20);s.port1.start();const p=setTimeout(()=>{c(new Error("unsupported_event"))},i);a={messageChannel:s,onMessage(m){const y=m;if(y.data.eventId===f)switch(y.data.status){case"ack":clearTimeout(p),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(y.data.response);break;default:clearTimeout(p),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(){return window}function Zu(t){X().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(){return typeof X().WorkerGlobalScope<"u"&&typeof X().importScripts=="function"}async function Qu(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ef(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function tf(){return mr()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr="firebaseLocalStorageDb",nf=1,vt="firebaseLocalStorage",vr="fbase_key";class Ye{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function At(t,e){return t.transaction([vt],e?"readwrite":"readonly").objectStore(vt)}function sf(){const t=indexedDB.deleteDatabase(gr);return new Ye(t).toPromise()}function un(){const t=indexedDB.open(gr,nf);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(vt,{keyPath:vr})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(vt)?e(i):(i.close(),await sf(),e(await un()))})})}async function _i(t,e,n){const i=At(t,!0).put({[vr]:e,value:n});return new Ye(i).toPromise()}async function rf(t,e){const n=At(t,!1).get(e),i=await new Ye(n).toPromise();return i===void 0?null:i.value}function Oi(t,e){const n=At(t,!0).delete(e);return new Ye(n).toPromise()}const of=800,af=3;class yr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await un(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>af)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ot._getInstance(tf()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Qu(),!this.activeServiceWorker)return;this.sender=new Ju(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ef()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await un();return await _i(e,gt,"1"),await Oi(e,gt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>_i(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>rf(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Oi(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=At(s,!1).getAll();return new Ye(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),of)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yr.type="LOCAL";const lf=yr;new qe(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(t,e){return e?te(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends lr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ae(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ae(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ae(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function df(t){return ju(t.auth,new Dn(t),t.bypassAuthState)}function uf(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),Vu(n,new Dn(t),t.bypassAuthState)}async function ff(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),zu(n,new Dn(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return df;case"linkViaPopup":case"linkViaRedirect":return ff;case"reauthViaPopup":case"reauthViaRedirect":return uf;default:se(this.auth,"internal-error")}}resolve(e){re(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){re(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=new qe(2e3,1e4);class _e extends wr{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,_e.currentPopupAction&&_e.currentPopupAction.cancel(),_e.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){re(this.filter.length===1,"Popup operations only handle one event");const e=Mn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(q(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(q(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_e.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(q(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hf.get())};e()}}_e.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf="pendingRedirect",rt=new Map;class mf extends wr{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=rt.get(this.auth._key());if(!e){try{const i=await gf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}rt.set(this.auth._key(),e)}return this.bypassAuthState||rt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gf(t,e){const n=wf(e),i=yf(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function vf(t,e){rt.set(t._key(),e)}function yf(t){return te(t._redirectPersistence)}function wf(t){return st(pf,t.config.apiKey,t.name)}async function bf(t,e,n=!1){const i=Rn(t),s=cf(i,e),a=await new mf(i,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf=10*60*1e3;class Tf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!If(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!br(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(q(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Sf&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ai(e))}saveEventToCache(e){this.cachedEventUids.add(Ai(e)),this.lastProcessedEventTime=Date.now()}}function Ai(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function br({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function If(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return br(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ef(t,e={}){return Re(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_f=/^https?/;async function Of(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ef(t);for(const n of e)try{if(Af(n))return}catch{}se(t,"unauthorized-domain")}function Af(t){const e=dn(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===i}if(!_f.test(n))return!1;if(Cf.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=new qe(3e4,6e4);function Pi(){const t=X().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function xf(t){return new Promise((e,n)=>{var i,s,r;function a(){Pi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pi(),n(q(t,"network-request-failed"))},timeout:Pf.get()})}if(!((s=(i=X().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=X().gapi)===null||r===void 0)&&r.load)a();else{const l=ku("iframefcb");return X()[l]=()=>{gapi.load?a():n(q(t,"network-request-failed"))},Lu(`${Ru()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw ot=null,e})}let ot=null;function Nf(t){return ot=ot||xf(t),ot}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=new qe(5e3,15e3),Rf="__/auth/iframe",kf="emulator/auth/iframe",Mf={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Df=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ff(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Pn(e,kf):`https://${t.config.authDomain}/${Rf}`,i={apiKey:e.apiKey,appName:t.name,v:Ge},s=Df.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${$e(i).slice(1)}`}async function Bf(t){const e=await Nf(t),n=X().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:Ff(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mf,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const a=q(t,"network-request-failed"),l=X().setTimeout(()=>{r(a)},Lf.get());function c(){X().clearTimeout(l),s(i)}i.ping(c).then(c,()=>{r(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Hf=500,zf=600,Vf="_blank",jf="http://localhost";class xi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Wf(t,e,n,i=Hf,s=zf){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Uf),{width:i.toString(),height:s.toString(),top:r,left:a}),f=B().toLowerCase();n&&(l=er(f)?Vf:n),Qs(f)&&(e=e||jf,c.scrollbars="yes");const p=Object.entries(c).reduce((y,[T,C])=>`${y}${T}=${C},`,"");if(Iu(f)&&l!=="_self")return $f(e||"",l),new xi(null);const m=window.open(e||"",l,p);L(m,t,"popup-blocked");try{m.focus()}catch{}return new xi(m)}function $f(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf="__/auth/handler",qf="emulator/auth/handler",Xf=encodeURIComponent("fac");async function Ni(t,e,n,i,s,r){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Ge,eventId:s};if(e instanceof cr){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Il(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries(r||{}))a[p]=m}if(e instanceof Xe){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(a.scopes=p.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const c=await t._getAppCheckToken(),f=c?`#${Xf}=${encodeURIComponent(c)}`:"";return`${Yf(t)}?${$e(l).slice(1)}${f}`}function Yf({config:t}){return t.emulator?Pn(t,qf):`https://${t.authDomain}/${Gf}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="webStorageSupport";class Kf{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pr,this._completeRedirectFn=bf,this._overrideRedirectResult=vf}async _openPopup(e,n,i,s){var r;re((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const a=await Ni(e,n,i,dn(),s);return Wf(e,a,Mn())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await Ni(e,n,i,dn(),s);return Zu(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(re(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await Bf(e),i=new Tf(e);return n.register("authEvent",s=>(L(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xt,{type:Xt},s=>{var r;const a=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Xt];a!==void 0&&n(!!a),se(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Of(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rr()||Ln()||_t()}}const Jf=Kf;var Li="@firebase/auth",Ri="1.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eh(t){ie(new Y("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=i.options;L(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:or(t)},f=new xu(i,s,r,c);return Du(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),ie(new Y("auth-internal",e=>{const n=Rn(e.getProvider("auth").getImmediate());return(i=>new Zf(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),G(Li,Ri,Qf(t)),G(Li,Ri,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=5*60,nh=ms("authIdTokenMaxAge")||th;let ki=null;const ih=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>nh)return;const s=n==null?void 0:n.token;ki!==s&&(ki=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function lh(t=Oc()){const e=It(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Mu(t,{popupRedirectResolver:Jf,persistence:[lf,Yu,pr]}),i=ms("authTokenSyncURL");if(i){const r=ih(i);$u(n,r,()=>r(n.currentUser)),Wu(n,a=>r(a))}const s=pl("auth");return s&&Fu(n,`http://${s}`),n}function sh(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Nu({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=q("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",sh().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eh("Browser");export{rh as S,ah as a,oh as b,lh as g,_c as i};
//# sourceMappingURL=vendor-e9ea2541.js.map
