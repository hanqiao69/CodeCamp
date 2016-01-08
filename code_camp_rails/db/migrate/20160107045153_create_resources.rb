class CreateResources < ActiveRecord::Migration
  def change
    create_table :resources do |t|
    	t.string :title , null:false
    	t.string :link , null:false
    	t.string :description

    	t.belongs_to :user , null:false
    	t.timestamps null: false



    	t.string :category, null:false

    	


    end
  end
end
