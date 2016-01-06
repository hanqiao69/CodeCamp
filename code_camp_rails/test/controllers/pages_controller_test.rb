require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get profiles" do
    get :profiles
    assert_response :success
  end

  test "should get locations" do
    get :locations
    assert_response :success
  end

  test "should get resources" do
    get :resources
    assert_response :success
  end

end
