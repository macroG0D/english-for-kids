(()=>{"use strict";var e,t,r,n,a,o,i={5730:(e,t,r)=>{function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r(9297);var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.status=t,this.opened=!1,this.sideMenu=document.querySelector(".sideMenu"),this.burger=document.querySelector(".burger_menu"),this.main=document.querySelector("main")}var t,r;return t=e,(r=[{key:"hideMenu",value:function(e){this.opened=!1,this.burger.classList.remove("burger_menu__active"),this.sideMenu.style.left="-32rem",e.remove()}},{key:"showMenu",value:function(e){this.opened=!0,this.burger.classList.add("burger_menu__active"),this.sideMenu.style.left="0",this.main.append(e)}}])&&n(t.prototype,r),e}();function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.mode="train",this.modeBtn=document.querySelector(".playmode"),this.playmodeText=document.querySelector(".playmode__text"),this.elipse=document.querySelector(".elipse"),this.main=t}var t,r;return t=e,(r=[{key:"toggleAppMode",value:function(){this.main.classList.toggle("mainTrain"),this.main.classList.toggle("mainPlay"),"train"===this.mode?(this.mode="play",this.elipse.style.right="0.3rem",this.elipse.style.removeProperty("left"),this.playmodeText.textContent="Play",this.elipse.style.backgroundColor="#C57AFF"):(this.mode="train",this.elipse.style.removeProperty("right"),this.elipse.style.left="0.3rem",this.elipse.style.backgroundColor="#8bffab",this.playmodeText.textContent="Train"),this.modeBtn.classList.toggle("train"),this.modeBtn.classList.toggle("play")}},{key:"currentMode",value:function(){return this.mode}}])&&o(t.prototype,r),e}();function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;s(this,e),this.size=t,this.cardsImages=["actions_1","actions_2","actions_3","animals_1","animals_2","clothes","emotions","technology"],this.cardsTitles=["Actions I","Actions II","Actions III","Animals I","Animals II","Clothes","Emotions","Technology"],this.cardsWrapper=document.querySelector(".cards-wrapper")}var t,r;return t=e,(r=[{key:"createHomeCards",value:function(){for(var e=0;e<this.size;e+=1){var t=document.createElement("div");t.classList.add("categoryCard"),t.setAttribute("name",this.cardsTitles[e]);var r=document.createElement("img");r.classList.add("categoryCard__image"),r.src="./assets/images/".concat(this.cardsImages[e],".png"),r.setAttribute("alt",this.cardsTitles[e]),t.appendChild(r);var n=document.createElement("h2");n.textContent=this.cardsTitles[e],t.appendChild(n),this.cardsWrapper.append(t)}}}])&&d(t.prototype,r),e}();const l=[["Actions I","Actions II","Actions III","Animals I","Animals II","Clothes","Emotions","Technology"],[{word:"cry",translation:"плакать",image:"images/cry.jpg",audioSrc:"sounds/cry.mp3"},{word:"dance",translation:"танцевать",image:"images/dance.jpg",audioSrc:"sounds/dance.mp3"},{word:"dive",translation:"нырять",image:"images/dive.jpg",audioSrc:"sounds/dive.mp3"},{word:"draw",translation:"рисовать",image:"images/draw.jpg",audioSrc:"sounds/draw.mp3"},{word:"eat",translation:"кушать",image:"images/eat.jpg",audioSrc:"sounds/eat.mp3"},{word:"fly",translation:"летать",image:"images/fly.jpg",audioSrc:"sounds/fly.mp3"},{word:"hug",translation:"обнимать",image:"images/hug.jpg",audioSrc:"sounds/hug.mp3"},{word:"jump",translation:"прыгать",image:"images/jump.jpg",audioSrc:"sounds/jump.mp3"}],[{word:"open",translation:"открывать",image:"images/open.jpg",audioSrc:"sounds/open.mp3"},{word:"play",translation:"играть",image:"images/play.jpg",audioSrc:"sounds/play.mp3"},{word:"point",translation:"указывать",image:"images/point.jpg",audioSrc:"sounds/point.mp3"},{word:"ride",translation:"ездить",image:"images/ride.jpg",audioSrc:"sounds/ride.mp3"},{word:"run",translation:"бегать",image:"images/run.jpg",audioSrc:"sounds/run.mp3"},{word:"sing",translation:"петь",image:"images/sing.jpg",audioSrc:"sounds/sing.mp3"},{word:"skip",translation:"пропускать, прыгать",image:"images/skip.jpg",audioSrc:"sounds/skip.mp3"},{word:"swim",translation:"плавать",image:"images/swim.jpg",audioSrc:"sounds/swim.mp3"}],[{word:"walk",translation:"ходить",image:"images/walk.jpg",audioSrc:"sounds/walk.mp3"},{word:"read",translation:"читать",image:"images/read.jpg",audioSrc:"sounds/read.mp3"},{word:"fight",translation:"драться",image:"images/fight.jpg",audioSrc:"sounds/fight.mp3"},{word:"wash",translation:"мыть",image:"images/wash.jpg",audioSrc:"sounds/wash.mp3"},{word:"cook",translation:"готовить",image:"images/cook.jpg",audioSrc:"sounds/cook.mp3"},{word:"sleep",translation:"спать",image:"images/sleep.jpg",audioSrc:"sounds/sleep.mp3"},{word:"hide",translation:"прятаться",image:"images/hide.jpg",audioSrc:"sounds/hide.mp3"},{word:"swing",translation:"качаться на",image:"images/swing.jpg",audioSrc:"sounds/swing.mp3"}],[{word:"cat",translation:"кот",image:"images/cat.jpg",audioSrc:"sounds/cat.mp3"},{word:"chick",translation:"цыплёнок",image:"images/chick.jpg",audioSrc:"sounds/chick.mp3"},{word:"chicken",translation:"курица",image:"images/chicken.jpg",audioSrc:"sounds/chicken.mp3"},{word:"dog",translation:"собака",image:"images/dog.jpg",audioSrc:"sounds/dog.mp3"},{word:"horse",translation:"лошадь",image:"images/horse.jpg",audioSrc:"sounds/horse.mp3"},{word:"pig",translation:"свинья",image:"images/pig.jpg",audioSrc:"sounds/pig.mp3"},{word:"rabbit",translation:"кролик",image:"images/rabbit.jpg",audioSrc:"sounds/rabbit.mp3"},{word:"sheep",translation:"овца",image:"images/sheep.jpg",audioSrc:"sounds/sheep.mp3"}],[{word:"bird",translation:"птица",image:"images/bird.jpg",audioSrc:"sounds/bird.mp3"},{word:"fish",translation:"рыба",image:"images/fish.jpg",audioSrc:"sounds/fish.mp3"},{word:"frog",translation:"жаба",image:"images/frog.jpg",audioSrc:"sounds/frog.mp3"},{word:"giraffe",translation:"жираф",image:"images/giraffe.jpg",audioSrc:"sounds/giraffe.mp3"},{word:"lion",translation:"лев",image:"images/lion.jpg",audioSrc:"sounds/lion.mp3"},{word:"mouse",translation:"мышь",image:"images/mouse.jpg",audioSrc:"sounds/mouse.mp3"},{word:"turtle",translation:"черепаха",image:"images/turtle.jpg",audioSrc:"sounds/turtle.mp3"},{word:"dolphin",translation:"дельфин",image:"images/dolphin.jpg",audioSrc:"sounds/dolphin.mp3"}],[{word:"skirt",translation:"юбка",image:"images/skirt.jpg",audioSrc:"sounds/skirt.mp3"},{word:"pants",translation:"штаны",image:"images/pants.jpg",audioSrc:"sounds/pants.mp3"},{word:"blouse",translation:"блузка",image:"images/blouse.jpg",audioSrc:"sounds/blouse.mp3"},{word:"dress",translation:"платье",image:"images/dress.jpg",audioSrc:"sounds/dress.mp3"},{word:"boot",translation:"ботинок",image:"images/boot.jpg",audioSrc:"sounds/boot.mp3"},{word:"shirt",translation:"рубашка",image:"images/shirt.jpg",audioSrc:"sounds/shirt.mp3"},{word:"coat",translation:"пальто",image:"images/coat.jpg",audioSrc:"sounds/coat.mp3"},{word:"shoe",translation:"туфли",image:"images/shoe.jpg",audioSrc:"sounds/shoe.mp3"}],[{word:"sad",translation:"грустный",image:"images/sad.jpg",audioSrc:"sounds/sad.mp3"},{word:"angry",translation:"сердитый",image:"images/angry.jpg",audioSrc:"sounds/angry.mp3"},{word:"happy",translation:"счастливый",image:"images/happy.jpg",audioSrc:"sounds/happy.mp3"},{word:"tired",translation:"уставший",image:"images/tired.jpg",audioSrc:"sounds/tired.mp3"},{word:"surprised",translation:"удивлённый",image:"images/surprised.jpg",audioSrc:"sounds/surprised.mp3"},{word:"scared",translation:"испуганный",image:"images/scared.jpg",audioSrc:"sounds/scared.mp3"},{word:"smile",translation:"улыбка",image:"images/smile.jpg",audioSrc:"sounds/smile.mp3"},{word:"laugh",translation:"смех",image:"images/laugh.jpg",audioSrc:"sounds/laugh.mp3"}],[{word:"computer",translation:"компьютер",image:"images/computer.jpg",audioSrc:"sounds/computer.mp3"},{word:"car",translation:"машина",image:"images/car.jpg",audioSrc:"sounds/car.mp3"},{word:"headphones",translation:"наушники",image:"images/headphones.jpg",audioSrc:"sounds/headphones.mp3"},{word:"spaceship",translation:"космический корабль",image:"images/spaceship.jpg",audioSrc:"sounds/spaceship.mp3"},{word:"robot",translation:"робот",image:"images/robot.jpg",audioSrc:"sounds/robot.mp3"},{word:"camera",translation:"камера",image:"images/camera.jpg",audioSrc:"sounds/camera.mp3"},{word:"code",translation:"код",image:"images/code.jpg",audioSrc:"sounds/code.mp3"},{word:"keyboard",translation:"клавиатура",image:"images/keyboard.jpg",audioSrc:"sounds/keyboard.mp3"}]];var u="./assets/sounds",p="./assets/icons",m="./assets/images",h="".concat(u,"/correct.mp3"),f="".concat(u,"/wrong.mp3"),g="".concat(u,"/success.mp3"),v="".concat(u,"/failure.mp3"),y="".concat(p,"/star-correct.svg"),w="".concat(p,"/star-wrong.svg"),S="".concat(p,"/flip.svg"),b="".concat(m,"/gameWin.jpg"),E="".concat(m,"/gameLoose.jpg"),C=["category","word","translation","trained","correct","incorrect","% correct","% incorrect"],k=l,j=k[0].length*(k.length-1);function L(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var _=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.category=t,this.gameMode=r,this.fliped=!1}var t,r;return t=e,(r=[{key:"init",value:function(e){var t,r=this,n=document.querySelector(".cards-wrapper");if("repeatDifficult"===this.gameMode)t=e;else{var a=l[0].indexOf(this.category);t=l[a+1]}if(t.forEach((function(e){var t=document.createElement("div");t.classList.add("wordCardWrapper");var a=document.createElement("div");a.classList.add("wordCard"),a.setAttribute("name",e.word);var o=document.createElement("div");o.classList.add("front");var i=document.createElement("div");i.classList.add("back");var s=document.createElement("img");s.classList.add("categoryCard__image"),s.src="./assets/".concat(e.image),s.setAttribute("alt",e.word),o.appendChild(s);var d=document.createElement("h2");if(d.classList.add("translationText"),d.innerText=e.translation,i.appendChild(d),a.appendChild(o),a.appendChild(i),"play"!==r.gameMode){s.setAttribute("sound",e.audioSrc);var c=document.createElement("div");c.classList.add("title-wrapper");var l=document.createElement("h2");l.textContent=e.word,c.appendChild(l),o.appendChild(c);var u=document.createElement("button");u.classList.add("flipButton");var p=document.createElement("img");p.src=S,u.appendChild(p),c.appendChild(u)}t.appendChild(a),n.appendChild(t)})),0===t.length){var o=document.createElement("div");o.classList.add("emptyStatsMessageWrapper");var i=document.createElement("h1");i.textContent="No weak words yet",i.classList.add("emptyStatsMessage");var s=document.querySelector(".playMoreButton");s.classList.remove("hidden"),s.textContent="Main page",o.appendChild(i),o.appendChild(s),n.appendChild(o)}if("play"===this.gameMode){var d=document.createElement("button");d.classList.add("startGameButton"),d.textContent="Start Game",document.querySelector("main").appendChild(d)}}}])&&L(t.prototype,r),e}(),A=function(){localStorage.getItem("englishForKidsScores")||localStorage.setItem("englishForKidsScores",JSON.stringify({}))},q=function(e){var t=localStorage.getItem("englishForKidsScores");return!!(t=JSON.parse(t))[e]},I=function(e){localStorage.setItem("englishForKidsScores",JSON.stringify(e))};const x=function(e,t){A();var r=localStorage.getItem("englishForKidsScores");r=JSON.parse(r),q(t)||(r[t]=[0,0,0,"0.00","0.00"],I(r)),function(e,t){var r=localStorage.getItem("englishForKidsScores");if(r=JSON.parse(r),"trained"===e?r[t][0]+=1:"correct"===e?r[t][1]+=1:"incorrect"===e&&(r[t][2]+=1),"correct"===e||"incorrect"===e){var n=r[t][1],a=r[t][2],o=n+a,i=100*n/o;i=i.toFixed(2),r[t][3]=i;var s=100*a/o;s=s.toFixed(2),r[t][4]=s}I(r)}(e,t)};var M=function(e){var t=localStorage.getItem("englishForKidsScores");return t=JSON.parse(t),q(e)?t[e]:["0","0","0","","0.00"]};function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var T=function(){function e(t){var r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.category=t,this.indexOfCategory=((null===(r=l[0])||void 0===r?void 0:r.indexOf(this.category))>-1?l[0].indexOf(this.category):0)+1,this.randomSequence=[],this.wordsCounter=0,this.win=!0,this.incorrectsCount=0}var t,r;return t=e,(r=[{key:"startGame",value:function(){for(;this.randomSequence.length<l[this.indexOfCategory].length;){var e=Math.floor(Math.random()*l[this.indexOfCategory].length);-1===this.randomSequence.indexOf(e)&&this.randomSequence.push(e)}this.sayNewWord(this.wordsCounter)}},{key:"cardsShortcut",value:function(e){return l[this.indexOfCategory][this.randomSequence[e]]}},{key:"checkIfCorrect",value:function(e){var t=this,r=this.wordsCounter-1,n=this.cardsShortcut(r).word;e.getAttribute("name")===n?(e.closest(".wordCardWrapper").classList.add("guessed"),this.addStar(!0),x("correct",n),this.wordsCounter<l[this.indexOfCategory].length?setTimeout((function(){t.sayNewWord(t.wordsCounter)}),1e3):this.endGame()):(this.addStar(!1),this.win=!1,this.incorrectsCount+=1,x("incorrect",n),setTimeout((function(){t.repeat()}),1e3))}},{key:"addStar",value:function(e){var t=document.querySelector(".starsWrapper"),r=document.createElement("img");r.classList.add("star");var n=new Audio;n.src=h;var a=new Audio;a.src=f,e?(n.play(),r.src=y):(a.play(),r.src=w),t.append(r)}},{key:"repeat",value:function(){var e=this.wordsCounter-1,t=new Audio;try{t.src="./assets/".concat(this.cardsShortcut(e).audioSrc)}catch(e){return}t.addEventListener("canplaythrough",(function(){t.play()}))}},{key:"sayNewWord",value:function(e){var t=new Audio;t.src="./assets/".concat(this.cardsShortcut(e).audioSrc),t.addEventListener("canplaythrough",(function(){t.play()})),this.wordsCounter+=1}},{key:"endGame",value:function(){var e=document.createElement("img"),t=document.createElement("h2"),r=document.createElement("p");r.classList.add("messageBody");var n=document.querySelector(".playMoreButton"),a=document.querySelector(".starsWrapper");document.querySelectorAll(".star").forEach((function(e){a.appendChild(e)})),n.textContent="Play more";var o=new Audio,i=document.createElement("div");i.classList.add("endGameMessageWrapper");var s=document.createElement("div");s.classList.add("bluredBackgound");var d=document.createElement("div");if(d.classList.add("endGameMessage"),i.appendChild(s),i.appendChild(d),document.querySelector("main").append(i),document.querySelector(".repeat").remove(),this.randomSequence=[],this.win)t.textContent="You Won",o.src=g,o.play(),e.src=b;else{var c="".concat(this.incorrectsCount," wrong answers");t.textContent="You Lost",r.textContent=c,o.src=v,o.play(),e.src=E}d.appendChild(e),d.appendChild(t),d.appendChild(r),d.appendChild(a),n.classList.remove("hidden"),d.appendChild(n),setTimeout("location.reload(true);",4e3)}}])&&O(t.prototype,r),e}();function D(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var H=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.statsToShow=[]}var t,r;return t=e,(r=[{key:"init",value:function(){A(),this.allCardsTransform();var e=document.querySelector(".statsBackgound");e&&e.remove();var t=C,r=document.querySelector("main");(e=document.createElement("div")).classList.add("statsBackgound"),r.appendChild(e);var n=document.createElement("table");n.classList.add("statsTableHeaders");var a=document.createElement("tbody");a.classList.add("statsTableHeaderBody");for(var o=document.createElement("tr"),i=0;i<t.length;i+=1){var s=document.createElement("th");s.classList.add("tableHeaders"),s.textContent=t[i],s.setAttribute("name",t[i]),o.appendChild(s),a.appendChild(o)}n.appendChild(a),e.appendChild(n),this.sortAZ19(0),document.querySelectorAll(".tableHeaders").forEach((function(e){"category"===e.getAttribute("name")&&e.classList.add("tableHeaders__up")})),this.loadStatsPage(),this.createStatsButtons()}},{key:"createStatsButtons",value:function(){var e=document.createElement("div");e.classList.add("statsButtonsWrapper");var t=document.createElement("button");t.classList.add("resetData"),t.textContent="Reset";var r=document.createElement("button");r.classList.add("repeatDifficultWords"),r.textContent="Repeat difficult words",e.appendChild(t),e.appendChild(r),document.querySelector("main").appendChild(e)}},{key:"allCardsTransform",value:function(){for(var e=1;e<k.length;e+=1)for(var t=0;t<k.length-1;t+=1){var r=[];r.push(k[0][e-1]),r.push(k[e][t].word),r.push(k[e][t].translation),r.push(M(k[e][t].word)[0]),r.push(M(k[e][t].word)[1]),r.push(M(k[e][t].word)[2]),r.push(M(k[e][t].word)[3]),r.push(M(k[e][t].word)[4]),this.statsToShow.push(r)}}},{key:"loadStatsPage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=document.querySelectorAll(".tableRows");t&&t.length>0&&t.forEach((function(e){e.remove()}));var r=document.querySelector(".statsTable");r&&r.remove(),(r=document.createElement("table")).classList.add("statsTable");var n=document.createElement("tbody");n.classList.add("statsTableBody");for(var a=0;a<j;a+=1){var o=document.createElement("tr");o.classList.add("tableRows");for(var i=0;i<e.length;i+=1){var s=document.createElement("td");s.textContent=this.statsToShow[a][i],o.appendChild(s)}n.appendChild(o)}r.appendChild(n);var d=document.querySelector(".statsBackgound");d.appendChild(r)}},{key:"sort",value:function(e){var t=C.indexOf(e.getAttribute("name"));this.removeDeprecatedArrows(e),e.classList.contains("tableHeaders__up")?(this.sortZA91(t),e.classList.remove("tableHeaders__up"),e.classList.add("tableHeaders__down")):(this.sortAZ19(t),e.classList.remove("tableHeaders__down"),e.classList.add("tableHeaders__up")),this.loadStatsPage(C,this.statsToShow)}},{key:"sortAZ19",value:function(e){this.statsToShow.sort((function(t,r){return Number.isNaN(t[e]-r[e])?t[e]===r[e]?0:t[e]<r[e]?-1:1:t[e]-r[e]}))}},{key:"sortZA91",value:function(e){this.statsToShow.sort((function(t,r){return Number.isNaN(r[e]-t[e])?r[e]===t[e]?0:r[e]<t[e]?-1:1:r[e]-t[e]}))}},{key:"removeDeprecatedArrows",value:function(e){var t=document.querySelector(".tableHeaders__up"),r=document.querySelector(".tableHeaders__down");t&&t!==e?t.classList.remove("tableHeaders__up"):r&&r!==e&&r.classList.remove("tableHeaders__down")}},{key:"reset",value:function(){localStorage.removeItem("englishForKidsScores"),window.location.reload()}},{key:"difficultWords",value:function(){var e=Array.from(this.statsToShow),t=[];return e.sort((function(e,t){return e[7]-t[7]})),e.reverse(),e.length=8,e.forEach((function(e){if("0"!==e[5]&&"100.00"!==e[6]){var r=l[0].indexOf(e[0]),n=e[1];l[r+1].forEach((function(e){e.word===n&&t.push(e)}))}})),t}}])&&D(t.prototype,r),e}(),B=new a("trainmode"),P="",N=document.querySelector(".burger_menu"),W=document.querySelector("main"),F=document.querySelector("header"),G=document.querySelector("footer"),K=document.createElement("div");K.classList.add("bluredBackgound");var U,J=document.querySelector(".playMoreButton"),R=function(){J&&J.remove(),(J=document.createElement("button")).classList.add("playMoreButton"),J.classList.add("hidden"),W.appendChild(J)},Z=function(e){e.target.classList.contains("burger_menu")||e.target.classList.contains("burger")?B.opened?B.hideMenu(K):B.showMenu(K):B.hideMenu(K)};[N,W,G].forEach((function(e){e.addEventListener("click",Z)})),F.addEventListener("click",(function(e){!B.opened||e.composedPath()[2].classList.contains("header")||e.composedPath()[2].classList.contains("left_wrapper")||B.hideMenu(K)}));var Y,z=document.querySelectorAll(".categoryLink"),Q=document.querySelectorAll(".categoryCard"),V=new i(W),X=document.querySelector(".playmode"),$=document.querySelector(".mainMenu"),ee=document.querySelector(".statistic"),te=new c,re=document.querySelector(".cards-wrapper");function ne(){re.innerHTML=""}function ae(e){var t=document.querySelector(".activeMenuItem");t&&t.classList.remove("activeMenuItem"),e.classList.contains("interactiveMenuItem")?e.classList.add("activeMenuItem"):document.querySelector('[name="'.concat(e.getAttribute("name"),'"]')).classList.add("activeMenuItem"),R(),J.addEventListener("click",P)}var oe,ie,se,de=function(){U.fliped=!1;var e=this.children[0],t=e.children[0].children[1];e.children[0].children[0].removeAttribute("style"),e.removeAttribute("style"),t.removeAttribute("style")},ce=function(){U.fliped=!0;var e=this.closest(".wordCardWrapper"),t=this.closest(".wordCard");t.style.transform="rotateY(180deg)",t.children[0].children[1].style.transform="translateY(10rem)",e.addEventListener("mouseleave",de),e.children[0].children[0].children[0].style.transform="scale(1, 1)"},le=function(){var e=this.getAttribute("alt"),t=this.getAttribute("sound");x("trained",e);var r=new Audio;r.src="./assets/".concat(t),U.fliped||r.addEventListener("canplaythrough",(function(){r.play()}))},ue=function e(){var t=new T(U.category);t.startGame(),oe.classList.remove("startGameButton"),oe.classList.add("repeat"),oe.textContent="",oe.removeEventListener("click",e),(ie=oe).style.backgroundImage="url(./assets/icons/flip.svg)",ie.addEventListener("click",t.repeat.bind(t));var r=document.createElement("div");r.classList.add("starsWrapper"),re.prepend(r),document.querySelectorAll(".wordCard").forEach((function(e){e.addEventListener("click",t.checkIfCorrect.bind(t,e))}))};function pe(){oe&&oe.remove()}function me(){(Y=document.querySelector(".endGameMessageWrapper"))&&Y.remove()}function he(){var e=document.querySelector(".statsBackgound"),t=document.querySelector(".statsButtonsWrapper");e&&(e.remove(),t.remove())}function fe(e,t){var r;me(),pe(),he(),U&&(U=null),!0===t?(U=new _(r,"repeatDifficult")).init(e):(ae(e),r=e.getAttribute("name"),ne(),(U=new _(r,V.mode)).init()),B.hideMenu(K);var n=document.querySelectorAll(".flipButton");n&&n.forEach((function(e){e.addEventListener("click",ce)}));var a=document.querySelectorAll(".categoryCard__image");"play"!==U.gameMode?a.forEach((function(e){e.addEventListener("click",le)})):(oe=document.querySelector(".startGameButton")).addEventListener("click",ue)}P=function(){me(),pe(),ne(),he(),te.createHomeCards(),Q=document.querySelectorAll(".categoryCard"),B.hideMenu(K),ae($),Q.forEach((function(e){e.addEventListener("click",fe.bind(null,e,!1))})),"play"===se&&Q.forEach((function(e){e.classList.add("playable")})),z.forEach((function(e){e.addEventListener("click",fe.bind(null,e,!1))})),R(),J.addEventListener("click",P)};var ge=function(){V.toggleAppMode(),se=V.currentMode(),me(),P()};X.addEventListener("click",ge),$.addEventListener("click",P),P(),document.querySelector(".logo").addEventListener("click",(function(){window.location.reload()}));var ve=document.querySelector(".statistic"),ye=function(e){fe(e.difficultWords(),!0)};ve.addEventListener("click",(function(){"play"===V.mode&&ge(),ae(ee),me(),pe(),ne(),he(),B.hideMenu(K);var e=new H;e.init(),document.querySelectorAll(".tableHeaders").forEach((function(t){t.addEventListener("click",e.sort.bind(e,t))}));var t=document.querySelector(".resetData"),r=document.querySelector(".repeatDifficultWords");t.addEventListener("click",e.reset.bind(e)),r.addEventListener("click",ye.bind(null,e))}))},9297:(e,t,r)=>{var n=r(7134)(e.id,{locals:!1});e.hot.dispose(n),e.hot.accept(void 0,n)}},s={};function d(e){if(s[e])return s[e].exports;var t=s[e]={id:e,exports:{}},r={id:e,module:t,factory:i[e],require:d};return d.i.forEach((function(e){e(r)})),t=r.module,r.factory.call(t.exports,t,t.exports,r.require),t.exports}d.m=i,d.c=s,d.i=[],d.hu=e=>e+"."+d.h()+".hot-update.js",d.miniCssF=e=>(179===e?"main":e)+"."+d.h()+".css",d.hmrF=()=>d.h()+".hot-update.json",d.h=()=>"90bfb8e1e5c228c90f84",d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},d.l=(t,r,n)=>{if(e[t])e[t].push(r);else{var a,o;if(void 0!==n)for(var i=document.getElementsByTagName("script"),s=0;s<i.length;s++){var c=i[s];if(c.getAttribute("src")==t){a=c;break}}a||(o=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,d.nc&&a.setAttribute("nonce",d.nc),a.src=t),e[t]=[r];var l=(r,n)=>{a.onerror=a.onload=null,clearTimeout(u);var o=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),r)return r(n)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),o&&document.head.appendChild(a)}},(()=>{var e,t,r,n,a={},o=d.c,i=[],s=[],c="idle";function l(e){c=e;for(var t=0;t<s.length;t++)s[t].call(null,e)}function u(e){if(0===t.length)return e();var r=t;return t=[],Promise.all(r).then((function(){return u(e)}))}function p(e){if("idle"!==c)throw new Error("check() is only allowed in idle status");return l("check"),d.hmrM().then((function(n){if(!n)return l(f()?"ready":"idle"),null;l("prepare");var a=[];return t=[],r=[],Promise.all(Object.keys(d.hmrC).reduce((function(e,t){return d.hmrC[t](n.c,n.r,n.m,e,r,a),e}),[])).then((function(){return u((function(){return e?h(e):(l("ready"),a)}))}))}))}function m(e){return"ready"!==c?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):h(e)}function h(e){e=e||{},f();var t=r.map((function(t){return t(e)}));r=void 0;var a,o=t.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return l("abort"),Promise.resolve().then((function(){throw o[0]}));l("dispose"),t.forEach((function(e){e.dispose&&e.dispose()})),l("apply");var i=function(e){a||(a=e)},s=[];return t.forEach((function(e){if(e.apply){var t=e.apply(i);if(t)for(var r=0;r<t.length;r++)s.push(t[r])}})),a?(l("fail"),Promise.resolve().then((function(){throw a}))):n?h(e).then((function(e){return s.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e})):(l("idle"),Promise.resolve(s))}function f(){if(n)return r||(r=[]),Object.keys(d.hmrI).forEach((function(e){n.forEach((function(t){d.hmrI[e](t,r)}))})),n=void 0,!0}d.hmrD=a,d.i.push((function(h){var f,g,v,y=h.module,w=function(r,n){var a=o[n];if(!a)return r;var s=function(t){if(a.hot.active){if(o[t]){var s=o[t].parents;-1===s.indexOf(n)&&s.push(n)}else i=[n],e=t;-1===a.children.indexOf(t)&&a.children.push(t)}else console.warn("[HMR] unexpected require("+t+") from disposed module "+n),i=[];return r(t)},d=function(e){return{configurable:!0,enumerable:!0,get:function(){return r[e]},set:function(t){r[e]=t}}};for(var p in r)Object.prototype.hasOwnProperty.call(r,p)&&"e"!==p&&Object.defineProperty(s,p,d(p));return s.e=function(e){return function(e){switch(c){case"ready":return l("prepare"),t.push(e),u((function(){l("ready")})),e;case"prepare":return t.push(e),e;default:return e}}(r.e(e))},s}(h.require,h.id);y.hot=(f=h.id,g=y,v={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:e!==f,_requireSelf:function(){i=g.parents.slice(),e=f,d(f)},active:!0,accept:function(e,t){if(void 0===e)v._selfAccepted=!0;else if("function"==typeof e)v._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)v._acceptedDependencies[e[r]]=t||function(){};else v._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)v._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)v._declinedDependencies[e[t]]=!0;else v._declinedDependencies[e]=!0},dispose:function(e){v._disposeHandlers.push(e)},addDisposeHandler:function(e){v._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=v._disposeHandlers.indexOf(e);t>=0&&v._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,c){case"idle":r=[],Object.keys(d.hmrI).forEach((function(e){d.hmrI[e](f,r)})),l("ready");break;case"ready":Object.keys(d.hmrI).forEach((function(e){d.hmrI[e](f,r)}));break;case"prepare":case"check":case"dispose":case"apply":(n=n||[]).push(f)}},check:p,apply:m,status:function(e){if(!e)return c;s.push(e)},addStatusHandler:function(e){s.push(e)},removeStatusHandler:function(e){var t=s.indexOf(e);t>=0&&s.splice(t,1)},data:a[f]},e=void 0,v),y.parents=i,y.children=[],i=[],h.require=w})),d.hmrC={},d.hmrI={}})(),d.p="",t=(e,t,r,n)=>{var a=document.createElement("link");return a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=o=>{if(a.onerror=a.onload=null,"load"===o.type)r();else{var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=i,d.request=s,a.parentNode.removeChild(a),n(d)}},a.href=t,document.head.appendChild(a),a},r=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var a=(i=r[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===t))return i}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){var i;if((a=(i=o[n]).getAttribute("data-href"))===e||a===t)return i}},n=[],a=[],o=e=>({dispose:()=>{for(var e=0;e<n.length;e++){var t=n[e];t.parentNode&&t.parentNode.removeChild(t)}n.length=0},apply:()=>{for(var e=0;e<a.length;e++)a[e].rel="stylesheet";a.length=0}}),d.hmrC.miniCss=(e,i,s,c,l,u)=>{l.push(o),e.forEach((e=>{var o=d.miniCssF(e),i=d.p+o;const s=r(o,i);s&&c.push(new Promise(((r,o)=>{var d=t(e,i,(()=>{d.as="style",d.rel="preload",r()}),o);n.push(s),a.push(d)})))}))},(()=>{var e,t,r,n,a={179:0},o=[[1202,953],[5730,953]],i={};function s(e){return new Promise(((t,r)=>{i[e]=t;var n=d.p+d.hu(e),a=new Error;d.l(n,(t=>{if(i[e]){i[e]=void 0;var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;a.message="Loading hot update chunk "+e+" failed.\n("+n+": "+o+")",a.name="ChunkLoadError",a.type=n,a.request=o,r(a)}}))}))}function c(o){function i(e){for(var t=[e],r={},n=t.map((function(e){return{chain:[e],id:e}}));n.length>0;){var a=n.pop(),o=a.id,i=a.chain,c=d.c[o];if(c&&(!c.hot._selfAccepted||c.hot._selfInvalidated)){if(c.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:o};if(c.hot._main)return{type:"unaccepted",chain:i,moduleId:o};for(var l=0;l<c.parents.length;l++){var u=c.parents[l],p=d.c[u];if(p){if(p.hot._declinedDependencies[o])return{type:"declined",chain:i.concat([u]),moduleId:o,parentId:u};-1===t.indexOf(u)&&(p.hot._acceptedDependencies[o]?(r[u]||(r[u]=[]),s(r[u],[o])):(delete r[u],t.push(u),n.push({chain:i.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}d.f&&delete d.f.jsonpHmr,e=void 0;var c={},l=[],u={},p=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var m in t)if(d.o(t,m)){var h,f=t[m],g=!1,v=!1,y=!1,w="";switch((h=f?i(m):{type:"disposed",moduleId:m}).chain&&(w="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":o.onDeclined&&o.onDeclined(h),o.ignoreDeclined||(g=new Error("Aborted because of self decline: "+h.moduleId+w));break;case"declined":o.onDeclined&&o.onDeclined(h),o.ignoreDeclined||(g=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+w));break;case"unaccepted":o.onUnaccepted&&o.onUnaccepted(h),o.ignoreUnaccepted||(g=new Error("Aborted because "+m+" is not accepted"+w));break;case"accepted":o.onAccepted&&o.onAccepted(h),v=!0;break;case"disposed":o.onDisposed&&o.onDisposed(h),y=!0;break;default:throw new Error("Unexception type "+h.type)}if(g)return{error:g};if(v)for(m in u[m]=f,s(l,h.outdatedModules),h.outdatedDependencies)d.o(h.outdatedDependencies,m)&&(c[m]||(c[m]=[]),s(c[m],h.outdatedDependencies[m]));y&&(s(l,[h.moduleId]),u[m]=p)}t=void 0;for(var S,b=[],E=0;E<l.length;E++){var C=l[E];d.c[C]&&d.c[C].hot._selfAccepted&&u[C]!==p&&!d.c[C].hot._selfInvalidated&&b.push({module:C,require:d.c[C].hot._requireSelf,errorHandler:d.c[C].hot._selfAccepted})}return{dispose:function(){var e;r.forEach((function(e){delete a[e]})),r=void 0;for(var t,n=l.slice();n.length>0;){var o=n.pop(),i=d.c[o];if(i){var s={},u=i.hot._disposeHandlers;for(E=0;E<u.length;E++)u[E].call(null,s);for(d.hmrD[o]=s,i.hot.active=!1,delete d.c[o],delete c[o],E=0;E<i.children.length;E++){var p=d.c[i.children[E]];p&&(e=p.parents.indexOf(o))>=0&&p.parents.splice(e,1)}}}for(var m in c)if(d.o(c,m)&&(i=d.c[m]))for(S=c[m],E=0;E<S.length;E++)t=S[E],(e=i.children.indexOf(t))>=0&&i.children.splice(e,1)},apply:function(e){for(var t in u)d.o(u,t)&&(d.m[t]=u[t]);for(var r=0;r<n.length;r++)n[r](d);for(var a in c)if(d.o(c,a)){var i=d.c[a];if(i){S=c[a];for(var s=[],p=[],m=0;m<S.length;m++){var h=S[m],f=i.hot._acceptedDependencies[h];if(f){if(-1!==s.indexOf(f))continue;s.push(f),p.push(h)}}for(var g=0;g<s.length;g++)try{s[g].call(null,S)}catch(t){o.onErrored&&o.onErrored({type:"accept-errored",moduleId:a,dependencyId:p[g],error:t}),o.ignoreErrored||e(t)}}}for(var v=0;v<b.length;v++){var y=b[v],w=y.module;try{y.require(w)}catch(t){if("function"==typeof y.errorHandler)try{y.errorHandler(t)}catch(r){o.onErrored&&o.onErrored({type:"self-accept-error-handler-errored",moduleId:w,error:r,originalError:t}),o.ignoreErrored||e(r),e(t)}else o.onErrored&&o.onErrored({type:"self-accept-errored",moduleId:w,error:t}),o.ignoreErrored||e(t)}}return l}}}self.webpackHotUpdate=(e,r,a)=>{for(var o in r)d.o(r,o)&&(t[o]=r[o]);a&&n.push(a),i[e]&&(i[e](),i[e]=void 0)},d.hmrI.jsonp=function(e,a){t||(t={},n=[],r=[],a.push(c)),d.o(t,e)||(t[e]=d.m[e])},d.hmrC.jsonp=function(o,i,l,u,p,m){p.push(c),e={},r=i,t=l.reduce((function(e,t){return e[t]=!1,e}),{}),n=[],o.forEach((function(t){d.o(a,t)&&void 0!==a[t]&&(u.push(s(t)),e[t]=!0)})),d.f&&(d.f.jsonpHmr=function(t,r){e&&!d.o(e,t)&&d.o(a,t)&&void 0!==a[t]&&(r.push(s(t)),e[t]=!0)})},d.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(d.p+d.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))};var l=()=>{};function u(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var s=r[i];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=d(d.s=r[0]))}return 0===o.length&&(d.x(),d.x=()=>{}),e}d.x=()=>{d.x=()=>{},m=m.slice();for(var e=0;e<m.length;e++)p(m[e]);return(l=u)()};var p=e=>{for(var t,r,[n,i,s,c]=e,u=0,p=[];u<n.length;u++)r=n[u],d.o(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(t in i)d.o(i,t)&&(d.m[t]=i[t]);for(s&&s(d),h(e);p.length;)p.shift()();return c&&o.push.apply(o,c),l()},m=self.webpackChunk=self.webpackChunk||[],h=m.push.bind(m);m.push=p})(),d.x()})();
//# sourceMappingURL=main.90bfb8e1e5c228c90f84.js.map