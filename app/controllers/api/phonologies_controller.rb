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
                                      vowel_inventory: [],
                                      syllables: []
      )
    else
      phonology_params = ActionController::Parameters.new(
        phonology: {
          consonant_inventory: [],
          vowel_inventory: [],
          syllables: []
        }
      ).require(:phonology).permit(consonant_inventory: [], vowel_inventory: [], syllables: [])
    end

    [:consonant_inventory, :vowel_inventory, :syllables].each do |param|
      unless phonology_params.key?(param)
        phonology_params[param] = []
      end
    end

    phonology_params
  end

end
