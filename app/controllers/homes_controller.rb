class HomesController < ApplicationController
    def top
    end

    def playlist
        @music_settings = JSON.parse(cookies[:music_settings]) rescue {}
    end
end
