get '/' do
  @playlists = Playlist.all
  erb :index
end

get '/playlists/:id' do
  content_type :json
  Playlist.find_by(id: params[:id]).tracks.to_json
end

delete '/songs/:id' do
  Track.find(params[:id]).destroy
end