class Api::VowelsController < ApplicationController
  def index
    @vowels = Vowel.all
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
