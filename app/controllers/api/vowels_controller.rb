class Api::VowelsController < ApplicationController
  def index
    if params[:inventory]
      @vowels = Vowel.find(params[:inventory])
    else
      @vowels = Vowel.all
    end
    render "api/vowels/index"
  end

  def show
    @vowel = Vowel.find(params[:id])
    if @vowel
      render "api/vowel/show"
    else
      render json: @vowel.errors.full_messages, status: 404
    end
  end
end
