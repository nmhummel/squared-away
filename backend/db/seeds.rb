# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Board.create([
    {discolored: "2-4-24"},
    {discolored: "1-7-2-16-22-24"},
    {discolored: "5-8-17-19"},
    {discolored: "3-11-17-23"},
    {discolored: "5-10-17-20"},
    {discolored: "1-9-10-11"},
    {discolored: "15-16-20-24"},
    {discolored: "1-4-7-11-16-22-25"},
    {discolored: "1-5-6-13-17-21-23"},
    {discolored: "1-6-7-14-15-18-19"},
    {discolored: "3-4-7-8-12-17-21"},
    {discolored: "9-10-16-18-19-21-22"},
    {discolored: "5-6-11-13-14-20-22"},
    {discolored: "2-11-14-17-18-19-25"},
    {discolored: "5-8-10-17-18-21-24"},
    {discolored: "6-7-11-20-23-24-25"},
    {discolored: "2-3-5-8-9-12-13"},
    {discolored: "4-5-6-17-19-22-23"},
    {discolored: "3-7-13-17-19-21-23"},
    {discolored: "3-6-9-10-11-12-18-19-20-21"},
    {discolored: "3-4-5-11-12-13-14-16-18-20-23-24"},
    {discolored: "3-4-5-7-9-10-12-14-16-17-23-25"},
    {discolored: "1-2-5-9-10-13-15-17-18-19-21-23"},
    {discolored: "1-3-10-13-14-15-16-17-21-22-23-25"},
    {discolored: "1-4-6-7-8-11-12-13-18-21-23-25"}
])

Score.create([
    {moves: 14, username: "SeedTester", board_id: 4},
    {moves: 22, username: "SeedTester", board_id: 1},
    {moves: 21, username: "SeedTester", board_id: 3},
    {moves: 18, username: "SeedTester", board_id: 13},
    {moves: 4, username: "SeedTester", board_id: 20}
])