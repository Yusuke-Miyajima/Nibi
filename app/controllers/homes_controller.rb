class HomesController < ApplicationController
    before_action :load_cookie_settings, only: [:playlist, :work]

    def top
    end

    def playlist
    end

    def work
        @music_settings = MusicSetting.data.inject({}) do |h, e|
            e[:music] = @user_settings[e[:page]].to_i if @user_settings[e[:page]]
            h.merge(e[:page] => e)
        end
    end

    private
    def load_cookie_settings
        @user_settings = JSON.parse(cookies[:music_settings]) rescue {}
        @user_settings = @user_settings.inject({}) {|h, (k, v)| h.merge(k.to_i => v.to_i)}
    end
end
