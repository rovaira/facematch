# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Card.create(image: "https://s3.amazonaws.com/facematch-production/static/marina01.jpeg", name: "Marina")
Card.create(image: "https://s3.amazonaws.com/facematch-production/static/martin01.jpeg", name: "Martin")
Card.create(image: "https://s3.amazonaws.com/facematch-production/static/rita02.jpeg", name: "Rita")
