class CreateScores < ActiveRecord::Migration[6.1]
  def change
    create_table :scores do |t|
      t.integer :moves
      t.string :username
      t.belongs_to :board, null: false, foreign_key: true

      t.timestamps
    end
  end
end
