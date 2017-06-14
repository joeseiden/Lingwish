class Api::WordsController < ApplicationController

  def index
    @words = Word.where(conlang_id: params[:conlang_id]).order(:name)
  end

  def show
    @word = Word.find(params[:id])

    if @word
      render "api/words/show"
    else
      render json: ["Word not found"], status: 404
    end
  end

  def create
    @word = Word.new(word_params)
    @word.conlang_id = params[:conlang_id]

    if @word.save
      render "api/conlangs/show"
    else
      render json: @word.errors.full_messages, status: 422
    end
  end

  def update
    @word = Word.find(params[:id])

    if @word.update(word_params)
      render "api/words/show"
    else
      render json: @word.errors.full_messages, status: 422
    end
  end

  def destroy
    @word = Word.find(params[:id])

    if @word.destroy
      render "api/words/show"
    else
      render json: ["Word not found"], status: 404
    end
  end

  private

  def word_params
    params.require(:word).permit(:word, :type, :definition)
  end

end
