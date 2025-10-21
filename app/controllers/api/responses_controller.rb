class Api::ResponsesController < ApplicationController
  def index
    responses = Response.all
    render json: responses
  end
end
