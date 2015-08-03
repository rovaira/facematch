require 'rails_helper'

describe Card do
  describe "validations" do
    it { should validate_presence_of(:image) }
    it { should validate_presence_of(:name)}
  end
end
