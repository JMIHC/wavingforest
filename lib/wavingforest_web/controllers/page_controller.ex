defmodule WavingforestWeb.PageController do
  use WavingforestWeb, :controller

  def home(conn, _params) do
    render(conn, :home)
  end
end
