// @author: Thomas Thompson
// @github: tomtom28
// @comment: Homework 15 - Eat the Burger - Part 2!!



// This file is just some extra flair to the project
// Funny sound effects using jQuery click listener
// All sounds are from http://soundbible.com


$(document).ready(function() {

  // Pre-load sound effects
  var audioWhine0 = new Audio('http://soundbible.com/mp3/TomCat-Mr_Smith-2055290520.mp3');
  var audioWhine1 = new Audio('http://soundbible.com/mp3/Sheep Bleating-SoundBible.com-1373580685.mp3');
  var audioWhine2 = new Audio('http://soundbible.com/mp3/Turkey Gobble-SoundBible.com-312252853.mp3');
  var audioWhine3 = new Audio('http://soundbible.com/mp3/Dinosaur Roar-SoundBible.com-605392672.mp3');
  var audioWhine4 = new Audio('http://soundbible.com/mp3/Lion-SoundBible.com-621763115.mp3');


  // Array of sounds
  var soundArray = [audioWhine0, audioWhine1, audioWhine2, audioWhine3, audioWhine4];


  // Click Listener for Whine Button
  $('.whine-button').on("click", function(){

    // Generate a random number (from 0 to length of array)
    var i = Math.floor(Math.random()*soundArray.length);

    // Play the random sound
    soundArray[i].play();

  });


});