class Api::PhonologiesController < ApplicationController

  def update
    @phonology = Phonology.includes(:conlang).find(params[:id])

    if @phonology.update(phonology_params)
      @conlang = @phonology.conlang
      render "api/conlangs/show"
    else
      render json: @phonology.errors.full_messages, status: 401
    end
  end

  private

  def phonology_params
    params.require(:phonology).permit(:consonant_inventory, :vowel_inventory)
  end
end
