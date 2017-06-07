class Api::ConlangsController < ApplicationController

  def index
    if params[:user_id]
      @conlangs = Conlang.where(user_id: params[:user_id])
    else
      @conlangs = Conlang.all
    end

    render "api/conlangs/index"
  end

  def show
    @conlang = Conlang.find(params[:id])

    render "api/conlangs/show"
  end

  def create
    @conlang = User.find(params[:user_id]).conlangs.build(conlang_params)

    if @conlang.save
      render "api/conlangs/show"
    else
      render json: @conlang.errors.full_messages, status: 422
    end
  end

  def update
    @conlang = Conlang.find(params[:id])

    if @conlang.update(conlang_params)
      render "api/conlangs/show"
    else
      render json: @conlang.errors.full_messages, status: 422
    end
  end

  def destroy
    @conlang = Conlang.find(params[:id])

    if @conlang.destroy
      render "api/conlangs/show"
    else
      render json: @conlang.errors.full_messages, status: 401
    end
  end

  private

  def conlang_params
    params.require(:conlang).permit(:name)
  end
end
