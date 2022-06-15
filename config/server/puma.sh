#!/bin/bash

APP_ROOT=/var/www/nibi/current

cd $APP_ROOT

export RACK_ENV="production"

/home/$DEPLOYER/.rbenv/bin/rbenv exec bundle exec puma -C /var/www/nibi/current/config/server/puma.rb