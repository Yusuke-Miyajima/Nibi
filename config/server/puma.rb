#!/usr/bin/env puma

directory '/var/www/nibi/current'
rackup "/var/www/nibi/current/config.ru"
environment 'production'

tag ''

pidfile "/var/www/nibi/shared/tmp/pids/puma.pid"
state_path "/var/www/nibi/shared/tmp/pids/puma.state"
stdout_redirect '/var/www/nibi/shared/log/puma_access.log', '/var/www/nibi/shared/log/puma_error.log', true

threads 0,16

bind 'unix:///var/www/nibi/shared/tmp/sockets/puma.sock'

workers 2

prune_bundler

on_restart do
  puts 'Refreshing Gemfile'
  ENV["BUNDLE_GEMFILE"] = ""
end

