# require 'rails_helper'
#
# feature 'user views all cards in stack', %{
#   As a user
#   I should see a list of all the cards in my stack
#   So I can see which image/name pairs I will be trying to remember
# } do
#
#   let!(:card) { FactoryGirl.create(:card) }
#
#   scenario "user visits index page" do
#     visit "/"
#
#     page.find('#card-image')['src'].should have_content('.png')
#     expect(page).to have_content(card.name)
#   end
# end
