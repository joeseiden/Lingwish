class Api::PhonologiesController < ApplicationController

  def update
    @phonology = Phonology.find(params[:id])

    if @phonology.update(phonology_params)
      @conlang = Conlang.find(:conlang_id)
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
