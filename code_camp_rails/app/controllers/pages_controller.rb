class PagesController < ApplicationController
  def profiles
  end

  def locations
  end

  def resources 
  	@resource = Resource.new
  	@resources = Resource.all

  end

  def new 
  	@resource= Resource.new
  	respond_with @resource

  end

  def create 
  	@resource = Resource.create(res_params)
  	respond_with @resources
  	
  end

  def edit
  	respond_with @resource

  end

  def update
  	@resource.update(res_params)
  	respond_with @resource
  end

  def destroy
  	@resource.destroy
  	respond_with @resource

  end

  def res_params
  	params.require(:resource).permit(:user, :link, :description, :title, :category)

  end
end
