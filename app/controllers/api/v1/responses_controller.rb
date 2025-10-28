class Api::V1::ResponsesController < ApplicationController
  def index
    responses = Response.all
    render json: responses
  end
end
