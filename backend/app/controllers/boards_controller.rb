class BoardsController < ApplicationController
  before_action :set_board, only: [:show, :update, :destroy]

  # GET /boards
  def index
    boards = Board.all

    render json: boards.to_json(except: [:created_at, :updated_at] ) , include: {board: {only: [:moves, :username]} }
  end

  # GET /boards/1
  def show
    render json: board.to_json(except: [:created_at, :updated_at] )
  end

  

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_board
      board = Board.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def board_params
      params.require(:board).permit(:discolored)
    end
end
