## User Stories

### index
As a user
I should see a list of all the cards in my stack
So I can see which image/name pairs I will be trying to remember

Acceptance Criteria:
[] I visit /cards and see links + accompanying photos for all cards in my stack.

### show
As a user
I should see an image and a name that corresponds with that image
So that I can try to memorize that image-name pair

Acceptance Criteria:
[] I should be on the /cards/[card_id] page
[] I should see just that card's image and name

As a user
I see that the name for a particular image disappears
So I can select the correct name that matches that image from a list

As a user
If I correctly match a name to an image, my completed counter increases by one
So the app keeps track of all my completed matches

### new
As a user
I want to add a new card to my stack
So I can include another person I'd like practice memorizing their image/name

Acceptance Criteria:
[] I can click on a link on /cards to add a new card to my stack.
[] I am taken to a /cards/new page where I fill out a form to add a new card.
[] The form should have a field for a Name and Image URL.

### edit
As a user
I want to edit a card's image/name
So I can practice matching a face/name with another picture of that person

Acceptance Criteria:
[] I can click on a card to be taken to its show/details page.
[] Once on the show page, I can click on an "Edit" link.
[] The "Edit" link will bring me to a prepopulated form of that card's info.
[] I can make changes to the form and see it automatically update on the page.
[] I can click a "Save" button make my changes.
[] When I click the "Facematch" link, I'm taken back to the homepage and can see
the edits I made to my card.
