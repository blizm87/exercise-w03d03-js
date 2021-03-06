console.log("Fellowship loaded.");

var makeMiddleEarth = function() {
  // 1.  Create a section tag with an id of "middle-earth".
  var $middleEarth = jQuery('<section>');
  $middleEarth.attr('id', 'middle-earth');
  // 2.  Create an article tag for each land in the lands array.
  lands.forEach(function(land){
    var $land = jQuery('<article>');
    $land.addClass('land');
    var $title = jQuery('<h1>');
    $title.text(land);
    $land.append($title);
    $land.appendTo($middleEarth);
  });
  jQuery('body').append($middleEarth);
  // 3.  Give each article tag a class of "land".
  // 4.  Inside each article tag include an h1 tag with the name
  //     of the land as content.
  // 5.  Append each article.land to section#middle-earth.
  // 6.  Append section#middle-earth to the document body.
}

var makeHobbits = function() {
  // 1.  Create a ul tag with an id of "hobbits".
    $ul = jQuery('<ul>').attr('id', 'hobbits');
  // 2.  Create li tags for each Hobbit in the hobbits array.
    hobbits.forEach(function(hob){
      var $li = jQuery('<li>');
      $li.text(hob);
      $li.addClass('hobbit');
      $ul.append($li);
    });

  // 3.  Give each li tag a class of "hobbit".
  // 4.  Set the text of each li.hobbit to one of the Hobbits
  //     in the array.
  // 5.  Append the ul#hobbits to the article.land representing
  //     "The Shire" (the first article tag on the page).
  jQuery('.land').first().append($ul);
}

var keepItSecretKeepItSafe = function() {
  // 1.  Create a div with an id of "the-ring".
    var $ring = jQuery('<div>').attr('id','the-ring');
  // 2.  Give div#the-ring a class of "magic-imbued-jewelry".
    $ring.attr('class','magic-imbued-jewelry');
  // 3.  Add div#the-ring as a child element of the li.hobbit
  //     representing "Frodo."
    var $hobbits = $('.hobbit');
    var $frodo = $hobbits.first();
    $frodo.append($ring);

}

var makeBuddies = function() {
  // 1.  Create an aside tag.
    var $aside = $('<aside>');
  // 2.  Create a ul tag with an id of "buddies" and append it to
  //     the aside tag.
    var $ul = $('<ul>').attr('id','buddies')
    $ul.appendTo($aside);
  // 3.  Create li tags for each buddy in the buddies array in
  //     data.js.
    buddies.forEach(function(budName){
      $li = $('<li>').text(budName).addClass('buddy');
      $li.appendTo($ul);
    });
    //$gandalfTheGrey = $('<li>').text('Gandalf the Grey').addClass('buddy');
    //$legolas = $('<li>').text('Legolas').addClass('buddy');
    //$strider = $('<li>').text('Strider').addClass('buddy');
    //$boromir = $('<li>').text('Boromir').addClass('buddy');
    //$gimli = $('<li>').text('Gimli').addClass('buddy');
  // 4   Give each li tag a class of "buddy" and append them to
  //       "ul#buddies".

  // 5.  Insert the aside tag as a child element of the secion.land
  //     representing "Rivendell."
    var $rivendell = $('.land').eq(1);
    $aside.appendTo($rivendell);
}

var beautifulStranger = function() {
  // 1.  Find the li.buddy representing "Strider".
    $strider = $('.buddy').eq(2);
  // 2.  Change the "Strider" text to "Aragorn" and make its
  //     color green.
    $strider.text('Aragorn').css("color","green");
}

var leaveTheShire = function() {
  // 1.  "Assemble the Hobbits" and move them (as a list) to Rivendell.
  var $rivendell = $('.land').eq(1);
  var $hobbits = $('#hobbits');
  $hobbits.appendTo($rivendell);
}

var forgeTheFellowShip = function() {
  // 1.  Create a div with an id of "the-fellowship" within the
  //     section.land for "Rivendell". Append a list to it.
  var $rivendell = $('.land').eq(1);
  var $div = $('<div>').attr('id', 'the-fellowship');
  var $fellowship = $('li');
  var $ul = $('<ul>').appendTo($div);
  $fellowship.each(function(){
    $(this).appendTo($ul);
    //alert($(this).text() + ' has joined your party!');
  });
  $div.appendTo($rivendell);
  // 2.  Add each hobbit and buddy one at a time to
  //     'div#the-fellowship' list.

  // 3.  After each character is added make an alert that they
  //     have joined your party.
}

var theBalrog = function() {
  // 1.  Select the "li.buddy" for "Gandalf"...
    var gandalf = $('li').first();
  // 2.  And change its text to "Gandalf the White", and give it
  //     the class "the-white".
    gandalf.text('Gandalf the White').addClass('the-white');
  // 3.  Apply style to the element, adding a "3px solid white"
  //     border to it, giving it a border radius of "10px," and
  //     making it's color white.
    gandalf.css({
      'border':'3px solid white',
      'border-radius':'10px',
      'color':'white'
    });
}

var hornOfGondor = function() {
  // 1.  Pop up an alert that the Horn of Gondor has been blown.
    //alert('The Horn of Gondor has been blown!');
  // 2.  Put a line-through on Boromir's name.
    var boromir = $('li').eq(3);
    boromir.css({
      'text-decoration': 'line-through',
      'color':'rgba(0,0,0,.3)'
    });
  // 3.  Fade Boromir's opacity to 0.3 (he lives on in spirit).
  // 4.  Make Boromir's text color black.
}

var itsDangerousToGoAlone = function() {

  // 1.  Create a list with class "soulmates" in Mordor.
    var $mordor = $('.land').last();
    var $mountDoom = $('<div>').attr('id', 'mount-doom');
    $mountDoom.appendTo($mordor);
    var $soulMates = $('<ul>');
    $soulMates.addClass('soulmates');
    $soulMates.appendTo($mordor);
  // 2.  Take Frodo and Sam out of The Fellowship and move them
  //     to ul.soulmates in Mordor.
    $frodo = $('li').eq(5);
    $sam = $('li').eq(6);
    $frodo.appendTo($soulMates);
    $sam.appendTo($soulMates);
  // 3.  Add a div with an id of "mount-doom" to Mordor

}

function weWantsIt() {
  // 1.  Create a div with an id of "gollum" and add it to Mordor.
    var $gollum = $('<div>').attr('id','gollum');
    var $mordor = $('.land').last();
    $gollum.appendTo($mordor);
  // 2.  Remove The Ring from Frodo and give it to Gollum.
    var $frodoRing = $('#the-ring');
    $frodoRing.appendTo($gollum);

  // 3.  Move Gollum into Mount Doom.
    var mountDoom = $('#mount-doom').append($gollum);
}

function thereAndBackAgain() {
  // 1.  Remove Gollum and the Ring from the document.
    var $gollum = $('#gollum');
    $gollum.remove();
  // 2.  Add a list to the shire, and move all the hobbits in to it.
    var $theShire = $('.land').first();
    var $hobbits = $('.hobbit');
    $theShire.append($hobbits);

  // 3.  Add the class "collapse" to Mordor.
    var $mordor = $('.land').last();
    $mordor.addClass('collapse');
}

makeMiddleEarth();
makeHobbits();
keepItSecretKeepItSafe();
makeBuddies();
beautifulStranger();
leaveTheShire();
forgeTheFellowShip();
theBalrog();
hornOfGondor();
itsDangerousToGoAlone();
weWantsIt();
thereAndBackAgain();
