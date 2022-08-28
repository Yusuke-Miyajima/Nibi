class HomesController < ApplicationController
    before_action :load_cookie_settings, only: [:playlist, :work]
#    before_action :autheniticate_password, only: [:playlist, :work]

#    def autheniticate_password
#        if @current_password==nil
#            flash[:notice]="ログインが必要です"
#            redirect_to("/top")
#        end
#    end

#    def set_current_password
#        @current_password=User.find_by(password :session[:password])
#    end

#    def top
#        @password = password.new()
#    end

#    def check
#        @password = password.new()
#        if @password == 'MoonEyes'
#            redirect_to '/work'
#        end
#    end

    def playlist
    end

    def work
        @music_settings = MusicSetting.data.inject({}) do |h, e|
            e[:music] = @user_settings[e[:id]].to_i if @user_settings[e[:id]]
            h.merge(e[:page] => e)
        end
    end

    private
    def load_cookie_settings
        @user_settings = JSON.parse(cookies[:music_settings]) rescue {}
        @user_settings = @user_settings.inject({}) {|h, (k, v)| h.merge(k.to_i => v.to_i)}
    end
end
