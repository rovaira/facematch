class Api::V1::CardsController < ApplicationController
  def index
    @cards = Card.all

    render json: @cards
  end

  def show
    @card = Card.find(params[:id])

    render json: @card
  end

  def create
    @card = Card.new(card_params)
    @card.save! # ! will display errors if any

    render json: @card
  end

  def update
    @card = Card.find(params[:id])

    if @card.update(card_params)
      render json: @card
    else
      render json: { errors: @card.errors }, status: 422
      # 422 means syntax correct but unable to process instructions
    end
  end

  def destroy
    @card = Card.find(params[:id])
    @card.destroy

    render json: @card
  end
  
  private

  def card_params
    params.require(:card).permit(:image, :name, :correctly_matched)
  end
end
