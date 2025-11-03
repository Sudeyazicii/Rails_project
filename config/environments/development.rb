require "active_support/core_ext/integer/time"

Rails.application.configure do
  # Reload code on every request.
  config.enable_reloading = true

  # Do not eager load.
  config.eager_load = false

  # Show full error reports.
  config.consider_all_requests_local = true

  # Enable server timing.
  config.server_timing = true

  # Caching
  if Rails.root.join("tmp/caching-dev.txt").exist?
    config.public_file_server.headers = {
      "Cache-Control" => "public, max-age=#{2.days.to_i}"
    }
  else
    config.action_controller.perform_caching = false
  end

  # Use local file storage
  config.active_storage.service = :local

  # Deprecations
  config.active_support.deprecation = :log

  # Raise error if pending migrations
  config.active_record.migration_error = :page_load

  # Log queries
  config.active_record.verbose_query_logs = true
end
