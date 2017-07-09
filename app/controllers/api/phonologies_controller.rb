class Api::PhonologiesController < ApplicationController

  def update
    @phonology = Phonology.find(params[:id])
    if @phonology.update(phonology_params)
      render "api/phonologies/show"
    else
      render json: @phonology.errors.full_messages, status: 401
    end
  end

  private

  def phonology_params
    if params[:phonology]
      phonology_params = params.require(:phonology).permit(
                                      consonant_inventory: [],
                                      vowel_inventory: []
      )
    else
      phonology_params = ActionController::Parameters.new(
        phonology: {
          consonant_inventory: [],
          vowel_inventory: []
        }
      ).require(:phonology).permit(consonant_inventory: [], vowel_inventory: [])
    end

    unless phonology_params.key?(:consonant_inventory)
      phonology_params[:consonant_inventory] = []
    end

    unless phonology_params.key?(:vowel_inventory)
      phonology_params[:vowel_inventory] = []
    end
    
    phonology_params
  end

end
