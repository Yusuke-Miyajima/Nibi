class HomesController < ApplicationController
    def top
    end

    def playlist
        @music_settings = JSON.parse(cookies[:music_settings]) rescue {}
    end

    def work
        settings = JSON.parse(cookies[:music_settings]) rescue {}
        @music_settings = MusicSetting.data.inject({}) do |h, e|
            e[:music] = settings[e[:page].to_s].to_i if settings[e[:page].to_s]
            h.merge(e[:page] => e)
        end
    end
end
