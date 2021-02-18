class BoardsController < ApplicationController
  before_action :set_board, only: [:show, :update, :destroy]

  # GET /boards
  def index
    boards = Board.all
    #render json: BoardSerializer.new(boards)
    render json: boards.to_json(except: [:created_at, :updated_at] ) , include: {board: {only: [:moves, :username]} }
  end

  # GET /boards/1
  def show
    render json: board.to_json(except: [:created_at, :updated_at] )
  end

  # # POST /boards
  # def create
  #   @board = Board.new(board_params)

  #   if @board.save
  #     render json: @board, status: :created, location: @board
  #   else
  #     render json: @board.errors, status: :unprocessable_entity
  #   end
  # end

  # # PATCH/PUT /boards/1
  # def update
  #   if @board.update(board_params)
  #     render json: @board
  #   else
  #     render json: @board.errors, status: :unprocessable_entity
  #   end
  # end

  # # DELETE /boards/1
  # def destroy
  #   @board.destroy
  # end

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
