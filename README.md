# facematch

This was my first attempt at a rails-api backend, ember-cli frontend app. It is
intended to help folks with deteriorating memory practice putting names to faces
of the people they care about.

The current build has working #index, #show, #update, #destroy functionalities.

![alt](https://s3.amazonaws.com/facematch-production/static/out.gif)

## Ruby version:
2.2.0

## System dependencies (gems/addons):
- gem 'rails-api'
- gem 'active_model_serializers', '0.8.3'
- ember-cli-foundation-sass (styling)
- pretender (ember acceptance tests)

## Tests
Backend: Unit tests for Card model  
Frontend: Acceptance tests for #index, #show, #create

## Schema Structure

Cards
- "image", string, default: "image.png", null: false
- "name", string, null: false
- "correctly_matched", boolean, default: false, null: false
- timestamps

## Future Functionalities

**Game:**
- See an image and a name associated w/ that image
- Name disappears (timer mechanism?)
- User is to select the correct name from a list that matches with an image
- Every correctly matched image-name gets added to a "Complete" list
- Any wrong matches gets cycled through again until the image is correctly matched  

**User accounts:**

1) Upload your own pics and organize them into decks
- immediate family
- extended family
- college friends

2) Save progress reports for each deck
- how many correct?
- which cards are easier/more difficult to remember?
- might need to add a another model to keep track of this info for example, within a round, which cards were correctly matched? how many times has a card been played --> what was the match ratio?

**Mobile ready:**

1) it should definitely be something you can play on your phone/tablet
