class ScoresController < ApplicationController
  before_action :set_score, only: [:show, :update, :destroy]

  # GET /scores
  
  def index
    scores = Score.all
    render json: scores.to_json(except: [:created_at, :updated_at] ) 
  end

  # GET /scores/1
  def show
    score = Score.find(params[:id])
    render json: score.to_json(except: [:created_at, :updated_at])  
  end

  # POST /scores
  def create
    score = Score.new(score_params)

    if score.save
      render json: score, status: :created, location: score
    else
      render json: score.errors, status: :unprocessable_entity
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_score
      score = Score.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def score_params
      params.require(:score).permit(:moves, :username, :board_id)
    end
end
