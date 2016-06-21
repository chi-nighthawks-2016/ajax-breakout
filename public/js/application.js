$(document).ready(function() {
  $("#playlistsContainer tr").on("click", function(event){
    var $row = $(this);
    var playlistId = $row.attr("data-playlist-id");
    var url = "/playlists/" + playlistId;

    $.ajax({
      url: url
    }).done(function(response) {
        buildSongs(response);
        $(".info").removeClass("info"); //clear other selected playlist
         $("#songsContainer").show('slow');
         $("#addSongContainer").show('slow');
         $row.addClass("info"); // indicate this playlist was selected
         $("#addSongContainer form").attr("action", url + "/songs"); //set the form to add songs to this playlist
      })
  });

  // What is my event going to be bound to?
  // is that thing there when the page loads?  (delegated event)
  // what event are we trapping
  // what do we want to happen when this event occurs?
    // ajax call
    // what url are we hitting
    // what method
    // what do we do when it's done
      // where to put result?  or what to change on the page?
  $("#songsContainer").on("click", "i.fa-trash", function(){
    var $row = $(this).parent().parent();
    var songId = $row.attr("data-song-id");

    $.ajax({
      url: "/songs/" + songId,
      method: "DELETE"
    }).done(function(response){
      $row.remove();
    });
  })
});

function buildSongs(data) {
  var allSongs = "";

  for(var i = 0; i < data.length; i++) {
    allSongs += `<tr data-song-id="${data[i].id}">
              <td>${data[i].title}</td>
              <td>${data[i].artist}</td>
              <td><i class="fa fa-trash" aria-hidden="true"></i></td>
            </tr>`;
  }
  $("#songsContainer tbody").html(allSongs);
}
