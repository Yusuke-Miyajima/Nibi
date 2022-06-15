set :user, fetch(:settings)["deployer"]
set :deploy_via, :remote_cache
set :conditionally_migrate, true
set :rails_env, "production"
set :app_directory, "#{fetch(:deploy_to)}/current"
set :puma_pid_file, "#{fetch(:app_directory)}/tmp/pids/puma.pid"
set :puma_state_file, "#{fetch(:app_directory)}/tmp/pids/puma.state"

deployer = fetch(:settings)["deployer"]
instances = fetch(:settings)["servers"]

instances.each do |role_name, hosts|
  if role_name == "front"
    role :db, hosts.map { |host| deployer + "@" + host }
    role :web, hosts.map { |host| deployer + "@" + host }
    role :app, hosts.map { |host| deployer + "@" + host }
  end
  role role_name.to_sym, hosts.map { |host| deployer + "@" + host }
end

roles = %w(web app db)

instances.each do |role_name, hosts|
  roles = [role_name]
  roles += %w(web app db) if role_name == "front"
  hosts.each do |host|
    server host, user: fetch(:user), port: fetch(:port), roles: roles
  end
end