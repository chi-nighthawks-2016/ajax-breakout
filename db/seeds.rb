chill = Playlist.create!(title: "Chill", description: "Songs to listen to when relaxing")

chill.tracks.create!(title: "Your Hand in Mine", artist: "Explosions in the Sky")
chill.tracks.create!(title: "Human", artist: "Aquilo")
chill.tracks.create!(title: "Collide", artist: "Satchmode")
chill.tracks.create!(title: "Pale Blue Dot", artist: "The Receiving end of Sirens")
chill.tracks.create!(title: "Royksopp Forever", artist: "Royksopp")

car = Playlist.create!(title: "Car", description: "Songs for singing in the car.")

car.tracks.create!(title: "A Lifetime", artist: "Better than Ezra")
car.tracks.create!(title: "She Talks to Angels", artist: "The Black Crowes")
car.tracks.create!(title: "Heartbeat", artist: "Childish Gambino")
car.tracks.create!(title: "First", artist: "Cold War Kids")
car.tracks.create!(title: "Silent Shout", artist: "The Knife")

shower = Playlist.create!(title: "Shower", description: "Songs for getting ready!")

shower.tracks.create!(title: "Young Blood", artist: "The Naked and Famous")
shower.tracks.create!(title: "World on Fire", artist: "The Royal Concept")
shower.tracks.create!(title: "Harvest Moon", artist: "Poolside")
shower.tracks.create!(title: "Sleeping Sickness", artist: "City and Colour")
shower.tracks.create!(title: "You are the Best Thing", artist: "Ray LaMontagne")

