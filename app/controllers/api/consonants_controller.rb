class Api::ConsonantsController < ApplicationController
  def index
    @consonants = Consonant.all
    render "api/consonants/index"
  end


  def show
    @consonant = Consonant.find(params[:id])
    if @consonant
      render "api/consonants/show"
    else
      render json: @consonant.errors.full_messages, status: 404
    end
  end
end
