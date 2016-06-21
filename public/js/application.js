$(document).ready(function() {
  $("#playlistsContainer tr").on("click", function(event){
    var $row = $(this);
    var playlistId = $row.attr("data-playlist-id");
    var url = "/playlists/" + playlistId;

    $.ajax({
      url: url,
      success: function(response) {
        buildSongs(response);
        $(".info").removeClass("info"); //clear other selected playlist
         $("#songsContainer").show('slow');
         $("#addSongContainer").show('slow');
         $row.addClass("info"); // indicate this playlist was selected
         $("#addSongContainer form").attr("action", url + "/songs"); //set the form to add songs to this playlist
      }
    })
  });
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
